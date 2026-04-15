import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import { paginationOptions } from "../../../shared/pagination";
import pick from "../../../shared/pick";
import sendResponse from "../../../shared/sendResponse";
import { todolistService } from "./todolist.service";

const getOfficeAdministrator = catchAsync(async (req, res) => {
  const paginations = pick(req.query, paginationOptions);
  const filter = pick(req.query, ["searchTerm"]);

  const result = await todolistService.getOfficeAdministrator(
    paginations,
    filter,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Office administrator retrieved successfully",
    data: result,
  });
});

const createTodolist = catchAsync(async (req, res) => {
  const { id: userId } = req.user;

  const files = req.files as {
    todolistImages?: Express.Multer.File[];
  };

  const result = await todolistService.createTodolist(
    userId,
    req.body,
    files.todolistImages,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Todolist created successfully",
    data: result,
  });
});

const getAllTodolist = catchAsync(async (req, res) => {
  const paginations = pick(req.query, paginationOptions);
  const result = await todolistService.getAllTodolist(paginations);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Todolist retrieved successfully",
    data: result,
  });
});

const getTodoDetails = catchAsync(async (req, res) => {
  const { id: todoId } = req.params;
  const result = await todolistService.getTodoDetails(todoId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Todolist retrieved successfully",
    data: result,
  });
});

const updateTodo = catchAsync(async (req, res) => {
  const { id: todoId } = req.params;
  const result = await todolistService.updateTodo(todoId, req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Todolist updated successfully",
    data: result,
  });
});

const updateTodoImage = catchAsync(async (req, res) => {
  const { id: todoId } = req.params;

  const files = req.files as {
    todolistImages?: Express.Multer.File[];
  };

  const result = await todolistService.updateTodoImage(
    todoId,
    req.body,
    files?.todolistImages,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Todolist image updated successfully",
    data: result,
  });
});

export const todolistController = {
  getOfficeAdministrator,
  createTodolist,
  getAllTodolist,
  getTodoDetails,
  updateTodo,

  updateTodoImage,
};
