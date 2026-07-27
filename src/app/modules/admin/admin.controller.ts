import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { adminService } from "./admin.service";
import pick from "../../../shared/pick";
import { paginationOptions } from "../../../shared/pagination";

const getEmployeeList = catchAsync(async (req, res) => {
  const { page = 1, limit = 10 } = req.query;
  const filter = pick(req.query, ["searchTerm"]);
  const result = await adminService.getEmployeeList(
    Number(page),
    Number(limit),
    filter,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Employee list fetched successfully",
    data: result,
  });
});

const getAdminOverview = catchAsync(async (_req, res) => {
  const result = await adminService.getAdminOverview();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Admin overview fetched successfully",
    data: result,
  });
});

const getHoursTrend = catchAsync(async (req, res) => {
  const { period } = req.query;
  const validPeriods = ["daily", "weekly", "monthly"];
  const selectedPeriod = validPeriods.includes(period as string)
    ? (period as string)
    : "daily";

  const result = await adminService.getHoursTrend(selectedPeriod);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Hours trend fetched successfully",
    data: result,
  });
});

const getEmployeeDetails = catchAsync(async (req, res) => {
  const { id: userId } = req.params;
  const result = await adminService.getEmployeeDetails(userId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Employee details retrieved successfully",
    data: result,
  });
});

const updateUserDetails = catchAsync(async (req, res) => {
  const { id: userId } = req.params;
  const result = await adminService.updateUserDetails(userId, req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Employee details updated successfully",
    data: result,
  });
});

const deleteUserAccount = catchAsync(async (req, res) => {
  const { id: userId } = req.params;
  const result = await adminService.deleteUserAccount(userId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Employee account deleted successfully",
    data: result,
  });
});

const getAllEstimator = catchAsync(async (req, res) => {
  const paginations = pick(req.query, paginationOptions);
  const filter = pick(req.query, ["searchTerm"]);
  const result = await adminService.getAllEstimator(paginations, filter);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "All estimators retrieved successfully",
    data: result,
  });
});

const getAllOfficeAdmin = catchAsync(async (req, res) => {
  const paginations = pick(req.query, paginationOptions);
  const filter = pick(req.query, ["searchTerm"]);
  const result = await adminService.getAllOfficeAdmin(paginations, filter);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "All office admin retrieved successfully",
    data: result,
  });
});

const getAllPendingUsers = catchAsync(async (req, res) => {
  const { id: userId } = req.user;
  const paginations = pick(req.query, paginationOptions);
  const filter = pick(req.query, ["searchTerm"]);

  const result = await adminService.getAllPendingUsers(
    userId,
    paginations,
    filter,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "All pending users retrieved successfully",
    data: result,
  });
});

const createOfficeAdmin = catchAsync(async (req, res) => {
  const result = await adminService.createOfficeAdmin(req.body, req.file);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Office Admin created successfully",
    data: result,
  });
});

export const adminController = {
  getEmployeeList,
  getAdminOverview,
  getHoursTrend,
  getEmployeeDetails,
  updateUserDetails,
  deleteUserAccount,
  getAllEstimator,
  getAllOfficeAdmin,
  getAllPendingUsers,
  createOfficeAdmin,
};
