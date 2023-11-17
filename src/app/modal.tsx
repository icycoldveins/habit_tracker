import React, { useState } from "react";
import { Habit } from "./types";

interface ModalProps {
  habit: Habit;
  onClose: () => void;
  onSave: (habit: Habit) => void;
}

const Modal: React.FC<ModalProps> = ({ habit, onClose, onSave }) => {
  const [editedHabit, setEditedHabit] = useState(habit);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "goal") {
      if (value === "") {
        setEditedHabit({ ...editedHabit, [name]: 0 }); // set to 0 or null
      } else {
        const parsedValue = parseInt(value);
        if (isNaN(parsedValue)) {
          alert("Please enter a valid number for the goal.");
          return;
        }
        setEditedHabit({ ...editedHabit, [name]: parsedValue });
      }
    } else {
      setEditedHabit({ ...editedHabit, [name]: value });
    }
  };

  const handleSave = () => {
    onSave(editedHabit);
  };

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <input name="title" value={editedHabit.title} onChange={handleChange} />
        <input name="goal" value={editedHabit.goal} onChange={handleChange} />
        {/* Add more fields as needed */}
        <button style={{ marginRight: "10px" }} onClick={handleSave}>
          Save
        </button>
        <button onClick={onClose}>Close</button>
      </div>
      <style jsx>{`
        .modal-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }
        .modal {
          background: white;
          padding: 20px;
          border-radius: 5px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
        }
      `}</style>
    </div>
  );
};

export default Modal;
