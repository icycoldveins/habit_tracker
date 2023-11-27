// Navbar.tsx
"use client";
import React from "react";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignupForm"; // Import SignUpForm
import { useAuthModal } from "./AuthModalcontext"; // Ensure this is the correct path

const Navbar: React.FC = () => {
  const { isLoginVisible, toggleLogin, isSignUpVisible, toggleSignUp } =
    useAuthModal(); // Using the context hook

  return (
    <>
      <nav className="bg-gray-800 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* Mobile menu button */}
              <button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                {/* Icon for menu button */}
                <span className="sr-only">Open main menu</span>
                {/* Include mobile menu icon here */}
              </button>
            </div>
            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
              {/* Logo or brand */}
              <div className="flex-shrink-0 flex items-center">
                {/* Insert your logo or brand name here */}
                <span className="font-bold text-xl">LOGO</span>
              </div>
              <div className="hidden sm:block sm:ml-6">
                <div className="flex space-x-4">
                  {/* Navigation links */}
                  <a
                    href="/about"
                    className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700"
                  >
                    About
                  </a>
                  <a
                    href="/faq"
                    className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700"
                  >
                    FAQ
                  </a>
                  <a
                    href="/contact"
                    className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <button
                onClick={toggleLogin} // This will toggle the login modal visibility
                className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 cursor-pointer"
              >
                Login
              </button>
              <button
                onClick={toggleSignUp} // This will toggle the sign-up modal visibility
                className="ml-4 px-3 py-2 rounded-md text-sm font-medium bg-blue-600 hover:bg-blue-700 text-white cursor-pointer"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </nav>
      {isLoginVisible && <LoginForm />}
      {isSignUpVisible && <SignUpForm />} 
    </>
  );
};

export default Navbar;
