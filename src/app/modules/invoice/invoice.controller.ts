import Stripe from "stripe";
import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { invoiceService, updateInvoiceStatus } from "./invoice.service";
import pick from "../../../shared/pick";
import { paginationOptions } from "../../../shared/pagination";
import ApiError from "../../../errors/ApiErrors";
import prisma from "../../../shared/prisma";
import { stripe } from "../../../helpers/stripe";

const createInvoice = catchAsync(async (req, res) => {
  const result = await invoiceService.createInvoice(req);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: "Invoice has been created successfully",
    data: result,
  });
});

const getAllInvoices = catchAsync(async (req, res) => {
  const pagination = pick(req.query, paginationOptions);
  const filter = pick(req.query, ["searchTerm", "status"]);
  const result = await invoiceService.getAllInvoices(pagination, filter);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Invoices retrieved successfully.",
    data: result,
  });
});

const getInvoiceDetails = catchAsync(async (req, res) => {
  const { id: invoiceId } = req.params;
  const result = await invoiceService.getInvoiceDetails(invoiceId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Invoice details retrieved successfully.",
    data: result,
  });
});

const sendInvoiceEmail = catchAsync(async (req, res) => {
  const { id: invoiceId } = req.params;
  const payload = req.body;

  const result = await invoiceService.sendInvoiceEmail(invoiceId, payload);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Invoice email(s) sent successfully.",
    data: result,
  });
});

const updateInvoiceEmailAndSign = catchAsync(async (req, res) => {
  const { id: invoiceId } = req.params;
  const { emailStatus, signedName } = req.body;

  const result = await invoiceService.updateInvoiceEmailAndSign(
    invoiceId,
    emailStatus,
    signedName,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Invoice email/signature updated successfully.",
    data: result,
  });
});

const generateInvoiceFromEstimate = catchAsync(async (req, res) => {
  const { estimateId } = req.params; // assuming route param :estimateId
  const result = await invoiceService.generateInvoiceFromEstimate(estimateId);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Invoice generated successfully from estimate.",
    data: result,
  });
});

const recordManualPayment = catchAsync(async (req, res) => {
  const { id: invoiceId } = req.params;
  const userId = req.user.id;
  const result = await invoiceService.recordManualPayment(
    invoiceId,
    userId,
    req.body,
  );

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Payment recorded successfully",
    data: result,
  });
});

const getInvoicePayments = catchAsync(async (req, res) => {
  const { id: invoiceId } = req.params;
  const result = await invoiceService.getInvoicePayments(invoiceId);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Payments retrieved successfully",
    data: result,
  });
});

const refundPayment = catchAsync(async (req, res) => {
  const { id: paymentId } = req.params;
  const { amount, reason } = req.body;

  const result = await invoiceService.refundPayment(paymentId, {
    amount,
    reason,
  });

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Refund processed successfully",
    data: result,
  });
});

const getPaymentDetails = catchAsync(async (req, res) => {
  const { id: paymentId } = req.params;

  const result = await invoiceService.getPaymentDetails(paymentId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Payment details retrieved successfully",
    data: result,
  });
});

const payInvoiceWithCard = catchAsync(async (req, res) => {
  const { id: invoiceId } = req.params;
  const { paymentMethodId } = req.body;

  const result = await invoiceService.payInvoiceWithCard(
    invoiceId,
    paymentMethodId,
  );

  sendResponse(res, {
    statusCode: result.success ? httpStatus.OK : httpStatus.PAYMENT_REQUIRED,
    success: result.success,
    message: result.success
      ? "Payment successful"
      : "Payment requires additional action",
    data: result,
  });
});

export const invoiceController = {
  createInvoice,
  getAllInvoices,
  getInvoiceDetails,
  sendInvoiceEmail,
  updateInvoiceEmailAndSign,
  generateInvoiceFromEstimate,
  recordManualPayment,
  getInvoicePayments,
  refundPayment,
  getPaymentDetails,
  payInvoiceWithCard,
};
