import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { subItemService } from "./estimate.subItem.service";

export const estimateSubItemControllers = {
  addSubItems: catchAsync(async (req, res) => {
    const { estimateId } = req.params;
    const { subItems } = req.body;

    const result = await subItemService.addSubItems(estimateId, subItems);

    sendResponse(res, {
      statusCode: httpStatus.CREATED,
      success: true,
      message: "Subitems added successfully",
      data: result,
    });
  }),

  updateSubItem: catchAsync(async (req, res) => {
    const { estimateId, subItemId } = req.params;
    const updateData = req.body;

    const result = await subItemService.updateSubItem(
      estimateId,
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
    const { estimateId, subItemId } = req.params;

    const result = await subItemService.deleteSubItem(estimateId, subItemId);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Subitem deleted successfully",
      data: result,
    });
  }),
};
