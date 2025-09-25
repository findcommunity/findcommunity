export default function PartnersSection() {
  return (
    <section className="py-2 bg-white overflow-hidden">
      <div className="text-center mb-12">
        <h2 className="text-2xl font-bold text-gray-400 mb-4">
          Dipercaya oleh Partner Terpercaya
        </h2>
      </div>

      <div className="relative">
        <div className="flex animate-scroll-right mt-4">
          {[
            { name: "Bukalapak", src: "/logobukalapak.png" },
            { name: "OVO", src: "/logoovo.png" },
            { name: "DANA", src: "/logodana.png" },
            { name: "LinkAja", src: "/logolinkaja.png" },
            { name: "Bibit", src: "/logobibit.png" },
            { name: "Binance", src: "/logobinance.png" },
            { name: "Bukalapak", src: "/logobukalapak.png" },
            { name: "OVO", src: "/logoovo.png" },
            { name: "DANA", src: "/logodana.png" },
            { name: "LinkAja", src: "/logolinkaja.png" },
            { name: "Bibit", src: "/logobibit.png" },
            { name: "Binance", src: "/logobinance.png" },
          ].map((partner, index) => (
            <div
              key={`partner-${index}`}
              className="flex-shrink-0 mx-6 px-6 py-3"
            >
              <img
                src={partner.src}
                alt={partner.name}
                className="h-10 md:h-12 w-auto object-contain filter grayscale opacity-80"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
