import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
//import Lists from "./components/Lists";
//import Food from './components/Food';
import React from "react";

const App = () => {
  return (
    <div className={"app-container"}>
      {<Navbar />}
      <main>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          {/* <Route path="/food" element={<Food />} />
          <Route path="/lists" element={<Lists />} /> */}
        </Routes>
      </main>
    </div>
  );
};

export default App;
