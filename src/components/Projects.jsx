/** @format */

import React from "react";

const Projects = ({ title, lastEdited, created }) => {
  return (
    <div className="hover:border-gray-200 hover:border my-2">
      <div className="flex items-center space-x-4 py-6 px-2">
        <div className="w-12 h-12 rounded-md bg-gray-200"></div>
        <div>
          <h4 className="text-sm font-semibold">{title}</h4>
          <div className="flex text-xs space-x-4">
            <p>{lastEdited}</p>
            <p>{created}</p>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Projects;
