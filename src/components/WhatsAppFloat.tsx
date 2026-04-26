import { motion, useScroll, useTransform } from 'motion/react';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_LINK, CONTENT } from '../constants/content';

export function WhatsAppFloat() {
  const { scrollY } = useScroll();
  
  // Only show after 200px of scrolling
  const opacity = useTransform(scrollY, [150, 250], [0, 1]);
  const scale = useTransform(scrollY, [150, 250], [0.8, 1]);
  const pointerEvents = useTransform(scrollY, [150, 250], ["none", "auto"]);

  return (
    <motion.a
      style={{ opacity, scale, pointerEvents } as any}
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-[100] group"
      aria-label={CONTENT.floatWhatsapp.tooltip}
    >
      <div className="relative flex items-center justify-center w-14 h-14 bg-whatsapp text-white rounded-full shadow-[0_10px_25px_rgba(37,211,102,0.4)] border-2 border-brand-primary/30 hover:scale-110 active:scale-95 transition-transform">
        <div className="absolute -inset-1 bg-brand-primary opacity-20 blur rounded-full animate-ping pointer-events-none" />
        <MessageCircle size={28} className="relative z-10" strokeWidth={2} />
      </div>
      
      {/* Tooltip */}
      <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-brand-elevated text-brand-text text-sm font-semibold py-1.5 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-brand-primary/20 shadow-xl">
        {CONTENT.floatWhatsapp.tooltip}
      </span>
    </motion.a>
  );
}
