import { motion } from 'motion/react';
import { CONTENT } from '../constants/content';
import { FAQItem } from './FAQItem';
import { fadeInUp, viewportSettings, staggerContainer } from '../hooks/useScrollAnimation';

export function FAQ() {
  return (
    <section className="py-24 bg-brand-elevated relative">
      <div className="container mx-auto px-6 max-w-3xl">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white">
            {CONTENT.faq.title}
          </h2>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          variants={staggerContainer}
          className="space-y-4"
        >
          {CONTENT.faq.items.map((item, index) => (
            <motion.div key={index} variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 }
            }}>
              <FAQItem question={item.q} answer={item.a} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
