import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Droplets,
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  Instagram,
  Facebook,
  Youtube,
} from "lucide-react";
import logo from "./assets/logo_cnh.png";
import mineralWaterBottle from "./assets/mineral_water.png";
import waterSplash1 from "./assets/water_splash.png";
import waterSplash2 from "./assets/water_splash2.jpg";
import about from "./assets/about.jpeg";

function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Portfolio items
  const portfolioItems = [
    {
      title: "CNH Mineral Water 330ml",
      description: "Botol praktis untuk hidrasi sehari-hari, ideal untuk aktivitas di luar ruangan.",
      image: mineralWaterBottle,
    },
    {
      title: "CNH Mineral Water 600ml",
      description: "Ukuran sedang untuk kebutuhan hidrasi lebih lama, cocok untuk olahraga.",
      image: waterSplash1,
    },
    {
      title: "CNH Mineral Water 1500ml",
      description: "Botol keluarga untuk konsumsi bersama di rumah atau acara.",
      image: waterSplash2,
    },
    {
      title: "Program Kesejahteraan Masyarakat",
      description: "Inisiatif CNH untuk mendukung pendidikan dan kesehatan masyarakat lokal.",
      image: about,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 w-full overflow-x-hidden">
      {/* Header */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 w-full bg-white/90 backdrop-blur-md shadow-lg z-50"
      >
        <div className="container mx-auto px-4 sm:px-6 py-4 w-full max-w-full">
          <div className="flex items-center justify-between">
            <motion.div className="flex items-center space-x-3">
              <img src={logo} alt="CNH Logo" className="h-10 w-auto" />
            </motion.div>
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
                to="/#new-certifications"
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
                className="text-gray-700 hover:text-blue-600 transition-colors text-lg"
              >
                Beranda
              </Link>
              <Link
                to="/portfolio"
                className="text-gray-700 hover:text-blue-600 transition-colors text-lg"
              >
                Portofolio
              </Link>
              <Link
                to="/#new-certifications"
                className="text-gray-700 hover:text-blue-600 transition-colors text-lg"
              >
                Sertifikasi
              </Link>
            </nav>
          )}
        </div>
      </motion.header>

      {/* Hero Section */}
      <section
        id="portfolio-hero"
        className="pt-20 min-h-[50vh] flex items-center relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-cyan-600/10"></div>
        <div className="container mx-auto px-4 sm:px-6 w-full max-w-full text-center relative z-10">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Portofolio Kami
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Temukan berbagai produk dan inisiatif CNH yang mencerminkan komitmen kami terhadap kualitas dan kesejahteraan masyarakat.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section id="portfolio-items" className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 w-full max-w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {portfolioItems.map((item, index) => (
              <motion.div
                key={item.title}
                className="relative rounded-2xl overflow-hidden shadow-md transition-all duration-300 cursor-pointer"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50">
                  <h4 className="text-lg font-bold text-gray-800 mb-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 sm:px-6 w-full max-w-full">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <Droplets className="h-8 w-8 text-blue-400" />
                <h1 className="text-xl sm:text-2xl font-bold">CNH</h1>
              </div>
              <p className="text-gray-400 mb-4 text-sm sm:text-base">
                Choose New Healthy Water - Air minum mineral premium dengan pH
                9+ untuk hidrasi optimal dan gaya hidup sehat.
              </p>
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-pink-600 rounded-full flex items-center justify-center transition-colors cursor-pointer">
                  <Instagram className="h-4 w-4" />
                </div>
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center transition-colors cursor-pointer">
                  <Facebook className="h-4 w-4" />
                </div>
                <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center transition-colors cursor-pointer">
                  <Youtube className="h-4 w-4" />
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-base sm:text-lg font-bold mb-6">Kontak & Alamat</h4>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-7 h-7 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="h-3 w-3 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg sm:text-xl font-bold text-gray-400 mb-2">
                      Telepon
                    </h4>
                    <p className="text-gray-400 text-sm sm:text-base">
                      +62 813 1838 1219
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-7 h-7 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="h-3 w-3 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg sm:text-xl font-bold text-gray-400 mb-2">
                      Email
                    </h4>
                    <p className="text-gray-400 text-sm sm:text-base">
                      info@cnh-water.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-7 h-7 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-3 w-3 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg sm:text-xl font-bold text-gray-400 mb-2">
                      Alamat
                    </h4>
                    <p className="text-gray-400 text-sm sm:text-base">
                      Dusun Malabar, 
                      <br />
                      Desa/Kelurahan Sidamulih, Kec. Pamarican
                      <br />
                      Kab. Ciamis Prov. Jawa Barat
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-base sm:text-lg font-bold mb-6">Dukungan</h4>
              <ul className="space-y-3 text-gray-400 text-sm sm:text-base">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Kontak
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Kebijakan Privasi
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Syarat & Ketentuan
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm sm:text-base">
            <p>© 2024 CNH - Choose New Healthy Water. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Portfolio;