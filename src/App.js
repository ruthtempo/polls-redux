import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";

export default function App() {
  return (
    <div className="container">
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </div>
  );
}
