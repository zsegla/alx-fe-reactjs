// filepath: /Users/fikre/Downloads/Documents/Alx-Learn/Front-End/week 4/alx-fe-reactjs/react-router-advanced/src/components/Profile.jsx
import React from "react";
import { NavLink, Outlet, Routes, Route } from "react-router-dom";
import ProfileDetails from "./ProfileDetails";
import ProfileSettings from "./ProfileSettings";

export default function Profile() {
  return (
    <div>
      <h1>Profile</h1>

      <nav>
        <NavLink
          to=""
          end
          style={({ isActive }) => ({
            marginRight: 12,
            fontWeight: isActive ? "bold" : "normal",
          })}
        >
          Details
        </NavLink>
        <NavLink
          to="settings"
          style={({ isActive }) => ({
            fontWeight: isActive ? "bold" : "normal",
          })}
        >
          Settings
        </NavLink>
      </nav>

      <section>
        {/* Local nested routes (works if parent route mounts this component at /profile) */}
        <Routes>
          <Route index element={<ProfileDetails />} />
          <Route path="settings" element={<ProfileSettings />} />
        </Routes>

        {/* Outlet kept for compatibility if nested routes are defined at a higher level */}
        <Outlet />
      </section>
    </div>
  );
}
