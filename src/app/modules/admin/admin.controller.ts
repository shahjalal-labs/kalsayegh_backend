import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { AdminService } from "./admin.service";

const getAdminOverview = catchAsync(async (_req, res) => {
  const result = await AdminService.getAdminOverview();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Admin overview fetched successfully",
    data: result,
  });
});

export const AdminController = {
  getAdminOverview,
  // ... other existing controller functions
};
