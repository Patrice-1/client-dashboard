// src/App.jsx
import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Barbershops from "./components/Barbershops";
import Services from "./components/Services";
import Appointments from "./components/Appointments";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/barbershops" element={<Barbershops />} />
        <Route path="/services" element={<Services />} />
        <Route path="/appointments" element={<Appointments />} />
        <Route
          path="/appointments/confirmation"
          element={<div>Appointment Confirmed!</div>}
        />
        <Route
          path="/appointments/:specialistName"
          element={<Appointments />}
        />
      </Routes>
    </Router>
  );
};

export default App;
