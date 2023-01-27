/** @format */

import React from "react";
import LoggedInUser from "./LoggedInUser";
import MenuHeading from "./MenuHeading";
import ResourcesSubMenu from "./ResourcesSubMenu";
import SubMenu from "./SubMenu";

const SideBar = () => {
  return (
    <div className="w-64 h-screen bg-gray-100">
      <LoggedInUser image="G" title="Gopal Sharma" />
      <hr className="border mb-10 border-gray-400" />
      <MenuHeading title="Projects" />
      <SubMenu title="My Projects" />
      <MenuHeading title="Campaigns" />
      <SubMenu title="My Campaigns" />
      <SubMenu title="Campaigns Reports" />
      <MenuHeading title="Resources" />
      <ResourcesSubMenu title="Product Demo Video" />
      <ResourcesSubMenu title="Knowledge Based" />
      <ResourcesSubMenu title="Support" />
    </div>
  );
};

export default SideBar;
