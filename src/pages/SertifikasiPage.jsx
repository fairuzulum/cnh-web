// src/Sertifikasi.jsx

import React, { useState } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react"; // Kita hanya butuh ikon X untuk tombol close modal
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Aset gambar untuk halaman ini
import sertifBsn from "../assets/sertif-bsn.jpg";
import sertifBsn01 from "../assets/sertif-bsn02.jpg";
import sertifNib01 from "../assets/sertif-nib01.jpg";
import sertifNib02 from "../assets/sertif-nib02.jpg";
import sertifNib03 from "../assets/sertif-nib03.jpg";
import sertifHaki01 from "../assets/sertif-haki01.jpg";
import sertifHaki02 from "../assets/sertif-haki02.jpg";
import sertifHalal01 from "../assets/sertif-halal01.jpg";
import sertifHalal02 from "../assets/sertif-halal02.jpg";
import sertifHalal03 from "../assets/sertif-halal03.jpg";
import sertifHalal04 from "../assets/sertif-halal04.jpg";
import lp1 from "../assets/lp1.jpeg";
import lp2 from "../assets/lp2.jpeg";
import lp3 from "../assets/lp3.jpeg";
import lp4 from "../assets/lp4.jpeg";

function SertifikasiPage() {
  // State untuk modal tetap di sini karena spesifik untuk halaman ini
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImages, setSelectedImages] = useState([]);

  // Fungsi untuk modal juga tetap di sini
  const openModal = (images) => {
    setSelectedImages(images);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImages([]);
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

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
    // Gunakan React Fragment karena pembungkus utama sudah ada di Layout.jsx
    <>
      {/* Hero Section */}
      <section
        id="sertifikasi-hero"
        className="pt-32 pb-16 min-h-[40vh] flex items-center relative overflow-hidden"
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
        className="py-16 bg-white"
      >
        <div className="container mx-auto px-4 sm:px-6 w-full max-w-7xl">
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
                className="relative rounded-2xl overflow-hidden shadow-md transition-all duration-300 cursor-pointer group"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => openModal(cert.images)}
              >
                <img
                  src={cert.thumbnail}
                  alt={cert.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end justify-center pb-4">
                  <h4 className="text-white text-lg font-bold text-center p-2">
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
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-[999]">
          <div className="bg-white rounded-2xl p-4 sm:p-6 max-w-3xl w-full mx-4 relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 sm:top-4 sm:right-4 text-gray-600 hover:text-gray-900 z-10 bg-white/70 rounded-full p-1"
            >
              <X className="h-6 w-6" />
            </button>
            <Slider {...sliderSettings}>
              {selectedImages.map((image, index) => (
                <div key={index}>
                  <img
                    src={image}
                    alt={`Certificate ${index + 1}`}
                    className="w-full h-auto max-h-[80vh] object-contain mx-auto"
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
        <div className="container mx-auto px-4 sm:px-6 w-full max-w-7xl">
            <motion.div
                className="text-center mb-12"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
            >
                <h3 className="text-3xl sm:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Laporan Hasil Uji dan Penelitian
                </h3>
                <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                CNH telah melalui berbagai uji laboratorium dan penelitian untuk
                memastikan kualitas dan keamanan produk kami.
                </p>
            </motion.div>
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <motion.div
                className="relative rounded-2xl overflow-hidden shadow-md transition-all duration-300 group"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                >
                <a href={lp1} target="_blank" rel="noopener noreferrer">
                    <img
                    src={lp1}
                    alt="Laporan Penelitian 1"
                    className="w-full h-full object-cover cursor-pointer group-hover:scale-110 transition-transform duration-500"
                    />
                </a>
                </motion.div>
                <motion.div
                className="relative rounded-2xl overflow-hidden shadow-md transition-all duration-300 group"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                >
                <a href={lp2} target="_blank" rel="noopener noreferrer">
                    <img
                    src={lp2}
                    alt="Laporan Penelitian 2"
                    className="w-full h-full object-cover cursor-pointer group-hover:scale-110 transition-transform duration-500"
                    />
                </a>
                </motion.div>
                <motion.div
                className="relative rounded-2xl overflow-hidden shadow-md transition-all duration-300 group"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                >
                <a href={lp3} target="_blank" rel="noopener noreferrer">
                    <img
                    src={lp3}
                    alt="Laporan Penelitian 3"
                    className="w-full h-full object-cover cursor-pointer group-hover:scale-110 transition-transform duration-500"
                    />
                </a>
                </motion.div>
                <motion.div
                className="relative rounded-2xl overflow-hidden shadow-md transition-all duration-300 group"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                >
                <a href={lp4} target="_blank" rel="noopener noreferrer">
                    <img
                    src={lp4}
                    alt="Laporan Penelitian 4"
                    className="w-full h-full object-cover cursor-pointer group-hover:scale-110 transition-transform duration-500"
                    />
                </a>
                </motion.div>
            </div>
        </div>
      </section>
    </>
  );
}

export default SertifikasiPage;