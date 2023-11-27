// AuthModalContext.tsx
import React, { useState, createContext, useContext } from "react";

interface IAuthModalContext {
  isLoginVisible: boolean;
  toggleLogin: () => void;
  isSignUpVisible: boolean; // Add this state for the sign-up modal visibility
  toggleSignUp: () => void; // Add this method to toggle the sign-up modal
}

// Initialize the context with null and assert the correct type.
const AuthModalContext = createContext<IAuthModalContext>(null!);

export const useAuthModal = () => {
  const context = useContext(AuthModalContext);
  if (!context) {
    throw new Error("useAuthModal must be used within an AuthModalProvider");
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
  const [isSignUpVisible, setIsSignUpVisible] = useState(false); // State for the sign-up modal

  const toggleLogin = () => setIsLoginVisible(!isLoginVisible);
  const toggleSignUp = () => setIsSignUpVisible(!isSignUpVisible); // Method to toggle the sign-up modal

  // Provide both the login and sign-up states and toggles to the context
  return (
    <AuthModalContext.Provider
      value={{ isLoginVisible, toggleLogin, isSignUpVisible, toggleSignUp }}
    >
      {children}
    </AuthModalContext.Provider>
  );
};
