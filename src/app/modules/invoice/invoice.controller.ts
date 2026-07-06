import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { invoiceService } from "./invoice.service";
import pick from "../../../shared/pick";
import { paginationOptions } from "../../../shared/pagination";
import { TUpdateInvoiceEmailSignSchema } from "./invoice.validation";

const createInvoice = catchAsync(async (req, res) => {
  const result = await invoiceService.createInvoice(req);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: "Invoice has been created successfully",
    data: result,
  });
});

const updateInvoice = catchAsync(async (req, res) => {
  const { id: invoiceId } = req.params;
  const result = await invoiceService.updateInvoice(invoiceId, req);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Invoice updated successfully",
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
  const { emailStatus, signedName, mySignName, mySignAt } =
    req.body as TUpdateInvoiceEmailSignSchema;

  const result = await invoiceService.updateInvoiceEmailAndSign(
    invoiceId,
    emailStatus,
    signedName,
    mySignName,
    mySignAt,
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

const getPublicInvoiceDetails = catchAsync(async (req, res) => {
  const { id: invoiceId } = req.params;
  const result = await invoiceService.getPublicInvoiceDetails(invoiceId);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Invoice details retrieved successfully",
    data: result,
  });
});

const createPaymentIntent = catchAsync(async (req, res) => {
  const { id: invoiceId } = req.params;
  const result = await invoiceService.createPaymentIntent(invoiceId);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Payment intent created successfully",
    data: result,
  });
});

const deleteInvoice = catchAsync(async (req, res) => {
  const { id: invoiceId } = req.params;
  const result = await invoiceService.deleteInvoice(invoiceId);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Invoice deleted successfully",
    data: result,
  });
});

const getInvoiceNumber = catchAsync(async (_req, res) => {
  const result = await invoiceService.getInvoiceNumber();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Invoice number retrieved successfully",
    data: result,
  });
});

// invoice.controller.ts – add this function

const updateInvoiceImages = catchAsync(async (req, res) => {
  const { id: invoiceId } = req.params;
  const payload = req.body;
  const files = req.files as {
    sideMap?: Express.Multer.File[];
    fileUrls?: Express.Multer.File[];
  };

  const result = await invoiceService.updateInvoiceImages(
    invoiceId,
    payload,
    files,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Invoice images updated successfully",
    data: result,
  });
});

const updateInvoiceItemImages = catchAsync(async (req, res) => {
  const { id: invoiceId } = req.params;
  const payload = req.body;
  const files = req.files as { urls?: Express.Multer.File[] };

  const result = await invoiceService.updateInvoiceItemImages(
    invoiceId,
    payload,
    files?.urls,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Item images updated successfully",
    data: result,
  });
});

const addInvoiceItemImagesBulk = catchAsync(async (req, res) => {
  const { id: invoiceId } = req.params;
  const files = req.files as Express.Multer.File[]; // upload.any() → array

  const result = await invoiceService.addInvoiceItemImagesBulk(
    invoiceId,
    files,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Bulk item images added successfully",
    data: result,
  });
});

const duplicateInvoice = catchAsync(async (req, res) => {
  const { id: invoiceId } = req.params;
  const userId = req.user.id;

  const result = await invoiceService.duplicateInvoiceInDB(invoiceId, userId);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Invoice duplicated successfully",
    data: result,
  });
});

export const invoiceController = {
  createInvoice,
  updateInvoice,
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
  getPublicInvoiceDetails,
  createPaymentIntent,
  deleteInvoice,
  getInvoiceNumber,
  updateInvoiceImages,
  updateInvoiceItemImages,
  addInvoiceItemImagesBulk,
  duplicateInvoice,
};
