"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

type LoadingScreenProps = {
  onComplete: () => void;
};

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 500); // Wait for exit animation to complete
      window.scrollTo(0, 0);
    }, 2500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 bg-white z-50 flex items-center justify-center"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative">
            <motion.h1
              className="text-4xl md:text-6xl font-serif relative z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Neomotion
            </motion.h1>
            
            {/* Decorative underline */}
            <motion.div 
              className="absolute bottom-0 left-0 h-[2px] bg-gold-300"
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: '100%', opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
            />
            
            {/* Slogan text */}
            <motion.p
              className="mt-4 text-sm tracking-widest uppercase text-black/60"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              Yapay Zeka Destekli Reklam Çekimleri
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
