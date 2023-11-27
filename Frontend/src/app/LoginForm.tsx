"use client";

// LoginForm.tsx

import React, { useState } from "react";

const LoginForm: React.FC<{ toggleLogin: () => void }> = ({ toggleLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();
      // Handle token and user authentication state
      toggleLogin(); // Close the modal after form submission
    } catch (error) {
      // Handle login error
    }
  };

  return (
    <div className="modal-background">
      <form onSubmit={handleLogin} className="modal-content">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
