"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import LoadingScreen from "./components/LoadingScreen";
import Hero from "./components/Hero";

import Footer from "./components/Footer";
import Showroom from "./components/Showroom";
import Pricing from "./components/Pricing";

export default function Home() {
  const [loading, setLoading] = useState(true);
  
  const handleLoadingComplete = () => {
    setLoading(false);
  };

  // Showroom text animation variants
  const showroomText = "Keşfedin";
  
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const letterVariants = {
    hidden: { 
      opacity: 0,
      x: -100,
      scaleX: 0,
      filter: "blur(10px)"
    },
    visible: {
      opacity: 1,
      x: 0,
      scaleX: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.3,
        ease: [0.25, 0.46, 0.45, 0.94],
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <>
      {loading && <LoadingScreen onComplete={handleLoadingComplete} />}
      <div className="min-h-screen">
        <main>
          <Hero />
          {/* Smooth transition section */}
          <section className="relative pt-32 px-6 bg-gradient-to-b from-black via-neutral-800 via-amber-900/30 via-neutral-900 to-black overflow-hidden">
            {/* Blurred background continuation */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 via-amber-900/20 via-black/40 to-black backdrop-blur-sm" />
            
            {/* Top blur overlay for seamless transition from hero */}
            <div className="absolute -top-24 left-0 w-full h-64 md:h-96 z-30 pointer-events-none">
              <div className="w-full h-full bg-gradient-to-b from-white/10 via-black/60 to-transparent" style={{ filter: 'blur(32px)' }} />
            </div>
            
            <div id="showroom" className="relative z-40 max-w-7xl mx-auto">
              <motion.div 
                className="text-center mb-16"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                {/* Animated Showroom Title */}
                <motion.h2 
                  className="text-3xl md:text-4xl lg:text-7xl font-serif mb-4 text-white overflow-hidden"
                  variants={containerVariants}
                >
                  {showroomText.split("").map((letter, index) => (
                    <motion.span
                      key={index}
                      variants={letterVariants}
                      className="inline-block relative"
                      style={{
                        transformOrigin: "left center",
                        textShadow: "0 0 30px rgba(255,255,255,0.3)"
                      }}
                    >
                      {letter}
                      {/* Subtle glow effect for each letter */}
                      <motion.span
                        className="absolute inset-0 text-white/20"
                        initial={{ scale: 1 }}
                        animate={{ 
                          scale: [1, 1.05, 1],
                          opacity: [0.2, 0.4, 0.2] 
                        }}
                        transition={{
                          duration: 0.3,
                          repeat: Infinity,
                          delay: index * 0.1
                        }}
                      >
                        {letter}
                      </motion.span>
                    </motion.span>
                  ))}
                </motion.h2>
                
                {/* Animated subtitle */}
                <motion.p
                  className="text-lg text-white/80 max-w-2xl mx-auto"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    delay: 0.3, 
                    duration: 0.3,
                    ease: "easeOut"
                  }}
                >
                  Yapay zeka ile üretilen reklam filmlerimizi keşfedin
                </motion.p>
              </motion.div>
              
              {/* Glassmorphism container with entrance animation */}
              <motion.div 
                className="bg-white/5 backdrop-blur-md rounded-3xl shadow-2xl p-2 md:p-12 border border-white/10 relative overflow-hidden"
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ 
                  delay: 0.5, 
                  duration: 0.3,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
              >
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
                <div className="relative z-10">
                  <Showroom />
                </div>
              </motion.div>
            </div>
            
            <Pricing />
            <Footer />
          </section>
          {/* <Catalog /> */}
          {/* <Testimonials references={references}/> */}
        </main>
      </div>
    </>
  );
}