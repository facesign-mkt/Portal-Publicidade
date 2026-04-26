import { motion } from 'motion/react';
import { PAINEIS } from '../constants/paineis';
import { PainelCard } from './PainelCard';
import { fadeInUp, viewportSettings } from '../hooks/useScrollAnimation';

export function PaneisSection() {
  return (
    <section className="py-24 bg-brand-base relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-brand-accent/[0.05] rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white mb-4">
            Dois pontos, <span className="text-brand-primary">cobertura total</span> da cidade.
          </h2>
          <p className="text-brand-muted max-w-2xl mx-auto text-lg">
            Instalados nas veias arteriais de Votuporanga. Zonas distintas e complementares para que sua marca seja vista de ponta a ponta.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {PAINEIS.map((painel, index) => (
            <motion.div
              key={painel.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportSettings}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <PainelCard painel={painel} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
