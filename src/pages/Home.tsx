import { Hero } from '../components/sections/Hero';
import { AboutSection } from '../components/sections/AboutSection';
import { Services } from '../components/sections/Services';
import { PortfolioGrid } from '../components/sections/PortfolioGrid';
import { Process } from '../components/sections/Process';
import { FAQ } from '../components/sections/FAQ';
import { CTA } from '../components/sections/CTA';

export const Home = () => {
  return (
    <main className="bg-transparent">
      <Hero />
      <AboutSection />
      <Services />
      <PortfolioGrid />
      <Process />
      <FAQ />
      <CTA />
    </main>
  );
};
