import express from "express";
import { sessionControllers } from "./session.controller";
import auth from "../../middlewares/auth";

const router = express.Router();

router.post("/clock-in", auth(), sessionControllers.clockIn);
router.post("/clock-out/:sessionId", auth(), sessionControllers.clockOut);
router.get("/my-sessions", auth(), sessionControllers.mySessions);
router.get("/", sessionControllers.getAllSessions);
router.get("/:id", sessionControllers.getSessionById);
router.patch("/:id", sessionControllers.updateSession);
router.delete("/:id", sessionControllers.deleteSession);

export const sessionRoutes = router;
