/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './ui/Button';
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

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    {
      name: 'Services',
      href: '/services',
      subLinks: [
        { name: 'WordPress Development', href: '/services/wordpress' },
        { name: 'Shopify Design', href: '/services/shopify' },
        { name: 'Performance Marketing', href: '/services/marketing' },
      ]
    },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-[100] transition-all duration-500 flex items-center',
        isScrolled ? 'h-20 bg-white/95 backdrop-blur-md border-b border-border-interface' : 'h-24 bg-transparent'
      )}
    >
      <div className="container-custom flex items-center justify-between w-full">
        <Link to="/" className="logo text-xl font-display font-bold tracking-tighter text-text-main group uppercase">
          MUHAMMAD ZAIN<span className="text-brand">.</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          <ul className="flex items-center gap-8 list-none">
            {navLinks.map((link) => (
              <li key={link.name} className="relative group/item">
                <Link
                  to={link.href}
                  className={cn(
                    "text-[12px] font-medium transition-colors duration-200 uppercase tracking-widest flex items-center gap-1",
                    location.pathname === link.href ? "text-brand" : "text-text-muted hover:text-text-main"
                  )}
                >
                  {link.name}
                  {link.subLinks && <ChevronDown className="w-3 h-3 transition-transform group-hover/item:rotate-180" />}
                </Link>

                {link.subLinks && (
                  <div className="absolute top-full left-0 pt-4 opacity-0 invisible group-hover/item:opacity-100 group-hover/item:visible transition-all duration-300">
                    <div className="bg-text-main p-6 min-w-[240px] rounded-[6px] shadow-premium-md border border-white/5">
                      <div className="flex flex-col gap-1">
                        {link.subLinks.map((sub) => (
                          <Link
                            key={sub.name}
                            to={sub.href}
                            className="block px-4 py-3 text-[13px] font-medium text-text-light hover:text-white transition-all rounded-[3px] hover:bg-white/5"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-6 pl-8 border-l border-border-interface h-6">
            <Button asChild>
              <Link to="/free-audit">Get Free Audit</Link>
            </Button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-3 bg-surface rounded-[3px] text-text-main hover:bg-brand hover:text-white transition-all z-[130]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
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
              className="fixed inset-0 bg-text-main/60 backdrop-blur-sm z-[110]"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed inset-y-0 right-0 w-full md:w-[400px] bg-white z-[120] flex flex-col p-6 md:p-10 overflow-y-auto"
            >
              <div className="flex justify-between items-center mb-16">
                <span className="text-text-muted font-bold uppercase tracking-[0.3em] text-[10px]">Navigate</span>
                <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 hover:bg-surface rounded-full transition-all text-text-main">
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="flex flex-col gap-8">
                {navLinks.map((link) => (
                  <div key={link.name} className="flex flex-col gap-4">
                    <Link
                      to={link.href}
                      className="text-3xl md:text-5xl font-display font-bold text-text-main uppercase tracking-tighter hover:text-brand transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                    {link.subLinks && (
                      <div className="flex flex-col gap-4 pl-4 border-l border-border-interface">
                        {link.subLinks.map((sub) => (
                          <Link
                            key={sub.name}
                            to={sub.href}
                            className="text-[13px] font-medium text-text-muted hover:text-brand uppercase tracking-widest transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-auto pt-14 border-t border-border-interface">
                <Button asChild fullWidth>
                  <Link to="/free-audit" onClick={() => setIsMobileMenuOpen(false)}>Free Discovery Call</Link>
                </Button>

                <div className="mt-8 flex gap-6">
                  {['Instagram', 'LinkedIn', 'Twitter'].map(s => (
                    <a key={s} href="#" className="text-[10px] uppercase font-bold tracking-widest text-text-light hover:text-brand transition-colors">{s}</a>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};
