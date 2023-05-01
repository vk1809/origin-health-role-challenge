import React, { useState } from "react";
import "../src/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Dashboard from "./components/Dashboard/Dashboard";
import Admin from "./components/Admin/Admin";

const App = () => {
  const [filterOptions, setFilterOptions] = useState([]);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/dashboard"
          element={<Dashboard filterOptions={filterOptions} />}
        />
        <Route
          path="/admin"
          element={
            <Admin
              filterOptions={filterOptions}
              setFilterOptions={setFilterOptions}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
