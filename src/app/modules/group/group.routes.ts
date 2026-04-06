import express from "express";
import { groupControllers } from "./group.controller";
import auth from "../../middlewares/auth";
import { fileUploader } from "../../../helpers/fileUploader";
import { parseBodyData } from "../../middlewares/parseBodyData";
import { UserRole } from "@prisma/client";

const router = express.Router();

router.post(
  "/create",
  auth(UserRole.ADMIN, UserRole.OFFICE_ADMINISTRATOR),
  fileUploader.groupPhoto,
  parseBodyData,
  groupControllers.createGroup,
);
router.post("/invite-group/:groupId", auth(), groupControllers.inviteGroup);

export const groupRoutes = router;
