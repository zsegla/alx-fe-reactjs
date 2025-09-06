import React, { useContext } from "react";
import UserContext from "./UserContext";

const UserProfile = () => {
  const user = useContext(UserContext);
  return (
    <div>
      <h2>User Profile</h2>
      <p>Username: {user.name}</p>
      <p>Email: {user.email}</p>
      {user.age && <p>Age: {user.age}</p>}
      {user.bio && <p>Bio: {user.bio}</p>}
    </div>
  );
};

export default UserProfile;
