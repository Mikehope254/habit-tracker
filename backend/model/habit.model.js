import mongoose from "mongoose";

const habitSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      mandatory: true,
    },
    frequency: {
      type: String,
      mandatory: true,
    },
  },
  {
    timestamps: true,
  }
);

const Habit = mongoose.model("habit", habitSchema);

export default Habit;
