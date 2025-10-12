// filepath: /Users/fikre/Downloads/Documents/Alx-Learn/Front-End/week 4/alx-fe-reactjs/react-router-advanced/src/components/Profile.jsx
import React from "react";
import { Outlet, NavLink } from "react-router-dom";

export default function Profile() {
  return (
    <div>
      <h1>Profile</h1>
      <nav>
        <NavLink to="" end style={({ isActive }) => ({ marginRight: 12, fontWeight: isActive ? "bold" : "normal" })}>
          Details
        </NavLink>
        <NavLink to="settings" style={({ isActive }) => ({ fontWeight: isActive ? "bold" : "normal" })}>
          Settings
        </NavLink>
      </nav>

      <section>
        <Outlet />
      </section>
    </div>
  );
}
