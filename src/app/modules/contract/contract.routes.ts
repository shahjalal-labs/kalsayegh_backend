import { Router } from "express";
import auth from "../../middlewares/auth";
import { UserRole } from "@prisma/client";
import validateRequest from "../../middlewares/validateRequest";
import { contractValidation } from "./contract.validation";
import { contractController } from "./contract.controller";

const router = Router();

router.post(
  "/create-contract",
  auth(UserRole.ADMIN, UserRole.ESTIMATOR, UserRole.OFFICE_ADMINISTRATOR),
  validateRequest(contractValidation.createContractSchema),
  contractController.createContract,
);

router.get("/all-contracts", auth(), contractController.getAllContracts);

router.patch(
  "/update-contract/:id",
  auth(),
  validateRequest(contractValidation.updateContractSchema),
  contractController.updateContract,
);

router.get(
  "/single-contract/:id",
  auth(),
  contractController.getSingleContract,
);

router.delete(
  "/delete-contract/:id",
  auth(),
  contractController.deleteContract,
);

export const contractRoutes = router;
