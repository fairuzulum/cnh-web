// src/components/Layout.jsx

import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 w-full overflow-x-hidden">
      <Navbar />
      <main>
        {/* Konten halaman (HomePage, Portfolio, etc.) akan dirender di sini */}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;