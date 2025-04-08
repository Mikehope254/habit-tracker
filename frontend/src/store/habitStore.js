import { create } from "zustand";

const useHabitStore = create((set) => ({
  habits: [], //State: array of habit objects {name, frequency, time}

  setHabits: (newHabits) => set({ habits: newHabits }), //this function takes an array of habits as an argument and updates the habit state
  //it calls set({habits}) to overwrite the products state with the new list

  //POST request to /api/habits
  addHabit: async (habit) => {
    if (!habit.name || !habit.frequency || !habit.time) {
      return { success: false, message: "Please input all fields" };
    }
    try {
      const res = await fetch("api/habits", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(habit),
      });

      const data = await res.json(); //response from backend used to update the Zustand store with the added habit
      set((state) => ({ habits: [...state.habits, data.data] }));

      return { success: true, messgae: "Habit added successfully" };
    } catch (error) {
      console.error("Failed to fetch habits:", error);
      return { success: false, message: "Failed to add habit" };
    }
  },

  fetchHabits: async () => {
    try {
      const res = await fetch("/api/habits");
      const data = await res.json();
      set({ habits: data.data });
    } catch (error) {
      console.error("Fetch habits failed", error);
    }
  },

  deleteHabit: (id) =>
    set((state) => ({
      habits: state.habits.filter((habit) => habit._id !== id),
    })),

  updateHabit: (id, updatedHabit) =>
    set((state) => ({
      habits: state.habits.map((habit) =>
        habit._id === id ? updatedHabit : habit
      ),
    })),
}));

export default useHabitStore;
