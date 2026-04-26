import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { CONTENT, WHATSAPP_BASE_URL } from '../constants/content';
import { fadeInUp, viewportSettings } from '../hooks/useScrollAnimation';

const IMAGES = [
  "https://enaparry.sirv.com/Painel%20Publicidade/konstru.jpg",
  "https://enaparry.sirv.com/Painel%20Publicidade/vilar.jpg"
];

export function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % IMAGES.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[100dvh] pt-32 pb-16 flex flex-col justify-center overflow-hidden xl:pt-20">
      {/* Background glow effects */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-primary opacity-[0.03] blur-[100px] rounded-full pointer-events-none -translate-y-48 translate-x-48" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-primary opacity-[0.03] blur-[80px] rounded-full pointer-events-none -translate-x-40 translate-y-40" />
      
      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center flex-grow">
        
        {/* Text Content */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } }
          }}
          className="max-w-xl"
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 text-brand-primary font-semibold tracking-widest uppercase text-xs mb-6">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-primary"></span>
            </span>
            {CONTENT.hero.overline ?? "Outdoor Digital em Votuporanga"}
          </motion.div>
          
          <motion.h1 variants={fadeInUp} className="font-heading text-3xl sm:text-4xl lg:text-5xl text-brand-text font-extrabold leading-[1.1] tracking-tight mb-6">
            {CONTENT.hero.title}
          </motion.h1>
          
          <motion.p variants={fadeInUp} className="text-lg lg:text-xl text-brand-muted mb-8 leading-relaxed">
            {CONTENT.hero.subtitle}
          </motion.p>
          
          <motion.div variants={fadeInUp}>
            <a 
              href={`${WHATSAPP_BASE_URL}${encodeURIComponent(CONTENT.hero.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 bg-[#25D366] text-white font-black rounded-xl transition-all shadow-[0_0_30px_rgba(37,211,102,0.3)] animate-[pulse_2s_cubic-bezier(0.4,0,0.6,1)_infinite] hover:bg-[#1EBE5D] hover:animate-none"
            >
              <span className="text-lg uppercase">{CONTENT.hero.cta}</span>
              <ArrowRight size={20} />
            </a>
          </motion.div>
        </motion.div>

        {/* Hero Image Slider */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="relative lg:ml-auto w-full max-w-[400px] aspect-[4/5] lg:aspect-[3/4] rounded-3xl overflow-hidden border border-brand-primary/20 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] mt-8 lg:mt-0 bg-brand-elevated mx-auto"
        >
          <AnimatePresence mode="popLayout">
            <motion.img 
              key={currentImageIndex}
              src={IMAGES[currentImageIndex]}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              alt="Outdoor Digital" 
              className="absolute inset-0 w-full h-full object-cover"
              loading="eager"
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-t from-brand-base/50 to-transparent opacity-80 pointer-events-none z-10" />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-brand-muted/70"
      >
        <span className="text-[10px] font-bold uppercase tracking-widest text-brand-primary">Veja mais</span>
        <motion.div
           animate={{ y: [0, 8, 0] }}
           transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
}
