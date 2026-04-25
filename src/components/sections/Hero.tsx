import Image from '../../../public/heroimg.png'

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Button } from '../ui/Button';
import { Link } from 'react-router-dom';
import { Star, ArrowRight } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-32 pb-12 overflow-hidden bg-white">
      <div className="container-custom relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.15 }
                }
              }}
              className="mb-8"
            >
              <h1 className="flex flex-wrap gap-x-4">
                {['DESIGN', 'FOR', 'HIGH', 'PERFORMANCE'].map((word, index) => (
                  <motion.span
                    key={index}
                    className={`block ${index === 2 || index === 3 ? 'text-brand-light' : ''}`}
                    variants={{
                      hidden: { opacity: 0, y: 50 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9] } }
                    }}
                  >
                    {word}
                  </motion.span>
                ))}
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col items-start w-full"
            >
              <p className="max-w-xl mb-12 text-text-muted font-medium">
                I design and develop high-performance WordPress and Shopify websites,
                powered by data-driven performance marketing strategies.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-6 w-full mb-8">
                <Button asChild className="w-full sm:w-auto relative overflow-hidden group">
                  <Link to="/contact" className="flex items-center gap-2">
                    Start a Project
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
                  </Link>
                </Button>
                <Link to="/portfolio" className="flex items-center gap-4 group cursor-pointer py-4 sm:py-0 no-underline hover:-translate-y-1 transition-transform duration-300">
                  <div className="w-12 h-12 rounded-[3px] border border-border-interface flex items-center justify-center group-hover:bg-brand group-hover:border-brand transition-all shadow-premium-sm group-hover:shadow-premium-md">
                    <div className="w-2 h-2 rounded-full bg-brand group-hover:bg-white animate-pulse" />
                  </div>
                  <span className="text-[12px] font-bold uppercase tracking-[0.2em] text-text-main group-hover:text-brand transition-colors">View Portfolio</span>
                </Link>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="flex items-center gap-3 text-sm text-text-muted font-medium bg-surface/50 py-2 px-4 rounded-full border border-border-interface"
              >
                <div className="flex">
                  {[1, 2, 3, 4, 5].map(i => <Star key={i} size={14} className="fill-brand text-brand" />)}
                </div>
                <span>Rated 5.0 by 100+ Happy Clients</span>
              </motion.div>
            </motion.div>
          </div>

          <div className="lg:col-span-5 relative flex justify-center lg:justify-center mt-12 lg:mt-0 self-start">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
              className="relative w-full flex items-start justify-start"
            >
              {/* Note: User should replace this with their actual transparent portrait */}
              <motion.img
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                src={Image}
                alt="Muhammad Zain wordpress web developer"
                className="w-[80%] -mt-[70px] h-auto max-h-[100vh] object-contain object-top z-10 mx-auto drop-shadow-2xl"
                referrerPolicy="no-referrer"
              />

              {/* Background Abstract Shape for depth, matching "Osty" flair */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[80%] bg-zinc-50 rounded-full blur-[100px] -z-0" />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Decorative Brand Text Backdrop */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-[0.03] select-none z-0">
        <h2 className="text-[25vw] font-display font-black text-text-main leading-none uppercase">
          ZAIN
        </h2>
      </div>
    </section>
  );
};
