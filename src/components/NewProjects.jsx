/** @format */

import React, { useState } from "react";
import Button from "./Button";
import BasicSelect from "./BasicSelect";
import SearchInput from "./SearchInput";
import Projects from "./Projects";

const MyProjects = () => {
  const [search, setSearch] = useState("");
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div className="grow px-16 pt-28">
      <h3 className="text-2xl font-bold">My Projects</h3>
      <div className="flex justify-between">
        <div className="space-x-3 mt-2">
          <span>Free plan</span>
          <span>|</span>
          <span>2 out of 3 projects used</span>
          <span>
            <a className="text-indigo-400" href="#">
              Upgrade
            </a>
          </span>
        </div>
        <div>
          <Button />
        </div>
      </div>
      <div className="flex mt-8 items-center justify-between">
        <div>
          <SearchInput
            value={search}
            onChange={handleChange}
            placeholder="search projects..."
          />
        </div>
        <div>
          <BasicSelect />
        </div>
      </div>
      <div className=" mt-10">
        <Projects
          title="Remarkable Template"
          lastEdited="Edited 3 hours ago"
          created="Created on 25 January, 2023"
        />
        <Projects
          title="Onboarding Process Video"
          lastEdited="Edited 2 days ago"
          created="Created on 23 January, 2023"
        />
        <Projects
          title="Interactive User Process"
          lastEdited="Edited 30 days ago"
          created="Created on 27 December, 2022"
        />
      </div>
    </div>
  );
};

export default MyProjects;
