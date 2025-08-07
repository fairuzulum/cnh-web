// src/Portfolio.jsx

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// --- ASET GAMBAR ---
// Ganti path ini jika diperlukan
import porto01 from "../assets/porto-01.jpg";
import porto02 from "../assets/porto-02.jpg";
import porto03 from "../assets/porto-03.jpg";
import porto04 from "../assets/porto-04.jpg"; // Perhatikan ekstensi file jika berbeda
import porto05 from "../assets/porto-05.jpeg"; // Perhatikan ekstensi file jika berbeda
import porto06 from "../assets/porto-06.jpg";


function PortoPage() {
  const [activeFilter, setActiveFilter] = useState("Semua");

  const portfolioItems = [
    {
      id: "porto-01",
      title: "Pengakuan atas Keunggulan Bisnis",
      description:
        "Meraih penghargaan bergengsi sebagai bukti nyata komitmen kami terhadap kualitas produk dan inovasi model bisnis yang berkelanjutan.",
      image: porto01,
      category: "Penghargaan & Prestasi",
    },
    {
      id: "porto-02",
      title: "Terpilih sebagai 10 Terbaik OPOP Jawa Barat",
      description:
        "Sebuah kehormatan diakui dalam program One Pesantren One Product (OPOP), mempertegas akar kami dalam ekonomi berbasis komunitas.",
      image: porto02,
      category: "Penghargaan & Prestasi",
    },
    {
      id: "porto-03",
      title: "Memperkuat Jaringan Ekonomi Syariah",
      description:
        "Menjalin silaturahmi dengan para ahli ekonomi Islam se-Jawa Barat dalam Rapat Akbar Komisariat IAEI demi membangun ekosistem yang solid.",
      image: porto03,
      category: "Kolaborasi & Jaringan",
    },
    {
      id: "porto-04",
      title: "Mitra Hidrasi Resmi Acara Hebitren",
      description:
        "Dipercaya untuk menyediakan hidrasi berkualitas dalam acara penting Himpunan Ekonomi Bisnis Pesantren (Hebitren) se-Priangan Timur.",
      image: porto04,
      category: "Dukungan Komunitas",
    },
    {
      id: "porto-05",
      title: "Hadir di Pameran Produk Unggulan",
      description:
        "Memperkenalkan keunggulan CNH kepada publik yang lebih luas dalam sebuah pameran produk, bersanding dengan pelaku usaha inspiratif lainnya.",
      image: porto05,
      category: "Partisipasi Pameran",
    },
    {
      id: "porto-06",
      title: "Kolaborasi Strategis dengan UMKM Lokal",
      description:
        "Menggandeng pelaku UMKM dalam rangka memperluas distribusi produk sekaligus mendorong pertumbuhan ekonomi kerakyatan.",
      image: porto06,
      category: "Kolaborasi & Jaringan",
    },
    
  ];

  const categories = [
    "Semua",
    ...new Set(portfolioItems.map((item) => item.category)),
  ];

  const filteredItems =
    activeFilter === "Semua"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

  return (
    // Kita tidak butuh div pembungkus utama lagi karena sudah ada di Layout.jsx
    // Cukup gunakan React Fragment <>
    <>
      {/* Hero Section */}
      <section
        id="portfolio-hero"
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
              Jejak Langkah & Prestasi Kami
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Lihat bagaimana komitmen kami terhadap kualitas dan komunitas
              diwujudkan melalui berbagai pencapaian dan kolaborasi.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Items Section */}
      <section id="portfolio-items" className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 w-full max-w-7xl">
          {/* Tombol Filter Kategori (Hidden on Mobile) */}
          <div className="hidden md:flex justify-center flex-wrap gap-3 mb-12">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeFilter === category
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>

          {/* Grid Portofolio dengan Animasi */}
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer group"
                >
                  <div className="overflow-hidden h-56">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full mb-3">
                      {item.category}
                    </span>
                    <h4 className="text-xl font-bold text-gray-800 mb-2">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default PortoPage;