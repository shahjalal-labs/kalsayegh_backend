// invoice.webhook.ts
import { Request, Response } from "express";
import httpStatus from "http-status";
import { stripe } from "../helpers/stripe";
import ApiError from "../errors/ApiErrors";
import sendResponse from "./sendResponse";
import prisma from "./prisma";
import { updateInvoiceStatus } from "../app/modules/invoice/invoice.service";
export const stripeWebhook = async (req: Request, res: Response) => {
  const sig = req.headers["stripe-signature"] as string;
  let event: any;

  try {
    event = stripe.webhooks.constructEvent(
      req.body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!,
    );
  } catch (err) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Invalid webhook signature");
  }

  // Handle the checkout.session.completed event
  if (event.type === "checkout.session.completed") {
    const session = event.data.object;

    // Extract invoiceId from metadata
    const invoiceId = session.metadata?.invoiceId;
    if (!invoiceId) {
      console.error("Webhook: missing invoiceId in session metadata");
      sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Webhook received (missing invoiceId)",
      });
      return;
    }

    // Extract payment_intent ID (could be a string or an object)
    let paymentIntentId: string | null = null;
    if (typeof session.payment_intent === "string") {
      paymentIntentId = session.payment_intent;
    } else if (
      session.payment_intent &&
      typeof session.payment_intent === "object"
    ) {
      paymentIntentId = session.payment_intent.id;
    }

    if (!paymentIntentId) {
      console.error("Webhook: missing payment_intent in session");
      sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Webhook received (missing payment_intent)",
      });
      return;
    }

    // Amount total (in cents)
    const amountTotal = session.amount_total;
    if (!amountTotal) {
      console.error("Webhook: missing amount_total in session");
      sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Webhook received (missing amount)",
      });
      return;
    }

    // Idempotency check: prevent duplicate processing
    const existingPayment = await prisma.payment.findFirst({
      where: { stripePaymentIntentId: paymentIntentId },
    });

    if (!existingPayment) {
      // Create payment record
      await prisma.payment.create({
        data: {
          invoiceId,
          amount: amountTotal,
          paymentDate: new Date(),
          paymentMethod: "STRIPE",
          stripePaymentIntentId: paymentIntentId,
          status: "COMPLETED",
        },
      });

      // Update invoice status (ACTIVE → PARTIAL → PAID)
      await updateInvoiceStatus(invoiceId);
    } else {
      console.log(
        `Webhook: Payment already processed for intent ${paymentIntentId}`,
      );
    }
  }

  // Acknowledge receipt of the webhook
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Webhook received",
  });
};
