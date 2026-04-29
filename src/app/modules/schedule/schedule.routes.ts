import express from "express";
import { scheduleControllers } from "./schedule.controller";
import auth from "../../middlewares/auth";
import { UserRole } from "@prisma/client";

const router = express.Router();

router.post(
  "/create",
  auth(UserRole.ADMIN, UserRole.OFFICE_ADMINISTRATOR),
  scheduleControllers.createSchedule,
);
router.get("/all-schedules", scheduleControllers.getAllSchedules);
router.get("/:id", scheduleControllers.getScheduleById);
router.patch("/:id", auth(UserRole.ADMIN), scheduleControllers.updateSchedule);
router.delete("/:id", auth(UserRole.ADMIN), scheduleControllers.deleteSchedule);

export const scheduleRoutes = router;
