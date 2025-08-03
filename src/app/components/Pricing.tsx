"use client";

import { motion } from "framer-motion";
import React from "react";

const plans = [
  {
    name: "Profesyonel Yapay Zeka Reklam Filmi (15 - 20 Saniye)",
    description: "Orta ölçekli ve büyümeyi hedefleyen işletmeler için marka bilinirliğini güçlendiren, yüksek prodüksiyon kalitesinde 15-20 saniyelik reklam filmleri.",
    features: [
      "Sinema kalitesinde görsel efektler",
      "Uygun bütçeli ve hızlı üretim",
      "Tamamen markanıza özel senaryo ve strateji",
      "Senaryo, storyboard ve yapay zeka render prodüksiyon dahil",
    ],
    highlight: false,
    price: "₺2000",
    originalPrice: "₺3000",
    url: "https://www.shopier.com/38140035"
  },
  {
    name: "Profesyonel Yapay Zeka Reklam Filmi (45-90 Saniye)",
    description: "Orta ölçekli ve büyümeyi hedefleyen işletmeler için marka bilinirliğini güçlendiren, yüksek prodüksiyon kalitesinde 45–90 saniyelik reklam filmleri.",
    features: [
      "Sinema kalitesinde görsel efektler",
      "Uygun bütçeli ve hızlı üretim",
      "Tamamen markanıza özel senaryo ve strateji",
      "Senaryo, storyboard ve yapay zeka render prodüksiyon dahil",
    ],
    highlight: true,
    price: "₺7500",
    originalPrice: "₺8500",
    url: "https://www.shopier.com/38139695"
  },
  {
    name: "Özel Projeler",
    description: "Özel istekleriniz ve projeleriniz için bizimle iletişime geçin.",
    features: [
        "Size özel çözümler",
        "Esnek süre ve formatlar",
        "Detaylı prodüksiyon planlaması",
        "Geniş revizyon ve destek",
    ],
    highlight: false,
    url: "https://www.instagram.com/neomotionmedya?igsh=MXU3enJ3dWpvcXNhYg=="
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
              className={`relative flex flex-col items-center p-4 md:p-12 rounded-3xl shadow-2xl border border-amber-400/30 bg-white/10 backdrop-blur-2xl transition-all duration-300 ${
                plan.highlight
                  ? "scale-105 border-amber-400 bg-amber-400/10 shadow-amber-400/40 ring-2 ring-amber-400"
                  : "hover:border-amber-300/60"
              }`}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: plan.highlight ? 1.05 : 1 }}
              viewport={{ once: true }}
              transition={{ 
                delay: 0.6 + (idx * 0.1), 
                duration: 0.3,
                ease: "easeOut"
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
              
              <h3 className="text-lg sm:text-2xl font-bold text-white mb-2 drop-shadow-lg text-center">{plan.name}</h3>
              <p className="text-white/90 mb-6 md:text-center text-md md:text-lg font-light">{plan.description}</p>
              
              <ul className="mb-10 space-y-3 w-full">
                {plan.features.map((feature) => (
                  <li key={feature} className="text-white/90 flex items-center gap-3 text-sm md:text-base">
                    <span className="inline-block w-2.5 h-2.5 bg-amber-400 rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <motion.button
                onClick={() => window.open(plan.url, "_blank")}
                type="button"
                className={`mt-auto w-full px-4 py-2 md:px-10 md:py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-xl focus:outline-none focus:ring-2 focus:ring-amber-400/60 ${
                  plan.highlight
                    ? "bg-amber-400 text-black hover:bg-amber-500"
                    : "bg-white/20 text-white hover:bg-amber-400 hover:text-black"
                }`}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
              >
                {plan.price ? (
                  <div className="flex flex-col items-center">
                    <span className="text-sm line-through text-white/70">{plan.originalPrice}</span>
                    <span>{plan.price}</span>
                  </div>
                ) : plan.name === "Özel Projeler" ? (
                  "İletişime Geç"
                ) : (
                  "Teklif Al"
                )}
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;