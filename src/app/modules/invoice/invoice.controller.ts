import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { invoiceService } from "./invoice.service";
import pick from "../../../shared/pick";
import { paginationOptions } from "../../../shared/pagination";
import { InvoiceStatus } from "@prisma/client";
import ApiError from "../../../errors/ApiErrors";

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

const changeInvoiceStatus = catchAsync(async (req, res) => {
  const { id: invoiceId } = req.params;
  const { id: userId } = req.user;

  const { status } = req.body;
  if (!status || (status !== "PAID" && status !== "ACTIVE"))
    throw new ApiError(
      httpStatus.BAD_REQUEST,
      "Invalid status. Accept only PAID | ACTIVE",
    );

  const result = await invoiceService.changeInvoiceStatus(
    userId,
    invoiceId,
    status,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Invoice status changed successfully",
    data: result,
  });
});

export const invoiceController = {
  createInvoice,
  getAllInvoices,
  getInvoiceDetails,
  changeInvoiceStatus,
};
