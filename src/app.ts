import "express-async-errors";
import express from "express";
import cors from "cors"
import "dotenv/config"
import { handlerAppError } from "./errors/handleAppError";
import { CarRouter } from "./routes/car.routes";

export const app = express()

// "Ligação" do Front com o Back

app.use(express.json())
app.use(cors({
    origin: process.env.URL_FROM_FRONT
}))

app.use("/car", CarRouter)


app.use(handlerAppError)
