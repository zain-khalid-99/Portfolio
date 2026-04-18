import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';
import { cn } from '@/lib/utils';

const FAQS = [
  {
    question: "Do you specialize in specific industries?",
    answer: "I primarily work with high-growth E-commerce brands (Shopify) and Professional Service providers (WordPress). My focus is on performance-driven industries where conversion rates are critical."
  },
  {
    question: "How long does a typical project take?",
    answer: "A standard WordPress or Shopify project usually takes 4-6 weeks from initial research to deployment. Performance marketing campaigns can be launched in as little as 1 week after strategy approval."
  },
  {
    question: "What is your typical project process like?",
    answer: "We start with deep Discovery & Strategy, followed by Wireframing, Creative Design, Development, and finally rigorous Testing & Performance Optimization."
  },
  {
    question: "Do you offer post-launch support & maintenance?",
    answer: "Yes, I offer monthly performance retainers and technical maintenance packages to ensure your platform remains fast, secure, and optimized for sales."
  }
];

export const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section className="section-spacing bg-surface">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16">
          <div className="lg:col-span-5 text-center lg:text-left">
            <span className="text-[12px] font-bold text-brand uppercase tracking-[3px] mb-4 block">COMMON QUESTIONS</span>
            <h2 className="mb-8">
              HELPING YOU <br className="hidden md:block" /> GROW FASTER.
            </h2>
            <p className="text-text-muted font-medium max-w-sm mx-auto lg:mx-0 mb-10">
              Find answers to the most common questions about my process, pricing, and project results.
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="flex flex-col border-t border-border-interface">
              {FAQS.map((faq, index) => (
                <div key={index} className="border-b border-border-interface">
                  <button
                    onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                    className="w-full py-8 flex items-center justify-between text-left group"
                  >
                    <span className={cn(
                      "text-[18px] lg:text-[20px] font-display font-bold uppercase tracking-tight transition-colors duration-300",
                      activeIndex === index ? "text-brand" : "text-text-main group-hover:text-brand"
                    )}>
                      {faq.question}
                    </span>
                    <div className={cn(
                      "w-10 h-10 rounded-[3px] border border-border-interface flex items-center justify-center transition-all duration-300",
                      activeIndex === index ? "bg-brand border-brand text-white" : "text-text-main group-hover:border-brand"
                    )}>
                      {activeIndex === index ? <Minus size={18} /> : <Plus size={18} />}
                    </div>
                  </button>
                  <AnimatePresence>
                    {activeIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="pb-8 text-text-muted font-medium max-w-2xl">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
