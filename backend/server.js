import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import habitRoutes from "./routes/habit.routes.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

//connect to MongoDB
connectDB();

//Middleware to parse JSON data in req.body (important for hanldling POST request)
app.use(express.json());

app.use("/api/habits", habitRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
