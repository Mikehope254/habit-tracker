import Habit from "../model/habit.model";
import mongoose from "mongoose";

export const getHabit = async (req, res) => {
  try {
    const habits = await Habit.find({}); //results from Habit.find are stored in variable 'Habits'
    res.status(200).json({ success: true, data: habits });
  } catch (error) {
    console.log("Error in fetching your habits", error.message);
    res
      .status(500)
      .json({ success: false, message: "Server Error", error: error.message });
  }
};

export const createhabit = async (req, res) => {
  //Get habit from the request
  const habit = req.body; //user input to create habit-- Variable to hold user input

  //simulation missing fields error
  if (!habit.name || !habit.frequency) {
    return res.status(400).json({
      success: false,
      message: "Please input All Fields",
      error: error.message,
    });
  }

  const newHabit = new Habit(habit); //Create new Habit instance

  try {
    await newHabit.save(); //Save to MongoDB
    res.status(201).json({ success: true, data: newHabit });
  } catch (error) {
    console.log("Error in Creating Habit", error.message);
    res
      .status(500)
      .json({ success: false, message: "Server Error", error: error.message });
  }
};

export const updateHabit = async (req, res) => {
  //Object destructuring used instead of const id = req.params.id
  const { id } = req.params; //Extract habit ID from URL
  const habit = req.body; //user input to update ID

  //simulation of wrong/invalid MongoDB object
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(404)
      .json({ success: false, message: "Invalid Habit Id" });
  }

  try {
    //Update in MongoDB
    const updatedHabit = await Habit.findByIdAndUpdate(id, habit, {
      new: true,
    });
    res
      .status(200)
      .json({ success: true, message: "Habit Updated", data: updatedHabit });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Server Error", error: error.message });
  }
};

export const deleteHabit = async (req, res) => {
  const { id } = req.params; //Extract habit ID from URL

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(404)
      .json({ success: false, message: "Invalid Habit Id" });
  }

  try {
    const deletedHabit = await Habit.findByIdAndDelete(id);

    //if habit doesn't exist
    if (!deletedHabit) {
      res.status(404).json({ success: false, message: "Habit Not Found" });
    }

    res
      .status(200)
      .json({ success: true, message: "Habit deleted", data: deletedHabit });

    if (!deletedHabit)
      res.status(404).json({ success: false, message: "Habit Not Found" });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Server Error", error: error.message });
  }
};
