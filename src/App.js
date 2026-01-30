import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Lines from "./pages/Lines";
import Shapes2D from "./pages/Shapes2D";
import Shapes3D from "./pages/Shapes3D";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lines" element={<Lines />} />
        <Route path="/shapes2d" element={<Shapes2D />} />
        <Route path="/shapes3d" element={<Shapes3D />} />
      </Routes>
    </Router>
  );
}

export default App;