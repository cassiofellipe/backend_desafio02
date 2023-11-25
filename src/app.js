import express, { json } from "express";
import cors from "cors";
import bcrypt from "bcrypt";
import { routes } from "./routes/index.js";

const app = express();

app.use(cors());
app.use(json());

routes(app);

export {
    app
};