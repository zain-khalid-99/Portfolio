import React, { useRef, useState } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, MotionValue } from 'motion/react';
import { Link } from 'react-router-dom';
import {
  Code2,
  Share2,
  Search,
  ShoppingBag,
  TrendingUp,
  Zap,
  ArrowRight,
  Sparkles
} from 'lucide-react';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  link: string;
  badge: string;
  glowColor: string;
  baseRotate: number;
  baseZIndex: number;
  padding: string;
  offsetStyle: string;
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'wordpress',
    title: 'WordPress Web Development',
    description:
      'We create professional, responsive, and high-performance WordPress websites tailored to your business goals. From business websites and landing pages to WooCommerce stores, we focus on clean design, mobile responsiveness, fast loading times, and a smooth user experience that supports conversions.',
    icon: Code2,
    link: '/services/wordpress',
    badge: 'Custom & Scalable',
    glowColor: 'from-[#FF4500]/20 to-[#FF7A3D]/8',
    baseRotate: -5,
    baseZIndex: 10,
    padding: 'px-5 py-3 text-sm sm:px-7 sm:py-4 sm:text-lg',
    offsetStyle: '-mx-1 -my-1'
  },
  {
    id: 'meta-ads',
    title: 'Meta Ads',
    description:
      'Reach your ideal customers with targeted Meta Ads campaigns across Facebook and Instagram. We build and optimize performance-focused campaigns using audience targeting, creative testing, campaign analysis, and conversion tracking to generate relevant traffic, leads, and potential customers.',
    icon: Share2,
    link: '/services/performance-marketing',
    badge: 'High ROI Growth',
    glowColor: 'from-[#E1306C]/22 to-[#FF4500]/10',
    baseRotate: 8,
    baseZIndex: 20,
    padding: 'px-4 py-2.5 text-xs sm:px-6 sm:py-3.5 sm:text-base',
    offsetStyle: '-mx-1.5 -my-1 lg:translate-y-1'
  },
  {
    id: 'google-ads',
    title: 'Google Ads',
    description:
      'Put your business in front of customers actively searching for your products or services with Google Ads management. We focus on keyword targeting, campaign structure, ad optimization, conversion tracking, and ongoing performance analysis to help make your paid search campaigns more effective.',
    icon: Search,
    link: '/services/performance-marketing',
    badge: 'Intent Driven',
    glowColor: 'from-[#4285F4]/22 to-[#FF7A3D]/10',
    baseRotate: -9,
    baseZIndex: 15,
    padding: 'px-4 py-2.5 text-xs sm:px-6 sm:py-3.5 sm:text-base',
    offsetStyle: '-mx-1 -my-1.5 lg:-translate-y-0.5'
  },
  {
    id: 'shopify',
    title: 'Shopify Store Designing',
    description:
      'We design modern, responsive Shopify stores that combine professional visuals with a user-friendly shopping experience. From store structure and product presentation to navigation and mobile optimization, we create Shopify stores designed to build trust, make browsing easier, and support online sales.',
    icon: ShoppingBag,
    link: '/services/shopify',
    badge: 'eCommerce Specialist',
    glowColor: 'from-[#95BF47]/22 to-[#FF4500]/10',
    baseRotate: 6,
    baseZIndex: 25,
    padding: 'px-6 py-3.5 text-sm sm:px-8 sm:py-4.5 sm:text-lg',
    offsetStyle: '-mx-2 -my-1'
  },
  {
    id: 'seo',
    title: 'Search Engine Optimization',
    description:
      "Improve your website's visibility with search engine optimization (SEO) focused on sustainable organic growth. Our approach includes keyword research, on-page SEO, content optimization, technical improvements, internal linking, and other essential SEO practices designed to help your website attract relevant search traffic.",
    icon: TrendingUp,
    link: '/services/wordpress',
    badge: 'Organic Traffic',
    glowColor: 'from-[#10B981]/22 to-[#3B82F6]/10',
    baseRotate: -7,
    baseZIndex: 30,
    padding: 'px-5 py-3 text-sm sm:px-7 sm:py-4 sm:text-lg',
    offsetStyle: '-mx-1.5 -my-1.5 lg:translate-y-1'
  },
  {
    id: 'store-optimization',
    title: 'Store Optimization',
    description:
      'Turn more store visitors into customers with eCommerce store optimization for Shopify and WooCommerce. We identify opportunities to improve product pages, navigation, website speed, mobile experience, calls to action, and the overall customer journey to create a smoother and more conversion-focused shopping experience.',
    icon: Zap,
    link: '/services/shopify',
    badge: 'CRO & Speed',
    glowColor: 'from-[#F59E0B]/22 to-[#FF4500]/12',
    baseRotate: 11,
    baseZIndex: 35,
    padding: 'px-4 py-2.5 text-xs sm:px-6 sm:py-3.5 sm:text-base',
    offsetStyle: '-mx-1 -my-1 lg:-translate-y-0.5'
  }
];

interface PinnedServicePillProps {
  service: ServiceItem;
  idx: number;
  isActive: boolean;
  isHovered: boolean;
  setActiveIndex: (idx: number) => void;
  setHoveredIndex: (idx: number | null) => void;
  scrollYProgress: MotionValue<number>;
}

const PinnedServicePill: React.FC<PinnedServicePillProps> = ({
  service,
  idx,
  isActive,
  isHovered,
  setActiveIndex,
  setHoveredIndex,
  scrollYProgress
}) => {
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  const startScroll = 0.05 + idx * 0.15;
  const endScroll = Math.min(0.95, startScroll + 0.14);

  const xTransform = useTransform(
    scrollYProgress,
    [Math.max(0, startScroll - 0.08), startScroll, endScroll],
    [260, 100, 0]
  );

  const scaleProgress = useTransform(
    scrollYProgress,
    [Math.max(0, startScroll - 0.08), startScroll, endScroll],
    [0.55, 0.8, 1]
  );

  const blurVal = useTransform(
    scrollYProgress,
    [Math.max(0, startScroll - 0.08), startScroll, endScroll],
    [8, 4, 0]
  );

  const filterString = useTransform(blurVal, (v) => `blur(${v}px)`);

  const opacity = useTransform(
    scrollYProgress,
    [Math.max(0, startScroll - 0.08), startScroll],
    [0.2, 1]
  );

  React.useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (latest) => {
      if (latest >= startScroll - 0.02 && latest <= endScroll + 0.04) {
        setActiveIndex(idx);
      }
    });
    return () => unsubscribe();
  }, [scrollYProgress, startScroll, endScroll, idx, setActiveIndex]);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const offsetX = (e.clientX - centerX) * 0.15;
    const offsetY = (e.clientY - centerY) * 0.15;
    setMouseOffset({ x: offsetX, y: offsetY });
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
    setMouseOffset({ x: 0, y: 0 });
  };

  const handleClick = () => {
    setActiveIndex(idx);
    setHoveredIndex(isHovered ? null : idx);
  };

  return (
    <motion.button
      key={service.id}
      onClick={handleClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => {
        setActiveIndex(idx);
        setHoveredIndex(idx);
      }}
      onMouseLeave={handleMouseLeave}
      style={{
        x: xTransform,
        scale: isHovered ? 1.08 : scaleProgress,
        opacity,
        filter: filterString,
        zIndex: isHovered ? 50 : isActive ? 40 : service.baseZIndex,
      }}
      animate={{
        rotate: isHovered ? 14 : isActive ? service.baseRotate + 2 : service.baseRotate,
        y: isHovered ? -8 + mouseOffset.y : 0,
        x: isHovered ? mouseOffset.x : 0,
      }}
      transition={{
        type: 'spring',
        stiffness: 400,
        damping: 18,
        mass: 0.8
      }}
      className={`group relative text-left rounded-full font-bold transition-colors duration-200 cursor-pointer border backdrop-blur-[18px] ${
        service.padding
      } ${service.offsetStyle} ${
        isActive
          ? 'bg-white/[0.24] border-[#FF7A3D] text-white shadow-[0_14px_40px_rgba(255,69,0,0.65),0_1px_0_0_rgba(255,255,255,0.45)_inset]'
          : 'bg-white/[0.09] border-white/35 text-white/90 hover:bg-white/[0.18] hover:border-white/70 hover:text-white shadow-[0_10px_28px_rgba(0,0,0,0.75),0_1px_0_0_rgba(255,255,255,0.25)_inset]'
      }`}
    >
      <div className="flex items-center gap-2 whitespace-nowrap">
        <span className={`text-[10px] sm:text-xs font-mono font-semibold ${isActive ? 'text-[#FF7A3D]' : 'text-white/50'}`}>
          0{idx + 1}
        </span>
        <span className="tracking-wide drop-shadow-md">{service.title}</span>
      </div>
    </motion.button>
  );
};

export const Services = () => {
  const pinContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const { scrollYProgress } = useScroll({
    target: pinContainerRef,
    offset: ['start start', 'end end']
  });

  const activeService = SERVICES_DATA[activeIndex];
  const IconComponent = activeService.icon;

  return (
    <div ref={pinContainerRef} className="relative min-h-screen lg:h-[300vh] bg-[#060606]">
      {/* VIEWPORT CONTAINER (Sticky on desktop, relative flow on mobile/tablet) */}
      <section
        id="services"
        className="relative lg:sticky lg:top-0 min-h-screen lg:h-screen w-full flex flex-col justify-center bg-[#060606] text-white border-b border-white/10 overflow-hidden select-none z-20 py-16 lg:py-0"
      >
        {/* Dynamic Background Glow Shift */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeService.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-[850px] h-[500px] lg:h-[650px] bg-gradient-to-tr ${activeService.glowColor} rounded-full blur-[140px] lg:blur-[190px] pointer-events-none -z-10`}
          />
        </AnimatePresence>

        <div className="w-full max-w-full px-4 sm:px-8 lg:px-12 relative z-10 my-auto">
          {/* 1. HEADER ROW (SPLIT LAYOUT) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-12 items-end pb-6 lg:pb-8">
            <div className="lg:col-span-5">
              <span className="text-[12px] font-bold text-[#FF7A3D] uppercase tracking-[0.4em] mb-2 block">
                OUR EXPERTISE
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold uppercase tracking-tight text-white leading-none">
                OUR SERVICES
              </h2>
            </div>
            <div className="lg:col-span-7">
              <p className="text-xs sm:text-sm lg:text-base text-white/70 font-medium leading-relaxed">
                We provide WordPress web development and performance marketing services designed to help businesses build a stronger online presence, attract the right audience, and turn website visitors into customers. Every service is focused on performance, usability, and measurable results.
              </p>
            </div>
          </div>

          {/* Full-width horizontal divider line */}
          <div className="w-full h-[1px] bg-white/15 mb-6 lg:mb-12" />

          {/* 2. TWO-COLUMN LAYOUT */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* LEFT COLUMN: SERVICE PILL CLUSTER */}
            <div className="lg:col-span-5 flex items-center justify-center min-h-[260px] sm:min-h-[340px] lg:min-h-[400px] w-full py-2 lg:py-4 select-none">
              <div className="flex flex-wrap items-center justify-center max-w-[460px] mx-auto relative p-2 sm:p-3 gap-2 sm:gap-2.5">
                {SERVICES_DATA.map((service, idx) => {
                  const isActive = activeIndex === idx;
                  const isHovered = hoveredIndex === idx;

                  return (
                    <PinnedServicePill
                      key={service.id}
                      service={service}
                      idx={idx}
                      isActive={isActive}
                      isHovered={isHovered}
                      setActiveIndex={setActiveIndex}
                      setHoveredIndex={setHoveredIndex}
                      scrollYProgress={scrollYProgress}
                    />
                  );
                })}
              </div>
            </div>

            {/* RIGHT COLUMN: GLASSMORPHISM 3D-STYLE CARD */}
            <div className="lg:col-span-7">
              <div className="relative p-6 sm:p-8 lg:p-10 rounded-3xl bg-white/[0.08] backdrop-blur-[20px] border border-white/15 shadow-[0_1px_0_0_rgba(255,255,255,0.2)_inset,0_20px_50px_rgba(0,0,0,0.6)] overflow-hidden min-h-[340px] sm:min-h-[380px] lg:min-h-[420px] flex flex-col justify-between group transition-all duration-500 hover:border-white/30 hover:shadow-[0_25px_60px_rgba(0,0,0,0.7),0_0_35px_rgba(255,69,0,0.25)]">
                {/* Subtle top edge glow highlight */}
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/35 to-transparent pointer-events-none" />

                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeService.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.35, ease: 'easeOut' }}
                    className="flex flex-col h-full justify-between gap-6"
                  >
                    <div>
                      {/* Top row: Badge + Icon */}
                      <div className="flex items-center justify-between gap-4 mb-4 sm:mb-6">
                        <span className="px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-white bg-white/[0.1] border border-white/20 backdrop-blur-md shadow-[0_1px_0_0_rgba(255,255,255,0.2)_inset]">
                          {activeService.badge}
                        </span>
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br from-[#FF4500] to-[#FF7A3D] text-white flex items-center justify-center shadow-[0_4px_25px_rgba(255,69,0,0.5)] transform group-hover:scale-110 transition-transform duration-300">
                          <IconComponent className="w-5 h-5 sm:w-6 sm:h-6" />
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl sm:text-3xl lg:text-4xl font-display font-bold uppercase tracking-tight text-white mb-2 sm:mb-3">
                        {activeService.title}
                      </h3>

                      {/* Description */}
                      <p className="text-xs sm:text-base text-white/80 font-medium leading-relaxed">
                        {activeService.description}
                      </p>
                    </div>

                    {/* CTA Button */}
                    <div className="pt-4 sm:pt-5 border-t border-white/10 flex items-center justify-between">
                      <Link
                        to={activeService.link}
                        className="inline-flex items-center gap-2.5 sm:gap-3 text-white font-bold text-xs sm:text-base uppercase tracking-widest group/btn hover:text-[#FF7A3D] transition-colors"
                      >
                        <span>Explore Service</span>
                        <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white text-[#FF4500] flex items-center justify-center shadow-md transition-transform duration-300 group-hover/btn:translate-x-1.5">
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </Link>

                      <span className="text-[10px] sm:text-xs font-mono text-[#FF7A3D]/70 uppercase tracking-widest hidden sm:inline-block">
                        MUHAMMAD ZAIN / SOLUTIONS
                      </span>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>

        {/* 3. PROGRESS INDICATOR DOTS & NAV BAR */}
        <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2 sm:gap-3 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-white/[0.08] backdrop-blur-md border border-white/15 shadow-[0_1px_0_0_rgba(255,255,255,0.2)_inset]">
          {SERVICES_DATA.map((service, idx) => (
            <button
              key={service.id}
              onClick={() => setActiveIndex(idx)}
              className={`transition-all duration-300 rounded-full cursor-pointer ${
                activeIndex === idx
                  ? 'w-6 sm:w-7 h-2 bg-gradient-to-r from-[#FF4500] to-[#FF7A3D] shadow-[0_0_12px_rgba(255,69,0,0.8)]'
                  : 'w-2 h-2 bg-white/30 hover:bg-white/60'
              }`}
              title={`Jump to ${service.title}`}
              aria-label={`Jump to ${service.title}`}
            />
          ))}
        </div>
      </section>
    </div>
  );
};
