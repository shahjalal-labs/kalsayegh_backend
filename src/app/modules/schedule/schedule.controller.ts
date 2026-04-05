import { scheduleServices } from "./schedule.service";
import sendResponse from "../../../shared/sendResponse";
import catchAsync from "../../../shared/catchAsync";

const createSchedule = catchAsync(async (req, res) => {
  await scheduleServices.createSchedule(req.body);
  sendResponse(res, {
    success: true,
    statusCode: 201,
    message: "The schedule has been created successfully",
  });
});

const getAllSchedules = catchAsync(async (req, res) => {
  const result = await scheduleServices.getAllSchedules(req.query);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "All schedules has been retrived successfully",
    data: result,
  });
});

const getScheduleById = catchAsync(async (req, res) => {
  const result = await scheduleServices.getScheduleById(req.params.id);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "schedule has been retrived successfully",
    data: result,
  });
});

const updateSchedule = catchAsync(async (req, res) => {
  await scheduleServices.updateSchedule(req.params.id, req.body);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "schedule has been updated successfully",
  });
});

const deleteSchedule = catchAsync(async (req, res) => {
  await scheduleServices.deleteSchedule(req.params.id);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "schedule has been deleted successfully",
  });
});

export const scheduleControllers = {
  createSchedule,
  getAllSchedules,
  getScheduleById,
  updateSchedule,
  deleteSchedule,
};
