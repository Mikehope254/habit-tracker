import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Server is running ...");
});

app.listen(PORT, () => {
  connectDB;
  console.log(`Server is running on port ${PORT}`);
});
