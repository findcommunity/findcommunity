"use client";

import { motion } from "framer-motion";
import { title } from "../primitives";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25, 
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function ProblemTimeline() {
  return (
    <section className="relative py-20 bg-white overflow-hidden">
      <div className="absolute inset-0">
        

        <div className="absolute top-20 left-1/4 w-20 h-20 bg-red-200 rounded-full opacity-20 blur-2xl"></div>
        <div className="absolute top-40 right-1/3 w-32 h-32 bg-blue-200 rounded-full opacity-15 blur-2xl"></div>
        <div className="absolute bottom-32 left-1/5 w-24 h-24 bg-green-200 rounded-full opacity-20 blur-xl"></div>
        
        <div className="absolute top-0 left-1/4 w-0.5 h-full bg-gradient-to-b from-transparent via-red-200 to-transparent opacity-30 transform rotate-12"></div>
        <div className="absolute top-0 right-1/3 w-0.5 h-full bg-gradient-to-b from-transparent via-blue-200 to-transparent opacity-25 transform -rotate-12"></div>
      </div>

      <motion.div
        className="absolute top-10 left-10 w-40 h-40 bg-primary-100 rounded-full blur-3xl opacity-20"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.2 }}
        transition={{ duration: 1, ease: "easeOut" }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-56 h-56 bg-secondary-100 rounded-full blur-3xl opacity-20"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.2 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
      />

      <motion.div
        className="absolute top-1/3 right-20 w-8 h-8 bg-red-300 rounded-full opacity-30"
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/3 left-16 w-6 h-6 bg-blue-400 rounded-full opacity-40"
        animate={{ y: [10, -10, 10] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      <div className="max-w-4xl mx-auto relative z-10 px-6">
        <motion.div
          className="text-center mb-16 relative"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-32 h-32 bg-gradient-to-r from-red-400 to-red-600 rounded-full opacity-10 blur-2xl"></div>
          
          <h1 className={title({ size: "md" }) + " text-xl md:text-3xl relative z-10"}>
            Masalah Keuangan yang Dihadapi{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent relative">
              Gen Z
              <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-red-400 to-red-600 rounded-full"></div>
            </span>
          </h1>

          <div className="flex items-center justify-center mt-4 mb-6">
            <div className="flex-1 h-0.5 bg-gradient-to-r from-transparent via-red-300 to-transparent max-w-32"></div>
            <div className="mx-3 w-2 h-2 bg-red-400 rounded-full"></div>
            <div className="flex-1 h-0.5 bg-gradient-to-r from-transparent via-red-300 to-transparent max-w-32"></div>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto relative z-10">
            Urutan tantangan umum yang sering menghambat kemajuan finansial.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-red-200 via-blue-200 to-green-200 rounded-full opacity-30"></div>
          
          <motion.ol
            className="relative border-l-4 border-gray-200 ml-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.li className="mb-12 ml-8 relative" variants={itemVariants}>
              <div className="absolute -left-14 top-5 w-6 h-0.5 bg-red-200 opacity-50"></div>
              
              <span className="absolute -left-6 flex h-10 w-10 items-center justify-center rounded-full bg-red-100 text-red-600 font-bold shadow-lg ring-4 ring-white  z-10">
                <div className="absolute inset-0 bg-red-200 rounded-full animate-ping opacity-20"></div>
                <span className="relative">1</span>
              </span>
              
              <motion.div
                whileHover={{ scale: 1.02, y: -2 }}
                className="p-6 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-red-100/50 transition-all duration-300 relative overflow-hidden"
              >
                <div 
                  className="absolute top-0 right-0 w-20 h-20 opacity-[0.03]"
                  style={{
                    backgroundImage: 'radial-gradient(circle, #dc2626 1px, transparent 1px)',
                    backgroundSize: '8px 8px'
                  }}
                ></div>
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-red-100/30 to-transparent rounded-bl-3xl"></div>
                
                <div className="flex items-start justify-between relative z-10">
                  <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                    <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                    Tidak Ada Tabungan
                  </h3>
                  <span className="text-xs text-red-600 bg-red-50 px-3 py-1 rounded-full font-medium shadow-sm">
                    Prioritas
                  </span>
                </div>
                <p className="mt-3 text-gray-600 leading-relaxed">
                  78% Gen Z tidak memiliki dana darurat 3 bulan biaya hidup,
                  meningkatkan risiko saat kondisi darurat.
                </p>

                <div className="mt-4 w-full bg-red-50 rounded-full h-1 overflow-hidden">
                  <motion.div 
                    className="h-full bg-gradient-to-r from-red-400 to-red-500 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: "78%" }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                  ></motion.div>
                </div>
                <p className="text-xs text-red-500 mt-1">78% Gen Z terdampak</p>
              </motion.div>
            </motion.li>

            <motion.li className="mb-12 ml-8 relative" variants={itemVariants}>
              <div className="absolute -left-14 top-5 w-6 h-0.5 bg-blue-200 opacity-50"></div>
              
              <span className="absolute -left-6 flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600 font-bold shadow-lg ring-4 ring-white z-10">
                <div className="absolute inset-0 bg-blue-200 rounded-full animate-ping opacity-20 animation-delay-1000"></div>
                <span className="relative">2</span>
              </span>
              
              <motion.div
                whileHover={{ scale: 1.02, y: -2 }}
                className="p-6 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-blue-100/50 transition-all duration-300 relative overflow-hidden"
              >
                <div 
                  className="absolute bottom-0 left-0 w-24 h-24 opacity-[0.02]"
                  style={{
                    backgroundImage: `
                      repeating-linear-gradient(
                        45deg,
                        #2563eb,
                        #2563eb 1px,
                        transparent 1px,
                        transparent 10px
                      )
                    `
                  }}
                ></div>
                <div className="absolute bottom-0 left-0 w-18 h-18 bg-gradient-to-tr from-blue-100/30 to-transparent rounded-tr-3xl"></div>
                
                <div className="flex items-start justify-between relative z-10">
                  <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                    Tidak Paham Investasi
                  </h3>
                  <span className="text-xs text-blue-600 bg-blue-50 px-3 py-1 rounded-full font-medium shadow-sm">
                    Pengetahuan
                  </span>
                </div>
                <p className="mt-3 text-gray-600 leading-relaxed">
                  Hanya 23% yang memahami prinsip dasar: profil risiko,
                  diversifikasi, dan horizon waktu.
                </p>
                <div className="mt-4 text-sm text-blue-600 bg-blue-50 p-3 rounded-lg border-l-4 border-blue-300">
                  <span className="text-lg">💡</span> Mulai dari produk berisiko rendah dan terapkan metode
                  dollar-cost averaging.
                </div>

                <div className="mt-4 w-full bg-blue-50 rounded-full h-1 overflow-hidden">
                  <motion.div 
                    className="h-full bg-gradient-to-r from-blue-400 to-blue-500 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: "23%" }}
                    transition={{ duration: 1.5, delay: 0.8 }}
                  ></motion.div>
                </div>
                <p className="text-xs text-blue-500 mt-1">23% yang paham investasi</p>
              </motion.div>
            </motion.li>

            <motion.li className="ml-8 relative" variants={itemVariants}>
              <div className="absolute -left-14 top-5 w-6 h-0.5 bg-green-200 opacity-50"></div>
              
              <span className="absolute -left-6 flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-600 font-bold shadow-lg ring-4 ring-white z-10">
                <div className="absolute inset-0 bg-green-200 rounded-full animate-ping opacity-20 animation-delay-2000"></div>
                <span className="relative">3</span>
              </span>
              
              <motion.div
                whileHover={{ scale: 1.02, y: -2 }}
                className="p-6 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-green-100/50 transition-all duration-300 relative overflow-hidden"
              >
                <div 
                  className="absolute top-0 left-0 w-full h-full opacity-[0.01]"
                  style={{
                    backgroundImage: `
                      radial-gradient(circle at 20px 20px, #16a34a 1px, transparent 1px),
                      radial-gradient(circle at 60px 60px, #16a34a 0.5px, transparent 0.5px)
                    `,
                    backgroundSize: '40px 40px, 80px 80px'
                  }}
                ></div>

                <div className="absolute top-0 left-0 w-16 h-16 bg-gradient-to-br from-green-100/30 to-transparent rounded-br-3xl"></div>
                <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-green-100/20 to-transparent rounded-tl-3xl"></div>
                
                <div className="flex items-start justify-between relative z-10">
                  <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                    Tidak Ada Tujuan Finansial
                  </h3>
                  <span className="text-xs text-green-600 bg-green-50 px-3 py-1 rounded-full font-medium shadow-sm">
                    Perencanaan
                  </span>
                </div>
                <p className="mt-3 text-gray-600 leading-relaxed">
                  65% belum menetapkan tujuan yang spesifik dan terukur (SMART),
                  sehingga progres sulit dievaluasi.
                </p>
                <div className="mt-4 text-sm text-green-600 bg-green-50 p-3 rounded-lg border-l-4 border-green-300">
                  <span className="text-lg">🎯</span> Tetapkan tujuan 1, 3, dan 5 tahun; gunakan kerangka anggaran
                  50/30/20.
                </div>

                <div className="mt-4 w-full bg-green-50 rounded-full h-1 overflow-hidden">
                  <motion.div 
                    className="h-full bg-gradient-to-r from-green-400 to-green-500 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: "65%" }}
                    transition={{ duration: 1.5, delay: 1.1 }}
                  ></motion.div>
                </div>
                <p className="text-xs text-green-500 mt-1">65% tanpa tujuan finansial</p>
              </motion.div>
            </motion.li>
          </motion.ol>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="flex justify-center mt-16"
        >
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-red-400 rounded-full"></div>
            <div className="w-16 h-0.5 bg-gradient-to-r from-red-400 via-blue-400 to-green-400 rounded-full"></div>
            <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
            <div className="w-16 h-0.5 bg-gradient-to-r from-red-400 via-blue-400 to-green-400 rounded-full"></div>
            <div className="w-3 h-3 bg-green-400 rounded-full"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}