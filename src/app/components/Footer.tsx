"use client";

import Link from "next/link";

const Footer = () => {
  return (
    <footer id="contact" className="py-12 px-6">
      {/* Premium decorative line */}
      <div className="max-w-7xl mx-auto relative pb-12 mb-12 border-b border-white/20">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-[2px] bg-amber-400" />
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8">
          {/* Sol taraf - Logo ve açıklama */}
          <div>
            <Link href="/">
              <h2 className="text-2xl font-serif mb-4 text-white">Neomotion</h2>
            </Link>
            <p className="text-sm text-white max-w-xs">
            Neomotion, yapay zeka destekli reklam çekimleri ve dijital içerik üretimiyle markanıza yenilikçi çözümler sunar. Sanal modellerle moda, e-ticaret ve yaratıcı kampanyalar için etkileyici görseller üretin.            </p>
          </div>
          
          {/* Sağ taraf - İletişim */}
          <div className="md:text-right">
            <h3 className="text-sm uppercase tracking-wider mb-4 text-white">İletişim</h3>
            <a href="mailto:info@neomotion.com" className="text-white hover:text-gold-500 transition-colors duration-300 block mb-2">
              info@neomotion.com.tr
            </a>
            <div className="flex space-x-4 mt-4 md:justify-end">
              <a href="https://www.instagram.com/neomotionmedya?igsh=MXU3enJ3dWpvcXNhYg==" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg className="w-5 h-5 text-white hover:text-gold-500 transition-colors  duration-300" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zm5.25.75a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/20 text-center text-sm text-white">
          <p>&copy; {new Date().getFullYear()} Neomotion. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;