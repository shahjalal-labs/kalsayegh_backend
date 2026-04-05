import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { userService } from "./user.services";

const createUser = catchAsync(async (req, res) => {
  const result = await userService.createUser(req.body, req.file);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: "Check your email for signup verification",
    data: result,
  });
});

const resendOtp = catchAsync(async (req, res) => {
  const result = await userService.resendOtp(req.body.email);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "OTP resent successfully",
    data: result,
  });
});

const signupVerification = catchAsync(async (req, res) => {
  const result = await userService.signupVerification(req.body);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "OTP verification successful",
    data: result,
  });
});

const getUserDetails = catchAsync(async (req, res) => {
  const { id: userId } = req.user;

  const result = await userService.getUserDetails(userId);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "User detais retrieved successfully",
    data: result,
  });
});

const getAllUsers = catchAsync(async (_req, res) => {
  const result = await userService.getAllUsers();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "All users retrieved successfully",
    data: result,
  });
});

export const userControllers = {
  createUser,
  resendOtp,
  signupVerification,
  getUserDetails,
  getAllUsers,
};
