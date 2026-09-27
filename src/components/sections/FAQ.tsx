import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, HelpCircle } from 'lucide-react';

const FAQS = [
  {
    question: "What WordPress websites do you develop?",
    answer: "I build professional, responsive, and conversion-focused WordPress websites, including business websites, landing pages, portfolio websites, and WooCommerce stores."
  },
  {
    question: "Can you redesign my existing WordPress website?",
    answer: "Yes. I can redesign and optimize an existing WordPress website to improve its design, responsiveness, usability, speed, and overall conversion experience."
  },
  {
    question: "Will my WordPress website be mobile-friendly?",
    answer: "Yes. Every website is designed to provide a smooth and responsive experience across desktops, tablets, and mobile devices."
  },
  {
    question: "Do you optimize WordPress website speed?",
    answer: "Yes. I optimize key elements that can affect website performance, including images, plugins, page structure, scripts, and other speed-related factors."
  },
  {
    question: "What performance marketing platforms do you work with?",
    answer: "I primarily work with Google Ads and Meta Ads, creating and optimizing paid campaigns based on measurable business objectives."
  },
  {
    question: "Can you manage my Google Ads campaigns?",
    answer: "Yes. I can help with Google Ads setup, keyword targeting, campaign structure, ad optimization, conversion tracking, and ongoing performance analysis."
  },
  {
    question: "Can you manage Meta Ads campaigns?",
    answer: "Yes. I can manage Facebook and Instagram advertising campaigns, including audience targeting, campaign setup, creative testing, optimization, and performance tracking."
  },
  {
    question: "Do you provide conversion tracking?",
    answer: "Yes. I can set up and monitor conversion tracking to help understand which campaigns, ads, and traffic sources are generating meaningful actions."
  },
  {
    question: "How do you optimize performance marketing campaigns?",
    answer: "I analyze metrics such as conversions, cost per result, CTR, conversion rate, audience performance, and other campaign data to identify opportunities for continuous improvement."
  },
  {
    question: "Can you handle both my website and performance marketing?",
    answer: "Yes. Combining WordPress web development and performance marketing allows me to optimize both the website experience and advertising campaigns, creating a stronger journey from ad click to conversion."
  }
];

export const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="section-spacing bg-transparent relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 right-1/4 w-[550px] h-[550px] bg-gradient-to-br from-[#FF4500]/12 to-[#FF7A3D]/5 rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* 1. Header (Left side, sticky on desktop) */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 self-start text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/15 bg-white/5 mb-4 backdrop-blur-md">
                <HelpCircle size={14} className="text-[#FF7A3D]" />
                <span className="text-[11px] font-bold text-[#FF7A3D] uppercase tracking-[0.35em]">COMMON QUESTIONS</span>
              </div>

              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-bold uppercase tracking-tight text-white mb-4 leading-[1.1]">
                HELPING YOU <br className="hidden lg:block" />
                <span className="bg-gradient-to-r from-[#FF4500] via-[#FF7A3D] to-[#FF8C00] bg-clip-text text-transparent">GROW FASTER.</span>
              </h2>

              <p className="text-text-muted text-sm sm:text-base font-medium max-w-md mx-auto lg:mx-0 leading-relaxed">
                Find answers to the most common questions about my process, pricing, and project results.
              </p>
            </motion.div>
          </div>

          {/* 2. FAQ List (Right side) */}
          <div className="lg:col-span-7">
            <div 
              className="flex flex-col gap-4"
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {FAQS.map((faq, index) => {
                const isOpen = activeIndex === index;
                const isHovered = hoveredIndex === index;
                const isAnotherHovered = hoveredIndex !== null && !isHovered;

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    onMouseEnter={() => setHoveredIndex(index)}
                    className={`
                      relative overflow-hidden rounded-2xl transition-all duration-300 backdrop-blur-[20px] select-none
                      ${
                        isOpen
                          ? 'bg-white/[0.10] border-white/30 shadow-[0_15px_40px_rgba(0,0,0,0.6),0_0_25px_rgba(255,69,0,0.2)] border'
                          : 'bg-white/[0.05] border-white/15 border'
                      }
                      ${
                        isHovered
                          ? 'scale-[1.015] border-white/30 bg-white/[0.12] shadow-[0_15px_35px_rgba(0,0,0,0.5),0_0_20px_rgba(255,69,0,0.15)] z-10'
                          : ''
                      }
                      ${isAnotherHovered ? 'opacity-65 sm:opacity-75' : 'opacity-100'}
                    `}
                  >
                    {/* Left Accent Vertical Glowing Line */}
                    <div
                      className={`
                        absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl transition-all duration-500 ease-out
                        ${
                          isOpen
                            ? 'h-full bg-gradient-to-b from-[#FF4500] via-[#FF7A3D] to-[#FF8C00] shadow-[0_0_12px_rgba(255,69,0,0.9)]'
                            : 'h-0 bg-transparent'
                        }
                      `}
                    />

                    {/* Question Button */}
                    <button
                      type="button"
                      onClick={() => setActiveIndex(isOpen ? null : index)}
                      className="w-full flex items-center justify-between text-left p-5 sm:p-6 lg:p-7 gap-4 group cursor-pointer"
                    >
                      <span
                        className={`
                          text-base sm:text-lg lg:text-xl font-display font-semibold uppercase tracking-tight transition-colors duration-300 pr-2
                          ${isOpen ? 'text-[#FF7A3D]' : 'text-white group-hover:text-[#FF7A3D]'}
                        `}
                      >
                        {faq.question}
                      </span>

                      {/* Morphing Icon: Plus to Cross (+) -> (×) */}
                      <div
                        className={`
                          w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 flex-shrink-0 border
                          ${
                            isOpen
                              ? 'bg-gradient-to-r from-[#FF4500] to-[#FF7A3D] border-transparent text-white shadow-[0_0_18px_rgba(255,69,0,0.6)]'
                              : 'border-white/20 bg-white/5 text-white/80 group-hover:border-[#FF7A3D] group-hover:text-white'
                          }
                        `}
                      >
                        <motion.div
                          animate={{ rotate: isOpen ? 45 : 0 }}
                          transition={{ type: 'spring', damping: 14, stiffness: 220 }}
                        >
                          <Plus size={20} strokeWidth={2.2} />
                        </motion.div>
                      </div>
                    </button>

                    {/* Expand/Collapse Answer Panel */}
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{
                            height: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
                            opacity: { duration: 0.3, delay: 0.05 },
                          }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 sm:px-6 lg:px-7 pb-6 pt-1 border-t border-white/10">
                            <motion.p
                              initial={{ y: -8, opacity: 0 }}
                              animate={{ y: 0, opacity: 1 }}
                              exit={{ y: -8, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="text-xs sm:text-sm lg:text-base text-text-muted font-medium leading-relaxed"
                            >
                              {faq.answer}
                            </motion.p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

