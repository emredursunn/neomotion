"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const Hero = () => {
  const text = "Neomotion";
  
  const letterVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      filter: "blur(10px)",
      scale: 0.8
    },
    visible: (i:any) => ({
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      scale: 1,
      transition: {
        delay: 0.8 + i * 0.1,
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }),
    hover: {
      scale: 1.1,
      filter: "blur(0px) drop-shadow(0 0 20px rgba(255,255,255,0.8))",
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Blurred video background */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="https://labs.google/assets/videos/flow-hero.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      
      {/* Heavy blur overlay */}
      <div className="absolute inset-0 backdrop-blur-3xl bg-black/30 z-10" />
      
      {/* Extra soft, tall blurred gradient at bottom for smooth transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 sm:h-48 md:h-64 lg:h-96 z-20 pointer-events-none">
        <div 
          className="w-full h-full bg-gradient-to-b from-transparent via-black/60 to-black/90" 
          style={{ filter: 'blur(32px)' }} 
        />
      </div>
      
      {/* Content */}
      <motion.div
        className="relative z-30 text-center w-full max-w-7xl flex flex-col items-center justify-center py-8 sm:py-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        {/* Main Title - Responsive animated text */}
        <motion.div
          className="mb-6 sm:mb-8 lg:mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          <motion.h1 
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[10rem] font-bold leading-none text-white tracking-tight cursor-default"
            whileHover="hover"
          >
            {text.split("").map((letter, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={letterVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                className="inline-block"
                style={{
                  textShadow: "0 0 40px rgba(255,255,255,0.3)"
                }}
              >
                {letter}
              </motion.span>
            ))}
          </motion.h1>
        </motion.div>
        
        {/* Tagline - Responsive text */}
        <motion.p
          className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-white/90 mb-8 sm:mb-10 lg:mb-12 font-light leading-relaxed max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto px-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          Reklamlara tonla para dökmeye son verin.
        </motion.p>
        
        {/* CTA Button - Responsive sizing */}
        <motion.div
          className="flex justify-center mb-4 sm:mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <Link
            href="#showroom"
            className="inline-block px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-medium bg-white text-black rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95"
          >
            Hemen keşfedin
          </Link>
        </motion.div>
        
        {/* Subscription note - Responsive text */}
        <motion.p
          className="text-xs sm:text-sm text-gray-400 text-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          Stüdyo kalitesinde reklam videoları, örneklere göz at.
        </motion.p>
      </motion.div>
      
      {/* Minimal branding - Responsive positioning */}
      <motion.div
        className="absolute top-4 left-4 sm:top-6 sm:left-6 lg:top-8 lg:left-8 z-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <span className="text-white text-xs sm:text-sm font-medium">Neomotion</span>
      </motion.div>
    </section>
  );
};

export default Hero;