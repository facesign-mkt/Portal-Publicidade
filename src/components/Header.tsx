import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CONTENT, WHATSAPP_BASE_URL } from '../constants/content';

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#3b4c6a] shadow-lg py-2' : 'bg-[#3b4c6a] py-3'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex-shrink-0">
          <img 
            src="https://enaparry.sirv.com/Painel%20Publicidade/logotipo-03.jpg" 
            alt="Portal Publicidade Logo" 
            className="h-16 md:h-24 w-auto object-contain"
          />
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a href="#paineis" className="text-white hover:text-brand-primary font-bold text-sm tracking-widest uppercase transition-colors">
            Nossos Painéis
          </a>
          <a href="#calculadora" className="text-white hover:text-brand-primary font-bold text-sm tracking-widest uppercase transition-colors">
            Calculadora
          </a>
        </div>

        <a 
          href={`${WHATSAPP_BASE_URL}Vim do cabeçalho do site`}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:inline-flex items-center justify-center px-6 py-3 bg-brand-primary hover:bg-brand-secondary text-brand-base font-bold rounded-xl transition-all shadow-[0_4px_14px_rgba(212,175,55,0.4)] hover:shadow-[0_6px_20px_rgba(252,201,93,0.6)]"
        >
          Anunciar agora
        </a>
      </div>
    </header>
  );
}
