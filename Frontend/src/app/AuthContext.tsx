import React, { createContext, useState, useContext } from 'react';

interface AuthState {
  isAuthenticated: boolean;
  user: any; // Replace with your User type
}

const AuthContext = createContext<[AuthState, React.Dispatch<React.SetStateAction<AuthState>>] | undefined>(undefined);

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [authState, setAuthState] = useState<AuthState>({ isAuthenticated: false, user: null });

  return (
    <AuthContext.Provider value={[authState, setAuthState]}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
