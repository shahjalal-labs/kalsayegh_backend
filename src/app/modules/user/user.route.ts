import express from "express";
import { userControllers } from "./user.controller";
import validateRequest from "../../middlewares/validateRequest";
import { userValidation } from "./user.validation";
import auth from "../../middlewares/auth";

const router = express.Router();

router.post(
  "/create",
  validateRequest(userValidation.userRegisterValidationSchema),
  userControllers.createUser,
);
router.post(
  "/signup-verification",
  validateRequest(userValidation.verificationSchema),
  userControllers.signupVerification,
);

router.get("/all", auth(), userControllers.getAllUsers);

router.get("/:id", auth(), userControllers.getUserDetails);

export const userRoutes = router;
