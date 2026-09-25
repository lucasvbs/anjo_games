import { Hero } from '@/components/sections/Hero';
import { CantaCerrado } from '@/components/sections/CantaCerrado';
import { Mission } from '@/components/sections/Mission';
import { Projects } from '@/components/sections/Projects';
import { Gallery } from '@/components/sections/Gallery';
import { Financials } from '@/components/sections/Financials';
import { FAQ } from '@/components/sections/FAQ';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans selection:bg-primary selection:text-primary-foreground">
      <Navbar />
      
      <main className="flex-1">
        <Hero />
        <CantaCerrado />
        <Mission />
        <Projects />
        <Gallery />
        <Financials />
        <FAQ />
        <FinalCTA />
      </main>

      <Footer />
    </div>
  );
}
