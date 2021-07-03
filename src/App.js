import React from "react";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import "./App.css";

const App = () => {
  return (
    <div className="container">
      <Navbar />
      <div className="container2">
        <Project />
      </div>
    </div>
  );
};

export default App;
