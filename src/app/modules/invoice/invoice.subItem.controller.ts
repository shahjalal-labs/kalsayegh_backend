import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { invoiceSubItemService } from "./invoice.subItem.service";

export const invoiceSubItemControllers = {
  addSubItems: catchAsync(async (req, res) => {
    const { invoiceId } = req.params;
    const { subItems } = req.body;

    const result = await invoiceSubItemService.addSubItems(invoiceId, subItems);

    sendResponse(res, {
      statusCode: httpStatus.CREATED,
      success: true,
      message: "Subitems added successfully",
      data: result,
    });
  }),

  updateSubItem: catchAsync(async (req, res) => {
    const { invoiceId, subItemId } = req.params;
    const updateData = req.body;

    const result = await invoiceSubItemService.updateSubItem(
      invoiceId,
      subItemId,
      updateData,
    );

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Subitem updated successfully",
      data: result,
    });
  }),

  deleteSubItem: catchAsync(async (req, res) => {
    const { invoiceId, subItemId } = req.params;

    const result = await invoiceSubItemService.deleteSubItem(
      invoiceId,
      subItemId,
    );

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Subitem deleted successfully",
      data: result,
    });
  }),
};
