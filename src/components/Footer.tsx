import { CONTENT, WHATSAPP_BASE_URL } from "../constants/content";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#081220] px-12 py-10 text-brand-muted text-sm border-t border-brand-primary/10">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          <div className="lg:col-span-2">
            <img 
              src="https://enaparry.sirv.com/Painel%20Publicidade/logotipo-03.jpg" 
              alt="Portal Publicidade Logo" 
              className="h-24 md:h-32 w-auto mb-6 object-contain"
            />
            <p className="text-[10px] font-bold uppercase tracking-widest text-brand-muted mb-6">{CONTENT.footer.tagline}</p>
            <p className="max-w-xs">{CONTENT.footer.address}</p>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4 uppercase tracking-wider text-xs">CONTATO</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href={`${WHATSAPP_BASE_URL}Olá, vim do rodapé do site`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-brand-secondary transition-colors"
                >
                  <span className="w-1.5 h-1.5 bg-whatsapp rounded-full"></span>
                  WhatsApp: {CONTENT.footer.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${CONTENT.footer.email}`} className="flex items-center gap-2 hover:text-brand-secondary transition-colors">
                  <span className="w-1.5 h-1.5 bg-brand-primary rounded-full"></span>
                  {CONTENT.footer.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4 uppercase tracking-wider text-xs">MÍDIA</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-brand-primary/50 rounded-full"></span><span className="cursor-default">Painel Flor de Lis</span></li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-brand-primary/50 rounded-full"></span><span className="cursor-default">Painel Vilar</span></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-brand-primary/10 flex flex-col md:flex-row items-center justify-between pt-8 gap-4 text-[10px] font-bold uppercase tracking-widest text-brand-muted opacity-80">
          <p>&copy; {year} PORTAL PUBLICIDADE - TODOS OS DIREITOS RESERVADOS.</p>
          <div className="flex gap-8">
            <span className="flex items-center gap-2"><span className="w-1 h-1 bg-brand-primary rounded-full"></span>VOTUPORANGA, SP</span>
            <span className="flex items-center gap-2"><span className="w-1 h-1 bg-brand-primary rounded-full"></span>EIXO NOROESTE PAULISTA</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
