import express, { Request, Response } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import civilRouter from "./routers/civilUserAuth.routes";
import civilUserRouter from "./routers/civilUser.routes";
import { errorMiddleware } from "./middleware/error.mddleware";
import { isAuthenticated } from "../src/middleware/Auth.middleware";
import "dotenv/config";
mongoose
  .connect(process.env.MONGO_URI as string, { dbName: "civilHub" })
  .then(() => console.log(`Database connected successfully`))
  .catch((err) => console.log(`Error while database connection : ${err}`));

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use("/api/auth", civilRouter);
app.use("/api/user", isAuthenticated, civilUserRouter);

app.use(errorMiddleware);
app.listen(process.env.PORT, () => {
  console.log(`Server is working on ${process.env.PORT}`);
});
