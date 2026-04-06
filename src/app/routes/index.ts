import express from "express";
import { userRoutes } from "../modules/user/user.route";
import { authRoute } from "../modules/auth/auth.routes";
import { notificationRoutes } from "../modules/notification/notification.routes";
import { sessionRoutes } from "../modules/session/session.routes";
import { adminRoutes } from "../modules/admin/admin.routes";
import { scheduleRoutes } from "../modules/schedule/schedule.routes";
import { groupRoutes } from "../modules/group/group.routes";
import { messageRoutes } from "../modules/message/message.routes";

const router = express.Router();

const moduleRoutes = [
  { path: "/users", route: userRoutes },
  { path: "/auth", route: authRoute },
  { path: "/notify", route: notificationRoutes },
  { path: "/session", route: sessionRoutes },
  { path: "/admin", route: adminRoutes },
  { path: "/schedule", route: scheduleRoutes },
  { path: "/group", route: groupRoutes },
  { path: "/message", route: messageRoutes },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
