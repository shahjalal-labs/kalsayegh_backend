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

const generateUrls = catchAsync(async (req, res) => {
  const files = req.files as { urls: Express.Multer.File[] };
  const urls = await messageServices.generateUrls(files);
  sendResponse(res, {
    success: true,
    statusCode: 201,
    message: "URLs generated successfully",
    data: urls,
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
  generateUrls,
  getAllMessages,
  getMessageById,
  updateMessage,
  deleteMessage,
};
