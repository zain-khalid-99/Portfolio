import React from 'react';
import { FAQ } from '../components/sections/FAQ';
import { CTA } from '../components/sections/CTA';
import { motion } from 'motion/react';

export const FAQPage = () => {
  return (
    <main className="pt-32 min-h-screen bg-surface">
      <div className="container-custom pb-12 pt-12 text-center lg:text-left">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6 }}
        >
           <span className="text-[12px] font-bold text-brand uppercase tracking-[3px] mb-4 block">GET ANSWERS</span>
           <h1 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tight">Frequently Asked Questions</h1>
           <p className="text-lg text-text-muted font-medium mt-6 max-w-2xl">
             Everything you need to know about my services, process, and pricing. Let's make things perfectly clear.
           </p>
        </motion.div>
      </div>
      <FAQ />
      <CTA />
    </main>
  );
};
