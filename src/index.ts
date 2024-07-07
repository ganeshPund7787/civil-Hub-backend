import express, { Request, Response } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import "dotenv/config";
import mongoose from "mongoose";
import civilRouter from "./routers/civilUser.routes";
import { errorMiddleware } from "./middleware/error.mddleware";

mongoose
  .connect(process.env.MONGO_URI as string, { dbName: "civilHub" })
  .then(() => console.log(`Database connected successfully`))
  .catch((err) => console.log(`Error while database connection : ${err}`));

const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(cors());

app.use("/api/civil-user", civilRouter);

app.use(errorMiddleware);
app.listen(process.env.PORT, () => {
  console.log(`Server is working on ${process.env.PORT}`);
});
