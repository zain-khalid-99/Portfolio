import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'motion/react';

interface ScrollWordProps {
  children: React.ReactNode;
  progress: MotionValue<number>;
  range: [number, number];
}

const ScrollWord: React.FC<ScrollWordProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0.25, 1]);
  const color = useTransform(progress, range, ['rgba(255, 255, 255, 0.25)', 'rgba(255, 255, 255, 1)']);

  return (
    <motion.span
      style={{ opacity, color }}
      className="inline-block mr-[0.3em] my-[0.1em] transition-colors duration-100"
    >
      {children}
    </motion.span>
  );
};

interface KeywordPillProps {
  text: string;
  pillId: number;
  progress: MotionValue<number>;
  activeRange: [number, number];
  hoveredPill: number | null;
  setHoveredPill: (id: number | null) => void;
}

const KeywordPill: React.FC<KeywordPillProps> = ({
  text,
  pillId,
  progress,
  activeRange,
  hoveredPill,
  setHoveredPill,
}) => {
  const pillScrollActive = useTransform(progress, (latest) => {
    return latest >= activeRange[0] && latest <= activeRange[1];
  });

  const [isActiveByScroll, setIsActiveByScroll] = useState(false);

  React.useEffect(() => {
    const unsubscribe = pillScrollActive.on('change', (latest) => {
      setIsActiveByScroll(latest);
    });
    return () => unsubscribe();
  }, [pillScrollActive]);

  const isActive = hoveredPill === pillId || (hoveredPill === null && isActiveByScroll);

  return (
    <motion.span
      onMouseEnter={() => setHoveredPill(pillId)}
      onMouseLeave={() => setHoveredPill(null)}
      className={`inline-flex items-center justify-center align-middle mx-1 my-1 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full font-bold text-xs sm:text-base lg:text-lg transition-all duration-300 cursor-pointer select-none ${
        isActive
          ? 'bg-white text-[#0a0a0a] shadow-[0_4px_25px_rgba(255,255,255,0.45)] scale-105 border border-white'
          : 'bg-white/10 text-white/90 border border-white/20 hover:bg-white hover:text-[#0a0a0a] hover:scale-105 hover:shadow-[0_4px_25px_rgba(255,255,255,0.45)]'
      }`}
    >
      {text}
    </motion.span>
  );
};

export const AboutSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredPill, setHoveredPill] = useState<number | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.75', 'end 0.35'],
  });

  // Calculate total sequence steps (words + pills)
  const TOTAL_STEPS = 85;

  const getItemRange = (stepIndex: number, stepSpan = 1): [number, number] => {
    const stepSize = 0.85 / TOTAL_STEPS;
    const start = stepIndex * stepSize;
    const end = Math.min(1, start + stepSize * (stepSpan + 1.2));
    return [start, end];
  };

  let currentStepIndex = 0;

  const renderWords = (text: string) => {
    const words = text.trim().split(/\s+/);
    return words.map((word, i) => {
      const range = getItemRange(currentStepIndex++);
      return (
        <ScrollWord key={`${word}-${i}`} progress={scrollYProgress} range={range}>
          {word}
        </ScrollWord>
      );
    });
  };

  const renderPill = (text: string, pillId: number, wordCount: number) => {
    const range = getItemRange(currentStepIndex, wordCount);
    currentStepIndex += wordCount;
    return (
      <KeywordPill
        key={`pill-${pillId}`}
        text={text}
        pillId={pillId}
        progress={scrollYProgress}
        activeRange={range}
        hoveredPill={hoveredPill}
        setHoveredPill={setHoveredPill}
      />
    );
  };

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative py-24 lg:py-36 bg-[#060606] text-white border-y border-white/10 overflow-hidden"
    >
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-gradient-to-tr from-[#FF4500]/12 to-[#FF7A3D]/5 rounded-full blur-[180px] pointer-events-none -z-10" />

      <div className="container-custom max-w-[1200px] mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center md:text-left"
        >
          <span className="text-[12px] font-bold text-[#FF7A3D] uppercase tracking-[0.4em] mb-3 block">
            ABOUT ME
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-semibold uppercase tracking-tight text-white leading-tight">
            ABOUT <span className="bg-gradient-to-r from-[#FF4500] via-[#FF7A3D] to-[#FF8C00] bg-clip-text text-transparent">MUHAMMAD ZAIN</span>
          </h2>
        </motion.div>

        {/* Full-Width Text Container (No card background, no box border) */}
        <div className="space-y-6 sm:space-y-8 text-lg sm:text-2xl md:text-3xl lg:text-4xl leading-relaxed sm:leading-relaxed lg:leading-[1.7] font-medium tracking-tight">
          {/* Paragraph 1 */}
          <p className="flex flex-wrap items-baseline">
            {renderWords("I'm a")}
            {renderPill("WordPress Web Developer", 0, 3)}
            {renderWords("and")}
            {renderPill("Performance Marketer", 1, 2)}
            {renderWords("with")}
            {renderPill("2 years of hands-on experience", 2, 5)}
            {renderWords("building websites and running digital campaigns focused on performance, usability, and measurable growth.")}
          </p>

          {/* Paragraph 2 */}
          <p className="flex flex-wrap items-baseline">
            {renderWords("I create fast, responsive, conversion-focused WordPress websites and combine them with data-driven marketing strategies across")}
            {renderPill("Google Ads", 3, 2)}
            <span className="mr-2 text-white/30">,</span>
            {renderPill("Meta Ads", 4, 2)}
            <span className="mr-2 text-white/30">,</span>
            {renderWords("and PPC campaigns.")}
          </p>

          {/* Paragraph 3 */}
          <p className="flex flex-wrap items-baseline">
            {renderWords("My approach is simple: build better, market smarter, and measure what matters.")}
          </p>

          {/* Paragraph 4 */}
          <p className="flex flex-wrap items-baseline">
            {renderWords("From developing a website from the ground up to optimizing campaigns and tracking conversions, I focus on creating digital experiences that not only look professional but are built to deliver")}
            {renderPill("real business results", 5, 3)}
            <span className="text-white/30">.</span>
          </p>
        </div>
      </div>
    </section>
  );
};
