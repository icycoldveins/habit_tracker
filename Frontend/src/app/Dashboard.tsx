"use client";

import React, { useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { IconButton } from "@mui/material";
import Brightness1Icon from "@mui/icons-material/Brightness1";
import Brightness2Icon from "@mui/icons-material/Brightness2";
const Dashboard = () => {
  const [summaryCards, setSummaryCards] = useState({
    totalHabits: 5,
    streaks: 3,
    completionRate: 70,
  });


  const [userProfile, setUserProfile] = useState({
    name: "User Name",
    // You can add additional profile related state here
  });
  const [name, setName] = useState("Name");
  const [showCompletedHabits, setShowCompletedHabits] = useState(false);
  return (
    <div className="dashboard p-4 bg-white">
      <AccountCircleIcon className="absolute top-0 right-0 m-4 text-3xl" />{" "}
      <h1 className="text-4xl text-center my-4">Good Morning, {name}</h1>{" "}
      <div className="summary-cards grid grid-cols-3 gap-4">
        <div className="p-4 bg-red-500 rounded shadow">
          Total Habits: {summaryCards.totalHabits}
        </div>
        <div className="p-4 bg-blue-500 rounded shadow">
          Streaks: {summaryCards.streaks}
        </div>
        <div className="p-4 bg-green-500 rounded shadow">
          Completion Rate: {summaryCards.completionRate}%
        </div>
      </div>
      <div className="recent-activity mt-4 bg-black-200">
      </div>
      <div className="quick-access mt-4">
        <button className="p-2 bg-blue-500 text-white rounded shadow">
          Add New Habit
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
