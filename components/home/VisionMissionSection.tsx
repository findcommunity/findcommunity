"use client";

import { title } from "../primitives";
import { FiCheckCircle } from "react-icons/fi";
import { motion } from "framer-motion";

export default function VisionMissionZigzag() {
  return (
    <section className="relative py-40 bg-white">
      <div className="max-w-8xl mx-auto px-6 md:px-12 lg:px-20 space-y-24">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h1 className={title({ size: "md" }) + " text-xl md:text-3xl"}>
            Visi & Misi{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              Find
            </span>
          </h1>
          <div className="mx-auto h-1.5 w-32 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full mb-5"></div>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            Membangun generasi muda yang{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent font-semibold">
              cerdas finansial
            </span>{" "}
            dan siap menghadapi masa depan.
          </p>
        </motion.div>

        {/* Visi */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img src="/visi1.png" alt="Visi Find" className="relative" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative p-8 bg-white/70"
          >
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent mb-6">
              Visi
            </h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Menjadi platform pembelajaran keuangan{" "}
              <span className="font-semibold">terdepan di Indonesia</span>{" "}
              yang memberdayakan Gen Z untuk mencapai kemandirian finansial
              dan membangun masa depan yang sejahtera.
            </p>
          </motion.div>
        </div>

        {/* Misi */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="order-2 md:order-1 relative p-8 rounded-2xl overflow-hidden"
          >
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent mb-6">
              Misi
            </h2>
            <ul className="space-y-4 text-lg text-gray-700">
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
                  className="flex items-start gap-3"
                >
                  <FiCheckCircle className="text-secondary-500 w-6 h-6 mt-1" />
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
            <img src="/visi2.png" alt="Misi Find" className="relative" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
