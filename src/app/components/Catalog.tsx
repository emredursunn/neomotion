"use client";

import { useRef } from "react";
import { motion } from "framer-motion";

const exampleWorks = [
  {
    id: "work-001",
    title: "AI Ad Example 1",
    videoUrl: "https://labs.google/assets/videos/flow-hero.mp4",
    thumbnail: "/models/model-1.png",
  },
  {
    id: "work-002",
    title: "AI Ad Example 2",
    videoUrl: "https://labs.google/assets/videos/flow-hero.mp4",
    thumbnail: "/models/model-2.png",
  },
  {
    id: "work-003",
    title: "AI Ad Example 3",
    videoUrl: "https://labs.google/assets/videos/flow-hero.mp4",
    thumbnail: "/models/model-3.png",
  },
  // Add more works as needed
];

const Catalog = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  return (
    <section id="catalog" className="py-20 px-6 bg-white flex flex-col items-center">
        <motion.h2 
          className="text-3xl md:text-4xl font-serif mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
        Örnek Çalışmalar
        </motion.h2>
      <div
        ref={sliderRef}
        className="flex gap-8 w-full max-w-6xl overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-gold-300 scrollbar-track-transparent"
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        {exampleWorks.map((work) => (
            <motion.div
            key={work.id}
            className="flex-shrink-0 w-[480px] max-w-full aspect-video rounded-3xl overflow-hidden shadow-xl bg-black/80 relative group snap-center border-4 border-transparent hover:border-gold-300 transition-all duration-300"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -5 }}
            >
            <video
              src={work.videoUrl}
              poster={work.thumbnail}
              controls
              className="object-cover w-full h-full"
              style={{ borderRadius: "1.5rem" }}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 flex flex-col">
              <span className="text-white text-lg font-semibold drop-shadow-lg">{work.title}</span>
              </div>
            </motion.div>
          ))}
        </div>
      <div className="mt-6 text-gray-400 text-sm">Kaydırarak diğer çalışmaları görebilirsiniz.</div>
    </section>
  );
};

export default Catalog;
