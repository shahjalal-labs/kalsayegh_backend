import express from "express";
import { userRoutes } from "../modules/user/user.route";
import { authRoute } from "../modules/auth/auth.routes";
import { notificationRoutes } from "../modules/notification/notification.routes";
import { sessionRoutes } from "../modules/session/session.routes";
import { adminRoutes } from "../modules/admin/admin.routes";
import { scheduleRoutes } from "../modules/schedule/schedule.routes";
import { groupRoutes } from "../modules/group/group.routes";
import { messageRoutes } from "../modules/message/message.routes";
import { estimateRoutes } from "../modules/estimate/estimate.route";
import { todolistRoutes } from "../modules/todolist/todolist.routes";
import { jobRequestRoutes } from "../modules/jobRequest/jobRequest.routes";
import { invoiceRoutes } from "../modules/invoice/invoice.routes";
import { reportRoutes } from "../modules/report/report.routes";

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
  { path: "/estimate", route: estimateRoutes },
  { path: "/invoice", route: invoiceRoutes },
  { path: "/todolist", route: todolistRoutes },
  { path: "/job-request", route: jobRequestRoutes },
  { path: "/reports", route: reportRoutes },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
