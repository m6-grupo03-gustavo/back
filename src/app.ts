import "express-async-errors";
import express from "express";
import cors from "cors";
import "dotenv/config";
import { handlerAppError } from "./errors/handleAppError";
import { CarRouter } from "./routes/car.routes";
import { loginRoutes } from "./routes/login.routes";
import { userRoutes } from "./routes/user.routes";
import { commentsRoutes } from "./routes/comments.routes";

export const app = express();

// "Ligação" do Front com o Back

app.use(express.json());
app.use(
  cors({
    origin: process.env.URL_FROM_FRONT,
  })
);
app.use("/login", loginRoutes);
app.use("/user", userRoutes);
app.use("/car", CarRouter);
app.use("/comments", commentsRoutes)
app.use(handlerAppError);
