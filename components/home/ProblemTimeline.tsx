"use client"; // kalau pakai Next.js App Router

import { motion } from "framer-motion";
import { title } from "../primitives";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

export default function ProblemTimeline() {
  return (
    <section className="relative py-8">
      {/* dekorasi background */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-primary-100 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-10 right-10 w-56 h-56 bg-secondary-100 rounded-full blur-3xl opacity-20"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={title({ size: "md" }) + " text-xl md:text-3xl"}
          >
            Masalah Keuangan yang Dihadapi{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              Gen Z
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl md:text-2xl lg:text-3xl text-gray-700 leading-relaxed"
          >
            Urutan tantangan umum yang sering menghambat kemajuan finansial.
          </motion.p>
        </div>

        <ol className="relative border-l-4 border-gray-200 ml-6">
          {[
            {
              num: "1",
              color: "red",
              title: "Tidak Ada Tabungan",
              tag: "Prioritas",
              tagColor: "red",
              desc: "78% Gen Z tidak memiliki dana darurat 3 bulan biaya hidup, meningkatkan risiko saat kondisi darurat.",
            },
            {
              num: "2",
              color: "blue",
              title: "Tidak Paham Investasi",
              tag: "Pengetahuan",
              tagColor: "blue",
              desc: "Hanya 23% yang memahami prinsip dasar: profil risiko, diversifikasi, dan horizon waktu.",
              extra: "💡 Mulai dari produk berisiko rendah dan terapkan metode dollar-cost averaging.",
            },
            {
              num: "3",
              color: "green",
              title: "Tidak Ada Tujuan Finansial",
              tag: "Perencanaan",
              tagColor: "green",
              desc: "65% belum menetapkan tujuan yang spesifik dan terukur (SMART), sehingga progres sulit dievaluasi.",
              extra: "🎯 Tetapkan tujuan 1, 3, dan 5 tahun; gunakan kerangka anggaran 50/30/20.",
            },
          ].map((item, i) => (
            <motion.li
              key={i}
              className="mb-12 ml-8 last:mb-0"
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
            >
              <span
                className={`absolute -left-6 flex h-10 w-10 items-center justify-center rounded-full bg-${item.color}-100 text-${item.color}-600 font-bold shadow-lg ring-4 ring-white`}
              >
                {item.num}
              </span>
              <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {item.title}
                  </h3>
                  <span
                    className={`text-xs text-${item.tagColor}-600 bg-${item.tagColor}-50 px-2 py-1 rounded-full`}
                  >
                    {item.tag}
                  </span>
                </div>
                <p className="mt-2 text-gray-600">{item.desc}</p>
                {item.extra && (
                  <div className="mt-3 text-sm text-gray-500 italic">
                    {item.extra}
                  </div>
                )}
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
