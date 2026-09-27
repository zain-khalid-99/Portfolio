import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';
import Image from '../../public/heroimg.png';
import { AboutSection } from '../components/sections/AboutSection';
import { Process } from '../components/sections/Process';
import {
  Target,
  Zap,
  Users,
  CheckCircle2,
  Calendar,
  Search
} from 'lucide-react';

const TYPEWRITER_PHRASES = [
  'Performance Marketer',
  'WordPress Web Developer',
];

const TypewriterText = () => {
  const [displayText, setDisplayText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = TYPEWRITER_PHRASES[phraseIndex];
    let typingSpeed = isDeleting ? 40 : 80;

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
      <span className="inline-block w-[3px] h-[1.1em] bg-[#FF4500] ml-1.5 animate-pulse rounded-full" />
    </span>
  );
};

export const About = () => {
  return (
    <main className="pt-20 min-h-screen bg-transparent">
      {/* 1. TOP INTRO SECTION WITH PICTURE & TYPEWRITER INTRO */}
      <section className="section-spacing md:pt-32 lg:pt-36 bg-transparent">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            
            {/* Picture Column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 relative aspect-[4/5] rounded-2xl overflow-hidden group border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.85)] bg-[#101014]"
            >
              <img
                src={Image}
                alt="Muhammad Zain"
                className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/80 via-transparent to-transparent pointer-events-none" />
            </motion.div>

            {/* Intro Text Block Column */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-7 flex flex-col justify-center text-left"
            >
              <span className="text-[12px] font-bold text-[#FF7A3D] uppercase tracking-[0.4em] mb-3 block">
                THE ARCHITECT OF GROWTH
              </span>

              {/* "Hey!" displayed large and bold */}
              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-display font-extrabold uppercase text-white mb-2 tracking-tight leading-none">
                Hey!
              </h1>

              {/* "Then I am Muhammad Zain." */}
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-display font-bold uppercase text-white mb-4 tracking-tight leading-tight">
                Then I am <span className="text-white">Muhammad Zain.</span>
              </h2>

              {/* Typewriter role line */}
              <div className="text-xl sm:text-3xl lg:text-4xl font-display font-bold text-white tracking-tight leading-snug min-h-[1.6em] flex items-center mb-8">
                <TypewriterText />
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <Button asChild>
                  <Link to="/contact">Work With Me</Link>
                </Button>
                <Button variant="secondary" asChild>
                  <Link to="/portfolio">View Projects</Link>
                </Button>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. ABOUT ME SECTION (Word-by-word scroll-color-reveal from homepage) */}
      <AboutSection />

      {/* 3. MY METHODOLOGY / SUCCESS BLUEPRINT (Scroll-pinned timeline from homepage) */}
      <Process />

      {/* 4. APPROACH SECTION */}
      <section className="section-spacing bg-[#111111]/60 border-t border-white/10">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">
            <div>
              <h2 className="mb-8 uppercase text-white">A STRATEGY-FIRST <br /> APPROACH</h2>
              <p className="text-text-muted font-medium leading-relaxed">
                Every project starts with understanding your business goals, audience, and challenges. From there, I focus on creating a structure that guides users toward action.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: 'Conversion-focused design', icon: Target },
                { title: 'Performance optimization', icon: Zap },
                { title: 'User-centered experience', icon: Users },
                { title: 'Data-driven decision making', icon: CheckCircle2 }
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col gap-4 p-8 bg-[#141414] border border-white/10 rounded-2xl shadow-premium-sm">
                  <div className="text-[#FF7A3D] mb-2">
                    <item.icon size={28} strokeWidth={1.8} />
                  </div>
                  <span className="text-[13px] font-bold uppercase tracking-widest text-white">
                    {item.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. EXPERIENCE SECTION */}
      <section className="section-spacing bg-transparent border-y border-white/10">
        <div className="container-custom">
          <div className="mb-16">
            <h2 className="mb-4 uppercase font-bold tracking-tight text-white">EXPERIENCE & <br /> RESULTS</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { value: '70+', label: 'WordPress & Shopify Websites Delivered' },
              { value: '50+', label: 'Ads Campaigns Managed' },
              { value: 'Multiple', label: 'Industries Served' },
              { value: '100%', label: 'Commitment to Growth' }
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="flex flex-col"
              >
                <span className="text-5xl md:text-6xl font-display font-bold text-gradient-orange bg-gradient-to-r from-[#FF4500] via-[#FF7A3D] to-[#FF8C00] bg-clip-text text-transparent mb-4 tracking-tighter">{stat.value}</span>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-text-muted leading-relaxed">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CTA SECTION */}
      <section className="section-spacing bg-transparent">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto py-20 lg:py-32 px-10 bg-[#141414] rounded-3xl border border-white/10"
          >
            <h2 className="mb-8 uppercase text-white">
              LET’S BUILD SOMETHING <br />
              <span className="bg-gradient-to-r from-[#FF4500] via-[#FF7A3D] to-[#FF8C00] bg-clip-text text-transparent">THAT PERFORMS.</span>
            </h2>
            <p className="text-text-muted font-medium text-lg max-w-2xl mx-auto mb-12">
              If you’re looking for a website or marketing system that actually delivers results, let’s connect and strategize your next move.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="w-full sm:w-auto">
                <Link to="/contact">
                  <Calendar size={18} />
                  Book a call
                </Link>
              </Button>
              <Button variant="secondary" asChild className="w-full sm:w-auto">
                <Link to="/free-audit">
                  <Search size={18} />
                  Free Website Audit
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

