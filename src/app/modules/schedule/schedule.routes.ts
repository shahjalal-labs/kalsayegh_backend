import express from "express";
import { scheduleControllers } from "./schedule.controller";
import auth from "../../middlewares/auth";

const router = express.Router();

router.post("/create", auth(), scheduleControllers.createSchedule);
router.get("/all-schedules", scheduleControllers.getAllSchedules);
router.get("/:id", scheduleControllers.getScheduleById);
router.patch("/:id", scheduleControllers.updateSchedule);
router.delete("/:id", scheduleControllers.deleteSchedule);

export const scheduleRoutes = router;
