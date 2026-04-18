import Image from '../../../public/heroimg.png'

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Button } from '../ui/Button';
import { Link } from 'react-router-dom';

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-32 pb-12 overflow-hidden bg-white">
      <div className="container-custom relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="mb-8">
                DESIGN <br />
                <span className="text-brand-light">FOR HIGH</span> <br />
                PERFORMANCE
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

              <div className="flex flex-col sm:flex-row items-center gap-6 w-full">
                <Button asChild className="w-full sm:w-auto">
                  <Link to="/contact">Start a Project</Link>
                </Button>
                <Link to="/portfolio" className="flex items-center gap-4 group cursor-pointer py-4 sm:py-0 no-underline">
                  <div className="w-12 h-12 rounded-[3px] border border-border-interface flex items-center justify-center group-hover:bg-brand group-hover:border-brand transition-all">
                    <div className="w-2 h-2 rounded-full bg-brand group-hover:bg-white animate-pulse" />
                  </div>
                  <span className="text-[12px] font-bold uppercase tracking-[0.2em] text-text-main group-hover:text-brand transition-colors">View Portfolio</span>
                </Link>
              </div>
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
              <img
                src={Image}
                alt="Muhammad Zain wordpress web developer"
                className="w-[80%] -mt-[70px] h-auto max-h-[100vh] object-contain object-top z-10 mx-auto"
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
