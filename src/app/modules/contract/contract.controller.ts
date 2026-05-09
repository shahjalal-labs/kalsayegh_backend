import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { contractService } from "./contract.service";
import pick from "../../../shared/pick";
import { paginationOptions } from "../../../shared/pagination";

const createContract = catchAsync(async (req, res) => {
  const result = await contractService.createContract(req.body);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Created successfully.",
    data: result,
  });
});

const getAllContracts = catchAsync(async (req, res) => {
  const pagination = pick(req.query, paginationOptions);

  const result = await contractService.getAllContracts(pagination);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "All contracts retrieved successfully",
    data: result,
  });
});

const updateContract = catchAsync(async (req, res) => {
  const { id: contractId } = req.params;

  const result = await contractService.updateContract(contractId, req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Contract updated successfully",
    data: result,
  });
});

const getSingleContract = catchAsync(async (req, res) => {
  const { id: contractId } = req.params;

  const result = await contractService.getSingleContract(contractId);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Contract retrieved successfully",
    data: result,
  });
});

const deleteContract = catchAsync(async (req, res) => {
  const { id: contractId } = req.params;

  const result = await contractService.deleteContract(contractId);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Contract deleted successfully",
    data: result,
  });
});

export const contractController = {
  createContract,
  getAllContracts,
  updateContract,
  getSingleContract,
  deleteContract,
};
