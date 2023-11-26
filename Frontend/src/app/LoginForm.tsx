import React, { useState } from "react";
import axios from "axios";

interface LoginFormProps {
  onLoginSuccess: (token: string) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async () => {
    try {
      const response = await axios.post<{ token: string }>("/api/login", {
        username,
        password,
      });
      onLoginSuccess(response.data.token);
    } catch (error: any) {
      setError(error.response ? error.response.data.message : "Login failed");
    }
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
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
      <button type="submit" onClick={handleLogin}>
        Login
      </button>
      {error && <div>{error}</div>}
    </form>
  );
};

export default LoginForm;
