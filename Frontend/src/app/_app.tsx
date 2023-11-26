import React, { useState } from "react";

interface AuthState {
  isAuthenticated: boolean;
  user: null | object;
}

const AuthContext = React.createContext<
  [AuthState, React.Dispatch<React.SetStateAction<AuthState>>]
>([
  { isAuthenticated: false, user: null }, // initial AuthState
  () => {}, // initial dispatch function
]);

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [authState, setAuthState] = useState<AuthState>({ isAuthenticated: false, user: null });

  return (
    <AuthContext.Provider value={[authState, setAuthState]}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };