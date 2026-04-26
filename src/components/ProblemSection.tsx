import { motion } from 'motion/react';
import { CONTENT } from '../constants/content';
import { fadeInUp, viewportSettings } from '../hooks/useScrollAnimation';

export function ProblemSection() {
  return (
    <section className="py-24 lg:py-32 bg-brand-base overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } }
          }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.h2 variants={fadeInUp} className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white mb-8 tracking-tight">
            {CONTENT.problem.title}
          </motion.h2>
          
          <motion.p variants={fadeInUp} className="text-lg sm:text-xl lg:text-2xl text-brand-muted leading-relaxed font-body">
            Os anúncios no celular são pulados rapidamente. O rádio perde a atenção. O panfleto vai para o lixo. Mas o seu futuro cliente, agora mesmo, está parado no semáforo de Votuporanga. Olhando para a frente. <strong>Sua marca merece estar lá.</strong>
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
