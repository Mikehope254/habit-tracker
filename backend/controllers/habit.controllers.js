import Habit from "../model/habit.model";
import mongoose from "mongoose";

export const getHabit = async (req, res) => {
  try {
    const habits = await Habit.find({}); //results from Habit.find are stored in variable 'Habits'
    res.status(200).json({ success: true, data: habits });
  } catch (error) {
    console.log("Error in fetching your habits", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

export const createhabit = async (req, res) => {
  const habit = req.body; //user input to create habit-- Variable to hold user input

  if (!habit.name || !habit.frequency) {
    return res
      .status(400)
      .json({ success: false, message: "Please input All Fields" });
  }

  const newHabit = new Habit(habit); //Create new Habit instance
  await newHabit.save(); //save to MongoDB

  try {
  } catch (error) {}
};
