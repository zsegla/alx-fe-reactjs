import React from 'react';

const UserProfile = (props) => {
  return (
    <div>
      <h2>User Profile</h2>
      <p>Username: {props.username}</p>
      <p>Email: {props.email}</p>
      <p>Age: {props.age}</p>
    </div>
  );
};

export default UserProfile;