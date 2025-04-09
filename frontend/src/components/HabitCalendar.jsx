import React from "react";
import "../styles/HabitCalendar.css";

const sampleHabits = [
  { id: "1", name: "Exercise", completedDates: ["2023-04-01", "2023-04-03"] },
  { id: "2", name: "Read", completedDates: ["2023-04-02", "2023-04-04"] },
  { id: "3", name: "Meditate", completedDates: ["2023-04-03"] },
];

// Generate a list of dates for a week (or a month) — you can replace this with real dates.
const sampleDates = [
  "2023-04-01",
  "2023-04-02",
  "2023-04-03",
  "2023-04-04",
  "2023-04-05",
  "2023-04-06",
  "2023-04-07",
];
const getWeekDates = () => {
  const dates = [];
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  for (let i = 0; i < 7; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    dates.push(date.toISOString().split("T")[0]);
  }
  return dates;
};

const HabitCalendar = ({
  habits = sampleHabits,
  dates = sampleDates,
  onToggle,
}) => {
  // onToggle could be a function passed as a prop (or retrieved from a store)
  const handleToggle = (habitId, date) => {
    if (onToggle) {
      onToggle(habitId, date);
    }
  };

  return (
    <div className="calendar">
      {/* Header Row: Dates */}
      <div className="calendar-header">
        <div className="habit-label header-cell"></div>
        {/* Empty cell for habit names */}
        {dates.map((date) => (
          <div key={date} className="header-cell">
            {new Date(date).getDate()} {/* Display day number */}
          </div>
        ))}
      </div>

      {/* Body: One row per habit */}
      {habits.map((habit) => (
        <div key={habit.id} className="calendar-row">
          <div className="habit-label">{habit.name}</div>
          {dates.map((date) => (
            <div
              key={date}
              className="cell"
              onClick={() => handleToggle(habit.id, date)}
            >
              {(habit.completedDates || []).includes(date) ? "✔" : ""}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default HabitCalendar;
