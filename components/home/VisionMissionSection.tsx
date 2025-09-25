"use client";

import { title } from "../primitives";
import { FiCheckCircle } from "react-icons/fi";
import { motion } from "framer-motion";

export default function VisionMissionZigzag() {
  return (
    <section className="relative py-20 bg-white overflow-hidden">
      <div className="absolute inset-0">
        
        <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-200 rounded-full opacity-20 blur-xl"></div>
        <div className="absolute top-60 right-20 w-48 h-48 bg-yellow-300 rounded-full opacity-15 blur-2xl"></div>
        <div className="absolute bottom-40 left-1/4 w-24 h-24 bg-yellow-400 rounded-full opacity-10 blur-lg"></div>
        
        <div className="absolute top-0 left-1/3 w-0.5 h-full bg-gradient-to-b from-transparent via-yellow-200 to-transparent opacity-30"></div>
        <div className="absolute top-0 right-1/4 w-0.5 h-full bg-gradient-to-b from-transparent via-yellow-300 to-transparent opacity-20"></div>
      </div>

      <div className="max-w-8xl mx-auto px-6 md:px-12 lg:px-20 space-y-24 relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16 relative"
        >

          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-32 h-32 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full opacity-10 blur-2xl"></div>
          
          <h1 className={title({ size: "md" }) + " text-xl md:text-3xl relative z-10"}>
            Visi & Misi{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              Find
            </span>
          </h1>
          <div className="mx-auto h-1.5 w-32 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full mb-5 relative">
            <div className="absolute -left-2 -right-2 -top-1 -bottom-1 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full opacity-20 blur-sm"></div>
          </div>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto relative z-10">
            Membangun generasi muda yang{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent font-semibold">
              cerdas finansial
            </span>{" "}
            dan siap menghadapi masa depan.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center relative">
          <div className="absolute -top-10 -left-10 w-32 h-32 opacity-5">
            <div className="w-full h-full bg-gradient-to-br from-yellow-400 to-yellow-600 transform rotate-45 rounded-lg"></div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-2xl opacity-10 blur-xl"></div>
            <div className="absolute -top-3 -left-3 w-6 h-6 bg-yellow-400 rounded-full opacity-30"></div>
            <div className="absolute -bottom-3 -right-3 w-4 h-4 bg-yellow-500 rounded-full opacity-40"></div>
            <img src="/2-young.png" alt="Visi Find" className="relative z-10 rounded-xl"  />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20"
          >

            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-yellow-400/20 to-transparent rounded-bl-3xl"></div>
            <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-yellow-500/15 to-transparent rounded-tr-3xl"></div>

            <div 
              className="absolute -top-2 -right-2 w-8 h-8 opacity-20"
              style={{
                backgroundImage: 'radial-gradient(circle, #f59e0b 1px, transparent 1px)',
                backgroundSize: '8px 8px'
              }}
            ></div>
            
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent mb-6 relative z-10">
              Visi
            </h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed relative z-10">
              Menjadi platform pembelajaran keuangan{" "}
              <span className="font-semibold bg-yellow-100 px-1 rounded">terdepan di Indonesia</span>{" "}
              yang memberdayakan Gen Z untuk mencapai kemandirian finansial
              dan membangun masa depan yang sejahtera.
            </p>
          </motion.div>
        </div>

        <div className="flex items-center justify-center py-12">
          <div className="flex-1 h-0.5 bg-gradient-to-r from-transparent via-yellow-300 to-transparent"></div>
          <div className="mx-4 w-3 h-3 bg-yellow-400 rounded-full"></div>
          <div className="mx-2 w-2 h-2 bg-yellow-500 rounded-full"></div>
          <div className="mx-4 w-3 h-3 bg-yellow-400 rounded-full"></div>
          <div className="flex-1 h-0.5 bg-gradient-to-r from-transparent via-yellow-300 to-transparent"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center relative">
          {/* Decorative Pattern Behind Misi */}
          <div className="absolute -bottom-10 -right-10 w-40 h-40 opacity-5">
            <div className="w-full h-full">
              <div className="w-8 h-8 bg-yellow-400 rounded-full absolute top-0 left-0"></div>
              <div className="w-6 h-6 bg-yellow-500 rounded-full absolute top-8 left-8"></div>
              <div className="w-4 h-4 bg-yellow-600 rounded-full absolute top-16 left-16"></div>
              <div className="w-10 h-10 bg-yellow-300 rounded-full absolute bottom-0 right-0"></div>
            </div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="order-2 md:order-1 relative p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 overflow-hidden"
          >

            <div 
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: `
                  repeating-linear-gradient(
                    45deg,
                    #f59e0b,
                    #f59e0b 1px,
                    transparent 1px,
                    transparent 20px
                  )
                `
              }}
            ></div>

            <div className="absolute top-0 left-0 w-16 h-16 bg-gradient-to-br from-yellow-400/20 to-transparent rounded-br-3xl"></div>
            <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-yellow-500/15 to-transparent rounded-tl-3xl"></div>
            
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent mb-6 relative z-10">
              Misi
            </h2>
            <ul className="space-y-4 text-lg text-gray-700 relative z-10">
              {[
                "Menyediakan konten pembelajaran keuangan yang mudah dipahami dan praktis untuk Gen Z",
                "Membangun komunitas yang mendukung pertumbuhan literasi finansial",
                "Memberikan akses pendidikan keuangan berkualitas dengan harga terjangkau",
                "Menginspirasi generasi muda untuk mulai berinvestasi sejak dini",
              ].map((point, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.2, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3 p-3 rounded-lg hover:bg-yellow-50/50 transition-colors duration-300"
                >
                  <div className="relative">
                    <FiCheckCircle className="text-yellow-500 w-6 h-6 mt-1 relative z-10" />
                    <div className="absolute inset-0 bg-yellow-400 rounded-full opacity-20 blur-sm"></div>
                  </div>
                  <span>{point}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="order-1 md:order-2 relative"
          >

            <div className="absolute -inset-4 bg-gradient-to-l from-yellow-400 to-yellow-600 rounded-2xl opacity-10 blur-xl"></div>
            <div className="absolute -top-2 -right-2 w-5 h-5 bg-yellow-400 rounded-full opacity-40"></div>
            <div className="absolute -bottom-2 -left-2 w-7 h-7 bg-yellow-500 rounded-full opacity-30"></div>
            

            <div className="absolute -top-1 left-4 right-4 h-0.5 bg-gradient-to-r from-yellow-400 via-transparent to-yellow-400 opacity-30"></div>
            <div className="absolute -bottom-1 left-4 right-4 h-0.5 bg-gradient-to-r from-yellow-400 via-transparent to-yellow-400 opacity-30"></div>
            
            <img src="/bisnis-women.png" alt="Misi Find" className="relative z-10 rounded-xl" />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center pt-12"
        >
          <div className="relative">
            <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full"></div>
            <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="absolute -top-0.5 left-1/4 w-2 h-2 bg-yellow-400 rounded-full"></div>
            <div className="absolute -top-0.5 right-1/4 w-2 h-2 bg-yellow-600 rounded-full"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}