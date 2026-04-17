/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { ArrowUp, Mail, Instagram, Linkedin, Facebook, Twitter, ArrowUpRight, Snowflake } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

export const Footer = () => {
  const socialLinks = [
    { icon: Linkedin, href: 'https://linkedin.com' },
    { icon: Instagram, href: 'https://instagram.com' },
    { icon: Facebook, href: 'https://facebook.com' },
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
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white pt-24 pb-12 overflow-hidden border-t border-border-interface relative">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24 items-start">
          <div className="lg:col-span-12 mb-16 relative w-[100vw] left-1/2 -translate-x-1/2 overflow-hidden py-8 border-y border-border-interface bg-surface">
            <motion.div
              className="flex whitespace-nowrap min-w-max items-center"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
            >
              {[...Array(4)].map((_, i) => (
                <div key={i} className="flex items-center gap-8 md:gap-16 pl-8 md:pl-16">
                  <span className="text-[40px] md:text-[80px] font-display font-medium uppercase text-text-main tracking-tight leading-none">
                    Muhammad Zain
                  </span>
                  <Snowflake className="w-10 h-10 md:w-16 md:h-16 text-brand" strokeWidth={1.5} />
                  <span className="text-[40px] md:text-[80px] font-display font-medium uppercase text-text-main tracking-tight leading-none">
                    Wordpress Web Developer
                  </span>
                  <Snowflake className="w-10 h-10 md:w-16 md:h-16 text-brand" strokeWidth={1.5} />
                  <span className="text-[40px] md:text-[80px] font-display font-medium uppercase text-text-main tracking-tight leading-none">
                    Shopify
                  </span>
                  <Snowflake className="w-10 h-10 md:w-16 md:h-16 text-brand" strokeWidth={1.5} />
                </div>
              ))}
            </motion.div>
          </div>
          
          <div className="lg:col-span-4 flex flex-col items-start gap-6">
            <span className="text-[10px] font-bold text-text-light uppercase tracking-[4px]">CONNECT</span>
            <div className="flex gap-4">
              {socialLinks.map((social, i) => (
                <a key={i} href={social.href} target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-border-interface rounded-full flex items-center justify-center text-text-main hover:bg-brand hover:border-brand hover:text-white transition-all">
                  <social.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col items-start gap-6">
            <span className="text-[10px] font-bold text-text-light uppercase tracking-[4px]">CONTACT</span>
            <div className="flex flex-col gap-2">
              <a href="mailto:zain.developer@gmail.com" className="text-[18px] font-sans font-medium text-text-main border-b border-border-interface pb-1 w-fit hover:text-brand hover:border-brand transition-all">
                zain.developer@gmail.com
              </a>
              <a href="tel:+923194931082" className="text-[18px] font-sans font-medium text-text-main border-b border-border-interface pb-1 w-fit hover:text-brand hover:border-brand transition-all">
                +92 319 4931082
              </a>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col items-start gap-6">
            <span className="text-[10px] font-bold text-text-light uppercase tracking-[4px]">PAGES</span>
            <ul className="grid grid-cols-2 gap-x-12 gap-y-3 list-none p-0 w-full">
              {[
                { name: 'Home', href: '/' },
                { name: 'About', href: '/about' },
                { name: 'Services', href: '/services' },
                { name: 'Portfolio', href: '/portfolio' },
                { name: 'Contact', href: '/contact' },
                { name: 'Free Audit', href: '/free-audit' }
              ].map(link => (
                <li key={link.name}>
                  <Link to={link.href} className="text-[13px] font-medium text-text-muted hover:text-brand transition-colors uppercase tracking-widest">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-border-interface flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-bold text-text-light uppercase tracking-[4px]">© {new Date().getFullYear()} MUHAMMAD ZAIN. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8">
            <Link to="/legal/privacy" className="text-[10px] uppercase font-bold tracking-widest text-text-light hover:text-brand transition-colors">Privacy Policy</Link>
            <Link to="/legal/terms" className="text-[10px] uppercase font-bold tracking-widest text-text-light hover:text-brand transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>

      <button 
        onClick={scrollToTop}
        className={cn(
          "fixed bottom-8 right-8 z-[100] w-14 h-14 bg-white rounded-full border border-border-interface flex items-center justify-center text-text-main hover:bg-brand hover:text-white hover:border-brand transition-all duration-300 shadow-premium-md group",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
        )}
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6 transition-transform group-hover:-translate-y-1" />
      </button>
    </footer>
  );
};
