import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { adminService } from "./admin.service";
import pick from "../../../shared/pick";

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

export const adminController = {
  getEmployeeList,
  getAdminOverview,
  getHoursTrend,
  getEmployeeDetails,
  updateUserDetails,
  deleteUserAccount,
};
