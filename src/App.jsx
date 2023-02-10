/** @format */

import React, { useState } from "react";
import Container from "./components/Container";
import NewProjects from "./components/NewProjects";
import SideBar from "./components/SideBar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Container />
    </div>
  );
}

export default App;
