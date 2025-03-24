import express from "express";
import {
  getHabit,
  createhabit,
  updateHabit,
  deleteHabit,
} from "../controllers/habit.controllers.js";

const router = express.Router();

router.get("/", getHabit);
router.post("/", createhabit);
router.put("/:id", updateHabit);
router.delete("/:id", deleteHabit);

export default router;
