import React, { useState } from "react";
import useHabitStore from "../store/habitStore";

export default function HabitForm() {
  const [form, setForm] = useState({ name: "", frequency: "", time: "" });
  const addHabit = useHabitStore((state) => state.addHabit);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addHabit(form);
    setForm({ name: "", frequency: "", time: "" });
  };

  return (
    <div>
      <p>Hello (HabitForm)</p>
      <form onSubmit={handleSubmit}>
        {/*inputs for name, frequency, time*/}
        <button type="submit">Add Habit</button>
      </form>
    </div>
  );
}
