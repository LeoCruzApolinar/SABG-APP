// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout/MainLayout.jsx";
import Home from "./pages/Home/Home.jsx";
import LogsReportAzul from "./products/sab-azul/views/LogsReportAzul/LogsReportAzul.jsx";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Rutas con Layout */}
        <Route element={<MainLayout />}>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/" element={<LogsReportAzul />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
