import express from "express";
import { authController } from "./auth.controller";
import validateRequest from "../../middlewares/validateRequest";
import { authValidation } from "./auth.validation";
import auth from "../../middlewares/auth";
import { fileUploader } from "../../../helpers/fileUploader";
import { parseBodyData } from "../../middlewares/parseBodyData";

const router = express.Router();

router.post(
  "/login",
  validateRequest(authValidation.loginSchema),
  authController.loginUser,
);

router.post(
  "/google-login",
  validateRequest(authValidation.googleLoginSchema),
  authController.googleLogin,
);

router.get("/profile", auth(), authController.myProfile);

router.post("/send-forgot-otp", authController.sendForgotPasswordOtp);

router.post("/verify-forgot-otp", authController.verifyForgotPasswordOtpCode);

router.patch("/reset-password", auth(), authController.resetPassword);

router.patch(
  "/profile",
  auth(),
  fileUploader.profileImage,
  parseBodyData,
  validateRequest(authValidation.updateProfileSchema),
  authController.updateProfile,
);

router.patch(
  "/change-password",
  auth(),
  validateRequest(authValidation.changePasswordSchema),
  authController.changePassword,
);

router.delete("/delete-account", auth(), authController.deleteAccount);

export const authRoute = router;
