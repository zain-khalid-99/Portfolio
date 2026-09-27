import { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'motion/react';
import { Search, Lightbulb, Code2, LineChart, ChevronLeft, ChevronRight } from 'lucide-react';

const PROCESS_STEPS = [
  { number: '01', title: 'Discovery', desc: 'Understanding your business, audience, and challenges.', icon: Search },
  { number: '02', title: 'Strategy', desc: 'Planning structure, user flow, and conversion paths.', icon: Lightbulb },
  { number: '03', title: 'Execution', desc: 'Designing and developing a high-performance website.', icon: Code2 },
  { number: '04', title: 'Optimization', desc: 'Improving based on data, behavior, and performance metrics.', icon: LineChart }
];

export const Process = () => {
  const pinTrackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [dimensions, setDimensions] = useState({ cardWidth: 400, gap: 32, step: 432 });

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 640) {
        setDimensions({ cardWidth: 280, gap: 24, step: 304 });
      } else if (screenWidth < 1024) {
        setDimensions({ cardWidth: 340, gap: 28, step: 368 });
      } else {
        setDimensions({ cardWidth: 400, gap: 32, step: 432 });
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: pinTrackRef,
    offset: ['start start', 'end end'],
  });

  const totalShift = (PROCESS_STEPS.length - 1) * dimensions.step;
  const x = useTransform(scrollYProgress, [0, 1], [0, -totalShift]);
  const progressWidth = useTransform(scrollYProgress, [0, 1], ['25%', '100%']);

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const rawIdx = latest * (PROCESS_STEPS.length - 1);
    const roundedIdx = Math.min(
      PROCESS_STEPS.length - 1,
      Math.max(0, Math.round(rawIdx))
    );
    setActiveIndex(roundedIdx);
  });

  const scrollToStep = (index: number) => {
    if (!pinTrackRef.current) return;
    const pinTrack = pinTrackRef.current;
    const pinTrackTop = pinTrack.getBoundingClientRect().top + window.scrollY;
    const scrollableDistance = pinTrack.offsetHeight - window.innerHeight;
    const stepFraction = index / (PROCESS_STEPS.length - 1);
    const targetY = pinTrackTop + stepFraction * scrollableDistance;

    window.scrollTo({ top: targetY, behavior: 'smooth' });
  };

  return (
    <section className="relative w-full bg-transparent">
      {/* ── PINNED TRACK CONTAINER (Height holds vertical scroll distance) ── */}
      <div ref={pinTrackRef} className="relative w-full h-[350vh]">
        {/* Sticky Viewport Container Fixed in Center of Viewport */}
        <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between py-8 sm:py-12 bg-transparent">
          {/* Ambient background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-[#FF4500]/15 to-[#FF7A3D]/5 rounded-full blur-[160px] pointer-events-none -z-10" />

          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto px-4 z-10">
            <span className="text-[12px] font-bold text-[#FF7A3D] uppercase tracking-[0.4em] mb-2 block">
              MY METHODOLOGY
            </span>
            <h2 className="uppercase text-3xl sm:text-4xl lg:text-5xl font-display font-bold tracking-tight text-white mb-3">
              THE SUCCESS <span className="bg-gradient-to-r from-[#FF4500] via-[#FF7A3D] to-[#FF8C00] bg-clip-text text-transparent">BLUEPRINT</span>
            </h2>
            <p className="text-text-muted text-xs sm:text-sm lg:text-base font-medium max-w-xl mx-auto leading-relaxed">
              A structured, data-driven process engineered to deliver high-converting websites and performance marketing solutions.
            </p>
          </div>

          {/* Horizontal Progress Bar */}
          <div className="max-w-md w-full mx-auto px-6 z-10 my-4">
            <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden backdrop-blur-md relative border border-white/5">
              <motion.div
                className="h-full bg-gradient-to-r from-[#FF4500] to-[#FF7A3D] rounded-full shadow-[0_0_12px_rgba(255,69,0,0.8)]"
                style={{ width: progressWidth }}
              />
            </div>
            <div className="flex justify-between text-[11px] font-mono text-white/50 font-bold mt-2 uppercase tracking-widest px-1">
              <span>STEP 01</span>
              <span>STEP 04</span>
            </div>
          </div>

          {/* Scroll-Driven Horizontal Cards Track */}
          <div className="relative w-full overflow-hidden my-auto py-4">
            <motion.div
              style={{
                x,
                left: `calc(50vw - ${dimensions.cardWidth / 2}px)`,
                gap: `${dimensions.gap}px`,
              }}
              className="relative flex items-center"
            >
              {PROCESS_STEPS.map((item, idx) => {
                const isActive = idx === activeIndex;
                return (
                  <div
                    key={idx}
                    onClick={() => scrollToStep(idx)}
                    style={{
                      width: `${dimensions.cardWidth}px`,
                    }}
                    className={`
                      flex-shrink-0 cursor-pointer select-none
                      min-h-[340px] sm:min-h-[380px] lg:min-h-[400px]
                      p-6 sm:p-8 lg:p-10 rounded-3xl relative overflow-hidden flex flex-col justify-between
                      transition-all duration-500 ease-out
                      ${
                        isActive
                          ? 'scale-100 opacity-100 border-white/30 bg-white/[0.12] backdrop-blur-[24px] shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_35px_rgba(255,69,0,0.25)] border-t border-x'
                          : 'scale-90 opacity-40 border-white/10 bg-white/[0.04] backdrop-blur-[12px] hover:opacity-75 hover:scale-95'
                      }
                    `}
                  >
                    {/* Faint Background Step Number */}
                    <span className="text-[110px] sm:text-[140px] font-display font-bold text-white/[0.04] absolute -bottom-10 -right-4 select-none pointer-events-none leading-none">
                      {item.number}
                    </span>

                    {/* Top Section: Badge Icon & Step Indicator */}
                    <div className="relative z-10 flex items-center justify-between mb-6">
                      <div
                        className={`
                          w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center transition-all duration-500 border
                          ${
                            isActive
                              ? 'bg-gradient-to-r from-[#FF4500] to-[#FF7A3D] text-white border-transparent shadow-[0_0_25px_rgba(255,69,0,0.7)] scale-110'
                              : 'bg-[#161620] text-white/60 border-white/15'
                          }
                        `}
                      >
                        <item.icon size={22} strokeWidth={2} />
                      </div>

                      <span className="px-3 py-1 rounded-full bg-white/10 border border-white/15 text-[10px] sm:text-[11px] font-mono font-bold text-[#FF7A3D] uppercase tracking-widest backdrop-blur-md">
                        STEP {item.number}
                      </span>
                    </div>

                    {/* Content Section */}
                    <div className="relative z-10">
                      <h3 className="mb-2 sm:mb-3 uppercase text-white font-display font-bold text-xl sm:text-2xl lg:text-3xl tracking-tight">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm lg:text-base text-text-muted font-medium leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </div>

          {/* Navigation Controls: Arrow Buttons + Dots */}
          <div className="flex items-center justify-center gap-6 z-10">
            {/* Left Arrow */}
            <button
              type="button"
              aria-label="Previous step"
              onClick={() => scrollToStep(Math.max(0, activeIndex - 1))}
              disabled={activeIndex === 0}
              className={`
                w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center border transition-all duration-300 backdrop-blur-md
                ${
                  activeIndex === 0
                    ? 'opacity-30 border-white/10 text-white/30 cursor-not-allowed'
                    : 'bg-white/10 border-white/20 text-white hover:bg-white/20 hover:border-white/30 hover:scale-105 active:scale-95 shadow-md'
                }
              `}
            >
              <ChevronLeft size={22} />
            </button>

            {/* Pagination Dots */}
            <div className="flex items-center gap-2.5">
              {PROCESS_STEPS.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  aria-label={`Go to step ${idx + 1}`}
                  onClick={() => scrollToStep(idx)}
                  className={`
                    h-2.5 rounded-full transition-all duration-300
                    ${
                      idx === activeIndex
                        ? 'w-8 bg-gradient-to-r from-[#FF4500] to-[#FF7A3D] shadow-[0_0_12px_rgba(255,69,0,0.7)]'
                        : 'w-2.5 bg-white/20 hover:bg-white/40'
                    }
                  `}
                />
              ))}
            </div>

            {/* Right Arrow */}
            <button
              type="button"
              aria-label="Next step"
              onClick={() => scrollToStep(Math.min(PROCESS_STEPS.length - 1, activeIndex + 1))}
              disabled={activeIndex === PROCESS_STEPS.length - 1}
              className={`
                w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center border transition-all duration-300 backdrop-blur-md
                ${
                  activeIndex === PROCESS_STEPS.length - 1
                    ? 'opacity-30 border-white/10 text-white/30 cursor-not-allowed'
                    : 'bg-white/10 border-white/20 text-white hover:bg-white/20 hover:border-white/30 hover:scale-105 active:scale-95 shadow-md'
                }
              `}
            >
              <ChevronRight size={22} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};


