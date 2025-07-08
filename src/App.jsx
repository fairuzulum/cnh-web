import React from 'react'
import { motion } from 'framer-motion'
import { Droplets, Award, Shield, CheckCircle, Phone, Mail, MapPin, Star } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'
import './App.css'

// Import images
import mineralWaterBottle from './assets/mineral_water.png'
import waterSplash1 from './assets/water_splash.png'
import waterSplash2 from './assets/water_splash2.jpg'
import iso9001 from './assets/iso_9001.png'
import bpomLogo from './assets/bpom_logo.png'
import halalLogo from './assets/halal_logo.png'
import sertif1 from './assets/sertif1.jpeg'
import sertif2 from './assets/sertif2.jpeg'
import sertif3 from './assets/sertif3.jpeg'
import sertif4 from './assets/sertif4.jpeg'

function App() {
  // Function to handle smooth scrolling
  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      {/* Header */}
      <motion.header 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="fixed top-0 w-full bg-white/90 backdrop-blur-md shadow-lg z-50"
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div 
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
            >
              <Droplets className="h-8 w-8 text-blue-600" />
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                CNH
              </h1>
            </motion.div>
            <nav className="hidden md:flex space-x-8">
              <a 
                href="#home" 
                onClick={(e) => handleNavClick(e, '#home')}
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Beranda
              </a>
              <a 
                href="#about" 
                onClick={(e) => handleNavClick(e, '#about')}
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Tentang
              </a>
              <a 
                href="#products" 
                onClick={(e) => handleNavClick(e, '#products')}
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Produk
              </a>
              <a 
                href="#certifications" 
                onClick={(e) => handleNavClick(e, '#certifications')}
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Sertifikasi
              </a>
              <a 
                href="#contact" 
                onClick={(e) => handleNavClick(e, '#contact')}
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Kontak
              </a>
            </nav>
          </div>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section id="home" className="pt-20 min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-cyan-600/10"></div>
        <motion.div 
          className="absolute top-20 right-10 w-64 h-64 bg-blue-200/30 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        ></motion.div>
        <motion.div 
          className="absolute bottom-20 left-10 w-48 h-48 bg-cyan-200/30 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0]
          }}
          transition={{ 
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        ></motion.div>
        
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <motion.h2 
              className="text-5xl lg:text-7xl font-bold mb-6"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
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
              className="text-xl text-gray-600 mb-8 leading-relaxed"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Air minum mineral premium dengan pH 9+ yang memberikan hidrasi optimal 
              untuk gaya hidup sehat Anda. Diproduksi dengan teknologi terdepan dan 
              standar kualitas internasional.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 mb-8"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                Pelajari Lebih Lanjut
              </Button>
              <Button variant="outline" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300">
                Hubungi Kami
              </Button>
            </motion.div>
            
            <motion.div 
              className="flex items-center space-x-6"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-gray-600">pH 9+ Alkaline</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-blue-500" />
                <span className="text-gray-600">Tersertifikasi</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="h-5 w-5 text-yellow-500" />
                <span className="text-gray-600">Premium Quality</span>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="relative"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <motion.div
              className="relative z-10"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img 
                src={mineralWaterBottle} 
                alt="CNH Mineral Water" 
                className="w-full max-w-md mx-auto rounded-3xl shadow-2xl"
              />
            </motion.div>
            <motion.div 
              className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full opacity-20"
              animate={{ 
                scale: [1, 1.3, 1],
                rotate: [0, 360]
              }}
              transition={{ 
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            ></motion.div>
            <motion.div 
              className="absolute -bottom-10 -left-10 w-24 h-24 bg-gradient-to-br from-cyan-400 to-blue-400 rounded-full opacity-20"
              animate={{ 
                scale: [1.3, 1, 1.3],
                rotate: [360, 0]
              }}
              transition={{ 
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            ></motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Mengapa Memilih CNH?
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              CNH (Choose New Healthy Water) adalah air minum mineral premium yang diproduksi 
              dengan teknologi canggih untuk memberikan hidrasi terbaik bagi tubuh Anda.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              className="text-center p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 hover:shadow-xl transition-all duration-300"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Droplets className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-2xl font-bold mb-4 text-gray-800">pH 9+ Alkaline</h4>
              <p className="text-gray-600">
                Air dengan pH 9+ yang membantu menyeimbangkan asam dalam tubuh 
                dan meningkatkan hidrasi optimal.
              </p>
            </motion.div>
            
            <motion.div 
              className="text-center p-8 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 hover:shadow-xl transition-all duration-300"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-2xl font-bold mb-4 text-gray-800">Kualitas Terjamin</h4>
              <p className="text-gray-600">
                Diproduksi dengan standar internasional dan telah tersertifikasi 
                oleh berbagai lembaga kualitas terpercaya.
              </p>
            </motion.div>
            
            <motion.div 
              className="text-center p-8 rounded-2xl bg-gradient-to-br from-yellow-50 to-orange-50 hover:shadow-xl transition-all duration-300"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-2xl font-bold mb-4 text-gray-800">Premium Quality</h4>
              <p className="text-gray-600">
                Menggunakan teknologi filtrasi terdepan untuk menghasilkan 
                air mineral berkualitas premium dengan rasa yang segar.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Produk Unggulan Kami
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              CNH hadir dalam berbagai ukuran untuk memenuhi kebutuhan hidrasi Anda 
              di berbagai aktivitas sehari-hari.
            </p>
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img 
                src={waterSplash1} 
                alt="CNH Water Splash" 
                className="w-full rounded-3xl shadow-2xl"
              />
            </motion.div>
            
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h4 className="text-3xl font-bold mb-6 text-gray-800">
                Keunggulan pH 9+ Alkaline
              </h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h5 className="font-semibold text-gray-800">Menyeimbangkan pH Tubuh</h5>
                    <p className="text-gray-600">Membantu menetralkan asam berlebih dalam tubuh</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h5 className="font-semibold text-gray-800">Hidrasi Optimal</h5>
                    <p className="text-gray-600">Molekul air yang lebih kecil untuk penyerapan lebih baik</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h5 className="font-semibold text-gray-800">Antioksidan Alami</h5>
                    <p className="text-gray-600">Membantu melawan radikal bebas dalam tubuh</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h5 className="font-semibold text-gray-800">Meningkatkan Energi</h5>
                    <p className="text-gray-600">Membantu meningkatkan metabolisme dan energi tubuh</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Sertifikasi & Jaminan Kualitas
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              CNH telah tersertifikasi oleh berbagai lembaga internasional dan nasional 
              yang menjamin kualitas dan keamanan produk kami.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <motion.div 
              className="text-center p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 hover:shadow-xl transition-all duration-300"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <img src={iso9001} alt="ISO 9001" className="w-24 h-24 mx-auto mb-6" />
              <h4 className="text-xl font-bold mb-4 text-gray-800">ISO 9001:2015</h4>
              <p className="text-gray-600">
                Sertifikasi sistem manajemen kualitas internasional yang menjamin 
                konsistensi kualitas produk.
              </p>
            </motion.div>
            
            <motion.div 
              className="text-center p-8 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 hover:shadow-xl transition-all duration-300"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <img src={bpomLogo} alt="BPOM" className="w-24 h-24 mx-auto mb-6" />
              <h4 className="text-xl font-bold mb-4 text-gray-800">BPOM RI</h4>
              <p className="text-gray-600">
                Terdaftar dan diawasi oleh Badan Pengawas Obat dan Makanan 
                Republik Indonesia.
              </p>
            </motion.div>
            
            <motion.div 
              className="text-center p-8 rounded-2xl bg-gradient-to-br from-emerald-50 to-green-50 hover:shadow-xl transition-all duration-300"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <img src={halalLogo} alt="Halal" className="w-24 h-24 mx-auto mb-6" />
              <h4 className="text-xl font-bold mb-4 text-gray-800">Halal MUI</h4>
              <p className="text-gray-600">
                Bersertifikat halal dari Majelis Ulama Indonesia, aman dikonsumsi 
                oleh seluruh masyarakat.
              </p>
            </motion.div>
          </div>
          
          <motion.div 
            className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-8 text-white text-center"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h4 className="text-2xl font-bold mb-4">Komitmen Kualitas Kami</h4>
            <p className="text-lg mb-6">
              Setiap tetes air CNH melalui proses kontrol kualitas yang ketat untuk 
              memastikan Anda mendapatkan air mineral terbaik dengan pH 9+ yang konsisten.
            </p>
            <div className="flex justify-center items-center space-x-8">
              <div className="text-center">
                <div className="text-3xl font-bold">99.9%</div>
                <div className="text-sm opacity-90">Kemurnian</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">pH 9+</div>
                <div className="text-sm opacity-90">Alkaline</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">100%</div>
                <div className="text-sm opacity-90">Halal</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Test and Research Results Section */}
      <section id="test-results" className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-4 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div 
              className="relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <a href={sertif1} target="_blank" rel="noopener noreferrer">
                <img 
                  src={sertif1} 
                  alt="" 
                  className="w-full h-full object-cover cursor-pointer"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-200/20 to-cyan-200/20 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            </motion.div>
            
            <motion.div 
              className="relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <a href={sertif2} target="_blank" rel="noopener noreferrer">
                <img 
                  src={sertif2} 
                  alt="" 
                  className="w-full h-full object-cover cursor-pointer"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-green-200/20 to-emerald-200/20 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            </motion.div>
            
            <motion.div 
              className="relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <a href={sertif3} target="_blank" rel="noopener noreferrer">
                <img 
                  src={sertif3} 
                  alt="" 
                  className="w-full h-full object-cover cursor-pointer"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-200/20 to-orange-200/20 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            </motion.div>
            
            <motion.div 
              className="relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <a href={sertif4} target="_blank" rel="noopener noreferrer">
                <img 
                  src={sertif4} 
                  alt="" 
                  className="w-full h-full object-cover cursor-pointer"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-purple-200/20 to-pink-200/20 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Hubungi Kami
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Siap melayani kebutuhan air minum mineral premium Anda. 
              Hubungi kami untuk informasi lebih lanjut atau pemesanan.
            </p>
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-800 mb-2">Telepon</h4>
                    <p className="text-gray-600">+62 21 1234 5678</p>
                    <p className="text-gray-600">+62 812 3456 7890</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-800 mb-2">Email</h4>
                    <p className="text-gray-600">info@cnh-water.com</p>
                    <p className="text-gray-600">sales@cnh-water.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-800 mb-2">Alamat</h4>
                    <p className="text-gray-600">
                      Jl. Industri Raya No. 123<br />
                      Kawasan Industri Modern<br />
                      Jakarta Timur 13920, Indonesia
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <Droplets className="h-8 w-8 text-blue-400" />
                <h1 className="text-2xl font-bold">CNH</h1>
              </div>
              <p className="text-gray-400 mb-4">
                Choose New Healthy Water - Air minum mineral premium dengan pH 9+ 
                untuk hidrasi optimal dan gaya hidup sehat.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors cursor-pointer">
                  <Star className="h-5 w-5" />
                </div>
                <div className="w-10 h-10 bg-cyan-600 rounded-full flex items-center justify-center hover:bg-cyan-700 transition-colors cursor-pointer">
                  <Star className="h-5 w-5" />
                </div>
                <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors cursor-pointer">
                  <Star className="h-5 w-5" />
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-6">Produk</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">CNH 330ml</a></li>
                <li><a href="#" className="hover:text-white transition-colors">CNH 500ml</a></li>
                <li><a href="#" className="hover:text-white transition-colors">CNH 1.5L</a></li>
                <li><a href="#" className="hover:text-white transition-colors">CNH Gallon</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-6">Perusahaan</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Tentang Kami</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Karir</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Berita</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Investor</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-6">Dukungan</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Kontak</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Kebijakan Privasi</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Syarat & Ketentuan</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>© 2024 CNH - Choose New Healthy Water. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App