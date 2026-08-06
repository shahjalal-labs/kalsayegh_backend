import express from "express";
import { userControllers } from "./user.controller";
import validateRequest, {
  validateQuery,
} from "../../middlewares/validateRequest";
import { userValidation } from "./user.validation";
import auth from "../../middlewares/auth";
import { fileUploader } from "../../../helpers/fileUploader";
import { parseBodyData } from "../../middlewares/parseBodyData";

const router = express.Router();

router.post(
  "/create",
  fileUploader.profileImage,
  parseBodyData,
  validateRequest(userValidation.userRegisterValidationSchema),
  userControllers.createUser,
);
router.post("/resend-otp", userControllers.resendOtp);

router.post(
  "/signup-verification",
  validateRequest(userValidation.verificationSchema),
  userControllers.signupVerification,
);

router.get(
  "/all",
  auth(),
  validateQuery(userValidation.userQuerySchema), // validate query params
  userControllers.getAllUsers,
);

router.get("/:id", auth(), userControllers.getUserDetails);

export const userRoutes = router;
