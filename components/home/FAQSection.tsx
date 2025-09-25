import { Accordion, AccordionItem } from "@heroui/accordion";
import { title } from "../primitives";

export default function FAQSection() {
  return (
    <section className="relative py-20 bg-white">

      <div className="relative max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
        <h1 className={title({ size: "md" }) + " text-xl md:text-3xl"}>
            Pertanyaan yang{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              Sering Diajukan
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            Semua jawaban yang kamu butuhkan sebelum mulai belajar dengan Find 🚀
          </p>
        </div>

        <Accordion
          className="rounded-2xl shadow-lg bg-white/70 backdrop-blur-sm"
          itemClasses={{
            base: "border-b border-gray-200 last:border-none",
            title: "font-semibold text-gray-800 text-lg hover:text-yellow-600 transition",
            content: "text-gray-600 leading-relaxed",
          }}
        >
          <AccordionItem key="1" aria-label="Apa itu Find?" title="Apa itu Find?">
            Find adalah platform pembelajaran keuangan yang dirancang khusus
            untuk Gen Z. Kami menyediakan video pembelajaran interaktif tentang
            investasi, saham, crypto, dan manajemen keuangan.
          </AccordionItem>

          <AccordionItem key="2" aria-label="Apakah ada sertifikat?" title="Apakah ada sertifikat?">
            Ya, setiap peserta yang menyelesaikan kelas akan mendapatkan
            sertifikat kelulusan yang bisa digunakan untuk melengkapi CV atau
            portfolio.
          </AccordionItem>

          <AccordionItem key="3" aria-label="Berapa lama akses ke materi?" title="Berapa lama akses ke materi?">
            Setelah membeli kelas, Anda memiliki akses seumur hidup ke semua
            materi pembelajaran, termasuk video, PDF, dan template yang tersedia.
          </AccordionItem>

          <AccordionItem key="4" aria-label="Apakah ada konsultasi?" title="Apakah ada konsultasi?">
            Ya, kami menyediakan sesi konsultasi gratis untuk membantu Anda
            memilih kelas yang sesuai dengan kebutuhan dan tujuan finansial Anda.
          </AccordionItem>

          <AccordionItem key="5" aria-label="Bagaimana cara pembayaran?" title="Bagaimana cara pembayaran?">
            Pembayaran bisa dilakukan melalui transfer bank, e-wallet (GoPay,
            OVO, DANA), atau kartu kredit/debit.
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
