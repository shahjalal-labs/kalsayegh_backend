import express, { Application, NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import cors from "cors";
import router from "./app/routes";
import GlobalErrorHandler from "./app/middlewares/globalErrorHandler";
import path from "path";
import prisma from "./shared/prisma";
import { logger } from "./shared/logger";
// import { bullBoardRouter } from "./bullBoard";
// import basicAuth from "express-basic-auth";

const app: Application = express();

// Middleware setup
(async () => {
  try {
    await prisma.$connect();
    console.log("✅ Database connected successfully!");
  } catch (error) {
    console.error("Failed to connect to services:", error);
    process.exit(1);
  }
})();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static(path.join(__dirname, "..", "uploads")));

//logger
app.use((req, _res, next) => {
  logger.info(`Received ${req.method} request to ${req.url} from ${req.ip}`);

  if (req.body && Object.keys(req.body).length) {
    logger.info("Request body: %s", req.body);
  }

  next();
});

// Route handler for root endpoint
app.get("/", (_req: Request, res: Response) => {
  res.send({
    Message: "Welcome to api main route",
  });
});
app.get("/api/v1", (_req: Request, res: Response) => {
  res.send({
    Message: "Welcome to api version 1",
  });
});

// Router setup
app.use("/api/v1", router);
// app.use(
//   "/admin/queues",
//   basicAuth({
//     users: { admin: process.env.BULLBOARD_PASSWORD || "supersecret" },
//     challenge: true,
//   }),
//   bullBoardRouter
// );

// Global Error Handler
app.use(GlobalErrorHandler);

// API Not found handler
app.use((req: Request, res: Response, _next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: "API NOT FOUND!",
    error: {
      path: req.originalUrl,
      message: "Your requested path is not found!",
    },
  });
});

export default app;
