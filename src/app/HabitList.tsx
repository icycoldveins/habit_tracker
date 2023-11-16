"use client";
import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const HabitList = () => {
  const [habits, setHabits] = useState([
    {
      id: 1,
      title: "Productive Work",
      goal: "1h",
      progress: "0/4",
      completed: false,
      color: "bg-blue-200",
    },
    {
      id: 2,
      title: "Read",
      goal: "30m",

      progress: "1/4",
      completed: false,
      color: "bg-purple-200",
    },
    // Add more habits as needed
  ]);

  const [editingId, setEditingId] = useState<number | null>(null);
  const [editTitle, setEditTitle] = useState("");

  const deleteHabit = (habitId: number) => {
    // Logic to delete the habit with the given habitId
  };
  const toggleCompletion = (habitId: number) => {
    // Logic to toggle the completion status of the habit with the given habitId
  };
  const handleTitleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    id: number
  ) => {
    // Rest of the function code
  };
  const handleBlur = (id: number) => {
    if (id === editingId) {
      setHabits(
        habits.map((habit) =>
          habit.id === id ? { ...habit, title: editTitle } : habit
        )
      );
      setEditingId(null);
    }
  };

  return (
    <div className="habit-list">
      {habits.map((habit) => (
        <div
          key={habit.id}
          className="flex items-center p-2 bg-gray-100 rounded-lg mb-2 shadow"
        >
          <div className={`w-4 h-full ${habit.color}`} />
          <div className="flex-grow flex items-center px-2">
            <div className="flex flex-col">
              <span>{habit.title}</span>
              <small>
                {habit.goal} - {habit.progress}
              </small>
            </div>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={habit.completed}
              onChange={() => toggleCompletion(habit.id)}
            />
            {/* Place the EditIcon next to the checkbox */}
            <EditIcon
              className="text-lg ml-2 cursor-pointer"
              onClick={() => {
                setEditingId(habit.id);
                setEditTitle(habit.title);
              }} // Handle edit click
            />
            <DeleteIcon
              className="text-lg ml-2 cursor-pointer"
              onClick={() => deleteHabit(habit.id)}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default HabitList;
