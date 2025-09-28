import React from "react";

const UserProfile = () => {
  return (
    <div className="mx-auto sm:p-4 md:p-8 max-w-xs md:max-w-sm bg-white rounded-lg shadow-md flex flex-col items-center transition-shadow duration-300 ease-in-out hover:shadow-xl">
      <img
        src="https://randomuser.me/api/portraits/men/75.jpg"
        alt="User Profile"
        className="rounded-full sm:w-24 sm:h-24 md:w-36 md:h-36 object-cover mb-4 transition-transform duration-300 ease-in-out hover:scale-110"
      />
      <h2 className="font-bold text-lg md:text-xl mb-2 text-gray-800 transition-colors duration-300 ease-in-out hover:text-blue-500">
        John Doe
      </h2>
      <p className="text-sm md:text-base text-gray-600 text-center">
        Front-End Developer passionate about building responsive and accessible
        web applications.
      </p>
    </div>
  );
};

export default UserProfile;
