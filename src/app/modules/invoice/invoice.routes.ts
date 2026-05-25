import { Router } from "express";
import auth from "../../middlewares/auth";
import { UserRole } from "@prisma/client";
import { fileUploader } from "../../../helpers/fileUploader";
import { parseBodyData } from "../../middlewares/parseBodyData";
import validateRequest from "../../middlewares/validateRequest";
import { invoiceValidation } from "./invoice.validation";
import { invoiceController } from "./invoice.controller";
import { invoiceSubItemControllers } from "./invoice.subItem.controller";

const router = Router();

router.post(
  "/create",
  fileUploader.uploadMultiple,
  parseBodyData,
  validateRequest(invoiceValidation.createInvoiceSchema),
  auth(UserRole.ESTIMATOR, UserRole.ADMIN),
  invoiceController.createInvoice,
);

router.patch(
  "/update/:id",
  fileUploader.uploadMultiple,
  parseBodyData,
  validateRequest(invoiceValidation.updateInvoiceSchema),
  auth(UserRole.ESTIMATOR, UserRole.ADMIN),
  invoiceController.updateInvoice,
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

router.get("/invoice-number", auth(), invoiceController.getInvoiceNumber);

router.patch(
  "/invoice-images/:id",
  auth(UserRole.ADMIN, UserRole.ESTIMATOR),
  fileUploader.uploadMultiple,
  parseBodyData,
  validateRequest(invoiceValidation.invoiceImageActionSchema),
  invoiceController.updateInvoiceImages,
);

router.patch(
  "/item-images/:id",
  auth(UserRole.ADMIN, UserRole.ESTIMATOR),
  fileUploader.uploadMultiple, // provides req.files.urls
  parseBodyData,
  validateRequest(invoiceValidation.updateInvoiceItemImagesSchema),
  invoiceController.updateInvoiceItemImages,
);

// ========== SUBLINE ITEMS ROUTES (INVOICE) ==========

router.post(
  "/:invoiceId/sub-items",
  auth(UserRole.ADMIN, UserRole.ESTIMATOR),
  validateRequest(invoiceValidation.addInvoiceSubItemsSchema),
  invoiceSubItemControllers.addSubItems,
);

router.patch(
  "/:invoiceId/sub-items/:subItemId",
  auth(UserRole.ADMIN, UserRole.ESTIMATOR),
  validateRequest(invoiceValidation.updateInvoiceSubItemSchema),
  invoiceSubItemControllers.updateSubItem,
);

router.delete(
  "/:invoiceId/sub-items/:subItemId",
  auth(UserRole.ADMIN, UserRole.ESTIMATOR),
  invoiceSubItemControllers.deleteSubItem,
);

router.post(
  "/item-images/bulk-add/:id",
  auth(UserRole.ADMIN, UserRole.ESTIMATOR),
  fileUploader.upload.any(), // accepts any field name → dynamic mapping
  parseBodyData, // parses the JSON 'items' field
  validateRequest(invoiceValidation.addInvoiceItemImagesBulkSchema),
  invoiceController.addInvoiceItemImagesBulk,
);

export const invoiceRoutes = router;
