"use client";
import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
const deleteHabit = (habitId: number) => {
  // Logic to delete the habit with the given habitId
};
const toggleCompletion = (habitId: number) => {
  // Logic to toggle the completion status of the habit with the given habitId
};

const HabitList = () => {
  const [habits, setHabits] = useState([
    {
      id: 1,
      title: "Productive Work",
      goal: "1h",
      progress: "0/4",
      completed: false,
      color: "bg-blue-200",
      icon: "💼",
    },
    {
      id: 2,
      title: "Read",
      goal: "30m",
      progress: "1/4",
      completed: false,
      color: "bg-purple-200",
      icon: "📚",
    },
    // Add more habits as needed
  ]);

  return (
    <div className="habit-list">
      {habits.map((habit) => (
        <div
          key={habit.id}
          className="flex items-center p-2 bg-gray-100 rounded-lg mb-2 shadow"
        >
          <div className={`w-4 h-full ${habit.color}`} />
          <div className="flex-grow flex items-center px-2">
            <span className="text-lg mr-2">{habit.icon}</span>
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
