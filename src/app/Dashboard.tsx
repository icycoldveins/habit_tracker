"use client";

import React, { useState } from "react";

const Dashboard = () => {
  const [summaryCards, setSummaryCards] = useState({
    totalHabits: 5,
    streaks: 3,
    completionRate: 70,
  });

  const [recentActivity, setRecentActivity] = useState([
    { activity: "Jogging", date: " 2022-01-01" },
    // More activities...
  ]);

  return (
    <div className="dashboard p-4 bg-white">
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
        <h2 className="text-xl font-bold mb-2 text-black">
          Recent Activity
        </h2>
        {recentActivity.map((activity, index) => (
          <div key={index} className="p-2 bg-white rounded shadow mb-2">
            <span className="font-bold text-black">{activity.activity}</span>
            <span className="text-sm text-gray-500">{activity.date}</span>
          </div>
        ))}
      </div>
      <div className="quick-access mt-4">
        <button className="p-2 bg-blue-500 text-white rounded shadow">
          Add New Habit
        </button>
        <button className="p-2 bg-blue-500 text-white rounded shadow ml-2">
          View Detailed Reports
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
