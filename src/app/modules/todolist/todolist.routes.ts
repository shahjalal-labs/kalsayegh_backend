import { Router } from "express";
import auth from "../../middlewares/auth";
import { UserRole } from "@prisma/client";
import { todolistController } from "./todolist.controller";
import validateRequest from "../../middlewares/validateRequest";
import { todolistValidation } from "./todolist.validation";
import { fileUploader } from "../../../helpers/fileUploader";
import { parseBodyData } from "../../middlewares/parseBodyData";

const router = Router();

router.get(
  "/",
  auth(UserRole.OFFICE_ADMINISTRATOR),
  todolistController.getOfficeAdministrator,
);

router.post(
  "/create",
  auth(UserRole.OFFICE_ADMINISTRATOR),
  fileUploader.upload.single("image"),
  parseBodyData,
  validateRequest(todolistValidation.createTodolistSchema),
  todolistController.createTodolist,
);

router.get(
  "/all",
  auth(UserRole.OFFICE_ADMINISTRATOR),
  todolistController.getAllTodolist,
);

router.get(
  "/details/:id",
  auth(UserRole.OFFICE_ADMINISTRATOR),
  todolistController.getTodoDetails,
);

router.patch(
  "/update/:id",
  validateRequest(todolistValidation.updateTodoSchema),
  auth(UserRole.OFFICE_ADMINISTRATOR),
  todolistController.updateTodo,
);

export const todolistRoutes = router;
