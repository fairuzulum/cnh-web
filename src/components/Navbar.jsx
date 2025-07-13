// src/components/Navbar.jsx

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo_cnh.png"; // Perhatikan path logonya, disesuaikan

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Logika smooth scroll dihilangkan dari sini agar Navbar bisa dipakai di semua halaman
  // Cukup gunakan <Link> dari React Router
  
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full bg-white/90 backdrop-blur-md shadow-lg z-50"
    >
      <div className="container mx-auto px-4 sm:px-6 py-4 w-full max-w-full">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <img src={logo} alt="CNH Logo" className="h-10 w-auto" />
          </Link>
          <nav className="hidden md:flex space-x-8">
            <Link
              to="/"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Beranda
            </Link>
            <Link
              to="/portfolio"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Portofolio
            </Link>
            <Link
              to="/sertifikasi"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Sertifikasi
            </Link>
          </nav>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-700">
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <nav className="md:hidden mt-4 flex flex-col space-y-4">
            <Link
              to="/"
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-600 transition-colors text-lg"
            >
              Beranda
            </Link>
            <Link
              to="/portfolio"
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-600 transition-colors text-lg"
            >
              Portofolio
            </Link>
            <Link
              to="/sertifikasi"
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-600 transition-colors text-lg"
            >
              Sertifikasi
            </Link>
          </nav>
        )}
      </div>
    </motion.header>
  );
}

export default Navbar;