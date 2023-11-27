"use client";

// LoginForm.tsx

import { useAuthModal } from './AuthModalcontext'; // Adjust the path as necessary


import React, { useState } from "react";

const LoginForm: React.FC = () => {
  const { isLoginVisible, toggleLogin } = useAuthModal();

  if (!isLoginVisible) return null;
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
    <>
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
    </>
  );
};

export default LoginForm;
