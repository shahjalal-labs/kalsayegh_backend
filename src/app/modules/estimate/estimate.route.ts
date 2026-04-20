import express from "express";
import auth from "../../middlewares/auth";

import { UserRole } from "@prisma/client";
import { estimateControllers } from "./estimate.controller";
import validateRequest from "../../middlewares/validateRequest";
import { estimateValidation } from "./estimate.validation";
import { fileUploader } from "../../../helpers/fileUploader";
import { parseBodyData } from "../../middlewares/parseBodyData";

const router = express.Router();

router.post(
  "/create-estimate",
  auth(UserRole.ADMIN, UserRole.ESTIMATOR),
  fileUploader.uploadMultiple,
  parseBodyData,
  validateRequest(estimateValidation.estimateValidationSchema),
  estimateControllers.createEstimate,
);
router.post(
  "/create-client",
  auth(UserRole.ADMIN, UserRole.ESTIMATOR),
  estimateControllers.createClient,
);
router.get(
  "/my-clients",
  auth(UserRole.ADMIN, UserRole.ESTIMATOR),
  estimateControllers.myClients,
);
router.post(
  "/create-markup",
  auth(UserRole.ADMIN, UserRole.ESTIMATOR),
  validateRequest(estimateValidation.markUpValidationSchema),
  estimateControllers.createMarkUp,
);
router.get(
  "/all-markups",
  auth(UserRole.ADMIN, UserRole.ESTIMATOR),
  estimateControllers.allMarkUps,
);
router.post(
  "/create-item",
  auth(UserRole.ADMIN, UserRole.ESTIMATOR),
  validateRequest(estimateValidation.itemValidationSchema),
  estimateControllers.createItem,
);
router.post(
  "/update-item",
  auth(UserRole.ADMIN, UserRole.ESTIMATOR),
  validateRequest(estimateValidation.itemUpdateValidationSchema),
  estimateControllers.updateItem,
);
router.get(
  "/all-items",
  auth(UserRole.ADMIN, UserRole.ESTIMATOR),
  estimateControllers.itemList,
);
router.post(
  "/create-tax",
  auth(UserRole.ADMIN, UserRole.ESTIMATOR),
  validateRequest(estimateValidation.taxValidationSchema),
  estimateControllers.createTax,
);
router.get(
  "/all-taxes",
  auth(UserRole.ADMIN, UserRole.ESTIMATOR),
  estimateControllers.allTaxes,
);

router.get(
  "/all-estimates",
  auth(UserRole.ADMIN, UserRole.ESTIMATOR),
  estimateControllers.getAllEstimate,
);

router.get(
  "/estimate/:id",
  auth(UserRole.ADMIN, UserRole.ESTIMATOR),
  estimateControllers.getEstimateDetails,
);

router.post(
  "/send-mail/:id",
  auth(UserRole.ADMIN, UserRole.ESTIMATOR),
  estimateControllers.sendEstimateEmail,
);

export const estimateRoutes = router;
