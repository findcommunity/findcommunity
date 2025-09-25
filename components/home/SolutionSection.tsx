"use client";
import { Card, CardBody } from "@heroui/card";
import { Button } from "@heroui/button";
import { useRef } from "react";
import { title } from "../primitives";
import { FaCheckCircle } from "react-icons/fa";

export default function SolutionSection() {
  const sliderRef = useRef<HTMLDivElement | null>(null);

  const classes = [
    {
      id: "saham",
      title: "Kelas Saham",
      price: "Rp 299.000",
      image: "/classsaham.jpg",
      description:
        "Dasar-dasar pasar saham, analisis fundamental & teknikal, dan cara membeli saham pertama Anda.",
      category: "Saham",
      level: "Pemula",
      instructor: "Raka Pratama",
      bestSeller: true,
      videos: 24,
      duration: "8 jam 30 menit",
    },
    {
      id: "crypto",
      title: "Kelas Crypto",
      price: "Rp 399.000",
      image: "/classcrypto.jpg",
      description:
        "Memahami blockchain, tokenomics, manajemen risiko, dan strategi trading aset kripto.",
      category: "Crypto",
      level: "Menengah",
      instructor: "Nadia Putri",
      bestSeller: false,
      videos: 18,
      duration: "7 jam 10 menit",
    },
    {
      id: "investasi",
      title: "Kelas Investasi",
      price: "Rp 349.000",
      image: "/classinvest.jpg",
      description:
        "Menyusun rencana keuangan, diversifikasi portofolio, dan memilih instrumen investasi sesuai tujuan.",
      category: "Investasi",
      level: "Pemula",
      instructor: "Bimo Santosa",
      bestSeller: false,
      videos: 20,
      duration: "6 jam 45 menit",
    },
    {
      id: "financial",
      title: "Financial Planning",
      price: "Rp 199.000",
      image: "/classfinance.jpg",
      description:
        "Membuat anggaran, dana darurat, manajemen utang, dan perencanaan keuangan jangka panjang.",
      category: "Perencanaan",
      level: "Pemula",
      instructor: "Sari Lestari",
      bestSeller: false,
      videos: 15,
      duration: "5 jam 20 menit",
    },
    {
      id: "emas",
      title: "Investasi Emas",
      price: "Rp 249.000",
      image: "/classemas.jpg",
      description:
        "Strategi beli-jual emas, menyimpan dengan aman, dan peran emas dalam lindung nilai.",
      category: "Emas",
      level: "Menengah",
      instructor: "Dian Kurnia",
      bestSeller: true,
      videos: 16,
      duration: "5 jam 50 menit",
    },
  ];

  const scrollByAmount = (amount: number) => {
    if (!sliderRef.current) return;
    sliderRef.current.scrollBy({ left: amount, behavior: "smooth" });
  };

  // Drag to scroll (mouse & touch)
  const isDraggingRef = useRef(false);
  const dragStartXRef = useRef(0);
  const scrollStartLeftRef = useRef(0);

  const onDragStartMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!sliderRef.current) return;
    isDraggingRef.current = true;
    dragStartXRef.current = e.pageX - sliderRef.current.offsetLeft;
    scrollStartLeftRef.current = sliderRef.current.scrollLeft;
  };

  const onDragMoveMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!sliderRef.current || !isDraggingRef.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = x - dragStartXRef.current;
    sliderRef.current.scrollLeft = scrollStartLeftRef.current - walk;
  };

  const onDragEndMouse = () => {
    isDraggingRef.current = false;
  };

  const onDragStartTouch = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!sliderRef.current) return;
    const touch = e.touches[0];
    isDraggingRef.current = true;
    dragStartXRef.current = touch.pageX - sliderRef.current.offsetLeft;
    scrollStartLeftRef.current = sliderRef.current.scrollLeft;
  };

  const onDragMoveTouch = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!sliderRef.current || !isDraggingRef.current) return;
    const touch = e.touches[0];
    const x = touch.pageX - sliderRef.current.offsetLeft;
    const walk = x - dragStartXRef.current;
    sliderRef.current.scrollLeft = scrollStartLeftRef.current - walk;
  };

  const onDragEndTouch = () => {
    isDraggingRef.current = false;
  };

  return (
    <section className="py-10 bg-orange-300">
      <div className="max-w-7xl mx-auto pl-0 pr-0">
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-6 lg:col-span-2 pl-6 md:pl-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 text-orange-700 text-xs md:text-sm font-medium shadow-sm">
                <span className="inline-block h-2 w-2 rounded-full bg-orange-500"></span>
                Kurikulum Praktis • Untuk Pemula & Menengah
              </div>
              <h1 className={title({ size: "md" }) + " text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight text-gray-900"}>
                Preview Kelas
              </h1>
              <div className="h-1 w-28 md:w-32 rounded-full bg-gradient-to-r from-orange-400 to-orange-600" />
            </div>
            <p className="text-base md:text-lg text-gray-800/90 leading-relaxed max-w-[30ch]">
              Jelajahi kelas populer yang bisa kamu ikuti untuk meningkatkan kemampuan finansial dan investasi kamu
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm md:text-base">
                <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-orange-500 flex items-center justify-center">
                  <FaCheckCircle className="w-4 h-4 text-white" />
                </div>
                <span className="text-gray-800 font-medium">Kelas dari mentor berpengalaman</span>
              </li>
              <li className="flex items-center gap-3 text-sm md:text-base">
                <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-orange-500 flex items-center justify-center">
                  <FaCheckCircle className="w-4 h-4 text-white" />
                </div>
                <span className="text-gray-800 font-medium">Materi lengkap dan terstruktur</span>
              </li>
              <li className="flex items-center gap-3 text-sm md:text-base">
                <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-orange-500 flex items-center justify-center">
                  <FaCheckCircle className="w-4 h-4 text-white" />
                </div>
                <span className="text-gray-800 font-medium">Akses seumur hidup</span>
              </li>
            </ul>
            <Button
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300"
            >
              Lihat Semua Kelas
            </Button>
            
            {/* Navigation buttons */}
            <div className="flex items-center gap-2">
              <Button
                variant="light"
                className="rounded-full border border-orange-200 bg-white/80 hover:bg-white"
                onPress={() => scrollByAmount(-360)}
              >
                ←
              </Button>
              <Button
                variant="light"
                className="rounded-full border border-orange-200 bg-white/80 hover:bg-white"
                onPress={() => scrollByAmount(360)}
              >
                →
              </Button>
            </div>
          </div>

          {/* Right side - Card slider */}
          <div className="relative lg:col-span-3 -ml-4 md:-ml-8 lg:-ml-14 xl:-ml-20 2xl:-ml-28">

            {/* Mobile nav buttons overlay */}
            <div className="lg:hidden absolute inset-y-0 left-0 right-0 pointer-events-none z-10">
              <div className="flex justify-between items-center h-full">
                <button
                  aria-label="Sebelumnya"
                  onClick={() => scrollByAmount(-280)}
                  className="pointer-events-auto ml-2 w-9 h-9 rounded-full bg-white/90 shadow border border-orange-200 flex items-center justify-center"
                >
                  ←
                </button>
                <button
                  aria-label="Berikutnya"
                  onClick={() => scrollByAmount(280)}
                  className="pointer-events-auto mr-2 w-9 h-9 rounded-full bg-white/90 shadow border border-orange-200 flex items-center justify-center"
                >
                  →
                </button>
              </div>
            </div>

            <div
              ref={sliderRef}
              className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 [-ms-overflow-style:none] [scrollbar-width:none] select-none cursor-grab active:cursor-grabbing"
              onMouseDown={onDragStartMouse}
              onMouseMove={onDragMoveMouse}
              onMouseLeave={onDragEndMouse}
              onMouseUp={onDragEndMouse}
              onTouchStart={onDragStartTouch}
              onTouchMove={onDragMoveTouch}
              onTouchEnd={onDragEndTouch}
            >
              {/* hide scrollbar */}
              <style>{`.no-scrollbar::-webkit-scrollbar{display:none}`}</style>
              {classes.map((item) => (
                <Card
                  key={item.id}
                  className="group min-w-[280px] lg:min-w-[320px] snap-start border border-orange-200 bg-white/90 backdrop-blur-[1px] ring-1 ring-orange-100 hover:ring-orange-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-out"
                  radius="lg"
                >
                  <div className="relative h-40 w-full overflow-hidden rounded-t-large">
                    <span className="absolute top-2 left-2 z-10 px-2 py-1 rounded-full text-[11px] font-semibold bg-orange-400 text-orange-900 shadow-sm">
                      {item.category}
                    </span>
                    {item.bestSeller && (
                      <span className="absolute top-2 right-2 z-10 px-2 py-1 rounded-full text-[11px] font-semibold bg-orange-500 text-white shadow-sm">
                        Best Seller
                      </span>
                    )}
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]"
                      loading="lazy"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                    <div className="absolute bottom-2 left-2 z-10">
                      <span className="px-2 py-1 rounded-full text-[12px] font-semibold bg-white/90 text-gray-900 shadow">{item.price}</span>
                    </div>
                  </div>
                  <CardBody>
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="font-semibold text-gray-900 text-lg md:text-xl">{item.title}</h3>
                        <div className="flex items-center gap-2 text-orange-600 mt-1">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden>
                            <path d="M12 .587l3.668 7.431L24 9.753l-6 5.848 1.417 8.262L12 19.771 4.583 23.863 6 15.601 0 9.753l8.332-1.735z"/>
                          </svg>
                          <span className="text-sm font-medium text-orange-700">4.5 • 1.2k+ siswa</span>
                          <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold bg-orange-100 text-orange-700">{item.level}</span>
                        </div>
                        <p className="text-base md:text-lg text-gray-700 mt-2">{item.description}</p>
                        <div className="mt-3 flex flex-wrap items-center gap-2 text-sm md:text-base">
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-orange-50 text-orange-800 ring-1 ring-orange-200">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden>
                              <path d="M4 4h16v2H4zM4 18h16v2H4z"/>
                              <path d="M6 8h12v8H6z"/>
                            </svg>
                            {item.videos} video
                          </span>
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-orange-50 text-orange-800 ring-1 ring-orange-200">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden>
                              <path d="M12 8V12l3 3" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                              <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" fill="none"/>
                            </svg>
                            {item.duration}
                          </span>
                        </div>
                        <div className="mt-3 flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-300 to-orange-500 text-white font-bold flex items-center justify-center text-xs shadow">
                            {item.instructor.split(' ').map((n)=>n[0]).slice(0,2).join('')}
                          </div>
                          <span className="text-sm text-gray-700">{item.instructor}</span>
                        </div>
                      </div>
                      <Button
                        as={"a"}
                        href={`#kelas-${item.id}`}
                        size="sm"
                        className="bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-sm hover:shadow-md"
                      >
                        <span className="inline-flex items-center gap-1">Lihat
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden>
                            <path d="M13 5l7 7-7 7M5 12h14" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </span>
                      </Button>
                    </div>
                  </CardBody>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



