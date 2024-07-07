import express from "express";
import { Register } from "../controllers/civilUser.controller";

const router = express.Router();

router.post("/", Register);

export default router;
