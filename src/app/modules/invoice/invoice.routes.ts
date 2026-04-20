import { Router } from "express";
import auth from "../../middlewares/auth";
import { UserRole } from "@prisma/client";
import { fileUploader } from "../../../helpers/fileUploader";
import { parseBodyData } from "../../middlewares/parseBodyData";
import validateRequest from "../../middlewares/validateRequest";
import { invoiceValidation } from "./invoice.validation";
import { invoiceController } from "./invoice.controller";

const router = Router();

router.post(
  "/create",
  fileUploader.uploadMultiple,
  parseBodyData,
  validateRequest(invoiceValidation.createInvoiceSchema),
  auth(UserRole.ESTIMATOR, UserRole.ADMIN),
  invoiceController.createInvoice,
);

router.get(
  "/all-invoices",
  auth(UserRole.ADMIN, UserRole.ESTIMATOR),
  invoiceController.getAllInvoices,
);

router.get(
  "/details/:id",
  auth(UserRole.ADMIN, UserRole.ESTIMATOR),
  invoiceController.getInvoiceDetails,
);

router.patch(
  "/change-status/:id",
  auth(UserRole.ADMIN, UserRole.ESTIMATOR),
  invoiceController.changeInvoiceStatus,
);

router.post(
  "/send-mail/:id",
  auth(UserRole.ADMIN, UserRole.ESTIMATOR),
  invoiceController.sendInvoiceEmail,
);

export const invoiceRoutes = router;
