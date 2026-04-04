import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { AdminService } from "./admin.service";

const getEmployeeList = catchAsync(async (req, res) => {
  const { page = 1, limit = 10 } = req.query;
  const result = await AdminService.getEmployeeList(
    Number(page),
    Number(limit),
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Employee list fetched successfully",
    data: result,
  });
});

const getAdminOverview = catchAsync(async (_req, res) => {
  const result = await AdminService.getAdminOverview();

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

  const result = await AdminService.getHoursTrend(selectedPeriod);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Hours trend fetched successfully",
    data: result,
  });
});

export const AdminController = {
  getEmployeeList,
  getAdminOverview,
  getHoursTrend,
};
