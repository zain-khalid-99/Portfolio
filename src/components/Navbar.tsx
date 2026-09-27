/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isMobileMenuOpen]);

  // Center navigation menu items as specified: Home, About Us, Services, Projects, Contact
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Projects', href: '/portfolio' },
    { name: 'Contact', href: '/contact' },
  ];

  const isLinkActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 transition-all duration-500 flex items-center',
        isMobileMenuOpen ? 'z-[99999]' : 'z-50',
        isScrolled
          ? 'h-20 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/10 shadow-md'
          : 'h-24 bg-transparent'
      )}
    >
      <div className="container-custom flex items-center justify-between w-full">
        {/* Left: Logo/site name in a serif font, bold, left-aligned */}
        <div className="flex-1 flex items-center justify-start">
          <Link
            to="/"
            className="font-serif font-bold text-xl md:text-2xl tracking-tight text-white uppercase select-none hover:opacity-85 transition-opacity"
          >
            MUHAMMAD ZAIN<span className="text-[#FF5722]">.</span>
          </Link>
        </div>

        {/* Center: A horizontal navigation menu inside a pill-shaped (fully rounded) light-gray background container */}
        <div className="hidden lg:flex items-center justify-center flex-shrink-0">
          <div className="flex items-center bg-[#141414] border border-white/10 rounded-full p-1.5 shadow-md">
            {navLinks.map((link) => {
              const isActive = isLinkActive(link.href);
              return (
                <Link
                  key={link.name}
                  to={link.href}
                  className={cn(
                    'relative px-5 py-2 text-[13px] md:text-[14px] rounded-full transition-colors duration-200 select-none whitespace-nowrap',
                    isActive
                      ? 'text-black font-semibold'
                      : 'text-[#B0B0B0] hover:text-white'
                  )}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavPill"
                      className="absolute inset-0 bg-white rounded-full shadow-xs -z-0"
                      transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Right: Solid orange-gradient pill button with white text and circular arrow icon */}
        <div className="flex-1 flex items-center justify-end gap-3">
          <Link
            to="/free-audit"
            className="hidden sm:inline-flex items-center gap-3 bg-gradient-to-r from-[#FF4500] via-[#FF7A3D] to-[#FF8C00] text-white hover:brightness-110 rounded-full pl-6 pr-2 py-2 transition-all duration-300 ease-out shadow-[0_4px_20px_rgba(255,69,0,0.35)] hover:shadow-[0_8px_32px_rgba(255,69,0,0.6)] hover:scale-[1.04] active:scale-[0.98] group select-none animate-shimmer-streak relative overflow-hidden font-bold border border-white/20"
          >
            <span className="relative z-10 text-[14px] font-bold uppercase tracking-wider text-white">
              Get A Free Quote
            </span>
            <span className="relative z-10 w-8 h-8 rounded-full bg-white text-[#FF4500] flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shadow-sm">
              <ArrowUpRight size={16} strokeWidth={2.4} />
            </span>
          </Link>

          {/* Mobile Toggle Button */}
          <button
            className="lg:hidden p-2.5 bg-[#181818] border border-white/10 rounded-full text-white hover:bg-[#FF5722] hover:text-white transition-all relative z-[100000]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md z-[99998]"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed inset-y-0 right-0 w-full sm:w-[420px] bg-[#111111] border-l border-white/10 z-[99999] flex flex-col p-6 md:p-10 overflow-y-auto shadow-2xl"
            >
              <div className="flex justify-between items-center mb-12">
                <span className="text-[#8E8E93] font-bold uppercase tracking-[0.3em] text-[10px]">
                  Menu
                </span>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 hover:bg-[#1a1a1a] rounded-full transition-all text-white"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Mobile Nav Links inside a rounded pill group */}
              <div className="flex flex-col gap-2 p-2 bg-[#181818] border border-white/10 rounded-[24px]">
                {navLinks.map((link) => {
                  const isActive = isLinkActive(link.href);
                  return (
                    <Link
                      key={link.name}
                      to={link.href}
                      className={cn(
                        'px-5 py-3.5 text-base font-semibold rounded-full transition-all flex items-center justify-between',
                        isActive
                          ? 'bg-white text-black shadow-xs'
                          : 'text-[#B0B0B0] hover:text-white'
                      )}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <span>{link.name}</span>
                      {isActive && (
                        <span className="w-2 h-2 rounded-full bg-[#FF5722]" />
                      )}
                    </Link>
                  );
                })}
              </div>

              <div className="mt-auto pt-10 border-t border-white/10 flex flex-col gap-6">
                <Link
                  to="/free-audit"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full inline-flex items-center justify-between bg-gradient-to-r from-[#FF4500] via-[#FF7A3D] to-[#FF8C00] text-white rounded-full pl-6 pr-2 py-3 transition-all duration-300 ease-out shadow-[0_4px_20px_rgba(255,69,0,0.35)] hover:shadow-[0_8px_32px_rgba(255,69,0,0.6)] active:scale-[0.98] group animate-shimmer-streak relative overflow-hidden font-bold border border-white/20"
                >
                  <span className="relative z-10 text-[14px] font-bold uppercase tracking-wider text-white">
                    Get A Free Quote
                  </span>
                  <span className="relative z-10 w-9 h-9 rounded-full bg-white text-[#FF4500] flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shadow-sm">
                    <ArrowUpRight size={18} strokeWidth={2.4} />
                  </span>
                </Link>

                <div className="flex items-center justify-between pt-4 text-[11px] font-bold uppercase tracking-widest text-[#8E8E93]">
                  <span>Remote / Global</span>
                  <div className="flex gap-4">
                    {['LinkedIn', 'Instagram'].map((s) => (
                      <a
                        key={s}
                        href="#"
                        className="hover:text-white transition-colors"
                      >
                        {s}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};
