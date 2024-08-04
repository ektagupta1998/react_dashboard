import React from "react";
import {  BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Sidebar from "./Components/Sidebar";


function App() {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/sidebar" element={<Sidebar />} />
          
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
