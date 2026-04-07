import express from "express";
import auth from "../../middlewares/auth";

import { UserRole } from "@prisma/client";
import { estimateControllers } from "./estimate.controller";

const router = express.Router();

router.post(
  "/create-client",
  auth(UserRole.ADMIN, UserRole.ESTIMATOR),
  estimateControllers.createEstimate,
);
router.get(
  "/my-clients",
  auth(UserRole.ADMIN, UserRole.ESTIMATOR),
  estimateControllers.myClients,
);

export const estimateRoutes = router;
