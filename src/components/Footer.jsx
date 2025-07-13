// src/components/Footer.jsx

import React from "react";
import {
  Droplets,
  Phone,
  Mail,
  MapPin,
  Instagram,
  Facebook,
  Youtube,
} from "lucide-react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 w-full max-w-full">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <Droplets className="h-8 w-8 text-blue-400" />
              <h1 className="text-xl sm:text-2xl font-bold">CNH</h1>
            </div>
            <p className="text-gray-400 mb-4 text-sm sm:text-base">
              Choose New Healthy Water - Air minum mineral premium dengan pH 9+
              untuk hidrasi optimal dan gaya hidup sehat.
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
            <h4 className="text-base sm:text-lg font-bold mb-6">
              Kontak & Alamat
            </h4>
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
                    airkesehatancnh@gmail.com
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

           <div className="md:col-span-2">
            <h4 className="text-base sm:text-lg font-bold mb-6">Lokasi Kami</h4>
            <div className="rounded-lg overflow-hidden h-full min-h-[200px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.8007532571!2d108.46790027500187!3d-7.487239892524817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e658d002a3303bb%3A0x5755a5a983bb097c!2sPT.%20Enha%20Mulia%20Sejahtera!5e0!3m2!1sid!2sid!4v1752374254639!5m2!1sid!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Peta Lokasi CNH"
              ></iframe>
            </div>
          </div>
            
        </div>

        <div className="border-t border-gray-800 mt-20 pt-8 text-center text-gray-400 text-sm sm:text-base">
          <p>© 2024 CNH - Choose New Healthy Water. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
