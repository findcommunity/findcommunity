import { Card, CardBody } from "@heroui/card";
import { useMemo } from "react";
import { title } from "../primitives";

export default function TestimonialsSection() {
  const testimonials = useMemo(
    () => [
      { initial: "A", color: "bg-primary-500", name: "Andi, 22", role: "Mahasiswa", text: "Berhasil investasi saham pertama kali setelah ikut kelas Find. Penjelasannya mudah dipahami dan praktis!" },
      { initial: "S", color: "bg-secondary-500", name: "Sari, 24", role: "Fresh Graduate", text: "Kelas crypto-nya sangat membantu! Sekarang sudah bisa trading dengan lebih percaya diri." },
      { initial: "R", color: "bg-primary-600", name: "Rizki, 21", role: "Freelancer", text: "Financial planning dari Find membantu saya mengatur keuangan freelance dengan lebih baik." },
      { initial: "M", color: "bg-secondary-600", name: "Maya, 23", role: "Analis Junior", text: "Materi analisis fundamentalnya detail dan mudah diikuti. Sangat berguna untuk kerja harian saya." },
      { initial: "B", color: "bg-primary-500", name: "Budi, 25", role: "Karyawan Swasta", text: "Akhirnya punya budgeting rapi dan dana darurat. Template yang diberikan sangat membantu!" },
      { initial: "L", color: "bg-secondary-500", name: "Lia, 20", role: "Mahasiswi", text: "Pembawaan mentor enak, tidak menggurui. Sekarang lebih paham reksadana dan risikonya." },
      { initial: "D", color: "bg-primary-500", name: "Doni, 26", role: "Software Engineer", text: "Insight soal diversifikasi portofolio membuka sudut pandang baru. Recommended!" },
      { initial: "N", color: "bg-secondary-500", name: "Nina, 22", role: "Content Creator", text: "Belajar budgeting jadi fun. Worksheet-nya gampang dipakai untuk rutinitas bulanan." },
      { initial: "F", color: "bg-primary-600", name: "Fajar, 27", role: "Akuntan", text: "Penjelasan pajak investasi ringkas dan to-the-point. Sangat membantu pekerjaan saya." },
      { initial: "C", color: "bg-secondary-600", name: "Citra, 19", role: "Pelajar", text: "Baru mulai belajar saham tapi jadi makin pede setelah ikut webinar perkenalan." },
      { initial: "H", color: "bg-primary-500", name: "Hadi, 28", role: "Wirausaha", text: "Strategi cashflow bisnis kecilnya applicable. Bisa langsung saya terapkan di toko." },
      { initial: "T", color: "bg-secondary-500", name: "Tia, 23", role: "Desainer", text: "Suka dengan gaya mengajar mentornya. Tidak ribet, langsung ke hal penting." },
    ],
    []
  );

  const row1 = testimonials.slice(0, Math.ceil(testimonials.length / 2));
  const row2 = testimonials.slice(Math.ceil(testimonials.length / 2));

  const duplicatedRow1 = [...row1, ...row1];
  const duplicatedRow2 = [...row2, ...row2];

  return (
    <section className="py-40 bg-white relative overflow-hidden">
      <div className="absolute inset-0 rounded-xl bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:80px_80px] opacity-50 pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-14">
        <h1 className={title({ size: "md" }) + " text-xl md:text-3xl"}>
            Kata Mereka Tentang <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">Find</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            Cerita nyata dari Gen Z yang terbantu dengan pembelajaran finansial di Find.
          </p>
        </div>

        <div className="mb-10">
          <div className="flex gap-6 scroll-row-1" style={{ width: "max-content" }}>
            {duplicatedRow1.map((t, idx) => (
              <Card
                key={`row1-${t.initial}-${idx}`}
                className="p-6 w-[300px] h-[280px] flex-shrink-0 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition"
              >
                <CardBody>
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 ${t.color} rounded-full flex items-center justify-center text-white font-bold`}>
                      {t.initial}
                    </div>
                    <div className="ml-3">
                      <h4 className="font-semibold text-gray-800">{t.name}</h4>
                      <p className="text-sm text-gray-500">{t.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic relative pl-6">
                    <span className="absolute left-0 top-0 text-3xl text-primary-400 leading-none">“</span>
                    {t.text}
                  </p>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <div className="flex gap-6 scroll-row-2" style={{ width: "max-content" }}>
            {duplicatedRow2.map((t, idx) => (
              <Card
                key={`row2-${t.initial}-${idx}`}
                className="p-6 w-[300px] h-[280px] flex-shrink-0 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition"
              >
                <CardBody>
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 ${t.color} rounded-full flex items-center justify-center text-white font-bold`}>
                      {t.initial}
                    </div>
                    <div className="ml-3">
                      <h4 className="font-semibold text-gray-800">{t.name}</h4>
                      <p className="text-sm text-gray-500">{t.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic relative pl-6">
                    <span className="absolute left-0 top-0 text-3xl text-primary-400 leading-none">“</span>
                    {t.text}
                  </p>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
          @keyframes scrollLeft {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @keyframes scrollRight {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }
          .scroll-row-1 {
            animation: scrollLeft 100s linear infinite;
          }
          .scroll-row-2 {
            animation: scrollRight 100s linear infinite;
          }
          .scroll-row-1:hover,
          .scroll-row-2:hover {
            animation-play-state: paused !important;
          }
        `,
        }}
      />
    </section>
  );
}
