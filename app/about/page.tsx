"use client";

import { title } from "@/components/primitives";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import {
  FaLinkedin,
  FaInstagram,
  FaCoins,
  FaLightbulb,
  FaBrain,
  FaHandshake,
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function AboutPage() {
  const wealthValues = [
    {
      letter: "W",
      word: "Wisdom",
      description:
        "Mengedukasi keuangan dengan wawasan yang berbasis psikologi",
      icon: <FaBrain className="w-6 h-6" />,
      color: "from-blue-500 to-purple-500",
    },
    {
      letter: "E",
      word: "Empowerment",
      description:
        "Memberdayakan anak muda agar bisa mengelola keuangan mereka sendiri",
      icon: <FaHandshake className="w-6 h-6" />,
      color: "from-green-500 to-teal-500",
    },
    {
      letter: "A",
      word: "Action",
      description: "Mendorong praktis nyata bukan hanya teori",
      icon: <FaLightbulb className="w-6 h-6" />,
      color: "from-orange-500 to-red-500",
    },
    {
      letter: "L",
      word: "Learning",
      description: "Terus belajar dan berkembang dalam finansial dan mindset",
      icon: <FaBrain className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500",
    },
    {
      letter: "T",
      word: "Transparency",
      description: "Jujur dan terbuka dalam berbagi ilmu dan pengalaman",
      icon: <FaCoins className="w-6 h-6" />,
      color: "from-yellow-500 to-orange-500",
    },
    {
      letter: "H",
      word: "Holistic",
      description:
        "Menghubungkan aspek keuangan, psikologi, dan kehidupan sehari-hari",
      icon: <FaHandshake className="w-6 h-6" />,
      color: "from-indigo-500 to-blue-500",
    },
  ];

  return (
    <>
      <section className="relative flex flex-col items-center justify-center gap-8 py-20 md:py-32 bg-gradient-to-br from-yellow-100 via-orange-100 to-pink-100 overflow-hidden">
        <div className="absolute inset-0">
          <svg
            className="absolute bottom-0 w-full h-64 opacity-30"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            viewBox="0 0 1440 320"
          >
            <path
              fill="url(#wave1)"
              d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,165.3C1248,171,1344,149,1392,138.7L1440,128V320H0Z"
            />
            <defs>
              <linearGradient id="wave1" x1="0" x2="1" y1="0" y2="1">
                <stop stopColor="#fbbf24" stopOpacity="0.4" />
                <stop offset="1" stopColor="#f97316" stopOpacity="0.2" />
              </linearGradient>
            </defs>
          </svg>

          <svg
            className="absolute bottom-0 w-full h-48 opacity-20"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            viewBox="0 0 1440 320"
          >
            <path
              fill="url(#wave2)"
              d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,213.3C672,224,768,224,864,213.3C960,203,1056,181,1152,176C1248,171,1344,181,1392,186.7L1440,192V320H0Z"
            />
            <defs>
              <linearGradient id="wave2" x1="0" x2="1" y1="0" y2="1">
                <stop stopColor="#ec4899" stopOpacity="0.3" />
                <stop offset="1" stopColor="#f59e0b" stopOpacity="0.1" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <motion.div
          className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-pink-400/30 to-purple-400/30 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-32 right-16 w-48 h-48 bg-gradient-to-br from-yellow-300/30 to-orange-400/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 0.8, 1],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/3 right-1/4 w-24 h-24 bg-gradient-to-br from-blue-400/30 to-indigo-400/30 rounded-full blur-xl"
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute top-32 right-32 text-yellow-500/40"
          animate={{
            y: [0, -15, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <FaCoins size={32} />
        </motion.div>

        <motion.div
          className="absolute bottom-40 left-32 text-pink-500/40"
          animate={{
            x: [0, 15, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <FaLightbulb size={28} />
        </motion.div>

        <motion.div
          className="absolute top-16 left-1/4 w-16 h-16 border-4 border-white/40 rounded-lg"
          animate={{ rotate: [0, 45, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-24 right-1/3 w-12 h-12 bg-white/20 rounded-full"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-2/3 left-16 w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-400 transform rotate-45"
          animate={{
            rotate: [45, 225, 45],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />


        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 inline-block max-w-4xl text-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.h1
              className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-yellow-500 via-orange-500 to-pink-500 bg-clip-text text-transparent drop-shadow-2xl"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              Tentang Kami
            </motion.h1>

            <motion.div
              className="w-32 h-2 bg-gradient-to-r from-yellow-500 to-pink-500 mx-auto mt-6 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: 128 }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-20 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0">
          <div className="absolute top-32 left-0 w-96 h-96 bg-gradient-to-br from-yellow-100/50 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-32 right-0 w-96 h-96 bg-gradient-to-br from-pink-100/50 to-transparent rounded-full blur-3xl" />
        </div>

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <motion.div
            className="text-center mb-40 relative"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="absolute -top-16 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
            />

            <div className="max-w-4xl mx-auto relative">
              <motion.div
                className="absolute -left-8 top-0 text-6xl text-yellow-500/20 font-serif"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
              >
                "
              </motion.div>

              <p className="text-lg md:text-2xl text-gray-700 leading-relaxed mb-6 relative">
                <span className="font-semibold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent px-2 py-1 rounded-lg shadow-sm">
                  Finansial Community
                </span>{" "}
                adalah komunitas yang membahas keuangan dari sisi psikologi dan
                perilaku finansial. Kami percaya bahwa mengelola keuangan bukan
                hanya soal angka, tetapi juga soal{" "}
                <span className="font-semibold text-yellow-600 relative">
                  mindset
                  <motion.span
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-yellow-400 block"
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 0.8, delay: 1 }}
                    viewport={{ once: true }}
                  />
                </span>
                ,{" "}
                <span className="font-semibold text-yellow-600 relative">
                  kebiasaan
                  <motion.span
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-yellow-400 block"
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                    viewport={{ once: true }}
                  />
                </span>
                , dan keputusan yang lebih bijak.
              </p>

              <p className="text-lg md:text-2xl text-gray-700 leading-relaxed">
                <span className="font-semibold text-yellow-600 bg-yellow-50 px-3 py-1 rounded-full">
                  FIC
                </span>{" "}
                hadir sebagai ruang diskusi dan edukasi bagi siapa saja yang
                ingin memahami keuangan dengan cara yang lebih santai dan
                relatable. Kami berbagi wawasan, pengalaman, serta strategi
                finansial yang bisa diterapkan sehari-hari untuk membangun
                kebiasaan keuangan yang lebih sehat dan berkelanjutan.
              </p>

              <motion.div
                className="absolute -right-8 bottom-0 text-6xl text-yellow-500/20 font-serif"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                viewport={{ once: true }}
              >
                "
              </motion.div>
            </div>
          </motion.div>

          <div className="mb-44 relative">
            <div className="text-center mb-12">
              <motion.h2
                className={title({ size: "md" })}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                Meet Our{" "}
                <span className="text-yellow-600 relative">
                  Founder
                  <motion.svg
                    className="absolute -bottom-2 left-0 right-0 h-3 text-yellow-400"
                    viewBox="0 0 100 12"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <path
                      d="M0,8 Q25,2 50,6 T100,4"
                      stroke="currentColor"
                      strokeWidth="3"
                      fill="none"
                      strokeLinecap="round"
                    />
                  </motion.svg>
                </span>
              </motion.h2>

              <motion.div
                className="flex justify-center gap-2 mt-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className={`w-2 h-2 rounded-full ${i === 2 ? "bg-yellow-500" : "bg-yellow-300"}`}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.5 + i * 0.1 }}
                    viewport={{ once: true }}
                  />
                ))}
              </motion.div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
              <motion.div
                className="flex justify-center lg:justify-end relative"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="absolute -inset-4 bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-400 rounded-3xl blur-xl opacity-30"></div>
                <div className="absolute -inset-2 bg-gradient-to-r from-yellow-300 via-orange-300 to-pink-300 rounded-2xl opacity-50"></div>

                <div className="relative">
                  <motion.div
                    className="w-100 h-100 rounded-2xl overflow-hidden shadow-2xl relative z-10"
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 6, repeat: Infinity }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <img
                      src="/farhansyah.png"
                      alt="Founder Photo"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-yellow-500/20 via-transparent to-transparent"></div>
                  </motion.div>

                  <motion.div
                    className="absolute -bottom-4 -right-4 bg-white rounded-full p-4 shadow-lg border-4 border-yellow-400"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    viewport={{ once: true }}
                    animate={{ rotate: [0, 5, -5, 0] }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <FaLightbulb className="w-6 h-6 text-yellow-500" />
                  </motion.div>
                </div>
              </motion.div>

              <motion.div
                className="text-left relative"
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="absolute -top-8 -left-4 text-8xl text-yellow-400/20 font-serif leading-none"
                  initial={{ opacity: 0, rotate: -10 }}
                  whileInView={{ opacity: 1, rotate: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  "
                </motion.div>

                <motion.h3
                  className="text-3xl font-bold text-gray-900 mb-4 relative z-10"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  Farhansyah Mondari
                  <motion.div
                    className="w-16 h-1 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full mt-2"
                    initial={{ width: 0 }}
                    whileInView={{ width: 64 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    viewport={{ once: true }}
                  />
                </motion.h3>

                <motion.p
                  className="text-lg text-gray-600 mb-6 leading-relaxed relative z-10"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  Sebagai pendiri Find Community, saya percaya literasi keuangan
                  harus mudah diakses, terutama bagi generasi muda. Dengan
                  pengalaman di bidang keuangan dan psikologi, saya berkomitmen
                  membantu orang memahami keuangan secara lebih holistik.
                </motion.p>

                <motion.p
                  className="text-lg text-gray-600 mb-6 leading-relaxed relative z-10"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  Melalui FIC, saya ingin menciptakan ruang belajar dan berbagi
                  agar setiap orang bisa berkembang bersama. Karena pada
                  akhirnya, keuangan yang sehat berawal dari mindset yang tepat.
                </motion.p>

                <motion.div
                  className="flex gap-4 relative z-10"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  viewport={{ once: true }}
                >
                  <motion.a
                    href="https://linkedin.com/in/founder"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative group"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white shadow-lg group-hover:shadow-xl transition-all duration-300">
                      <FaLinkedin size={24} />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  </motion.a>

                  <motion.a
                    href="https://instagram.com/founder"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative group"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="w-14 h-14 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 rounded-full flex items-center justify-center text-white shadow-lg group-hover:shadow-xl transition-all duration-300">
                      <FaInstagram size={24} />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-400 to-orange-300 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  </motion.a>
                </motion.div>
              </motion.div>
            </div>
          </div>

          <motion.div
            className="mb-16 relative"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-50/50 via-orange-50/30 to-pink-50/50 rounded-3xl blur-3xl"></div>

            <div className="text-center mb-16 relative z-10">
              <motion.h2
                className={title({ size: "md" })}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                Nilai-Nilai{" "}
                <span className="relative">
                  <span className="text-yellow-600">W.E.A.L.T.H</span>
                  <motion.div
                    className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 flex gap-1"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    {[...Array(6)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="w-3 h-3 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.7 + i * 0.1 }}
                        viewport={{ once: true }}
                      />
                    ))}
                  </motion.div>
                </span>
              </motion.h2>

              <motion.p
                className="text-gray-600 text-xl mt-6 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                Core Values Kami
              </motion.p>
            </div>

            <motion.div
              className="flex flex-wrap justify-center items-center gap-6 mb-16 relative z-10"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {wealthValues.map((value, index) => (
                <motion.div
                  key={value.letter}
                  className="flex items-center relative"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    className="relative group cursor-pointer"
                    whileHover={{
                      scale: 1.15,
                      rotate: [0, -5, 5, 0],
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div
                      className={`absolute -inset-2 bg-gradient-to-r ${value.color} rounded-full blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500`}
                    ></div>

                    <div
                      className={`relative w-20 h-20 bg-gradient-to-br ${value.color} rounded-full flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-300`}
                    >
                      <span className="text-white font-bold text-2xl z-10">
                        {value.letter}
                      </span>

                      <motion.div
                        className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        initial={{ scale: 0 }}
                        whileHover={{ scale: 1 }}
                      >
                        {value.icon}
                      </motion.div>
                    </div>

                    <motion.div
                      className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-gray-900 text-white text-sm px-4 py-2 rounded-xl whitespace-nowrap shadow-xl z-20"
                      initial={{ y: 10, opacity: 0 }}
                      whileHover={{ y: 0, opacity: 1 }}
                    >
                      <div className="font-semibold">{value.word}</div>
                      <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gray-900 rotate-45"></div>
                    </motion.div>
                  </motion.div>

                  {index < wealthValues.length - 1 && (
                    <motion.div
                      className="hidden lg:block relative mx-4"
                      initial={{ width: 0 }}
                      whileInView={{ width: 48 }}
                      transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="h-1 bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-400 rounded-full"></div>
                      <motion.div
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full border-2 border-orange-400"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.3,
                        }}
                      />
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </motion.div>

            <div className="space-y-8 relative z-10">
              {wealthValues.map((value, index) => (
                <motion.div
                  key={value.letter}
                  className={`group relative overflow-hidden rounded-3xl transition-all duration-500 hover:shadow-2xl cursor-pointer ${
                    index % 2 === 0
                      ? "bg-gradient-to-r from-yellow-50/80 via-orange-50/60 to-transparent"
                      : "bg-gradient-to-r from-transparent via-pink-50/60 to-purple-50/80"
                  }`}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, y: -5 }}
                >

                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <motion.div
                    className={`absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r ${value.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                    style={{
                      backgroundClip: "padding-box",
                      WebkitBackgroundClip: "padding-box",
                    }}
                  />
                  <div className="absolute inset-[2px] bg-white rounded-3xl group-hover:bg-white/95 transition-colors duration-500"></div>

                  <div className="relative flex flex-col md:flex-row items-center gap-8 p-8 z-10">
                    <div className="flex-shrink-0 relative">
                      <motion.div
                        className={`w-24 h-24 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-500 relative overflow-hidden`}
                        whileHover={{ rotate: [0, -5, 5, 0] }}
                        transition={{ duration: 0.6 }}
                      >
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12"
                          initial={{ x: "-100%" }}
                          whileHover={{ x: "200%" }}
                          transition={{ duration: 0.8 }}
                        />

                        <span className="text-white font-bold text-4xl relative z-10">
                          {value.letter}
                        </span>

                        <motion.div
                          className="absolute inset-0 flex items-center justify-center text-white/20 scale-150"
                          animate={{ rotate: [0, 360] }}
                          transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                        >
                          {value.icon}
                        </motion.div>
                      </motion.div>

                      {[...Array(3)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full opacity-0 group-hover:opacity-100"
                          style={{
                            top: `${20 + i * 20}%`,
                            right: `${-10 - i * 5}px`,
                          }}
                          animate={{
                            y: [0, -20, 0],
                            x: [0, 10, 0],
                            opacity: [0, 1, 0],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.3,
                          }}
                        />
                      ))}
                    </div>

                    <div className="flex-1 text-center md:text-left relative">
                      <motion.h3
                        className="text-3xl font-bold text-gray-800 mb-4 relative"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        {value.word}
                        <motion.div
                          className={`absolute -bottom-1 left-0 h-1 bg-gradient-to-r ${value.color} rounded-full`}
                          initial={{ width: 0 }}
                          whileInView={{ width: "3rem" }}
                          transition={{ duration: 0.8, delay: 0.3 }}
                          viewport={{ once: true }}
                        />
                      </motion.h3>

                      <motion.p
                        className="text-gray-600 text-lg leading-relaxed relative"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        {value.description}
                      </motion.p>

                      <motion.div
                        className="absolute -top-4 -left-4 text-4xl text-gray-200 font-serif opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        initial={{ rotate: -15, scale: 0.8 }}
                        whileHover={{ rotate: 0, scale: 1 }}
                      >
                        "
                      </motion.div>
                    </div>

                    <div className="flex-shrink-0 relative">
                      <motion.div
                        className="w-16 h-16 bg-gradient-to-br from-white to-gray-100 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl border-2 border-gray-100 group-hover:border-gray-200 transition-all duration-500"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.8 }}
                      >
                        <span
                          className={`font-bold text-2xl bg-gradient-to-r ${value.color} bg-clip-text text-transparent`}
                        >
                          {index + 1}
                        </span>
                      </motion.div>

                      <motion.div
                        className="absolute inset-0"
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 8,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      >
                        {[...Array(3)].map((_, i) => (
                          <div
                            key={i}
                            className="absolute w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full"
                            style={{
                              top: "50%",
                              left: "50%",
                              transform: `rotate(${i * 120}deg) translateY(-32px) translateX(-4px)`,
                            }}
                          />
                        ))}
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="text-center relative overflow-hidden rounded-3xl p-12 md:p-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >

            <div className="absolute inset-0 bg-gradient-to-br from-yellow-100 via-orange-100 to-pink-100"></div>

            <div className="absolute inset-0">
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-16 h-16 bg-white/20 rounded-full blur-xl"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3],
                    x: [0, 20, 0],
                    y: [0, -20, 0],
                  }}
                  transition={{
                    duration: 4 + Math.random() * 2,
                    repeat: Infinity,
                    delay: i * 0.5,
                  }}
                />
              ))}
            </div>

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.3)_1px,transparent_1px)] [background-size:32px_32px]"></div>

            <div className="relative z-10">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                  <span className="bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
                    Bergabunglah
                  </span>{" "}
                  dengan{" "}
                  <span className="relative">
                    Komunitas Kami
                    <motion.svg
                      className="absolute -bottom-2 left-0 w-full h-4"
                      viewBox="0 0 300 20"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      transition={{ duration: 2, delay: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <path
                        d="M0,15 Q75,5 150,12 T300,8"
                        stroke="url(#ctaGradient)"
                        strokeWidth="4"
                        fill="none"
                        strokeLinecap="round"
                      />
                      <defs>
                        <linearGradient id="ctaGradient">
                          <stop stopColor="#f59e0b" />
                          <stop offset="1" stopColor="#f97316" />
                        </linearGradient>
                      </defs>
                    </motion.svg>
                  </span>
                </h3>

                <motion.p
                  className="text-gray-700 text-xl mb-10 max-w-3xl mx-auto leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  Mulai perjalanan finansial yang lebih bijak bersama{" "}
                  <span className="font-semibold text-orange-600">ratusan</span>{" "}
                  anggota komunitas yang telah merasakan transformasi positif
                  dalam mengelola keuangan mereka.
                </motion.p>

                <motion.div
                  className="flex gap-6 flex-wrap justify-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-lg px-8 py-6 shadow-xl hover:shadow-2xl transition-all duration-300 border-0 relative overflow-hidden group"
                      size="lg"
                      as={Link}
                      href="#konsultasi"
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent -skew-x-12"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "200%" }}
                        transition={{ duration: 0.8 }}
                      />
                      <FaHandshake className="mr-2" />
                      Mulai Konsultasi Gratis
                    </Button>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      variant="bordered"
                      size="lg"
                      as={Link}
                      href="/webinar"
                      className="border-2 border-orange-400 text-orange-600 hover:bg-orange-50 text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300 relative group overflow-hidden"
                    >
                      <motion.div className="absolute inset-0 bg-gradient-to-r from-orange-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <FaLightbulb className="mr-2" />
                      Ikuti Webinar
                    </Button>
                  </motion.div>
                </motion.div>

                <motion.div
                  className="flex justify-center gap-8 mt-12 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  viewport={{ once: true }}
                >
                  {[
                    { number: "500+", label: "Anggota Aktif" },
                    { number: "50+", label: "Webinar" },
                    { number: "95%", label: "Tingkat Kepuasan" },
                  ].map((stat, i) => (
                    <motion.div
                      key={stat.label}
                      className="text-center"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.6, delay: 1 + i * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="text-3xl font-bold text-orange-600">
                        {stat.number}
                      </div>
                      <div className="text-gray-600 text-sm">{stat.label}</div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
