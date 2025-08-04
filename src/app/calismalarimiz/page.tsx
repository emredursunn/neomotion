'use client';

import { motion } from 'framer-motion';
import { videos } from '../data/videos';
import Header from '../components/Header';
import Footer from '../components/Footer';

const CalismalarimizPage = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <Header />
      <main className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1 
            className="text-5xl md:text-7xl font-serif text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-amber-200 to-amber-500"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            Çalışmalarımız
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl text-center text-neutral-300 max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
          >
            Yapay zeka ile markanız için sınrları zorlayan, dikkat çekici ve modern reklam filmleri hazırlıyoruz.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {videos.map((video, index) => (
              <motion.div 
                key={video.id}
                className="bg-neutral-900/50 rounded-2xl overflow-hidden shadow-2xl shadow-amber-500/10 border border-amber-500/20 group"
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
              >
                <div className="relative w-full h-0 pb-[56.25%]">
                  <video 
                    className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    src={video.videoUrl} 
                    controls 
                    loop
                    muted
                    playsInline
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-serif text-amber-300 mb-2">{video.title}</h3>
                  <p className="text-neutral-400">{video.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CalismalarimizPage;
