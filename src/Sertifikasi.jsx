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
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
import lp1 from "./assets/lp1.jpeg";
import lp2 from "./assets/lp2.jpeg";
import lp3 from "./assets/lp3.jpeg";
import lp4 from "./assets/lp4.jpeg";

function Sertifikasi() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImages, setSelectedImages] = useState([]);

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
                to="/sertifikasi"
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
        id="sertifikasi-hero"
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
            <h2 className="p-3 text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Sertifikasi & Hasil Uji
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Kami bangga telah memperoleh berbagai sertifikasi dan laporan hasil uji yang menegaskan komitmen kami terhadap kualitas dan keamanan produk CNH.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Certifications Section */}
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
                      +62 877-1449-0752
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
                      info@cnhairkesehatanmalabar.com
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

export default Sertifikasi;