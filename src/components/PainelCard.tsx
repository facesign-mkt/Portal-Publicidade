import { MapPin, ExternalLink } from 'lucide-react';
import { useState } from 'react';

interface PainelCardProps {
  painel: {
    id?: string;
    name: string;
    reference: string;
    techSpecs: string;
    address: string;
    coordinates: { lat: number; lng: number };
    impressionsMensais?: number;
    imgUrl?: string; // made optional just in case, but we provide it
  };
}

export function PainelCard({ painel }: PainelCardProps) {
  const [mapLoaded, setMapLoaded] = useState(false);

  return (
    <div className="bg-brand-elevated rounded-3xl border border-brand-primary/20 overflow-hidden flex flex-col group hover:shadow-[0_0_30px_rgba(212,175,55,0.15)] transition-shadow">
      
      {/* Imagem do Painel */}
      <div className="relative aspect-video bg-brand-elevated z-0">
        <img 
          src={painel.imgUrl || "https://images.unsplash.com/photo-1590858156686-633d3c8cda38?q=80&w=800&auto=format&fit=crop"} 
          alt={`Visualização do painel: ${painel.name}`}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-base via-transparent to-transparent opacity-90" />
        <div className="absolute bottom-0 left-0 p-6 z-20 w-full">
          <div className="text-[12px] sm:text-sm text-[#FFD700] font-black uppercase mb-2 drop-shadow-md tracking-wider">
            {painel.reference}
          </div>
          <h3 className="font-heading font-bold leading-tight text-xl sm:text-2xl text-white drop-shadow-md">{painel.name}</h3>
        </div>
      </div>

      <div className="px-6 pb-6 pt-8 flex flex-col flex-grow z-20 relative bg-brand-base">
        <h4 className="flex items-center gap-2 text-white font-bold mb-4 text-sm tracking-wider">
          <span className="w-2 h-2 bg-brand-primary rounded-full"></span>
          Apresentação Técnica
        </h4>
        <p className="text-brand-text opacity-90 mb-6 text-sm flex-grow">
          {painel.techSpecs}
        </p>
        
        {/* Mini-mapa */}
        <div className="relative h-40 bg-brand-base rounded-xl overflow-hidden mb-4 border border-white/5">
          {/* Usar static ou iframe simples do google maps */}
          {!mapLoaded && <div className="absolute inset-0 bg-brand-base animate-pulse" />}
          <iframe 
            src={`https://maps.google.com/maps?q=${painel.coordinates.lat},${painel.coordinates.lng}&z=16&output=embed`} 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            onLoad={() => setMapLoaded(true)}
            title={`Mapa ${painel.name}`}
            className="filter grayscale-[50%] contrast-125 opacity-80 mix-blend-screen"
          />
        </div>

        <a 
          href={`https://www.google.com/maps/search/?api=1&query=${painel.coordinates.lat},${painel.coordinates.lng}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-2 py-3 bg-white/5 hover:bg-white/10 text-white rounded-xl text-sm font-semibold transition-colors border border-white/10"
        >
          <ExternalLink size={16} />
          Ver no Google Maps
        </a>
      </div>
    </div>
  );
}
