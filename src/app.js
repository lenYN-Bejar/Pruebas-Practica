import express from "express";
import { router } from "./routes/countries.routes.js";

export const app = express()
app.use(express.json())
app.use(router)
