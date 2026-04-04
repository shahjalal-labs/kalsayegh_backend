import { Router } from "express";
import { AdminController } from "./admin.controller";
import auth from "../../middlewares/auth";
import { UserRole } from "@prisma/client";

const router = Router();

router.get("/overview", auth(UserRole.ADMIN), AdminController.getAdminOverview);

export const adminRoutes = router;
