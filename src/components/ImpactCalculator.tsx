import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { CONTENT, WHATSAPP_LINK } from '../constants/content';
import { fadeInUp, viewportSettings } from '../hooks/useScrollAnimation';
import { AnimatedCounter } from './AnimatedCounter';
import { clsx } from "clsx";

export function ImpactCalculator() {
  const [months, setMonths] = useState(3);
  const [bothPanels, setBothPanels] = useState(true);

  const POPULATION = 100568;
  const IMPRESSIONS_PER_MONTH = bothPanels ? 1100000 : 550000;
  const totalImpressions = months * IMPRESSIONS_PER_MONTH;
  const equivalence = Math.round(totalImpressions / POPULATION);
  
  const diffContext = bothPanels ? 'nos 2 painéis' : 'em 1 painel';
  const whatsappLink = WHATSAPP_LINK;

  return (
    <section className="py-24 bg-brand-elevated relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-accent/20 via-brand-base to-brand-base opacity-70"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          variants={fadeInUp}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
              {CONTENT.calculator.title}
            </h2>
            <p className="text-brand-muted text-lg">
              Simule o alcance absoluto da sua marca em Votuporanga.
            </p>
          </div>

          <div className="bg-brand-elevated p-8 lg:p-12 rounded-3xl border border-brand-primary/20 shadow-2xl grid lg:grid-cols-2 gap-12">
            
            {/* Controles */}
            <div className="flex flex-col justify-center space-y-10">
              {/* Slider */}
              <div>
                <div className="flex justify-between items-center mb-4">
                  <label className="text-white font-bold text-lg">Duração da campanha</label>
                  <span className="text-brand-primary font-bold text-xl">{months} {months === 1 ? 'mês' : 'meses'}</span>
                </div>
                <input 
                  type="range" 
                  min="1" 
                  max="12" 
                  value={months}
                  onChange={(e) => setMonths(parseInt(e.target.value))}
                  className="w-full h-2 bg-brand-base rounded-full appearance-none cursor-pointer accent-brand-primary"
                />
                <div className="flex justify-between text-brand-muted text-sm mt-2">
                  <span>1 mês</span>
                  <span>1 ano</span>
                </div>
              </div>

              {/* Toggle */}
              <div>
                <label className="text-white font-bold text-lg block mb-4">Cobertura</label>
                <div className="flex bg-brand-base p-1.5 rounded-xl">
                  <button 
                    onClick={() => setBothPanels(false)}
                    className={clsx(
                      "flex-1 py-3 text-sm font-bold rounded-lg transition-all",
                      !bothPanels ? "bg-brand-primary text-brand-base shadow-md" : "text-brand-muted hover:text-white"
                    )}
                  >
                    Apenas 1 painel
                  </button>
                  <button 
                    onClick={() => setBothPanels(true)}
                    className={clsx(
                      "flex-1 py-3 text-sm font-bold rounded-lg transition-all",
                      bothPanels ? "bg-brand-primary text-brand-base shadow-md" : "text-brand-muted hover:text-white"
                    )}
                  >
                    Os 2 painéis
                  </button>
                </div>
              </div>
            </div>

            {/* Resultados */}
            <div className="pt-4 lg:pt-0 lg:pl-12 lg:border-l border-brand-primary/10 flex flex-col justify-center">
              <div className="mb-8">
                <span className="text-brand-muted text-xs font-bold uppercase tracking-wider block mb-2">TOTAL ESTIMADO</span>
                <div className="font-heading font-black text-4xl lg:text-5xl text-white tabular-nums flex items-end gap-2">
                  <AnimatedCounter to={totalImpressions} duration={1} />
                  <span className="text-brand-primary text-xl lg:text-2xl pb-1">imp.</span>
                </div>
                <div className="mt-2 text-sm text-brand-primary font-medium italic block">
                  {equivalence}x a população total de Votuporanga
                </div>
              </div>

              {/* Comparativo Visual */}
              <div className="space-y-4 mb-10">
                <div>
                   <div className="flex justify-between text-xs font-bold text-white mb-2 uppercase">
                    <span>Mídia Portal (Custo Otimizado)</span>
                  </div>
                  <div className="w-full bg-brand-base rounded-full h-4 relative overflow-hidden">
                    <motion.div 
                      className="absolute left-0 top-0 h-full bg-brand-primary"
                      animate={{ width: "100%" }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                    />
                  </div>
                </div>
                <div>
                   <div className="flex justify-between text-[10px] font-bold text-brand-muted mb-2 uppercase">
                    <span>Anúncios em Redes Sociais (Para o mesmo volume local)</span>
                  </div>
                  <div className="w-full bg-brand-base rounded-full h-4 relative overflow-hidden">
                    <motion.div 
                      className="absolute left-0 top-0 h-full bg-[#E1306C]"
                      animate={{ width: "25%" }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                    />
                  </div>
                </div>
              </div>

              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center gap-4 p-4 bg-brand-base/50 hover:bg-brand-base border border-transparent rounded-xl transition-all group"
              >
                <div className="w-10 h-10 bg-whatsapp/10 rounded-full flex items-center justify-center text-whatsapp shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                </div>
                <span className="text-xs font-semibold uppercase tracking-tight text-white">{CONTENT.calculator.cta}</span>
                <ArrowRight size={16} className="ml-auto text-brand-muted group-hover:text-brand-primary group-hover:translate-x-1 transition-all" />
              </a>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
