import { Accordion, AccordionItem } from "@heroui/accordion";
import { title } from "../primitives";
import { motion } from "framer-motion";

export default function FAQSection() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-yellow-50/30 via-white to-orange-50/20 overflow-hidden">
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-[0.008]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f59e0b' fill-opacity='1'%3E%3Cpath d='M30 5c6.904 0 12.5 5.596 12.5 12.5 0 3.407-1.39 6.49-3.634 8.723L30 35l-8.866-8.777C19.39 23.99 18 20.907 18 17.5 18 10.596 23.596 5 30 5zm0 20c2.761 0 5-2.239 5-5s-2.239-5-5-5-5 2.239-5 5 2.239 5 5 5z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}
        />
        <div 
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: 'radial-gradient(circle, #f59e0b 1px, transparent 1px)',
            backgroundSize: '30px 30px'
          }}
        />
        <div className="absolute top-0 left-0 w-full h-full">
          <svg className="absolute top-20 left-10 opacity-10" width="200" height="100" viewBox="0 0 200 100">
            <path d="M0,50 Q50,10 100,50 T200,50" stroke="#f59e0b" strokeWidth="2" fill="none" opacity="0.3"/>
          </svg>
          <svg className="absolute bottom-20 right-10 opacity-10" width="200" height="100" viewBox="0 0 200 100">
            <path d="M0,50 Q50,90 100,50 T200,50" stroke="#f59e0b" strokeWidth="2" fill="none" opacity="0.3"/>
          </svg>
        </div>
        <div className="absolute top-1/4 right-20 w-16 h-16 border-2 border-yellow-300 rounded-lg opacity-20 transform rotate-45"></div>
        <div className="absolute bottom-1/3 left-16 w-12 h-12 bg-yellow-200 rounded-full opacity-15"></div>
        <div className="absolute top-1/2 left-1/4 w-8 h-8 bg-orange-300 opacity-20" style={{clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'}}></div>
      </div>
      <motion.div
        className="absolute top-10 left-10 w-32 h-32 bg-yellow-200 rounded-full opacity-10 blur-2xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-40 h-40 bg-orange-200 rounded-full opacity-10 blur-3xl"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.15, 0.1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <motion.div
        className="absolute top-32 right-1/4 text-yellow-300 opacity-20 text-2xl"
        animate={{ y: [-10, 10, -10], rotate: [-5, 5, -5] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        ❓
      </motion.div>
      <motion.div
        className="absolute bottom-32 left-1/3 text-orange-300 opacity-15 text-xl"
        animate={{ y: [10, -10, 10], rotate: [5, -5, 5] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      >
        💡
      </motion.div>

      <div className="relative max-w-4xl mx-auto px-6 z-10">
        <motion.div 
          className="text-center mb-12 relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-32 h-32 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-5 blur-2xl"></div>
          
          <h1 className={title({ size: "md" }) + " text-xl md:text-3xl relative z-10"}>
            Pertanyaan yang{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent relative">
              Sering Diajukan
              <motion.div 
                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
              ></motion.div>
            </span>
          </h1>
          <div className="flex items-center justify-center mt-4 mb-4">
            <div className="w-2 h-2 bg-yellow-400 rounded-full opacity-60"></div>
            <div className="mx-3 w-16 h-0.5 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full"></div>
            <div className="w-3 h-3 bg-orange-400 rounded-full opacity-50"></div>
            <div className="mx-3 w-16 h-0.5 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full"></div>
            <div className="w-2 h-2 bg-yellow-400 rounded-full opacity-60"></div>
          </div>
          
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed relative z-10">
            Semua jawaban yang kamu butuhkan sebelum mulai belajar dengan Find 🚀
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute -inset-4 bg-gradient-to-r from-yellow-100/30 via-transparent to-orange-100/30 rounded-3xl blur-xl"></div>
          
          <div className="absolute -top-2 -left-2 w-6 h-6 border-2 border-yellow-300 rounded-full opacity-30"></div>
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-orange-300 rounded-full opacity-25"></div>
          <div className="absolute -bottom-2 -right-2 w-5 h-5 border-2 border-yellow-400 opacity-30" style={{clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'}}></div>
          <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-yellow-400 rounded-full opacity-35"></div>

          <Accordion
            className="rounded-2xl shadow-xl bg-white/80 backdrop-blur-md border border-white/50 relative z-10 overflow-hidden"
            itemClasses={{
              base: "border-b border-gray-100 last:border-none hover:bg-yellow-50/30 transition-all duration-300 relative",
              title: "font-semibold text-gray-800 text-lg hover:text-yellow-600 transition-colors duration-300 relative z-10",
              content: "text-gray-600 leading-relaxed relative z-10 pb-4",
              trigger: "py-4 px-6 hover:px-8 transition-all duration-300",
            }}
          >
            <AccordionItem key="1" aria-label="Apa itu Find?" title="Apa itu Find?" className="relative overflow-hidden">
              {/* Item background pattern */}
              <div 
                className="absolute top-0 right-0 w-20 h-20 opacity-[0.02] pointer-events-none"
                style={{
                  backgroundImage: 'radial-gradient(circle, #f59e0b 2px, transparent 2px)',
                  backgroundSize: '10px 10px'
                }}
              ></div>
              <div className="px-6">
                <span className="inline-block w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
                Find adalah platform pembelajaran keuangan yang dirancang khusus
                untuk Gen Z. Kami menyediakan video pembelajaran interaktif tentang
                investasi, saham, crypto, dan manajemen keuangan.
              </div>
            </AccordionItem>

            <AccordionItem key="2" aria-label="Apakah ada sertifikat?" title="Apakah ada sertifikat?" className="relative overflow-hidden">
              <div 
                className="absolute bottom-0 left-0 w-16 h-16 opacity-[0.02] pointer-events-none"
                style={{
                  backgroundImage: `repeating-linear-gradient(45deg, #f59e0b, #f59e0b 1px, transparent 1px, transparent 8px)`
                }}
              ></div>
              <div className="px-6">
                <span className="inline-block w-2 h-2 bg-orange-400 rounded-full mr-2"></span>
                Ya, setiap peserta yang menyelesaikan kelas akan mendapatkan
                sertifikat kelulusan yang bisa digunakan untuk melengkapi CV atau
                portfolio.
              </div>
            </AccordionItem>

            <AccordionItem key="3" aria-label="Berapa lama akses ke materi?" title="Berapa lama akses ke materi?" className="relative overflow-hidden">
              <div className="absolute top-1/2 right-4 w-8 h-8 border border-yellow-300 rounded-full opacity-10 pointer-events-none"></div>
              <div className="px-6">
                <span className="inline-block w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                Setelah membeli kelas, Anda memiliki akses seumur hidup ke semua
                materi pembelajaran, termasuk video, PDF, dan template yang tersedia.
              </div>
            </AccordionItem>

            <AccordionItem key="4" aria-label="Apakah ada konsultasi?" title="Apakah ada konsultasi?" className="relative overflow-hidden">
              <div 
                className="absolute top-0 left-0 w-12 h-12 opacity-[0.03] pointer-events-none"
                style={{
                  backgroundImage: `conic-gradient(from 0deg, #f59e0b, transparent, #f59e0b)`
                }}
              ></div>
              <div className="px-6">
                <span className="inline-block w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                Ya, kami menyediakan sesi konsultasi gratis untuk membantu Anda
                memilih kelas yang sesuai dengan kebutuhan dan tujuan finansial Anda.
              </div>
            </AccordionItem>

            <AccordionItem key="5" aria-label="Bagaimana cara pembayaran?" title="Bagaimana cara pembayaran?" className="relative overflow-hidden">
              <div className="absolute bottom-2 right-2 w-6 h-6 bg-gradient-to-br from-yellow-200 to-orange-200 rounded-full opacity-15 pointer-events-none"></div>
              <div className="px-6">
                <span className="inline-block w-2 h-2 bg-yellow-600 rounded-full mr-2"></span>
                Pembayaran bisa dilakukan melalui transfer bank, e-wallet (GoPay,
                OVO, DANA), atau kartu kredit/debit.
              </div>
            </AccordionItem>
          </Accordion>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center mt-12"
        >
          <div className="flex items-center gap-2 bg-gradient-to-r from-yellow-50 to-orange-50 px-6 py-3 rounded-full border border-yellow-200/30">
            <span className="text-yellow-600 text-sm font-medium">Masih ada pertanyaan?</span>
            <motion.span 
              className="text-orange-500"
              animate={{ rotate: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              💬
            </motion.span>
            <span className="text-yellow-600 text-sm font-medium">Hubungi kami!</span>
          </div>
        </motion.div>

        <motion.div
          className="absolute top-20 right-10 text-yellow-400 opacity-30 text-sm font-medium"
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          FAQ ✨
        </motion.div>
      </div>
    </section>
  );
}