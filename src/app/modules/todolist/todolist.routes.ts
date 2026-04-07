import { Router } from "express";
import auth from "../../middlewares/auth";
import { UserRole } from "@prisma/client";
import { todolistController } from "./todolist.controller";

const router = Router();

router.get(
  "/",
  auth(UserRole.OFFICE_ADMINISTRATOR),
  todolistController.getOfficeAdministrator,
);

router.post(
  "/create",
  auth(UserRole.OFFICE_ADMINISTRATOR),
  todolistController.createTodolist,
);

router.get(
  "/all",
  auth(UserRole.OFFICE_ADMINISTRATOR),
  todolistController.getAllTodolist,
);

export const todolistRoutes = router;
