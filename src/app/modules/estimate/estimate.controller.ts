import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import { paginationOptions } from "../../../shared/pagination";
import pick from "../../../shared/pick";
import sendResponse from "../../../shared/sendResponse";
import { estimateService } from "./estimate.service";

const createEstimate = catchAsync(async (req, res) => {
  const result = await estimateService.createEstimateInDB(req);
  sendResponse(res, {
    success: true,
    statusCode: 201,
    message: "Estimate has been created successfully",
    data: result,
  });
});
const createClient = catchAsync(async (req, res) => {
  const userId = req.user.id;

  const result = await estimateService.createClientInDB(req.body, userId);
  sendResponse(res, {
    success: true,
    statusCode: 201,
    message: "Client has been created successfully",
    data: result,
  });
});
const myClients = catchAsync(async (req, res) => {
  const userId = req.user.id;
  const clients = await estimateService.getMyClientsFromDB(userId);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "My clients retrieved successfully",
    data: clients,
  });
});
const createMarkUp = catchAsync(async (req, res) => {
  const markUpData = req.body;
  const newMarkUp = await estimateService.createNewMarkUpInDB(markUpData);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "MarkUp created successfully",
    data: newMarkUp,
  });
});
const allMarkUps = catchAsync(async (req, res) => {
  const markUps = await estimateService.getAllMarkUpsFromDB();
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "All markUps retrieved successfully",
    data: markUps,
  });
});

const createItem = catchAsync(async (req, res) => {
  const itemData = req.body;
  const newItem = await estimateService.createNewItemInDB(itemData);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Item created successfully",
    data: newItem,
  });
});
const updateItem = catchAsync(async (req, res) => {
  const itemData = req.body;
  const updatedItem = await estimateService.updateItemInDb(itemData);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Item updated successfully",
    data: updatedItem,
  });
});
const itemList = catchAsync(async (req, res) => {
  const items = await estimateService.getItemListFromDB();
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Item list retrieved successfully",
    data: items,
  });
});
const createTax = catchAsync(async (req, res) => {
  const taxData = req.body;
  const newTax = await estimateService.createNewTaxInDB(taxData);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Tax created successfully",
    data: newTax,
  });
});

const allTaxes = catchAsync(async (_req, res) => {
  const taxes = await estimateService.getAllTaxesFromDB();
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "All taxes retrieved successfully",
    data: taxes,
  });
});

const getAllEstimate = catchAsync(async (req, res) => {
  const pagination = pick(req.query, paginationOptions);
  const filter = pick(req.query, ["searchTerm", "status"]);
  const result = await estimateService.getAllEstimate(pagination, filter);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Estimates retrieved successfully.",
    data: result,
  });
});

const getEstimateDetails = catchAsync(async (req, res) => {
  const { id: estimateId } = req.params;
  const result = await estimateService.getEstimateDetails(estimateId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Estimate details retrieved successfully.",
    data: result,
  });
});

const sendEstimateEmail = catchAsync(async (req, res) => {
  const { id: estimateId } = req.params;
  const result = await estimateService.sendEstimateEmail(estimateId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Estimate email sent successfully.",
    data: result,
  });
});

export const estimateControllers = {
  createClient,
  myClients,
  createMarkUp,
  allMarkUps,
  createItem,
  createTax,
  allTaxes,
  itemList,
  createEstimate,
  getAllEstimate,
  getEstimateDetails,
  updateItem,
  sendEstimateEmail,
};
