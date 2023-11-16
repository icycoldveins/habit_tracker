"use client";
import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFire } from "@fortawesome/free-solid-svg-icons";
import Modal from "./modal";
import { Habit } from "./types";
const HabitList = () => {
  const [habits, setHabits] = useState([
    {
      id: 1,
      title: "Productive Work",
      goal: 7,
      progress: 0, // Change this line
      completed: false,
      color: "bg-blue-200",
    },
    {
      id: 2,
      title: "Read",
      goal: 30,
      progress: 3, // And this line
      completed: false,
      color: "bg-purple-200",
    },
    // Add more habits as needed
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentHabit, setCurrentHabit] = useState<Habit | null>(null);

  const openModal = (habit: Habit) => {
    setCurrentHabit(habit);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentHabit(null);
  };

  const [editingId, setEditingId] = useState<number | null>(null);
  const [editTitle, setEditTitle] = useState("");
  const [editGoal, setEditGoal] = useState("");
  const [editingHabit, setEditingHabit] = useState<Habit | null>(null);

  // Function to open the modal with the selected habit
  const handleEditClick = (habit: Habit) => {
    setEditingHabit(habit);
  };

  // Function to handle saving the edited habit
  const saveHabit = (updatedHabit: Habit) => {
    setHabits(habits.map((h) => (h.id === updatedHabit.id ? updatedHabit : h)));
    setEditingHabit(null); // Close the modal after saving
  };

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
  const handleGoalChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    id: number
  ) => {
    if (id === editingId) {
      setEditGoal(e.target.value);
    }
  };

  const handleBlur = (id: number) => {
    if (id === editingId) {
      setHabits(
        habits.map((habit) =>
          habit.id === id
            ? { ...habit, title: editTitle, goal: parseInt(editGoal) }
            : habit
        )
      );
      setEditingId(null);
    }
  };

  const handleHabitUpdate = (updatedHabit: Habit) => {
    setHabits(habits.map((h) => (h.id === updatedHabit.id ? updatedHabit : h)));
    closeModal();
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
            {editingId === habit.id ? (
              <div className="flex flex-col">
                <input
                  type="text"
                  value={editTitle}
                  onChange={(e) => handleTitleChange(e, habit.id)}
                  onBlur={() => handleBlur(habit.id)}
                  className="bg-gray-100 outline-none"
                  autoFocus
                />
                <input
                  type="text"
                  value={editGoal}
                  onChange={(e) => handleGoalChange(e, habit.id)}
                  onBlur={() => handleBlur(habit.id)}
                  className="bg-gray-100 outline-none mt-1"
                />
              </div>
            ) : (
              <div className="flex flex-col">
                <span>{habit.title}</span>
                <small>
                  {habit.goal} - {habit.progress}
                </small>
              </div>
            )}
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={habit.completed}
              onChange={() => toggleCompletion(habit.id)}
              className="mr-2" // Add right margin
            />
            {habit.progress > 1 && <FontAwesomeIcon icon={faFire} />}
            <span>{habit.progress}</span>
            <EditIcon
              className="text-lg ml-2 cursor-pointer"
              onClick={() => openModal(habit)}
            />
            <DeleteIcon
              className="text-lg ml-2 cursor-pointer"
              onClick={() => deleteHabit(habit.id)}
            />
            {isModalOpen && currentHabit && (
              <Modal
                habit={currentHabit}
                onClose={closeModal}
                onSave={handleHabitUpdate}
              />
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default HabitList;
