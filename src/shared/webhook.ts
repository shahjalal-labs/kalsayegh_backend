import express from "express";
import { stripe } from "../helpers/stripe";
import prisma from "../shared/prisma";
import { updateInvoiceStatus } from "../app/modules/invoice/invoice.service";

const router = express.Router();

router.post(
  "/stripe",
  express.raw({ type: "application/json" }),
  async (req, res) => {
    const signatureHeader = req.headers["stripe-signature"];
    const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET!;

    if (typeof signatureHeader !== "string") {
      return res.status(400).send("Invalid stripe-signature header");
    }

    let event: any;

    try {
      event = stripe.webhooks.constructEvent(
        req.body,
        signatureHeader,
        endpointSecret,
      );
    } catch (err: any) {
      return res.status(400).send(`Webhook Error: ${err.message}`);
    }

    if (event.type === "payment_intent.succeeded") {
      const paymentIntent = event.data.object;
      const invoiceId = paymentIntent.metadata?.invoiceId;
      const amount = paymentIntent.amount / 100;

      if (!invoiceId) {
        console.error("Missing invoiceId in PaymentIntent metadata");
        return res.status(400).send("Missing invoiceId");
      }

      const existing = await prisma.payment.findFirst({
        where: { stripePaymentIntentId: paymentIntent.id },
      });

      if (!existing) {
        await prisma.payment.create({
          data: {
            invoiceId,
            amount,
            paymentDate: new Date(),
            paymentMethod: paymentIntent.payment_method_types?.includes(
              "us_bank_account",
            )
              ? "BANK_TRANSFER"
              : "STRIPE",
            stripePaymentIntentId: paymentIntent.id,
            status: "COMPLETED",
          },
        });
        await updateInvoiceStatus(invoiceId);
      }
    }

    res.json({ received: true });
  },
);

export const webhookRouter = router;
