"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  delay?: boolean;
  fromHome?: boolean;
}

const Header = ({delay,fromHome}:Props) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > window.innerHeight;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  const menuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    },
    open: {
      opacity: 1,
      x: "0%",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const linkVariants = {
    closed: { opacity: delay ? 0 : 1, y: delay ? 20 : 0},
    open: { opacity: 1, y: 0 }
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 py-6 px-8 md:px-16 transition-all duration-300 ${fromHome ? (
          scrolled ? "bg-black shadow-sm" : "bg-transparent" ) : "bg-black"
        }`}
        initial={{ opacity: delay ? 0 : 1, y: delay ? -20 : 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: delay ? 2 : 0 }}
      >
        {/* Gold decorative line */}
        <div className={`absolute bottom-0 left-0 w-full h-[1px] transition-opacity duration-500 ${scrolled ? 'opacity-100 bg-amber-300' : 'opacity-0'}`} />
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/">
            <h1 className={`text-2xl md:text-3xl font-serif font-medium text-white`}>Neomotion</h1>
          </Link>
          <nav className="hidden md:flex space-x-8">
            <Link href="/calismalarimiz" className={`text-sm uppercase tracking-wider hover:text-amber-600 transition-colors text-white`}>
              Çalışmalarımız
            </Link>
            <Link href="/biz-kimiz" className={`text-sm uppercase tracking-wider hover:text-amber-600 transition-colors text-white`}>
              Biz Kimiz
            </Link>
            {/* <Link href="/#contact" className={`text-sm uppercase tracking-wider hover:text-amber-600 transition-colors text-white`}>
              İletişim
            </Link> */}
          </nav>
          
          {/* Mobile menu button */}
          <button 
            className={`md:hidden z-999 ${mobileMenuOpen ? 'text-white' : scrolled ? 'text-gold-500' : 'text-white'}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? (
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth={1.5} 
                stroke="currentColor" 
                className="w-6 h-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            className="fixed inset-0 bg-black/95 z-[999] flex flex-col justify-center items-center md:hidden"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
          >
            <nav className="flex flex-col items-center space-y-8">
              <button
                className="absolute top-6 right-6 text-white"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close mobile menu"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  strokeWidth={1.5} 
                  stroke="currentColor" 
                  className="w-6 h-6"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
                </button>
              <motion.div variants={linkVariants} className="relative">
                <Link 
                  href="/calismalarimiz" 
                  className="text-xl text-white uppercase tracking-wider hover:text-amber-300 transition-colors py-2"
                  onClick={closeMobileMenu}
                >
                  Çalışmalarımız
                </Link>
                <motion.div 
                  className="absolute -bottom-1 left-0 right-0 h-px bg-amber-300/30"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                />
              </motion.div>
              
              <motion.div variants={linkVariants} className="relative">
                <Link 
                  href="/biz-kimiz" 
                  className="text-xl text-white uppercase tracking-wider hover:text-amber-300 transition-colors py-2"
                  onClick={closeMobileMenu}
                >
                  Biz Kimiz
                </Link>
                <motion.div 
                  className="absolute -bottom-1 left-0 right-0 h-px bg-amber-300/30"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                />
              </motion.div>
              
              <motion.div variants={linkVariants} className="relative">
                <Link 
                  href="/#contact" 
                  className="text-xl text-white uppercase tracking-wider hover:text-amber-300 transition-colors py-2"
                  onClick={closeMobileMenu}
                >
                  İletişim
                </Link>
                <motion.div 
                  className="absolute -bottom-1 left-0 right-0 h-px bg-amber-300/30"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                />
              </motion.div>
            </nav>
            
            <motion.div 
              variants={linkVariants}
              className="absolute bottom-10 flex items-center space-x-3"
            >
              <span className="text-amber-300/70 font-serif italic text-sm">Yapay Zeka Reklam Çekimleri</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
