import { motion } from 'motion/react';
import { ArrowRight, Zap } from 'lucide-react';
import { CONTENT, WHATSAPP_BASE_URL } from '../constants/content';
import { fadeInUp, viewportSettings } from '../hooks/useScrollAnimation';

export function FinalCTA() {
  return (
    <section className="py-32 relative overflow-hidden bg-brand-base">
      {/* Intense glowing effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-primary opacity-[0.05] blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } }
          }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.div variants={fadeInUp} className="mb-6 flex justify-center">
            <div className="w-16 h-16 rounded-full bg-brand-elevated border border-brand-primary/30 flex items-center justify-center text-brand-primary shadow-[0_0_30px_rgba(212,175,55,0.2)]">
              <Zap size={32} />
            </div>
          </motion.div>

          <motion.h2 variants={fadeInUp} className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white mb-6 leading-tight">
            {CONTENT.finalCta.title}
          </motion.h2>
          
          <motion.p variants={fadeInUp} className="text-xl text-brand-muted mb-10">
            {CONTENT.finalCta.subtitle}
          </motion.p>
          
          <motion.div variants={fadeInUp} className="flex flex-col items-center gap-4">
            <a 
              href={`${WHATSAPP_BASE_URL}${encodeURIComponent(CONTENT.finalCta.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center gap-3 w-full sm:w-auto px-10 py-5 bg-brand-primary text-brand-base font-black text-lg rounded-xl shadow-[0_0_30px_rgba(212,175,55,0.3)] animate-[pulse_2s_cubic-bezier(0.4,0,0.6,1)_infinite] hover:bg-brand-secondary hover:animate-none transition-all"
            >
              <span className="relative z-10 uppercase">{CONTENT.finalCta.cta}</span>
              <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform stroke-[2.5]" />
            </a>
            
            <span className="text-brand-muted text-sm font-bold tracking-wide uppercase mt-4">
              {CONTENT.finalCta.alert}
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
