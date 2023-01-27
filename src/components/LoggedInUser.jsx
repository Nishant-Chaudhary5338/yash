/** @format */

import React from "react";

const LoggedInUser = ({ image, title }) => {
  return (
    <div className="space-x-4 flex items-center pt-16 pb-4 pl-6">
      <span className="w-10 h-10 rounded-full items-center bg-gray-400">
        <img src={image} alt="" />
      </span>
      <span>{title}</span>
    </div>
  );
};

export default LoggedInUser;
