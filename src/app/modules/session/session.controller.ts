import { sessionServices } from "./session.service";
import sendResponse from "../../../shared/sendResponse";
import catchAsync from "../../../shared/catchAsync";

const clockIn = catchAsync(async (req, res) => {
  await sessionServices.clockIn(req.body, req.user.id);
  sendResponse(res, {
    success: true,
    statusCode: 201,
    message: "The session has been created successfully",
  });
});

const clockOut = catchAsync(async (req, res) => {
  const { sessionId } = req.params;
  const userId = req.user.id;
  await sessionServices.clockOut(sessionId, req.body.clockOutAt, userId);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "The session has been clocked out successfully",
  });
});

const mySessions = catchAsync(async (req, res) => {
  const result = await sessionServices.mySessions(req.user.id);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "My sessions has been retrived successfully",
    data: result,
  });
});

const getAllSessions = catchAsync(async (req, res) => {
  const result = await sessionServices.getAllSessions();
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "All sessions has been retrived successfully",
    data: result,
  });
});

const getSessionById = catchAsync(async (req, res) => {
  const result = await sessionServices.getSessionById(req.params.id);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "session has been retrived successfully",
    data: result,
  });
});

const updateSession = catchAsync(async (req, res) => {
  await sessionServices.updateSession(req.params.id, req.body);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "session has been updated successfully",
  });
});

const deleteSession = catchAsync(async (req, res) => {
  await sessionServices.deleteSession(req.params.id);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "session has been deleted successfully",
  });
});

export const sessionControllers = {
  clockIn,
  clockOut,
  mySessions,
  getAllSessions,
  getSessionById,
  updateSession,
  deleteSession,
};
