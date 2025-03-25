import mongoose from "mongoose";

const habitSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      mandatory: true,
      trim: true,
    },
    frequency: {
      type: String,
      mandatory: true,
      enum: ["Daily", "Weekly", "Monthly"],
    },
    time: {
      type: String,
      mandatory: true,
      enum: ["Morning", "Afternoon", "Evening", "Night"],
    },
  },
  {
    timestamps: true,
  }
);

const Habit = mongoose.model("habit", habitSchema);

export default Habit;
