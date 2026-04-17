/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Button } from '../ui/Button';
import { ArrowRight } from 'lucide-react';

import { Link } from 'react-router-dom';

export const CTA = () => {
  return (
    <section id="contact" className="section-spacing bg-zinc-950 relative overflow-hidden">
      <div className="container-custom relative z-10 text-center">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="max-w-5xl mx-auto"
        >
          <span className="text-zinc-500 text-[12px] font-black uppercase tracking-[4px] mb-8 block">
            READY TO SCALE?
          </span>
          <h2 className="mb-12 text-white">
            LET’S BUILD SOMETHING <br /> <span className="text-zinc-700">THAT PERFORMS.</span>
          </h2>
          
          <div className="flex flex-col items-center gap-12">
            <p className="max-w-2xl text-zinc-400">
              If your website isn’t generating leads or sales, it’s time to fix that. Stop guessing and start scaling with a data-driven approach.
            </p>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 w-full md:w-auto">
              <Button asChild fullWidth className="md:w-auto">
                <Link to="/contact">Book Strategy Call</Link>
              </Button>
              <div className="text-white flex flex-col items-center md:items-start text-center md:text-left md:border-l border-white/10 md:pl-8">
                 <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-2">Direct Contact</span>
                 <a href="mailto:zain.developer@gmail.com" className="text-lg md:text-xl font-display font-bold hover:text-brand transition-colors tracking-tight">zain.developer@gmail.com</a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Osty Aesthetic Element: Huge outline background icon */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none">
        <div className="w-[800px] h-[800px] border-[60px] border-white rounded-full translate-x-1/4" />
      </div>
    </section>
  );
};
