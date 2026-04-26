import { motion } from 'motion/react';
import { CONTENT } from '../constants/content';
import { AnimatedCounter } from './AnimatedCounter';
import { fadeInUp, viewportSettings, staggerContainer } from '../hooks/useScrollAnimation';

export function StatsBar() {
  return (
    <section className="bg-brand-elevated relative z-20 border-y border-brand-primary/10 w-full py-12 lg:py-16">
      <div className="container mx-auto px-6">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
        >
          {CONTENT.stats.items.map((stat, index) => (
            <motion.div key={index} variants={fadeInUp} className="bg-brand-elevated/60 backdrop-blur-md border border-brand-primary/20 p-5 rounded-2xl flex flex-col gap-2 shadow-lg">
              <div className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-brand-primary tabular-nums">
                <AnimatedCounter to={stat.value} duration={2 + (index * 0.2)} suffix={stat.suffix} />
              </div>
              <div className="text-[10px] sm:text-xs text-brand-muted uppercase font-bold tracking-wider leading-tight">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
