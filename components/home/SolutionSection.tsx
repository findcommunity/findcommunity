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
    <section className="py-8 sm:py-12 lg:py-16 bg-orange-300">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-12 items-center">
          
          {/* Left side - Text content */}
          <div className="space-y-4 sm:space-y-6 lg:col-span-2 px-4 sm:px-6 lg:px-0 lg:pl-6">
            <div className="space-y-3 sm:space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:py-2 rounded-full bg-white/80 text-orange-700 text-xs sm:text-sm font-medium shadow-sm">
                <span className="inline-block h-2 w-2 rounded-full bg-orange-500"></span>
                <span className="hidden sm:inline">Kurikulum Praktis • Untuk Pemula & Menengah</span>
                <span className="sm:hidden">Kurikulum Praktis</span>
              </div>
              
              <h1 className={`${title({ size: "md" })} text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight text-gray-900`}>
                Preview Kelas
              </h1>
              
              <div className="h-1 w-20 sm:w-28 md:w-32 rounded-full bg-gradient-to-r from-orange-400 to-orange-600" />
            </div>
            
            <p className="text-sm sm:text-base md:text-lg text-gray-800/90 leading-relaxed max-w-sm">
              Jelajahi kelas populer yang bisa kamu ikuti untuk meningkatkan kemampuan finansial dan investasi kamu
            </p>
            
            <ul className="space-y-2 sm:space-y-3">
              <li className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base">
                <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0">
                  <FaCheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                </div>
                <span className="text-gray-800 font-medium">Kelas dari mentor berpengalaman</span>
              </li>
              <li className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base">
                <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0">
                  <FaCheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                </div>
                <span className="text-gray-800 font-medium">Materi lengkap dan terstruktur</span>
              </li>
              <li className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base">
                <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0">
                  <FaCheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                </div>
                <span className="text-gray-800 font-medium">Akses seumur hidup</span>
              </li>
            </ul>
            
            <Button
              size="lg"
              className="w-full sm:w-auto bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold px-6 sm:px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300"
            >
              Lihat Semua Kelas
            </Button>
            
            {/* Desktop Navigation buttons */}
            <div className="hidden lg:flex items-center gap-2">
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
          <div className="relative lg:col-span-3 px-4 sm:px-0 lg:-ml-14 xl:-ml-20 2xl:-ml-28">
            
            {/* Mobile & Tablet nav buttons overlay */}
            <div className="lg:hidden absolute inset-y-0 left-0 right-0 pointer-events-none z-10">
              <div className="flex justify-between items-center h-full px-2">
                <button
                  aria-label="Sebelumnya"
                  onClick={() => scrollByAmount(-280)}
                  className="pointer-events-auto w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/90 shadow border border-orange-200 flex items-center justify-center text-sm sm:text-base hover:bg-white transition-colors"
                >
                  ←
                </button>
                <button
                  aria-label="Berikutnya"
                  onClick={() => scrollByAmount(280)}
                  className="pointer-events-auto w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/90 shadow border border-orange-200 flex items-center justify-center text-sm sm:text-base hover:bg-white transition-colors"
                >
                  →
                </button>
              </div>
            </div>

            <div
              ref={sliderRef}
              className="flex gap-4 sm:gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 [-ms-overflow-style:none] [scrollbar-width:none] select-none cursor-grab active:cursor-grabbing"
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
                  className="group min-w-[260px] sm:min-w-[280px] lg:min-w-[320px] xl:min-w-[340px] snap-start border border-orange-200 bg-white/90 backdrop-blur-[1px] ring-1 ring-orange-100 hover:ring-orange-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-out"
                  radius="lg"
                >
                  <div className="relative h-32 sm:h-36 lg:h-40 w-full overflow-hidden rounded-t-large">
                    <span className="absolute top-2 left-2 z-10 px-2 py-1 rounded-full text-xs font-semibold bg-orange-400 text-orange-900 shadow-sm">
                      {item.category}
                    </span>
                    {item.bestSeller && (
                      <span className="absolute top-2 right-2 z-10 px-2 py-1 rounded-full text-xs font-semibold bg-orange-500 text-white shadow-sm">
                        Best
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
                      <span className="px-2 py-1 rounded-full text-xs sm:text-sm font-semibold bg-white/90 text-gray-900 shadow">
                        {item.price}
                      </span>
                    </div>
                  </div>
                  
                  <CardBody className="p-3 sm:p-4 lg:p-6">
                    <div className="space-y-3">
                      <div>
                        <h3 className="font-semibold text-gray-900 text-base sm:text-lg lg:text-xl leading-tight">
                          {item.title}
                        </h3>
                        <div className="flex flex-wrap items-center gap-2 text-orange-600 mt-1">
                          <div className="flex items-center gap-1">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden>
                              <path d="M12 .587l3.668 7.431L24 9.753l-6 5.848 1.417 8.262L12 19.771 4.583 23.863 6 15.601 0 9.753l8.332-1.735z"/>
                            </svg>
                            <span className="text-xs sm:text-sm font-medium text-orange-700">4.5</span>
                          </div>
                          <span className="text-xs sm:text-sm font-medium text-orange-700">1.2k+ siswa</span>
                          <span className="inline-flex items-center px-1.5 py-0.5 rounded-full text-xs font-semibold bg-orange-100 text-orange-700">
                            {item.level}
                          </span>
                        </div>
                      </div>
                      
                      <p className="text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed line-clamp-2">
                        {item.description}
                      </p>
                      
                      <div className="flex flex-wrap items-center gap-1.5 text-xs">
                        <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-orange-50 text-orange-800 ring-1 ring-orange-200">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="12" height="12" fill="currentColor" aria-hidden>
                            <path d="M4 4h16v2H4zM4 18h16v2H4z"/>
                            <path d="M6 8h12v8H6z"/>
                          </svg>
                          {item.videos} video
                        </span>
                        <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-orange-50 text-orange-800 ring-1 ring-orange-200">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="12" height="12" fill="currentColor" aria-hidden>
                            <path d="M12 8V12l3 3" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                            <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" fill="none"/>
                          </svg>
                          <span className="hidden sm:inline">{item.duration}</span>
                          <span className="sm:hidden">{item.duration.split(' ')[0]}</span>
                        </span>
                      </div>
                      
                      <div className="flex items-center justify-between pt-2">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 rounded-full bg-gradient-to-br from-orange-300 to-orange-500 text-white font-bold flex items-center justify-center text-xs shadow">
                            {item.instructor.split(' ').map((n)=>n[0]).slice(0,2).join('')}
                          </div>
                          <span className="text-xs sm:text-sm text-gray-700 truncate">
                            {item.instructor}
                          </span>
                        </div>
                        
                        <Button
                          as={"a"}
                          href={`#kelas-${item.id}`}
                          size="sm"
                          className="bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-sm hover:shadow-md text-xs px-3 py-1.5"
                        >
                          <span className="inline-flex items-center gap-1">
                            <span className="hidden sm:inline">Lihat</span>
                            <span className="sm:hidden">→</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="12" height="12" fill="currentColor" aria-hidden className="hidden sm:inline">
                              <path d="M13 5l7 7-7 7M5 12h14" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </span>
                        </Button>
                      </div>
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