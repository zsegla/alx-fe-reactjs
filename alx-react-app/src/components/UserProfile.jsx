import React from 'react';

const UserProfile = (props) => {
    return (
        <div>
            <h2>User Profile</h2>
            <p>Username: {props.name}</p>
            <p>Email: {props.email}</p>
            <p>Age: {props.age}</p>
            <p>Bio: {props.bio}</p>
        </div>
    );
};

export default UserProfile;