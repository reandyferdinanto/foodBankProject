import express from "express";

import router from "./routes/restaurantRoutes.js"; //routes for restaurant
import { connectDB } from "./database/database.js"; // connection for database

const port = 3000;
const app = express();

connectDB();

app.use("/", router);

app.listen(3000, () => {
  console.log(`Server started on port ${port}`);
});
