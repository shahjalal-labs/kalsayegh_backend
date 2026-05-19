import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import { paginationOptions } from "../../../shared/pagination";
import pick from "../../../shared/pick";
import sendResponse from "../../../shared/sendResponse";
import { estimateService } from "./estimate.service";
import { TUpdateEstimateEmailSignSchema } from "./estimate.validation";

const createEstimate = catchAsync(async (req, res) => {
  const result = await estimateService.createEstimateInDB(req);
  sendResponse(res, {
    success: true,
    statusCode: 201,
    message: "Estimate has been created successfully",
    data: result,
  });
});

const editEstimate = catchAsync(async (req, res) => {
  const { id: estimateId } = req.params;
  const result = await estimateService.editEstimateInDB(estimateId, req);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Estimate has been updated successfully",
    data: result,
  });
});

const getEstimateById = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await estimateService.getEstimateByIdFromDB(id);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Estimate retrieved successfully",
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
  const files = req.files as Express.Multer.File[] | undefined;
  // Note: req.files from multer.fields() is an object keyed by field name.
  // For simplicity we will flatten only the "itemImages" files.
  let itemImages: Express.Multer.File[] = [];
  if (files && (files as any).itemImages) {
    itemImages = (files as any).itemImages;
  }
  const newItem = await estimateService.createNewItemInDB(itemData, itemImages);
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

const itemList = catchAsync(async (_req, res) => {
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

const updateEstimateStatus = catchAsync(async (req, res) => {
  const { id: estimateId } = req.params;
  const { status } = req.body;

  const result = await estimateService.updateEstimateStatus(estimateId, status);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Estimate status updated successfully.",
    data: result,
  });
});

const updateEstimateEmailAndSign = catchAsync(async (req, res) => {
  const { id: estimateId } = req.params;
  const { emailStatus, signedName, mySignName, mySignAt } =
    req.body as TUpdateEstimateEmailSignSchema;

  const result = await estimateService.updateEstimateEmailAndSign(
    estimateId,
    emailStatus,
    signedName,
    mySignName,
    mySignAt,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Estimate email/signature updated successfully.",
    data: result,
  });
});

const sendEstimateEmailFlexible = catchAsync(async (req, res) => {
  const { id: estimateId } = req.params;
  const payload = req.body;

  const result = await estimateService.sendEstimateEmailFlexible(
    estimateId,
    payload,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Estimate email(s) sent successfully.",
    data: result,
  });
});

const deleteEstimate = catchAsync(async (req, res) => {
  const { id: estimateId } = req.params;

  const result = await estimateService.deleteEstimate(estimateId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Estimate deleted successfully",
    data: result,
  });
});

const getEstimateNumber = catchAsync(async (_req, res) => {
  const result = await estimateService.getEstimateNumber();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Estimate number retrieved successfully",
    data: result,
  });
});

const updateEstimateImages = catchAsync(async (req, res) => {
  const { id: estimateId } = req.params;
  const payload = req.body;
  const files = req.files as {
    sideMap?: Express.Multer.File[];
    fileUrls?: Express.Multer.File[];
  };

  const result = await estimateService.updateEstimateImages(
    estimateId,
    payload,
    files,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Estimate images updated successfully",
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
  editEstimate,
  getAllEstimate,
  getEstimateById,
  getEstimateDetails,
  updateItem,
  updateEstimateStatus,
  updateEstimateEmailAndSign,
  sendEstimateEmailFlexible,
  deleteEstimate,
  getEstimateNumber,
  updateEstimateImages,
};
