export default function PartnersSection() {
  const partners = [
    { name: "Bukalapak", src: "/logobukalapak.png" },
    { name: "OVO", src: "/logoovo.png" },
    { name: "DANA", src: "/logodana.png" },
    { name: "LinkAja", src: "/logolinkaja.png" },
    { name: "Bibit", src: "/logobibit.png" },
    { name: "Binance", src: "/logobinance.png" },
  ];

  const duplicatedPartners = [...partners, ...partners, ...partners];

  return (
    <>
      <style jsx>{`
        @keyframes scroll-right {
          0% {
            transform: translateX(-33.333%);
          }
          100% {
            transform: translateX(-66.666%);
          }
        }
        
        .animate-scroll-right {
          animation: scroll-right 20s linear infinite;
        }
        
        @media (max-width: 768px) {
          .animate-scroll-right {
            animation: scroll-right 25s linear infinite;
          }
        }
        
        .animate-scroll-right:hover {
          animation-play-state: paused;
        }
      `}</style>
      
      <section className="py-8 md:py-16 bg-white overflow-hidden">
        <div className="text-center mb-8 md:mb-12 px-4">
          <h2 className="text-lg md:text-2xl lg:text-3xl font-bold text-gray-600 mb-4">
            Dipercaya oleh Partner Terpercaya
          </h2>
        </div>

        <div className="relative">
          <div className="flex animate-scroll-right">
            {duplicatedPartners.map((partner, index) => (
              <div
                key={`partner-${index}`}
                className="flex-shrink-0 mx-3 md:mx-8 px-2 md:px-4 py-3 flex items-center justify-center"
              >
                <img
                  src={partner.src}
                  alt={`${partner.name} logo`}
                  className="h-8 sm:h-10 md:h-10 lg:h-12 w-auto object-contain filter grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}