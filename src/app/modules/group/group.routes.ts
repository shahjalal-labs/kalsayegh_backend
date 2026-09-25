import express from "express";
import { groupControllers } from "./group.controller";
import auth from "../../middlewares/auth";
import { fileUploader } from "../../../helpers/fileUploader";
import { parseBodyData } from "../../middlewares/parseBodyData";
import { UserRole } from "@prisma/client";
import { GroupSchemaValidation } from "./group.validation";
import validateRequest from "../../middlewares/validateRequest";

const router = express.Router();

router.post(
  "/create",
  auth(UserRole.ADMIN, UserRole.SUPER_ADMIN, UserRole.OFFICE_ADMINISTRATOR),
  fileUploader.groupPhoto,
  parseBodyData,
  groupControllers.createGroup,
);
router.post("/invite-group/:groupId", auth(), groupControllers.inviteGroup);

router.delete(
  "/:groupId/members/:memberId",
  auth(),
  groupControllers.removeMember,
);

router.delete(
  "/:groupId/members/:memberId",
  auth(),
  validateRequest(GroupSchemaValidation.removeMemberSchema),
  groupControllers.removeMember,
);

export const groupRoutes = router;
