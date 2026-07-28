import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { jobRequestService } from "./jobRequest.service";
import httpStatus from "http-status";
import pick from "../../../shared/pick";
import { paginationOptions } from "../../../shared/pagination";

const createOffice = catchAsync(async (req, res) => {
  const { id: userId } = req.user;
  const result = await jobRequestService.createOffice(userId, req.body);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Office created successfully.",
    data: result,
  });
});

const getOffice = catchAsync(async (_req, res) => {
  const result = await jobRequestService.getOffice();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Office retrieved successfully.",
    data: result,
  });
});

const updateOffice = catchAsync(async (req, res) => {
  const { id: userId } = req.user;

  const { id: officeId } = req.params;
  const result = await jobRequestService.updateOffice(
    userId,
    officeId,
    req.body,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Office updated successfully",
    data: result,
  });
});

const deleteOffice = catchAsync(async (req, res) => {
  const { id: userId } = req.user;

  const { id: officeId } = req.params;
  const result = await jobRequestService.deleteOffice(userId, officeId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Office deleted successfully",
    data: result,
  });
});

const createJobRequest = catchAsync(async (req, res) => {
  const { id: userId } = req.user;
  const files = req.files as {
    jobRequestsImage?: Express.Multer.File[];
  };

  const result = await jobRequestService.createJobRequest(
    userId,
    req.body,
    files?.jobRequestsImage,
  );

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Job request created successfully.",
    data: result,
  });
});

const createJobRequestByImage = catchAsync(async (req, res) => {
  const { id: userId } = req.user;
  const files = req.files as {
    jobRequestsImage?: Express.Multer.File[];
  };
  const result = await jobRequestService.createJobRequestByImage(
    userId,
    req.body,
    files.jobRequestsImage,
  );

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Job request created by image successfully.",
    data: result,
  });
});

const getAllJobRequests = catchAsync(async (_req, res) => {
  const result = await jobRequestService.getAllJobRequests();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Job requests retrieved successfully.",
    data: result,
  });
});

const getJobRequestDetails = catchAsync(async (req, res) => {
  const { id: jobReqId } = req.params;

  const result = await jobRequestService.getJobRequestDetails(jobReqId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Job request details retrieved successfully.",
    data: result,
  });
});

const updateJobRequest = catchAsync(async (req, res) => {
  const { id: jobReqId } = req.params;

  const files = req.files as {
    jobRequestsImage?: Express.Multer.File[];
  };

  const result = await jobRequestService.updateJobRequest(
    jobReqId,
    req.body,
    files?.jobRequestsImage,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Job request updated successfully.",
    data: result,
  });
});

const getAllJobRequetsForAOffice = catchAsync(async (req, res) => {
  const { id: officeId } = req.params;
  const paginations = pick(req.query, paginationOptions);

  const result = await jobRequestService.getAllJobRequetsForAOffice(
    officeId,
    paginations,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Job requests for a office retrieved successfully.",
    data: result,
  });
});

const deleteJobRequest = catchAsync(async (req, res) => {
  // const { id: userId } = req.user;

  const { id: jobReqId } = req.params;
  const result = await jobRequestService.deleteJobRequest(jobReqId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Job request deleted successfully",
    data: result,
  });
});

export const jobRequestController = {
  createOffice,
  getOffice,
  updateOffice,
  deleteOffice,
  createJobRequest,
  getAllJobRequests,
  getJobRequestDetails,
  updateJobRequest,
  getAllJobRequetsForAOffice,
  createJobRequestByImage,
  deleteJobRequest,
};
