import { Link } from "@heroui/link";
import { Button } from "@heroui/button";
import { button as buttonStyles } from "@heroui/theme";
import { title, subtitle } from "@/components/primitives";
import { motion } from "framer-motion";
import { FaPlay, FaRocket, FaGraduationCap, FaChartLine, FaCalculator, FaVideo, FaStar} from "react-icons/fa";

export default function HeroSection() {
  return (
    <section className="relative flex items-center justify-center py-4 md:py-2 overflow-hidden">
      <div className="absolute inset-0">
        <svg
          className="absolute bottom-0 w-full h-64 opacity-20"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1440 320"
        >
          <motion.path
            fill="url(#heroWave1)"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,165.3C1248,171,1344,149,1392,138.7L1440,128V320H0Z"
            animate={{ d: [
              "M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,165.3C1248,171,1344,149,1392,138.7L1440,128V320H0Z",
              "M0,128L48,144C96,160,192,192,288,192C384,192,480,160,576,144C672,128,768,128,864,144C960,160,1056,192,1152,197.3C1248,203,1344,181,1392,170.7L1440,160V320H0Z",
              "M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,165.3C1248,171,1344,149,1392,138.7L1440,128V320H0Z"
            ]}}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <defs>
            <linearGradient id="heroWave1" x1="0" x2="1" y1="0" y2="1">
              <stop stopColor="#fbbf24" stopOpacity="0.3" />
              <stop offset="1" stopColor="#f97316" stopOpacity="0.1" />
            </linearGradient>
          </defs>
        </svg>
        
        <svg
          className="absolute bottom-0 w-full h-48 opacity-15"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1440 320"
        >
          <motion.path
            fill="url(#heroWave2)"
            d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,213.3C672,224,768,224,864,213.3C960,203,1056,181,1152,176C1248,171,1344,181,1392,186.7L1440,192V320H0Z"
            animate={{ d: [
              "M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,213.3C672,224,768,224,864,213.3C960,203,1056,181,1152,176C1248,171,1344,181,1392,186.7L1440,192V320H0Z",
              "M0,256L48,245.3C96,235,192,213,288,213.3C384,213,480,235,576,245.3C672,256,768,256,864,245.3C960,235,1056,213,1152,208C1248,203,1344,213,1392,218.7L1440,224V320H0Z",
              "M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,213.3C672,224,768,224,864,213.3C960,203,1056,181,1152,176C1248,171,1344,181,1392,186.7L1440,192V320H0Z"
            ]}}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
          <defs>
            <linearGradient id="heroWave2" x1="0" x2="1" y1="0" y2="1">
              <stop stopColor="#ec4899" stopOpacity="0.2" />
              <stop offset="1" stopColor="#f59e0b" stopOpacity="0.05" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="absolute inset-0 pointer-events-none">

        <motion.div 
          className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-br from-yellow-300/30 to-orange-300/30 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, 20, 0],
            y: [0, -15, 0],
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div 
          className="absolute bottom-32 right-24 w-56 h-56 bg-gradient-to-br from-pink-300/25 to-purple-300/25 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 0.8, 1],
            x: [0, -25, 0],
            y: [0, 20, 0],
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        
        <motion.div 
          className="absolute top-1/3 right-1/4 w-32 h-32 bg-gradient-to-br from-blue-300/30 to-indigo-300/30 rounded-full blur-2xl"
          animate={{ 
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
          }}
          transition={{ 
            duration: 12, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />

        <motion.div
          className="absolute top-24 right-1/4 text-yellow-500/40"
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 15, 0],
          }}
          transition={{ 
            duration: 5, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <FaChartLine size={28} />
        </motion.div>
        
        <motion.div
          className="absolute bottom-1/4 left-1/4 text-orange-500/40"
          animate={{ 
            x: [0, 15, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        >
          <FaGraduationCap size={32} />
        </motion.div>
        
        <motion.div
          className="absolute top-1/2 left-16 text-pink-500/40"
          animate={{ 
            y: [0, -10, 0],
            x: [0, 10, 0],
            rotate: [0, -10, 0],
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        >
          <FaRocket size={24} />
        </motion.div>
        <motion.div 
          className="absolute top-16 left-1/3 w-20 h-20 border-4 border-yellow-400/30 rounded-2xl"
          animate={{ 
            rotate: [0, 45, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        
        <motion.div 
          className="absolute bottom-20 right-1/3 w-16 h-16 bg-gradient-to-br from-orange-400/30 to-pink-400/30 rounded-full"
          animate={{ 
            scale: [1, 1.4, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 4, repeat: Infinity, delay: 1 }}
        />

        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <motion.img
        src="/her1.png"
        alt="Finance illustration left"
        className="hidden md:block w-64 h-auto absolute left-4 top-[60%] -translate-y-1/2 z-20 drop-shadow-2xl"
        initial={{ opacity: 0, x: -50, rotate: -5 }}
        animate={{ opacity: 1, x: 0, rotate: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        whileHover={{ 
          scale: 1.05, 
          rotate: 2,
          transition: { duration: 0.3 }
        }}
      />

      <div className="relative z-10 flex flex-col items-center justify-center gap-8 text-center w-full max-w-6xl px-8 md:px-12 py-12 md:py-16 rounded-3xl bg-white/30">

        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:80px_80px] opacity-30 rounded-3xl"></div>

        <div className="absolute top-6 left-6 w-16 h-16 border-4 border-yellow-400/30 rounded-full"></div>
        <div className="absolute top-6 right-6 w-12 h-12 bg-gradient-to-br from-orange-400/30 to-pink-400/30 rounded-lg rotate-45"></div>
        <div className="absolute bottom-6 left-6 w-14 h-14 bg-gradient-to-br from-yellow-400/30 to-orange-400/30 rounded-full"></div>
        <div className="absolute bottom-6 right-6 w-10 h-10 border-4 border-pink-400/30 rounded-lg rotate-12"></div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className={title({ size: "md" }) + " text-2xl md:text-4xl lg:text-5xl relative z-10"}>
            <motion.span 
              className="bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-600 bg-clip-text text-transparent"
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              Find
            </motion.span> - Platform Pembelajaran Keuangan untuk{" "}
            <motion.span 
              className="bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-600 bg-clip-text text-transparent relative"
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
            >
              Gen Z
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1, delay: 1.5 }}
              />
            </motion.span>
          </h1>
          
          <motion.div
            className="absolute -top-4 -right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs px-3 py-1 rounded-full shadow-lg"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 2 }}
            whileHover={{ scale: 1.1 }}
          >
            <FaStar className="inline mr-1" />
            Trending!
          </motion.div>
        </motion.div>

        <motion.div 
          className="relative w-full max-w-2xl"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 600 60"
            className="w-full h-16 text-yellow-400"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          >
            <motion.path 
              d="M 0 30 Q 150 0, 300 30 T 600 30"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 1 }}
            />
            {/* Decorative dots along the path */}
            {[...Array(5)].map((_, i) => (
              <motion.circle
                key={i}
                cx={120 * i + 60}
                cy={i % 2 === 0 ? 25 : 35}
                r="3"
                fill="currentColor"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.5 + i * 0.2 }}
              />
            ))}
          </svg>

          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute top-1/2 text-yellow-500"
              style={{ left: `${25 + i * 25}%` }}
              animate={{
                y: [0, -10, 0],
                scale: [1, 1.2, 1],
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.3,
              }}
            >
              ✨
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className={subtitle({ class: "mt-6 text-sm md:text-lg max-w-3xl" }) + " relative z-10"}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          Belajar investasi, saham, dan keuangan lewat{" "}
          <span className="font-semibold text-orange-600 relative">
            video interaktif
            <motion.div 
              className="absolute -bottom-1 left-0 right-0 h-0.5 bg-orange-400"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.8, delay: 1.5 }}
            />
          </span>{" "}
          untuk generasi muda
        </motion.div>

        <motion.div 
          className="flex gap-6 flex-wrap justify-center mt-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              className={
                buttonStyles({
                  radius: "full",
                  size: "lg",
                }) +
                " bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-600 text-white shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden group px-8 py-6 text-lg"
              }
              as={Link}
              href="#kelas"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent -skew-x-12"
                initial={{ x: "-100%" }}
                whileHover={{ x: "200%" }}
                transition={{ duration: 0.8 }}
              />
              <FaPlay className="mr-2" />
              Mulai Belajar Sekarang
            </Button>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              className={buttonStyles({
                variant: "bordered",
                radius: "full",
                size: "lg",
              }) + " border-2 border-orange-400 text-orange-600 hover:bg-orange-50 shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-6 text-lg"}
              as={Link}
              href="#konsultasi"
            >
              <FaGraduationCap className="mr-2" />
              Konsultasi Gratis
            </Button>
          </motion.div>
        </motion.div>

        <motion.div 
          className="flex flex-wrap gap-8 md:gap-12 items-center justify-center text-gray-700 mt-8 text-sm md:text-base"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          {[
            { label: "E-learning", icon: <FaGraduationCap className="text-white" />, color: "from-blue-500 to-indigo-500" },
            { label: "Webinar", icon: <FaVideo className="text-white" />, color: "from-green-500 to-teal-500" },
            { label: "Kalkulator", icon: <FaCalculator className="text-white" />, color: "from-purple-500 to-pink-500" },
          ].map((item, index) => (
            <motion.div 
              key={item.label} 
              className="flex items-center gap-3 group cursor-pointer"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.8 + index * 0.2 }}
              whileHover={{ scale: 1.05, y: -2 }}
            >
              <motion.div
                className="relative"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <div className={`w-10 h-10 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center text-white shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                  {item.icon}
                </div>
                <div className="absolute inset-0 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
              <span className="font-medium group-hover:text-gray-900 transition-colors duration-300">{item.label}</span>
            </motion.div>
          ))}
        </motion.div>

      </div>

      <motion.img
        src="/her2.png"
        alt="Finance illustration right"
        className="hidden md:block w-64 h-auto absolute right-4 top-[50%] -translate-y-1/2 z-10 drop-shadow-2xl"
        initial={{ opacity: 0, x: 50, rotate: 5 }}
        animate={{ opacity: 1, x: 0, rotate: 0 }}
        transition={{ duration: 1, delay: 0.7 }}
        whileHover={{ 
          scale: 1.05, 
          rotate: -2,
          transition: { duration: 0.3 }
        }}
      />
    </section>
  );
}