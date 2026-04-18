import { motion } from 'motion/react';
import { Hero } from '../components/sections/Hero';
import { Services } from '../components/sections/Services';
import { PortfolioGrid } from '../components/sections/PortfolioGrid';
import { Process } from '../components/sections/Process';
import { FAQ } from '../components/sections/FAQ';
import { CTA } from '../components/sections/CTA';

export const Home = () => {
  return (
    <main>
      <Hero />
      
      {/* About Section - Brief Intro */}
      <section id="about" className="section-spacing bg-white">
        <div className="container-custom">
           <div className="flex flex-col gap-12">
             <motion.div
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 1 }}
             >
               <span className="text-[12px] font-bold text-brand uppercase tracking-[0.4em] mb-8 block">THE ARCHITECT</span>
               <h2 className="uppercase">
                 MOST WEBSITES FAIL BECAUSE <br />
                 <span className="text-zinc-300">THEY FOCUS ON DESIGN ALONE.</span>
               </h2>
             </motion.div>

             <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start mt-12">
               <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-lg text-text-muted font-medium leading-relaxed"
               >
                 A visually appealing website means nothing if it doesn’t generate leads or sales. I build websites with a clear purpose—to convert, perform, and scale your business.
               </motion.p>
               <div className="space-y-4">
                  {['Conversion-focused structure', 'Fast, optimized performance', 'User-centered design approach', 'Marketing-first thinking'].map((point, idx) => (
                    <motion.div 
                      key={point} 
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-center gap-4 text-[10px] font-bold text-text-main uppercase tracking-widest py-4 border-b border-border-interface"
                    >
                      <div className="w-1.5 h-1.5 bg-brand rounded-full" />
                      {point}
                    </motion.div>
                  ))}
               </div>
             </div>
           </div>
        </div>
      </section>

      <Services />
      <PortfolioGrid />
      
      <Process />

      <FAQ />
      <CTA />
    </main>
  );
};
