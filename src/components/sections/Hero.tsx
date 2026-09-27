import Image from '../../../public/heroimg.png';

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Button } from '../ui/Button';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle } from 'lucide-react';

const SERVICE_PILLS = [
  'Performance Marketing (Meta & Google)',
  'WordPress Web Development',
  'Shopify Store Designing',
];

const HERO_STATS = [
  { value: '100+', label: 'Happy Clients' },
  { value: '2+', label: 'Years Exp.' },
  { value: '70+', label: 'Web Projects' },
  { value: '30+', label: 'Marketing' },
];

const TYPEWRITER_PHRASES = [
  'WordPress Web Developer',
  'Performance Marketer',
];

const TypewriterRole = () => {
  const [displayText, setDisplayText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = TYPEWRITER_PHRASES[phraseIndex];
    let typingSpeed = isDeleting ? 45 : 85;

    if (!isDeleting && displayText === currentPhrase) {
      const timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 1800);
      return () => clearTimeout(timeout);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setPhraseIndex((prev) => (prev + 1) % TYPEWRITER_PHRASES.length);
      return;
    }

    const timeout = setTimeout(() => {
      setDisplayText(
        isDeleting
          ? currentPhrase.substring(0, displayText.length - 1)
          : currentPhrase.substring(0, displayText.length + 1)
      );
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, phraseIndex]);

  return (
    <span className="inline-flex items-center bg-gradient-to-r from-[#FF4500] via-[#FF7A3D] to-[#FF8C00] bg-clip-text text-transparent font-bold">
      <span>{displayText}</span>
      <span className="inline-block w-[2.5px] h-[1.1em] bg-[#FF4500] ml-1 animate-pulse rounded-full" />
    </span>
  );
};

export const Hero = () => {
  return (
    <section className="relative min-h-[100vh] lg:h-screen lg:max-h-[100vh] w-full flex flex-col justify-between pt-24 lg:pt-[100px] pb-8 lg:pb-8 overflow-hidden bg-[#060606] text-white select-none">
      {/* ── DARK VIBE AMBIENT SPOTLIGHT GLOWS ─────────────────────────────── */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-[900px] h-[500px] lg:h-[650px] bg-gradient-to-tr from-[#FF4500]/25 to-[#FF7A3D]/15 rounded-full blur-[140px] lg:blur-[180px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 w-full h-32 lg:h-44 bg-gradient-to-t from-[#060606] via-[#060606]/90 to-transparent pointer-events-none z-20" />
      <div className="absolute top-0 left-0 right-0 h-24 lg:h-32 bg-gradient-to-b from-[#060606] to-transparent pointer-events-none z-10" />

      {/* ── TOP / CENTER: HUGE BACKDROP TITLE "WEB & ADS" ───────────────── */}
      <div className="relative z-10 w-full text-center pt-2 sm:pt-4 pointer-events-none">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-display font-normal text-[16vw] sm:text-[15vw] lg:text-[210px] xl:text-[240px] leading-none uppercase tracking-tight text-white/95 drop-shadow-[0_20px_40px_rgba(0,0,0,0.95)]"
        >
          WEB & ADS
        </motion.h1>
      </div>

      {/* ── CENTER: BIG STANDING PHOTO POSITIONED IN CENTER ─────────────── */}
      <div className="relative lg:absolute bottom-0 left-1/2 -translate-x-1/2 z-20 pointer-events-none flex justify-center items-end h-[45vh] sm:h-[55vh] lg:h-full max-h-[96vh] w-full overflow-hidden my-4 lg:my-0">
        <motion.img
          initial={{ opacity: 0, y: 50, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.15 }}
          src={Image}
          alt="Muhammad Zain Web Developer & Performance Marketer"
          className="max-h-[45vh] sm:max-h-[55vh] lg:max-h-[95vh] w-auto object-contain object-bottom scale-100 sm:scale-105 lg:scale-120 drop-shadow-[0_30px_60px_rgba(0,0,0,0.98)]"
          referrerPolicy="no-referrer"
        />
      </div>

      {/* ── BOTTOM CONTAINER: CARDS ── */}
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-30 mt-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 justify-between items-end gap-6">

          {/* Bottom-Left Card */}
          <div className="lg:col-span-4 pointer-events-auto text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="p-5 sm:p-6 rounded-[14px] bg-white/[0.08] backdrop-blur-[16px] border border-white/15 shadow-[0_1px_0_0_rgba(255,255,255,0.2)_inset,0_20px_50px_rgba(0,0,0,0.85)] flex flex-col items-start gap-4 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/35 to-transparent pointer-events-none" />

              <div className="space-y-1 text-left w-full">
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6 }}
                  className="text-sm sm:text-base text-white/90 font-medium tracking-tight"
                >
                  Hey! I am <span className="text-white font-bold">Muhammad Zain</span>
                </motion.p>

                <div className="text-base sm:text-lg lg:text-xl font-display font-bold text-white tracking-tight leading-snug min-h-[1.6em] flex items-center">
                  <TypewriterRole />
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-1 w-full sm:w-auto">
                <Link to="/portfolio" className="w-full sm:w-auto">
                  <Button variant="primary" fullWidth className="sm:w-auto">
                    View Projects <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
                <a 
                  href="https://wa.me/923094412880?text=Hello!%20I%20would%20like%20to%20know%20more%20about%20your%20services." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  <Button variant="secondary" fullWidth className="sm:w-auto">
                    Chat With Me <MessageCircle className="ml-2 w-4 h-4 text-[#FF7A3D]" />
                  </Button>
                </a>
              </div>
            </motion.div>
          </div>

          {/* Bottom-Right Cards */}
          <div className="lg:col-span-4 lg:col-start-9 flex flex-col gap-4 pointer-events-auto items-end text-left w-full">
            {/* Service Pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="p-3.5 sm:p-4 rounded-[14px] bg-white/[0.08] backdrop-blur-[16px] border border-white/15 shadow-[0_1px_0_0_rgba(255,255,255,0.2)_inset,0_20px_50px_rgba(0,0,0,0.85)] flex flex-wrap items-center justify-start lg:justify-end gap-2 relative overflow-hidden w-full"
            >
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none" />
              {SERVICE_PILLS.map((pill, idx) => (
                <div
                  key={idx}
                  className="px-3 py-1.5 rounded-[10px] border border-white/15 bg-white/[0.08] backdrop-blur-md shadow-[0_1px_0_0_rgba(255,255,255,0.15)_inset,0_4px_16px_rgba(0,0,0,0.4)] hover:border-white/30 hover:bg-white/[0.15] transition-all text-[11px] font-semibold text-white/90 select-none"
                >
                  {pill}
                </div>
              ))}
            </motion.div>

            {/* Stat Cards 2x2 Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-2.5 w-full"
            >
              {HERO_STATS.map((stat, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-[14px] bg-white/[0.08] backdrop-blur-[16px] border border-white/15 shadow-[0_1px_0_0_rgba(255,255,255,0.2)_inset,0_15px_30px_rgba(0,0,0,0.7)] hover:border-white/30 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                >
                  <span className="text-xl sm:text-2xl font-display font-semibold text-white tracking-tight leading-none mb-1">
                    {stat.value}
                  </span>
                  <span className="text-[10px] font-semibold text-[#B0B0B0] leading-tight uppercase tracking-wider">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
