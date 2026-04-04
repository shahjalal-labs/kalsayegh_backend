import { Router } from "express";
import { AdminController } from "./admin.controller";
import auth from "../../middlewares/auth";
import { UserRole } from "@prisma/client";

const router = Router();

router.get(
  "/employees",
  auth(UserRole.ADMIN, UserRole.OFFICE_ADMINISTRATOR),
  AdminController.getEmployeeList,
);

router.get(
  "/overview",
  auth(UserRole.ADMIN, UserRole.OFFICE_ADMINISTRATOR),
  AdminController.getAdminOverview,
);

router.get("/hours-trend", auth(UserRole.ADMIN), AdminController.getHoursTrend);

export const adminRoutes = router;
