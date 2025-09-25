import { Link } from "@heroui/link";
import { Button } from "@heroui/button";
import { button as buttonStyles } from "@heroui/theme";
import { title, subtitle } from "@/components/primitives";

export default function HeroSection() {
  return (
    <section className="relative flex items-center justify-center py-8 md:py-16 overflow-hidden">
      
      <img
        src="/hero1.png"
        alt="Finance illustration left"
        className="hidden md:block w-56 h-auto absolute left-0 top-[60%] -translate-y-1/2 z-20"
      />
      <div className="relative z-10 flex flex-col items-center justify-center gap-6 text-center w-full max-w-5xl px-6 md:px-10 py-6 md:py-10 rounded-xl bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:80px_80px] -translate-y-6 md:-translate-y-10">

        <h1 className={title({ size: "md" }) + " text-xl md:text-3xl"}>
          <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">Find</span> - Platform Pembelajaran Keuangan untuk{" "}
          <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">Gen Z</span>
        </h1>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 600 60"
          className="w-full h-12 text-yellow-400 my-3"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        >
          {/* Garis estetik melengkung */}
          <path d="M 0 30 Q 150 0, 300 30 T 600 30" />
        </svg>



        <div className={subtitle({ class: "mt-4 text-xs md:text-sm" })}>
          Belajar investasi, saham, dan keuangan lewat video interaktif untuk generasi muda
        </div>


        <div className="flex gap-4 flex-wrap justify-center">
          <Button
            className={
              buttonStyles({
                radius: "full",
                size: "lg",
              }) +
              " bg-gradient-to-r from-yellow-400 to-yellow-600  text-white"
            }
            as={Link}
            href="#kelas"
          >
            Mulai Belajar Sekarang
          </Button>

          <Button
            className={buttonStyles({
              variant: "bordered",
              radius: "full",
              size: "lg",
            })}
            as={Link}
            href="#konsultasi"
          >
            Konsultasi Gratis
          </Button>
        </div>

        <div className="flex flex-wrap gap-12 items-center justify-center text-gray-700 mt-2 text-xs md:text-sm">
          {[
            { label: "E-learning" },
            { label: "Webinar" },
            { label: "Kalkulator" },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="18"
                height="18"
                className="text-primary-600"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 6L9 17l-5-5" />
              </svg>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      <img
        src="/hero2.png"
        alt="Finance illustration right"
        className="hidden md:block w-56 h-auto absolute right-0 top-[50%] -translate-y-1/2 z-10"
      />
    </section>
  );
}
