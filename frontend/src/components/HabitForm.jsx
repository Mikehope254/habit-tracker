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
    <form onSubmit={handleSubmit}>
      <h2>Add a habit</h2>
      <input
        type="text"
        placeholder="Habit name"
        name="name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <input
        type="text"
        placeholder="Habit Frequency"
        name="frequency"
        value={form.frequency}
        onChange={(e) => setForm({ ...form, frequency: e.target.value })}
      />
      <input
        type="text"
        placeholder="Habit Time"
        name="time"
        value={form.time}
        onChange={(e) => setForm({ ...form, time: e.target.value })}
      />

      <button type="submit">Add Habit</button>
    </form>
  );
}
