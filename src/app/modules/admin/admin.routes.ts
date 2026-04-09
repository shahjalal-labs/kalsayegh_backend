import { Router } from "express";
import { adminController } from "./admin.controller";
import auth from "../../middlewares/auth";
import { UserRole } from "@prisma/client";
import validateRequest from "../../middlewares/validateRequest";
import { adminValidation } from "./admin.validation";

const router = Router();

router.get(
  "/employees",
  auth(UserRole.ADMIN, UserRole.OFFICE_ADMINISTRATOR),
  adminController.getEmployeeList,
);

router.get(
  "/overview",
  auth(UserRole.ADMIN, UserRole.OFFICE_ADMINISTRATOR),
  adminController.getAdminOverview,
);

router.get("/hours-trend", auth(UserRole.ADMIN), adminController.getHoursTrend);

router.get("/:id", auth(UserRole.ADMIN), adminController.getEmployeeDetails);

router.patch(
  "/:id",
  auth(UserRole.ADMIN),
  validateRequest(adminValidation.updateUserDetailsSchema),
  adminController.updateUserDetails,
);

router.delete("/:id", auth(UserRole.ADMIN), adminController.deleteUserAccount);

router.get(
  "/estimator/all",
  auth(UserRole.ADMIN, UserRole.OFFICE_ADMINISTRATOR),
  adminController.getAllEstimator,
);

export const adminRoutes = router;
