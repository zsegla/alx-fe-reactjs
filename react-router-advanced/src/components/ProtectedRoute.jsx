// filepath: /Users/fikre/Downloads/Documents/Alx-Learn/Front-End/week 4/alx-fe-reactjs/react-router-advanced/src/components/ProtectedRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";

/**
 * Simple ProtectedRoute wrapper.
 * Replace the isAuthenticated check with your real auth logic (context, redux, etc.).
 */
export default function ProtectedRoute({ children }) {
  const isAuthenticated = localStorage.getItem("isAuth") === "true";

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
