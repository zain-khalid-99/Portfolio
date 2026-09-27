import { motion } from 'motion/react';
import { Services as ServicesSection } from '../components/sections/Services';
import { Process } from '../components/sections/Process';
import { FAQ } from '../components/sections/FAQ';
import { CTA } from '../components/sections/CTA';

export const Services = () => {
  return (
    <main className="pt-24 min-h-screen bg-transparent">
      {/* 1. HERO HEADER */}
      <section className="pt-16 pb-12 bg-transparent">
        <div className="w-full max-w-full px-4 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <span className="text-[12px] font-bold text-[#FF7A3D] uppercase tracking-[0.4em] mb-4 block">
              OUR SOLUTIONS
            </span>
            <h1 className="uppercase text-white text-4xl sm:text-5xl lg:text-6xl font-display font-bold">
              SOLUTIONS BUILT FOR <span className="text-brand">PERFORMANCE.</span>
            </h1>
            <p className="text-lg md:text-xl text-text-muted font-medium max-w-2xl leading-relaxed mt-6">
              I help businesses build high-performance websites and marketing systems designed to attract, convert, and scale. Every service is focused on delivering measurable results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. NEW SERVICES SECTION WITH PILLS & GLASS 3D CARD */}
      <ServicesSection />

      {/* 3. PROCESS, FAQ, CTA */}
      <Process />
      <FAQ />
      <CTA />
    </main>
  );
};
