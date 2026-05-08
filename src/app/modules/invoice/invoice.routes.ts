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
  // auth(UserRole.ADMIN, UserRole.ESTIMATOR),
  invoiceController.getInvoiceDetails,
);

router.post(
  "/send-email/:id",
  auth(UserRole.ADMIN, UserRole.ESTIMATOR), // adjust roles as needed
  validateRequest(invoiceValidation.sendInvoiceEmailSchema),
  invoiceController.sendInvoiceEmail,
);

router.patch(
  "/update-email-sign/:id",
  validateRequest(invoiceValidation.updateInvoiceEmailSignSchema),
  invoiceController.updateInvoiceEmailAndSign,
);

router.post(
  "/generate-from-estimate/:estimateId",
  auth(UserRole.ADMIN, UserRole.ESTIMATOR),
  invoiceController.generateInvoiceFromEstimate,
);

router.post(
  "/record-payment/:id",
  auth(UserRole.ADMIN, UserRole.ESTIMATOR),
  validateRequest(invoiceValidation.recordManualPaymentSchema),
  invoiceController.recordManualPayment,
);

// /:invoiceId
router.get(
  "/payments/:id",
  auth(UserRole.ADMIN, UserRole.ESTIMATOR),
  invoiceController.getInvoicePayments,
);

router.post(
  "/refund-payment/:id",
  auth(UserRole.ADMIN, UserRole.ESTIMATOR),
  validateRequest(invoiceValidation.refundPaymentSchema),
  invoiceController.refundPayment,
);

router.get(
  "/payment-details/:id",
  auth(UserRole.ADMIN, UserRole.ESTIMATOR),
  invoiceController.getPaymentDetails,
);

router.post(
  "/pay-with-stripe/:id",
  validateRequest(invoiceValidation.payWithCardSchema),
  invoiceController.payInvoiceWithCard,
);

router.get("/public-invoice/:id", invoiceController.getPublicInvoiceDetails);

router.post(
  "/create-payment-intent/:id",
  invoiceController.createPaymentIntent,
);

router.delete(
  "/delete/:id",
  auth(UserRole.ADMIN, UserRole.ESTIMATOR, UserRole.OFFICE_ADMINISTRATOR),
  invoiceController.deleteInvoice,
);

export const invoiceRoutes = router;
