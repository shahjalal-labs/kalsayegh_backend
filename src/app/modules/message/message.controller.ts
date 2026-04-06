import { messageServices } from "./message.service";
import sendResponse from "../../../shared/sendResponse";
import catchAsync from "../../../shared/catchAsync";

const createManyMessage = catchAsync(async (req, res) => {
  await messageServices.createManyMessage(req.body);
  sendResponse(res, {
    success: true,
    statusCode: 201,
    message: "The message has been created successfully",
  });
});

const getAllMessages = catchAsync(async (req, res) => {
  const result = await messageServices.getAllMessages();
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "All messages has been retrived successfully",
    data: result,
  });
});

const getMessageById = catchAsync(async (req, res) => {
  const result = await messageServices.getMessageById(req.params.id);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "message has been retrived successfully",
    data: result,
  });
});

const updateMessage = catchAsync(async (req, res) => {
  await messageServices.updateMessage(req.params.id, req.body);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "message has been updated successfully",
  });
});

const deleteMessage = catchAsync(async (req, res) => {
  await messageServices.deleteMessage(req.params.id);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "message has been deleted successfully",
  });
});

export const messageControllers = {
  createManyMessage,
  getAllMessages,
  getMessageById,
  updateMessage,
  deleteMessage,
};
