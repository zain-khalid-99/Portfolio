import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';
import { cn } from '@/lib/utils';

const FAQS = [
  {
    question: "What services do you offer?",
    answer: "I provide end-to-end digital solutions including:\n\n• WordPress website development\n• Shopify store design and optimization\n• Performance marketing (Meta Ads & Google Ads)\n\nMy focus is not just building websites, but creating systems that drive conversions and business growth."
  },
  {
    question: "Do you only design websites or also help with marketing?",
    answer: "I do both.\n\nUnlike typical developers, I combine web design with performance marketing strategy, ensuring your website is built to:\n\n• Convert visitors into customers\n• Support paid advertising campaigns\n• Scale your business effectively"
  },
  {
    question: "How long does it take to complete a website?",
    answer: "Project timelines depend on complexity:\n\n• Basic website: 5–10 days\n• E-commerce store: 10–20 days\n• Custom projects: Varies based on scope\n\nYou will always receive a clear timeline before the project begins."
  },
  {
    question: "Do you work with international clients?",
    answer: "Yes, I work with clients globally including:\n\n• Startups\n• E-commerce brands\n• Agencies\n• Local businesses expanding online\n\nAll communication is handled professionally through online meetings and updates."
  },
  {
    question: "What platforms do you specialize in?",
    answer: "I specialize in:\n\n• WordPress (custom websites, business sites)\n• Shopify (e-commerce stores, CRO optimization)\n\nI choose the platform based on your business goals, not personal preference."
  },
  {
    question: "Will my website be mobile-friendly and responsive?",
    answer: "Yes.\n\nEvery website I build is:\n\n• Fully responsive across all devices\n• Optimized for mobile-first experience\n• Designed for performance and speed"
  },
  {
    question: "Do you provide SEO or optimization services?",
    answer: "Yes.\n\nI implement basic on-page SEO and performance optimization, including:\n\n• Fast loading speed\n• Clean structure\n• SEO-friendly layouts\n\nAdvanced SEO and marketing strategies can also be included based on your requirements."
  },
  {
    question: "Can you improve my existing website?",
    answer: "Absolutely.\n\nI offer website audits and redesign services to:\n\n• Improve conversion rates\n• Fix UX issues\n• Optimize performance\n• Enhance design and structure\n\nYou can request a free website audit to get started."
  },
  {
    question: "What is included in the free audit?",
    answer: "The free audit includes:\n\n• Website design analysis\n• UX and conversion feedback\n• Performance insights\n• Actionable improvement suggestions\n\nThis helps you understand what’s holding your website back."
  },
  {
    question: "How much do your services cost?",
    answer: "Pricing depends on:\n\n• Project complexity\n• Features required\n• Timeline\n\nI offer custom pricing based on your needs. You can contact me or request an audit to get a tailored quote."
  },
  {
    question: "Do you offer ongoing support after project completion?",
    answer: "Yes.\n\nI provide post-launch support including:\n\n• Minor updates\n• Technical assistance\n• Performance guidance\n\nExtended maintenance plans can also be discussed."
  },
  {
    question: "How do I get started?",
    answer: "You can get started in two ways:\n\n• Book a strategy call\n• Request a free website audit\n\nI will analyze your requirements and guide you with the best approach."
  },
  {
    question: "Why should I choose you over other developers?",
    answer: "Because I focus on results, not just design.\n\n• Conversion-focused approach\n• Combined development + marketing expertise\n• Clean, modern, high-performance websites\n\nThe goal is simple:\nBuild digital systems that help your business grow."
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
                        <p className="pb-8 text-text-muted font-medium max-w-2xl whitespace-pre-wrap">
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
