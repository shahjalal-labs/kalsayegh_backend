// src/app/modules/report/report.routes.ts
import { Router } from "express";
import auth from "../../middlewares/auth";
import { reportController } from "./report.controller";
import { UserRole } from "@prisma/client";

const router = Router();

router.get(
  "/summary",
  auth(UserRole.ADMIN, UserRole.ESTIMATOR, UserRole.OFFICE_ADMINISTRATOR),
  reportController.getSummary,
);

router.get(
  "/filtered",
  auth(UserRole.ADMIN, UserRole.ESTIMATOR, UserRole.OFFICE_ADMINISTRATOR),
  reportController.getFilteredReport,
);

export const reportRoutes = router;
