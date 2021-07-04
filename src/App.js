import React from "react";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import "./App.css";
import Simple from "./components/Simple";

const App = () => {
  return (
    <div className="container">
      <Navbar />
      <div className="container2">
        <Project />
      </div>
      <Simple />
    </div>
  );
};

export default App;
