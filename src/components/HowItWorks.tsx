import { motion } from 'motion/react';
import { MessageCircle, Wand2, MonitorPlay, ArrowRight } from 'lucide-react';
import { CONTENT, WHATSAPP_LINK } from '../constants/content';
import { fadeInUp, viewportSettings, staggerContainer } from '../hooks/useScrollAnimation';
import { clsx } from 'clsx';

const ICONS = {
  MessageCircle,
  Wand2,
  MonitorPlay
};

export function HowItWorks() {
  return (
    <section className="py-24 bg-brand-base relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportSettings}
            className="font-heading font-extrabold text-3xl sm:text-4xl text-white mb-4"
          >
            {CONTENT.howItWorks.title}
          </motion.h2>
        </div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="grid lg:grid-cols-3 gap-8 relative max-w-5xl mx-auto"
        >
          {/* Linha conectora desktop */}
          <div className="hidden lg:block absolute top-[44px] left-1/6 right-1/6 h-[2px] bg-gradient-to-r from-transparent via-brand-primary/30 to-transparent z-0" />
          
          {CONTENT.howItWorks.steps.map((step, index) => {
            const IconComponent = (ICONS as any)[step.icon];
            
            return (
              <motion.div 
                key={index} 
                variants={fadeInUp}
                className="relative z-10 flex flex-col items-center text-center group"
              >
                <div className="w-24 h-24 rounded-2xl bg-brand-elevated border border-brand-primary/20 flex items-center justify-center mb-6 text-brand-primary shadow-xl group-hover:shadow-[0_0_30px_rgba(212,175,55,0.2)] group-hover:bg-brand-primary/10 transition-all duration-300">
                  <IconComponent size={36} strokeWidth={1.5} />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 max-w-[250px]">
                  {step.title}
                </h3>
                
                <p className="text-brand-muted max-w-[280px]">
                  {step.description}
                </p>
                
                {/* Linha conectora mobile */}
                {index < CONTENT.howItWorks.steps.length - 1 && (
                  <div className="lg:hidden w-[2px] h-12 bg-gradient-to-b from-brand-primary/30 to-transparent my-4" />
                )}
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportSettings}
          transition={{ delay: 0.6 }}
          className="text-center mt-16"
        >
          <a 
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-brand-secondary font-bold hover:text-white transition-colors group"
          >
            Falar com a equipe agora
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
