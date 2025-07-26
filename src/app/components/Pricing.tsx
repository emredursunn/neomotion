"use client";

import { motion } from "framer-motion";
import React from "react";

const plans = [
  {
    name: "30 Saniyelik Reklam Filmi",
    price: "$299",
    duration: "30 Saniye",
    description: "Kısa ve etkili reklam filmleriyle markanızı öne çıkarın.",
    features: [
      "Senaryo & Yapay Zeka prodüksiyonu",
      "HD Kalite Teslim",
      "Telif hakkı size ait",
    ],
    highlight: false,
  },
  {
    name: "1 Dakikalık Reklam Filmi",
    price: "$499",
    duration: "1 Dakika",
    description: "Daha fazla hikaye, daha fazla etki. En popüler tercih!",
    features: [
      "Senaryo & Yapay Zeka prodüksiyonu",
      "HD/Full HD Kalite Teslim",
      "Telif hakkı size ait",
      "Kısa revizyon hakkı",
    ],
    highlight: true,
  },
  {
    name: "2 Dakikalık Reklam Filmi",
    price: "$799",
    duration: "2 Dakika",
    description: "Uzun format ile markanızı derinlemesine anlatın.",
    features: [
      "Senaryo & Yapay Zeka prodüksiyonu",
      "Full HD/4K Kalite Teslim",
      "Telif hakkı size ait",
      "Geniş revizyon hakkı",
      "Özel müzik/ses opsiyonu",
    ],
    highlight: false,
  },
];

const Pricing = () => {
  // Pricing text animation variants
  const pricingText = "Fiyatlarımız";
  
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
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Decorative blurred gradient overlays */}
      <div className="absolute -top-32 -left-32 w-[32rem] h-[32rem] opacity-30 rounded-full blur-[120px] z-0" />
      <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] opacity-20 rounded-full blur-[100px] z-0" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Animated Pricing Title */}
          <motion.h2
            className="text-5xl md:text-6xl font-serif py-6 text-white font-bold tracking-tight drop-shadow-xl overflow-hidden"
            variants={containerVariants}
          >
            {pricingText.split("").map((letter, index) => (
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
            className="text-xl text-white/80 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ 
              delay: 0.5, 
              duration: 0.3,
              ease: "easeOut"
            }}
          >
            Markanız için en uygun yapay zeka reklam filmini seçin.
          </motion.p>
        </motion.div>

        {/* Animated pricing cards */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ 
            delay: 0.5, 
            duration: 0.3,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
        >
          {plans.map((plan, idx) => (
            <motion.div
              key={plan.name}
              className={`relative flex flex-col items-center p-12 rounded-3xl shadow-2xl border border-amber-400/30 bg-white/10 backdrop-blur-2xl transition-all duration-300 ${
                plan.highlight
                  ? "scale-105 border-amber-400 bg-amber-400/10 shadow-amber-400/40 ring-2 ring-amber-400"
                  : "hover:scale-105 hover:border-amber-300/60"
              }`}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: plan.highlight ? 1.05 : 1 }}
              viewport={{ once: true }}
              transition={{ 
                delay: 0.6 + (idx * 0.1), 
                duration: 0.3,
                ease: "easeOut"
              }}
              whileHover={{ 
                scale: plan.highlight ? 1.08 : 1.05,
                transition: { duration: 0.2 }
              }}
            >
              {plan.highlight && (
                <motion.span 
                  className="absolute -top-7  bg-amber-400 text-black text-xs font-bold px-6 py-2 rounded-full shadow-xl uppercase tracking-wider border-2 border-white/40"
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + (idx * 0.1), duration: 0.3 }}
                >
                  En Popüler
                </motion.span>
              )}
              
              <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-lg text-center">{plan.name}</h3>
              <div className="text-lg text-amber-300 mb-2 font-semibold">{plan.duration}</div>
              <div className="text-4xl font-extrabold text-amber-400 mb-4 drop-shadow-xl">{plan.price}</div>
              <p className="text-white/90 mb-6 text-center text-lg font-light">{plan.description}</p>
              
              <ul className="mb-10 space-y-3 w-full">
                {plan.features.map((feature) => (
                  <li key={feature} className="text-white/90 flex items-center gap-3 text-base">
                    <span className="inline-block w-2.5 h-2.5 bg-amber-400 rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <motion.button
                className={`mt-auto px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-xl focus:outline-none focus:ring-2 focus:ring-amber-400/60 ${
                  plan.highlight
                    ? "bg-amber-400 text-black hover:bg-amber-500"
                    : "bg-white/20 text-white hover:bg-amber-400 hover:text-black"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Teklif Al
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;