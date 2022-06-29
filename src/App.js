import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import Lists from "./components/Lists";
import Search from "./components/Search";
import React from "react";

const App = () => {
  return (
    <div className={"app-container"}>
      {<Navbar />}
      <main>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/lists" element={<Lists />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
