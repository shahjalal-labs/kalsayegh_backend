import express from "express";
import { userRoutes } from "../modules/user/user.route";
import { authRoute } from "../modules/auth/auth.routes";
import { notificationRoutes } from "../modules/notification/notification.routes";
import { sessionRoutes } from "../modules/session/session.routes";

const router = express.Router();

const moduleRoutes = [
  { path: "/users", route: userRoutes },
  { path: "/auth", route: authRoute },
  { path: "/notify", route: notificationRoutes },
  { path: "/session", route: sessionRoutes },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
