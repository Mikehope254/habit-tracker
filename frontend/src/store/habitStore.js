import { create } from "zustand";

const useHabitStore = create((set) => ({
  habits: [], //state variable initialized as an empty array to store ({name, frequency, time})
  setHabits: (newHabits) => set({ habits: newHabits }), //this function takes an array of habits as an argument and updates the habit state
  //it calls set({habits}) to overwrite the products state with the new list

  //POST request to /api/habits
  addHabit: async (habit) => {
    if (!habit.name || !habit.frequency || !habit.time) {
      return { success: false, message: "Please input all fiels" };
    }
    const res = await fetch("api/habits", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newHabit),
    });
    const data = await res.json(); //response from backend used to update the Zustand store with the added habit

    set((state) => ({ habits: [...state.habits, habit] }));
  },

  fetchHabits: async () => {
    const res = await fetch("/api/habits");
    const data = await res.json();
    set({ habits: data.data });
  },

  deleteHabit: (id) =>
    set((state) => ({
      habits: state.habits.filter((habit) => habit._id !== id),
    })),
  updateHabit: (id, updatedHabit) =>
    set((state) => ({
      habits: state.habits.map((habits) =>
        habit._id === id ? updatedHabit : habit
      ),
    })),
}));
