import express from "express";
import { restaurant1 } from "../controller/restaurantController.js";

const router = express.Router();

router.get("/restaurants", restaurant1);

export default router;
