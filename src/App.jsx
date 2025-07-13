// src/App.jsx

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// Import komponen Layout dan Halaman
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import Portfolio from "./pages/PortoPage";
import Sertifikasi from "./pages/SertifikasiPage";

function App() {
  return (
    <Router>
      <Routes>
        {/* Gunakan Layout sebagai pembungkus untuk semua halaman */}
        <Route path="/" element={<Layout />}>
          {/* Halaman yang akan ditampilkan di dalam Layout */}
          <Route index element={<HomePage />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="sertifikasi" element={<Sertifikasi />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;