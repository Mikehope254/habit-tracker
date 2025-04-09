import React, { useEffect } from "react";
import HabitForm from "./components/HabitForm";
import HabitCalendar from "./components/HabitCalendar";
import useHabitStore from "./store/habitStore";

export default function App() {
  const habits = useHabitStore((state) => state.habits);
  const fetchHabits = useHabitStore((state) => state.fetchHabits);
  const toggleHabitDate = useHabitStore((state) => state.toggleHabitDate);

  useEffect(() => {
    fetchHabits();
  }, []);

  const today = new Date();
  const dates = Array.from({ length: 7 }, (_, i) => {
    const d = new Date(today);
    d.setDate(d.getDate() + i);
    return d.toISOString().split("T")[0]; // returns 'YYYY-MM-DD'
  });

  return (
    <div className="App">
      App
      <HabitForm />
      <h1>Habit Calendar</h1>
      <HabitCalendar habits={habits} dates={dates} onToggle={toggleHabitDate} />
    </div>
  );
}
