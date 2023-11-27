// AuthModalContext.tsx
import React, { useState, createContext, useContext, ReactNode } from "react";

interface IAuthModalContext {
  isLoginVisible: boolean;
  toggleLogin: () => void;
}

const AuthModalContext = createContext<IAuthModalContext | null>(null);

export const useAuthModal = () => {
  const context = useContext(AuthModalContext);
  if (!context) {
    throw new Error("useAuthModal must be used within a AuthModalProvider");
  }
  return context;
};

interface AuthModalProviderProps {
  children: React.ReactNode;
}

export const AuthModalProvider: React.FC<AuthModalProviderProps> = ({
  children,
}) => {
  const [isLoginVisible, setIsLoginVisible] = useState(false);

  const toggleLogin = () => setIsLoginVisible(!isLoginVisible);

  return (
    <AuthModalContext.Provider value={{ isLoginVisible, toggleLogin }}>
      {children}
    </AuthModalContext.Provider>
  );
};
