import { Router } from "express";
import auth from "../../middlewares/auth";
import { UserRole } from "@prisma/client";
import { jobRequestController } from "./jobRequest.controller";
import validateRequest from "../../middlewares/validateRequest";
import { jobRequestValidatin } from "./jobRequest.validation";
import { fileUploader } from "../../../helpers/fileUploader";
import { parseBodyData } from "../../middlewares/parseBodyData";

const router = Router();

router.post(
  "/office-create",
  auth(UserRole.OFFICE_ADMINISTRATOR, UserRole.ADMIN),
  validateRequest(jobRequestValidatin.createOfficeSchema),
  jobRequestController.createOffice,
);

router.get(
  "/office",
  auth(UserRole.OFFICE_ADMINISTRATOR, UserRole.ADMIN),
  jobRequestController.getOffice,
);

router.post(
  "/create-job-request",
  auth(UserRole.OFFICE_ADMINISTRATOR, UserRole.ADMIN),
  fileUploader.uploadMultiple,
  parseBodyData,
  validateRequest(jobRequestValidatin.createJobRequestSchema),
  jobRequestController.createJobRequest,
);

router.get(
  "/all",
  auth(UserRole.OFFICE_ADMINISTRATOR, UserRole.ADMIN),
  jobRequestController.getAllJobRequests,
);

router.get(
  "/details/:id",
  auth(UserRole.OFFICE_ADMINISTRATOR, UserRole.ADMIN),
  jobRequestController.getJobRequestDetails,
);

router.patch(
  "/update-job-request/:id",
  auth(UserRole.OFFICE_ADMINISTRATOR, UserRole.ADMIN),
  fileUploader.uploadMultiple,
  parseBodyData,
  validateRequest(jobRequestValidatin.updateJobRequestSchema),
  jobRequestController.updateJobRequest,
);

export const jobRequestRoutes = router;
