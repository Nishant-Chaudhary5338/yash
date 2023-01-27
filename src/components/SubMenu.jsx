/** @format */

import React from "react";

const SubMenu = ({ image, title }) => {
  return (
    <div className="space-x-4 flex items-center pl-6 p-2">
      <span className="w-8 h-8 items-center rounded-sm bg-gray-400">
        <img src={image} alt="" />
      </span>
      <span>{title}</span>
    </div>
  );
};

export default SubMenu;
