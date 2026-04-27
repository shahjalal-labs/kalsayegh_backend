// src/app/modules/report/report.controller.ts
import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { reportService } from "./report.service";
import { dateRangeSchema } from "./report.validation";
import { startOfMonth, endOfMonth, format } from "date-fns";

// Helper to get current month range as YYYY-MM-DD strings
const getCurrentMonthRange = () => {
  const now = new Date();
  const start = startOfMonth(now);
  const end = endOfMonth(now);
  return {
    startDate: format(start, "yyyy-MM-dd"),
    endDate: format(end, "yyyy-MM-dd"),
  };
};

// GET /reports/summary – always current month
const getSummary = catchAsync(async (req, res) => {
  const { startDate, endDate } = getCurrentMonthRange();
  const result = await reportService.getFinancialMetrics(startDate, endDate);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: `Report for ${startDate} to ${endDate}`,
    data: result,
  });
});

// GET /reports/filtered?startDate=...&endDate=...
const getFilteredReport = catchAsync(async (req, res) => {
  const { startDate, endDate } = dateRangeSchema.parse(req.query);
  const result = await reportService.getFinancialMetrics(startDate, endDate);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: `Report for ${startDate} to ${endDate}`,
    data: result,
  });
});

export const reportController = { getSummary, getFilteredReport };
