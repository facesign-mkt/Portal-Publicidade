import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { StatsBar } from './components/StatsBar';
import { ProblemSection } from './components/ProblemSection';
import { PaneisSection } from './components/PaneisSection';
import { ImpactCalculator } from './components/ImpactCalculator';
import { HowItWorks } from './components/HowItWorks';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { WhatsAppFloat } from './components/WhatsAppFloat';

export default function App() {
  return (
    <div className="min-h-screen bg-brand-base font-body selection:bg-brand-primary/30 selection:text-white">
      <Header />
      <Hero />
      <StatsBar />
      <ProblemSection />
      <div id="paineis">
        <PaneisSection />
      </div>
      <div id="calculadora">
        <ImpactCalculator />
      </div>
      <HowItWorks />
      <FAQ />
      <FinalCTA />
      <Footer />
      
      {/* Elemento fixo global */}
      <WhatsAppFloat />
    </div>
  );
}
