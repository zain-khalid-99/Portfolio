import { useState, useEffect } from 'react';
import { ArrowUp, Mail, Instagram, Linkedin, Facebook, Snowflake } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  const socialLinks = [
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com' },
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com' },
  ];

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#060606] pt-16 pb-12 overflow-hidden border-t border-white/10 relative text-white select-none">
      <div className="container-custom relative z-10">
        
        {/* ── TOP MARQUEE TICKER ── */}
        <div className="mb-16 relative w-[100vw] left-1/2 -translate-x-1/2 overflow-hidden py-5 border-y border-white/10 bg-transparent">
          <motion.div
            className="flex whitespace-nowrap min-w-max items-center"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ repeat: Infinity, ease: 'linear', duration: 30 }}
          >
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex items-center gap-8 md:gap-16 pl-8 md:pl-16">
                <span className="text-[32px] sm:text-[48px] md:text-[64px] font-display font-medium uppercase text-white/90 tracking-tight leading-none">
                  Muhammad Zain
                </span>
                <Snowflake className="w-6 h-6 md:w-10 md:h-10 text-[#FF7A3D]" strokeWidth={1.5} />
                <span className="text-[32px] sm:text-[48px] md:text-[64px] font-display font-medium uppercase text-white/90 tracking-tight leading-none">
                  WordPress Web Developer
                </span>
                <Snowflake className="w-6 h-6 md:w-10 md:h-10 text-[#FF7A3D]" strokeWidth={1.5} />
                <span className="text-[32px] sm:text-[48px] md:text-[64px] font-display font-medium uppercase text-white/90 tracking-tight leading-none">
                  Performance Marketer
                </span>
                <Snowflake className="w-6 h-6 md:w-10 md:h-10 text-[#FF7A3D]" strokeWidth={1.5} />
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── 3-COLUMN EDITORIAL LAYOUT (NO CARDS, NO BOXED CONTAINERS) ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 mb-16 items-start text-center lg:text-left">
          
          {/* Column 1: Connect */}
          <div className="flex flex-col items-center lg:items-start gap-5">
            <span className="text-[11px] font-bold text-[#FF7A3D] uppercase tracking-[0.35em]">
              CONNECT
            </span>
            <p className="text-xs sm:text-sm text-text-muted font-medium leading-relaxed max-w-xs">
              Follow along for web development insights, marketing strategies, and project highlights.
            </p>
            <div className="flex gap-4 pt-2">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="w-11 h-11 rounded-full border border-white/20 bg-transparent flex items-center justify-center text-white/80 transition-all duration-300 hover:border-[#FF7A3D] hover:text-[#FF7A3D] hover:scale-105"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Contact */}
          <div className="flex flex-col items-center lg:items-start gap-5">
            <span className="text-[11px] font-bold text-[#FF7A3D] uppercase tracking-[0.35em]">
              CONTACT
            </span>
            <div className="flex flex-col gap-3 items-center lg:items-start">
              <a
                href="mailto:zain.developer@gmail.com"
                className="group relative text-base sm:text-lg font-medium text-white/90 hover:text-[#FF7A3D] transition-colors duration-300 py-1"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Mail size={16} className="text-[#FF7A3D]" />
                  <span>zain.developer@gmail.com</span>
                </span>
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#FF7A3D] transition-all duration-300 group-hover:w-full" />
              </a>

              <a
                href="tel:+923194931082"
                className="group relative text-base sm:text-lg font-medium text-white/90 hover:text-[#FF7A3D] transition-colors duration-300 py-1"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <span className="text-[#FF7A3D] font-mono text-xs font-bold">TEL</span>
                  <span>+92 319 4931082</span>
                </span>
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#FF7A3D] transition-all duration-300 group-hover:w-full" />
              </a>
            </div>
          </div>

          {/* Column 3: Pages */}
          <div className="flex flex-col items-center lg:items-start gap-5">
            <span className="text-[11px] font-bold text-[#FF7A3D] uppercase tracking-[0.35em]">
              PAGES
            </span>
            <ul className="grid grid-cols-2 gap-x-8 gap-y-3 list-none p-0 w-full max-w-xs text-center lg:text-left">
              {[
                { name: 'Home', href: '/' },
                { name: 'About', href: '/about' },
                { name: 'Services', href: '/services' },
                { name: 'Portfolio', href: '/portfolio' },
                { name: 'Social Media', href: '/services/social-media' },
                { name: 'Contact', href: '/contact' },
                { name: 'Free Audit', href: '/free-audit' },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="group relative inline-block text-xs font-semibold text-white/70 hover:text-[#FF7A3D] uppercase tracking-widest transition-colors duration-300 py-0.5"
                  >
                    <span>{link.name}</span>
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#FF7A3D] transition-all duration-300 group-hover:w-full" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* ── SIMPLE THIN DIVIDER LINE ── */}
        <div className="w-full border-t border-white/10 mb-16" />

        {/* ── LARGE EDITORIAL CLOSING WORDMARK & FOOTER BOTTOM ── */}
        <div className="flex flex-col items-center text-center gap-6">
          {/* Large plain white wordmark */}
          <h2 className="text-[10vw] sm:text-[9vw] lg:text-[110px] xl:text-[130px] font-display font-bold uppercase tracking-tight text-white leading-none select-none w-full text-center">
            MUHAMMAD ZAIN
          </h2>

          <p className="text-xs sm:text-sm text-text-muted font-medium max-w-xl mx-auto leading-relaxed">
            Helping Brands Scale Through Web Development, Paid Ads & Social Media Marketing
          </p>

          <div className="mt-8 pt-6 border-t border-white/10 w-full flex justify-center items-center">
            <p className="text-[11px] font-bold text-white/50 uppercase tracking-[0.35em]">
              © {new Date().getFullYear()} MUHAMMAD ZAIN. ALL RIGHTS RESERVED.
            </p>
          </div>
        </div>

      </div>

      {/* ── FLOATING SCROLL-TO-TOP BUTTON ── */}
      <button
        onClick={scrollToTop}
        className={`
          fixed bottom-8 right-8 z-[100] w-12 h-12 sm:w-14 sm:h-14 bg-[#141418] text-white rounded-full border border-white/20 flex items-center justify-center transition-all duration-300 shadow-xl group backdrop-blur-md
          ${
            isVisible
              ? 'opacity-100 translate-y-0 hover:bg-[#FF4500] hover:border-[#FF4500] hover:scale-110 shadow-[0_0_20px_rgba(255,69,0,0.4)]'
              : 'opacity-0 translate-y-10 pointer-events-none'
          }
        `}
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:-translate-y-1" />
      </button>
    </footer>
  );
};


