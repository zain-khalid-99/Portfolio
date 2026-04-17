import React from 'react';
import { motion } from 'motion/react';
import { PortfolioGrid } from '../components/portfolio/PortfolioGrid';
import { FAQ } from '../components/sections/FAQ';

export const Portfolio = () => {
  return (
    <main className="pt-24 min-h-screen bg-white">
      <section className="section-spacing">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <span className="text-[12px] font-bold text-brand uppercase tracking-[0.4em] mb-8 block">CURATED WORK</span>
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12">
              <h1 className="max-w-4xl uppercase">
                SELECTED <br />
                <span className="text-zinc-300">SUCCESS STORIES.</span>
              </h1>
              <p className="max-w-sm text-text-muted font-medium mb-2 pb-6 border-b border-border-interface leading-relaxed">
                A selection of WordPress, Shopify, and Performance Marketing case studies focusing on high ROI.
              </p>
            </div>
          </motion.div>
          
          <PortfolioGrid />
        </div>
      </section>
      
      <FAQ />
    </main>
  );
};
