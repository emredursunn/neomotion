'use client';

import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image';

const BizKimizPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { type: 'spring', stiffness: 100, damping: 15 }
    },
  };

  return (
    <div className="bg-gradient-to-b from-black via-neutral-900 to-black text-white min-h-screen">
      <Header />
      <main className="pt-32 pb-20">
        <motion.div 
          className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <Image 
              src="/neomotion_logo.jpeg" 
              alt="Neomotion Logo"
              width={150}
              height={150}
              className="mx-auto rounded-full shadow-2xl shadow-amber-500/30 mb-8 border-4 border-amber-400/50"
            />
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-7xl font-serif mb-6 bg-clip-text text-transparent bg-gradient-to-r from-amber-200 to-amber-500"
            variants={itemVariants}
          >
            Biz Kimiz?
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-neutral-300 max-w-3xl mx-auto mb-12"
            variants={itemVariants}
          >
            Neomotion olarak, en son yapay zeka teknolojilerini kullanarak markanızın hikayesini en etkileyici şekilde anlatan, görsel olarak çarpıcı ve yenilikçi reklam filmleri üretiyoruz.
          </motion.p>

          <motion.div 
            className="bg-white/5 backdrop-blur-md rounded-3xl shadow-2xl p-8 md:p-12 border border-white/10 text-left grid md:grid-cols-2 gap-12 items-center"
            variants={itemVariants}
          >
            <div className='space-y-6'>
              <h2 className='text-3xl font-serif text-amber-300'>Vizyonumuz</h2>
              <p className='text-neutral-300'>
                Reklam dünyasında bir devrim yaratmayı hedefliyoruz. Geleneksel prodüksiyonun getirdiği yüksek maliyetleri ve uzun süreçleri ortadan kaldırarak, her ölçekten markanın yüksek kaliteli ve yaratıcı reklam filmlerine erişimini kolaylaştırıyoruz. Yapay zeka, bizim için sadece bir araç değil, aynı zamanda sınırsız bir yaratıcılık kaynağıdır.
              </p>
              <h2 className='text-3xl font-serif text-amber-300 mt-8'>Misyonumuz</h2>
              <p className='text-neutral-300'>
                Müşterilerimizin vizyonunu, yapay zekanın gücüyle birleştirerek hedef kitlelerinde yankı uyandıran, unutulmaz ve etkili reklam kampanyaları oluşturmaktır. Sürekli gelişen teknolojiyi yakından takip ederek, her zaman en yenilikçi ve en kaliteli çözümleri sunmayı taahhüt ediyoruz.
              </p>
            </div>
            <motion.div 
              className='hidden md:block w-full h-full rounded-2xl overflow-hidden'
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.7 }}
            >
              <Image 
                src="/neomotion-team.png" 
                alt="Neomotion Team"
                width={500}
                height={700}
                className="object-cover w-full h-full shadow-lg shadow-black/50"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default BizKimizPage;
