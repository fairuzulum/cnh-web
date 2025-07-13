// src/pages/HomePage.jsx

import React from "react";
import { motion } from "framer-motion";
import { Award, Shield, CheckCircle, Droplets } from "lucide-react";

// Import images yang dibutuhkan oleh halaman ini
import mineralWaterBottle from "../assets/banner04.JPG";
import waterSplash1 from "../assets/produk.jpg";
import about from "../assets/about.jpeg";
import iso9001 from "../assets/iso_9001.png";
import bpomLogo from "../assets/bpom_logo.png";
import halalLogo from "../assets/halal_logo.png";

function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section
        id="home"
        className="pt-20 min-h-screen flex items-center relative overflow-hidden"
      >
        {/* ... (Salin semua JSX dari Hero Section di sini) ... */}

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
      <section
        id="tentang-kami"
        className="py-16 bg-gradient-to-br from-blue-50 to-cyan-50"
      >
        {/* ... (Salin semua JSX dari Tentang Kami Section di sini) ... */}
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
              Yayasan Pondok Pesantren Nurul Hidayah, asal mula CNH, berdedikasi
              untuk pendidikan Islam dan kesejahteraan masyarakat melalui air
              minum mineral berkualitas tinggi.
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
                Didirikan pada November 2008, Yayasan Pondok Pesantren Nurul
                Hidayah di Ciamis, Jawa Barat, bermula dari visi mendirikan
                lembaga pendidikan Islam. Berlokasi di ketinggian 800 meter di
                atas permukaan laut, pesantren ini mengelola tiga lembaga
                pendidikan formal: MI, MTs SA, dan MA Plus, di atas lahan wakaf
                seluas 2 hektar.
              </p>
              <p className="text-gray-600 text-sm sm:text-base mb-4">
                Pada 2011, krisis air saat musim kemarau mendorong penggalian
                Sumur Artesis sedalam 140 meter. Dengan izin dan dukungan dana
                dari BSM serta sumbangan santri, sumur ini menghasilkan air
                berkualitas tinggi dengan pH 9, bersifat basa/alkaline.
                Laboratorium memastikan air ini rendah zat besi, mendekati
                kualitas air zam-zam, dan bermanfaat untuk kesehatan, seperti
                menonaktifkan sel kanker dan mendukung pencernaan.
              </p>
              <p className="text-gray-600 text-sm sm:text-base">
                CNH lahir dari keistimewaan sumber air ini, berkomitmen
                menyediakan air minum mineral premium untuk mendukung gaya hidup
                sehat dan kesejahteraan masyarakat.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="about" className="py-16 bg-white">
        {/* ... (Salin semua JSX dari "Mengapa Memilih CNH?" Section di sini) ... */}
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
        {/* ... (Salin semua JSX dari Products Section di sini) ... */}
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
        {/* ... (Salin semua JSX dari Certifications Section di sini) ... */}
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
    </>
  );
}

export default HomePage;
