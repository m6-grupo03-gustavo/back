import "express-async-errors";
import express from "express";
import cors from "cors"
import "dotenv/config"

export const app = express()

app.use(express.json())
app.use(cors({
    origin: process.env.URL_FROM_FRONT
}))


app.get("/", (req, res) => (res.json("Hello back")))
