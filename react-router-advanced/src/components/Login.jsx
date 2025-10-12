// filepath: /Users/fikre/Downloads/Documents/Alx-Learn/Front-End/week 4/alx-fe-reactjs/react-router-advanced/src/components/Login.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  function handleLogin() {
    localStorage.setItem("isAuth", "true");
    navigate("/profile", { replace: true });
  }

  return (
    <div>
      <h1>Login</h1>
      <button onClick={handleLogin}>Sign in (mock)</button>
    </div>
  );
}
