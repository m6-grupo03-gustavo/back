import "express-async-errors";
import express from "express";
import cors from "cors"
import "dotenv/config"
import { handlerAppError } from "./errors/HandleAppError";

export const app = express()

// "Ligação" do Front com o Back

app.use(express.json())
app.use(cors({
    origin: process.env.URL_FROM_FRONT
}))

// Rotas aqui:

app.get("/", (req, res) => (res.json("Hello back")))


app.use(handlerAppError)
