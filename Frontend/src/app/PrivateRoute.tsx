import React, { useContext } from "react";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "./AuthContext";

const PrivateRoute = ({
  component: Component,
  ...rest
}: {
  component: React.ComponentType<any>;
  rest: any;
}) => {
  const location = useLocation();
  const authContext = useContext(AuthContext);

  // Check if authContext is not undefined
  if (!authContext) {
    // Handle the undefined case, maybe redirect to an error page or a login page
    return <Navigate to="/login" replace />;
  }

  const [authState] = authContext; // Now safely destructured

  return (
    <Routes>
      <Route
        {...rest}
        element={
          authState.isAuthenticated ? ( // Check if the user is authenticated
            <Component />
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />
    </Routes>
  );
};

export default PrivateRoute;
