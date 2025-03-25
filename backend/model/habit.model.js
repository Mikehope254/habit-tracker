import mongoose from "mongoose";

const habitSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    frequency: {
      type: String,
      required: true,
      enum: ["Daily", "Weekly", "Monthly"],
    },
    time: {
      type: String,
      required: true,
      enum: ["Morning", "Afternoon", "Evening", "Night"],
    },
  },
  {
    timestamps: true,
  }
);

const Habit = mongoose.model("habit", habitSchema);

export default Habit;
