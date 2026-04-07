import express from "express";
import { sessionControllers } from "./session.controller";
import auth from "../../middlewares/auth";
import { UserRole } from "@prisma/client";

const router = express.Router();

router.post("/clock-in", auth(), sessionControllers.clockIn);
router.post("/clock-out/:sessionId", auth(), sessionControllers.clockOut);
router.get("/my-sessions", auth(), sessionControllers.mySessions);
router.get(
  "/my-sessions-grouped",
  auth(),
  sessionControllers.mySessionsByGrouping,
);
router.get(
  "/weekly-overview",
  auth(UserRole.WORKER),
  sessionControllers.weeklyOverview,
);
router.post(
  "/weekly-submit-timesheet",
  auth(UserRole.WORKER),
  sessionControllers.weeklySubmitTimesheet,
);
router.post("/add-notes", auth(UserRole.WORKER), sessionControllers.addNotes);
router.get("/", sessionControllers.getAllSessions);
router.get("/:id", sessionControllers.getSessionById);
router.patch("/:id", sessionControllers.updateSession);
router.delete("/:id", sessionControllers.deleteSession);

export const sessionRoutes = router;
