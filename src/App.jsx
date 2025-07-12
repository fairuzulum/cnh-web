import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Droplets,
  Award,
  Shield,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  Star,
  Menu,
  X,
  Instagram,
  Facebook,
  Youtube,
} from "lucide-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button } from "@/components/ui/button.jsx";
import "./App.css";
import Portfolio from "./Portfolio";

// Import images
import mineralWaterBottle from "./assets/mineral_water.png";
import waterSplash1 from "./assets/water_splash.png";
import waterSplash2 from "./assets/water_splash2.jpg";
import about from "./assets/about.jpeg";
import iso9001 from "./assets/iso_9001.png";
import bpomLogo from "./assets/bpom_logo.png";
import halalLogo from "./assets/halal_logo.png";
import lp1 from "./assets/lp1.jpeg";
import lp2 from "./assets/lp2.jpeg";
import lp3 from "./assets/lp3.jpeg";
import lp4 from "./assets/lp4.jpeg";
import logo from "./assets/logo_cnh.png";
import sertifBsn from "./assets/sertif-bsn.jpg";
import sertifBsn01 from "./assets/sertif-bsn02.jpg";
import sertifNib01 from "./assets/sertif-nib01.jpg";
import sertifNib02 from "./assets/sertif-nib02.jpg";
import sertifNib03 from "./assets/sertif-nib03.jpg";
import sertifHaki01 from "./assets/sertif-haki01.jpg";
import sertifHaki02 from "./assets/sertif-haki02.jpg";
import sertifHalal01 from "./assets/sertif-halal01.jpg";
import sertifHalal02 from "./assets/sertif-halal02.jpg";
import sertifHalal03 from "./assets/sertif-halal03.jpg";
import sertifHalal04 from "./assets/sertif-halal04.jpg";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImages, setSelectedImages] = useState([]);

  // Function to handle smooth scrolling
  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMenuOpen(false);
  };

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Open modal with selected images
  const openModal = (images) => {
    setSelectedImages(images);
    setIsModalOpen(true);
  };

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImages([]);
  };

  // Slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  // Certification data
  const certifications = [
    {
      title: "Sertifikat BSN",
      images: [sertifBsn, sertifBsn01],
      thumbnail: sertifBsn,
    },
    {
      title: "Sertifikat NIB",
      images: [sertifNib01, sertifNib02, sertifNib03],
      thumbnail: sertifNib01,
    },
    {
      title: "Sertifikat HAKI",
      images: [sertifHaki01, sertifHaki02],
      thumbnail: sertifHaki01,
    },
    {
      title: "Sertifikat HALAL BJPH",
      images: [sertifHalal01, sertifHalal02, sertifHalal03, sertifHalal04],
      thumbnail: sertifHalal01,
    },
  ];

  return (
    <Router>
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
                  onClick={(e) => handleNavClick(e, "#home")}
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
                <a
                  href="#new-certifications"
                  onClick={(e) => handleNavClick(e, "#new-certifications")}
                  className="text-gray-700 hover:text-blue-600 transition-colors"
                >
                  Sertifikasi
                </a>
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
                  onClick={(e) => handleNavClick(e, "#home")}
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
                <a
                  href="#new-certifications"
                  onClick={(e) => handleNavClick(e, "#new-certifications")}
                  className="text-gray-700 hover:text-blue-600 transition-colors text-lg"
                >
                  Sertifikasi
                </a>
              </nav>
            )}
          </div>
        </motion.header>

        <Routes>
          <Route
            path="/"
            element={
              <>
                {/* Hero Section */}
                <section
                  id="home"
                  className="pt-20 min-h-screen flex items-center relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-cyan-600/10"></div>
                  <div className="container mx-auto px-4 sm:px-6 w-full max-w-full grid lg:grid-cols-2 gap-8 items-center relative z-10">
                    <motion.div
                      initial={{ x: -50, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <motion.h2
                        className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
                        initial={{ y: 30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                      >
                        <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-800 bg-clip-text text-transparent">
                          Choose New
                        </span>
                        <br />
                        <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-800 bg-clip-text text-transparent">
                          Healthy Water
                        </span>
                      </motion.h2>

                      <motion.p
                        className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed"
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                      >
                        Air minum mineral premium dengan pH 9+ yang memberikan hidrasi
                        optimal untuk gaya hidup sehat Anda. Diproduksi dengan teknologi
                        terdepan dan standar kualitas internasional.
                      </motion.p>

                      <motion.div
                        className="flex flex-col sm:flex-row gap-4 mb-8"
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                      >
                        <a
                          href="https://wa.me/6287714490752"
                          className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-6 py-3 rounded-full text-base sm:text-lg font-semibold shadow-lg transition-all duration-300"
                        >
                          Hubungi Kami
                        </a>
                      </motion.div>

                      <motion.div
                        className="flex flex-wrap gap-4 sm:gap-6"
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                      >
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          <span className="text-gray-600 text-sm sm:text-base">
                            pH 9+ Alkaline
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Shield className="h-5 w-5 text-blue-500" />
                          <span className="text-gray-600 text-sm sm:text-base">
                            Tersertifikasi
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Award className="h-5 w-5 text-yellow-500" />
                          <span className="text-gray-600 text-sm sm:text-base">
                            Premium Quality
                          </span>
                        </div>
                      </motion.div>
                    </motion.div>

                    <motion.div
                      className="relative"
                      initial={{ x: 50, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <img
                        src={mineralWaterBottle}
                        alt="CNH Mineral Water"
                        className="w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto rounded-3xl shadow-2xl"
                      />
                    </motion.div>
                  </div>
                </section>

                {/* Tentang Kami Section */}
                <section id="tentang-kami" className="py-16 bg-gradient-to-br from-blue-50 to-cyan-50">
                  <div className="container mx-auto px-4 sm:px-6 w-full max-w-full">
                    <motion.div
                      className="text-center mb-12"
                      initial={{ y: 30, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <h3 className="p-3 text-3xl sm:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                        Tentang Kami
                      </h3>
                      <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                        Yayasan Pondok Pesantren Nurul Hidayah, asal mula CNH, berdedikasi untuk pendidikan Islam dan kesejahteraan masyarakat melalui air minum mineral berkualitas tinggi.
                      </p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                      <motion.div
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                      >
                        <img
                          src={about}
                          alt="Water Splash"
                          className="w-full rounded-3xl shadow-2xl"
                        />
                      </motion.div>

                      <motion.div
                        initial={{ x: 50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                      >
                        <p className="text-gray-600 text-sm sm:text-base mb-4">
                          Didirikan pada November 2008, Yayasan Pondok Pesantren Nurul Hidayah di Ciamis, Jawa Barat, bermula dari visi mendirikan lembaga pendidikan Islam. Berlokasi di ketinggian 800 meter di atas permukaan laut, pesantren ini mengelola tiga lembaga pendidikan formal: MI, MTs SA, dan MA Plus, di atas lahan wakaf seluas 2 hektar.
                        </p>
                        <p className="text-gray-600 text-sm sm:text-base mb-4">
                          Pada 2011, krisis air saat musim kemarau mendorong penggalian Sumur Artesis sedalam 140 meter. Dengan izin dan dukungan dana dari BSM serta sumbangan santri, sumur ini menghasilkan air berkualitas tinggi dengan pH 8.5, bersifat basa/alkaline. Laboratorium memastikan air ini rendah zat besi, mendekati kualitas air zam-zam, dan bermanfaat untuk kesehatan, seperti menonaktifkan sel kanker dan mendukung pencernaan.
                        </p>
                        <p className="text-gray-600 text-sm sm:text-base">
                          CNH lahir dari keistimewaan sumber air ini, berkomitmen menyediakan air minum mineral premium untuk mendukung gaya hidup sehat dan kesejahteraan masyarakat.
                        </p>
                      </motion.div>
                    </div>
                  </div>
                </section>

                {/* About Section */}
                <section id="about" className="py-16 bg-white">
                  <div className="container mx-auto px-4 sm:px-6 w-full max-w-full">
                    <motion.div
                      className="text-center mb-12"
                      initial={{ y: 30, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <h3 className="p-3 text-3xl sm:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                        Mengapa Memilih CNH?
                      </h3>
                      <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                        CNH (Choose New Healthy Water) adalah air minum mineral premium
                        yang diproduksi dengan teknologi canggih untuk memberikan hidrasi
                        terbaik bagi tubuh Anda.
                      </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <motion.div
                        className="text-center p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 shadow-md transition-all duration-300"
                        initial={{ y: 30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Droplets className="h-6 w-6 text-white" />
                        </div>
                        <h4 className="text-xl font-bold mb-4 text-gray-800">
                          pH 9+ Alkaline
                        </h4>
                        <p className="text-gray-600 text-sm sm:text-base">
                          Air dengan pH 9+ yang membantu menyeimbangkan asam dalam tubuh
                          dan meningkatkan hidrasi optimal.
                        </p>
                      </motion.div>

                      <motion.div
                        className="text-center p-6 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 shadow-md transition-all duration-300"
                        initial={{ y: 30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                      >
                        <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Shield className="h-6 w-6 text-white" />
                        </div>
                        <h4 className="text-xl font-bold mb-4 text-gray-800">
                          Kualitas Terjamin
                        </h4>
                        <p className="text-gray-600 text-sm sm:text-base">
                          Diproduksi dengan standar internasional dan telah tersertifikasi
                          oleh berbagai lembaga kualitas terpercaya.
                        </p>
                      </motion.div>

                      <motion.div
                        className="text-center p-6 rounded-2xl bg-gradient-to-br from-yellow-50 to-orange-50 shadow-md transition-all duration-300"
                        initial={{ y: 30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        viewport={{ once: true }}
                      >
                        <div className="w-14 h-14 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Award className="h-6 w-6 text-white" />
                        </div>
                        <h4 className="text-xl font-bold mb-4 text-gray-800">
                          Premium Quality
                        </h4>
                        <p className="text-gray-600 text-sm sm:text-base">
                          Menggunakan teknologi filtrasi terdepan untuk menghasilkan air
                          mineral berkualitas premium dengan rasa yang segar.
                        </p>
                      </motion.div>
                    </div>
                  </div>
                </section>

                {/* Products Section */}
                <section
                  id="products"
                  className="py-16 bg-gradient-to-br from-blue-50 to-cyan-50"
                >
                  <div className="container mx-auto px-4 sm:px-6 w-full max-w-full">
                    <motion.div
                      className="text-center mb-12"
                      initial={{ y: 30, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <h3 className="p-2 text-3xl sm:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                        Produk Unggulan Kami
                      </h3>
                      <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                        CNH hadir dalam berbagai ukuran untuk memenuhi kebutuhan hidrasi
                        Anda di berbagai aktivitas sehari-hari.
                      </p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                      <motion.div
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                      >
                        <img
                          src={waterSplash1}
                          alt="CNH Water Splash"
                          className="w-full rounded-3xl shadow-2xl"
                        />
                      </motion.div>

                      <motion.div
                        initial={{ x: 50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                      >
                        <h4 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-800">
                          Keunggulan pH 9+ Alkaline
                        </h4>
                        <div className="space-y-4">
                          <div className="flex items-start space-x-4">
                            <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                            <div>
                              <h5 className="font-semibold text-gray-800 text-sm sm:text-base">
                                Menyeimbangkan pH Tubuh
                              </h5>
                              <p className="text-gray-600 text-sm sm:text-base">
                                Membantu menetralkan asam berlebih dalam tubuh
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start space-x-4">
                            <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                            <div>
                              <h5 className="font-semibold text-gray-800 text-sm sm:text-base">
                                Hidrasi Optimal
                              </h5>
                              <p className="text-gray-600 text-sm sm:text-base">
                                Molekul air yang lebih kecil untuk penyerapan lebih baik
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start space-x-4">
                            <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                            <div>
                              <h5 className="font-semibold text-gray-800 text-sm sm:text-base">
                                Antioksidan Alami
                              </h5>
                              <p className="text-gray-600 text-sm sm:text-base">
                                Membantu melawan radikal bebas dalam tubuh
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start space-x-4">
                            <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                            <div>
                              <h5 className="font-semibold text-gray-800 text-sm sm:text-base">
                                Meningkatkan Energi
                              </h5>
                              <p className="text-gray-600 text-sm sm:text-base">
                                Membantu meningkatkan metabolisme dan energi tubuh
                              </p>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </section>

                {/* Certifications Section */}
                <section id="certifications" className="py-16 bg-white">
                  <div className="container mx-auto px-4 sm:px-6 w-full max-w-full">
                    <motion.div
                      className="text-center mb-12"
                      initial={{ y: 30, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <h3 className="text-3xl sm:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                        Sertifikasi & Jaminan Kualitas
                      </h3>
                      <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                        CNH telah tersertifikasi oleh berbagai lembaga internasional dan
                        nasional yang menjamin kualitas dan keamanan produk kami.
                      </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                      <motion.div
                        className="text-center p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 shadow-md transition-all duration-300"
                        initial={{ y: 30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                      >
                        <img
                          src={iso9001}
                          alt="ISO 9001"
                          className="w-20 h-20 mx-auto mb-4 object-contain"
                        />
                        <h4 className="text-lg sm:text-xl font-bold mb-4 text-gray-800">
                          ISO 9001:2015
                        </h4>
                        <p className="text-gray-600 text-sm sm:text-base">
                          Sertifikasi sistem manajemen kualitas internasional yang
                          menjamin konsistensi kualitas produk.
                        </p>
                      </motion.div>

                      <motion.div
                        className="text-center p-6 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 shadow-md transition-all duration-300"
                        initial={{ y: 30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                      >
                        <img
                          src={bpomLogo}
                          alt="BPOM"
                          className="w-20 h-20 mx-auto mb-4 object-contain"
                        />
                        <h4 className="text-lg sm:text-xl font-bold mb-4 text-gray-800">
                          BPOM RI
                        </h4>
                        <p className="text-gray-600 text-sm sm:text-base">
                          Terdaftar dan diawasi oleh Badan Pengawas Obat dan Makanan
                          Republik Indonesia.
                        </p>
                      </motion.div>

                      <motion.div
                        className="text-center p-6 rounded-2xl bg-gradient-to-br from-emerald-50 to-green-50 shadow-md transition-all duration-300"
                        initial={{ y: 30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        viewport={{ once: true }}
                      >
                        <img
                          src={halalLogo}
                          alt="Halal"
                          className="w-20 h-20 mx-auto mb-4 object-contain"
                        />
                        <h4 className="text-lg sm:text-xl font-bold mb-4 text-gray-800">
                          Halal MUI
                        </h4>
                        <p className="text-gray-600 text-sm sm:text-base">
                          Bersertifikat halal dari Majelis Ulama Indonesia, aman
                          dikonsumsi oleh seluruh masyarakat.
                        </p>
                      </motion.div>
                    </div>

                    <motion.div
                      className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-6 text-white text-center"
                      initial={{ y: 30, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <h4 className="text-xl sm:text-2xl font-bold mb-4">
                        Komitmen Kualitas Kami
                      </h4>
                      <p className="text-base sm:text-lg mb-6">
                        Setiap tetes air CNH melalui proses kontrol kualitas yang ketat
                        untuk memastikan Anda mendapatkan air mineral terbaik dengan pH 9+
                        yang konsisten.
                      </p>
                      <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
                        <div className="text-center">
                          <div className="text-2xl sm:text-3xl font-bold">99.9%</div>
                          <div className="text-xs sm:text-sm opacity-90">Kemurnian</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl sm:text-3xl font-bold">pH 9+</div>
                          <div className="text-xs sm:text-sm opacity-90">Alkaline</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl sm:text-3xl font-bold">100%</div>
                          <div className="text-xs sm:text-sm opacity-90">Halal</div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </section>

                {/* New Certifications Section */}
                <section
                  id="new-certifications"
                  className="py-16 bg-gradient-to-br from-blue-50 to-cyan-50"
                >
                  <div className="container mx-auto px-4 sm:px-6 w-full max-w-full">
                    <motion.div
                      className="text-center mb-12"
                      initial={{ y: 30, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <h3 className="text-3xl sm:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                        Sertifikasi
                      </h3>
                      <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                        Kami bangga telah memperoleh berbagai sertifikasi yang menegaskan komitmen kami terhadap kualitas dan keamanan produk.
                      </p>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                      {certifications.map((cert, index) => (
                        <motion.div
                          key={cert.title}
                          className="relative rounded-2xl overflow-hidden shadow-md transition-all duration-300 cursor-pointer"
                          initial={{ y: 30, opacity: 0 }}
                          whileInView={{ y: 0, opacity: 1 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          onClick={() => openModal(cert.images)}
                        >
                          <img
                            src={cert.thumbnail}
                            alt={cert.title}
                            className="w-full h-48 object-cover"
                          />
                          <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-blue-600/80 to-transparent flex items-end justify-center pb-4">
                            <h4 className="text-white text-lg font-bold text-center">
                              {cert.title}
                            </h4>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </section>

                {/* Modal for Certificate Images */}
                {isModalOpen && (
                  <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
                    <div className="bg-white rounded-2xl p-6 max-w-3xl w-full mx-4 relative">
                      <button
                        onClick={closeModal}
                        className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
                      >
                        <X className="h-6 w-6" />
                      </button>
                      <Slider {...sliderSettings}>
                        {selectedImages.map((image, index) => (
                          <div key={index}>
                            <img
                              src={image}
                              alt={`Certificate ${index + 1}`}
                              className="w-full h-auto max-h-[70vh] object-contain mx-auto"
                            />
                          </div>
                        ))}
                      </Slider>
                    </div>
                  </div>
                )}

                {/* Test and Research Results Section */}
                <section
                  id="test-results"
                  className="py-16 bg-gradient-to-br from-blue-50 to-cyan-50"
                >
                  <center>
                    <h3 className="p-2 text-3xl sm:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                      Laporan Hasil Uji dan Penelitian
                    </h3>
                    <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-12">
                      CNH telah melalui berbagai uji laboratorium dan penelitian untuk
                      memastikan kualitas dan keamanan produk kami. Berikut adalah
                      beberapa hasil uji dan penelitian yang telah dilakukan:
                    </p>
                  </center>
                  <div className="container mx-auto px-4 sm:px-6 w-full max-w-full">
                    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                      <motion.div
                        className="relative rounded-2xl overflow-hidden shadow-md transition-all duration-300"
                        initial={{ y: 30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                      >
                        <a href={lp1} target="_blank" rel="noopener noreferrer">
                          <img
                            src={lp1}
                            alt=""
                            className="w-full h-full object-cover cursor-pointer"
                          />
                          <div className="absolute inset-0 bg-gradient-to-br from-blue-200/20 to-cyan-200/20 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                        </a>
                      </motion.div>

                      <motion.div
                        className="relative rounded-2xl overflow-hidden shadow-md transition-all duration-300"
                        initial={{ y: 30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                      >
                        <a href={lp2} target="_blank" rel="noopener noreferrer">
                          <img
                            src={lp2}
                            alt=""
                            className="w-full h-full object-cover cursor-pointer"
                          />
                          <div className="absolute inset-0 bg-gradient-to-br from-green-200/20 to-emerald-200/20 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                        </a>
                      </motion.div>

                      <motion.div
                        className="relative rounded-2xl overflow-hidden shadow-md transition-all duration-300"
                        initial={{ y: 30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        viewport={{ once: true }}
                      >
                        <a href={lp3} target="_blank" rel="noopener noreferrer">
                          <img
                            src={lp3}
                            alt=""
                            className="w-full h-full object-cover cursor-pointer"
                          />
                          <div className="absolute inset-0 bg-gradient-to-br from-yellow-200/20 to-orange-200/20 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                        </a>
                      </motion.div>

                      <motion.div
                        className="relative rounded-2xl overflow-hidden shadow-md transition-all duration-300"
                        initial={{ y: 30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        viewport={{ once: true }}
                      >
                        <a href={lp4} target="_blank" rel="noopener noreferrer">
                          <img
                            src={lp4}
                            alt=""
                            className="w-full h-full object-cover cursor-pointer"
                          />
                          <div className="absolute inset-0 bg-gradient-to-br from-purple-200/20 to-pink-200/20 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                        </a>
                      </motion.div>
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
              </>
            }
          />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;