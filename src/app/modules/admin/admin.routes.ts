import { Router } from "express";
import { adminController } from "./admin.controller";
import auth from "../../middlewares/auth";
import { UserRole } from "@prisma/client";
import validateRequest from "../../middlewares/validateRequest";
import { adminValidation } from "./admin.validation";
import { fileUploader } from "../../../helpers/fileUploader";
import { parseBodyData } from "../../middlewares/parseBodyData";

const router = Router();

router.post(
  "/office-admin",
  fileUploader.profileImage,
  parseBodyData,
  validateRequest(adminValidation.createOfficeAdminSchema),
  auth(UserRole.SUPER_ADMIN),
  adminController.createOfficeAdmin,
);

router.use(
  auth(UserRole.ADMIN, UserRole.SUPER_ADMIN, UserRole.OFFICE_ADMINISTRATOR),
);

router.get("/employees", adminController.getEmployeeList);

router.get("/overview", adminController.getAdminOverview);

router.get("/hours-trend", adminController.getHoursTrend);

router.get("/:id", adminController.getEmployeeDetails);

router.patch(
  "/:id",
  validateRequest(adminValidation.updateUserDetailsSchema),
  adminController.updateUserDetails,
);

router.delete("/:id", adminController.deleteUserAccount);

router.get("/estimator/all", adminController.getAllEstimator);

router.get("/office-admin/all", adminController.getAllOfficeAdmin);

router.get("/pending-users/all", adminController.getAllPendingUsers);

export const adminRoutes = router;
