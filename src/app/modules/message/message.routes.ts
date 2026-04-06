import express from "express";
import { messageControllers } from "./message.controller";

const router = express.Router();

router.post("/create-many", messageControllers.createManyMessage);
router.get("/", messageControllers.getAllMessages);
router.get("/:id", messageControllers.getMessageById);
router.patch("/:id", messageControllers.updateMessage);
router.delete("/:id", messageControllers.deleteMessage);

export const messageRoutes = router;
