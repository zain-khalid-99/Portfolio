import { motion } from 'motion/react';
import { Search, Lightbulb, Code2, LineChart } from 'lucide-react';

const PROCESS_STEPS = [
  { number: '01', title: 'Discovery', desc: 'Understanding your business, audience, and challenges.', icon: Search },
  { number: '02', title: 'Strategy', desc: 'Planning structure, user flow, and conversion paths.', icon: Lightbulb },
  { number: '03', title: 'Execution', desc: 'Designing and developing a high-performance website.', icon: Code2 },
  { number: '04', title: 'Optimization', desc: 'Improving based on data, behavior, and performance metrics.', icon: LineChart }
];

export const Process = () => {
  return (
    <section className="section-spacing bg-white">
      <div className="container-custom">
        <div className="mb-24">
          <span className="text-[12px] font-bold text-brand uppercase tracking-[0.4em] mb-4 block">OUR METHODOLOGY</span>
          <h2 className="uppercase">
            THE SUCCESS <br /> BLUEPRINT
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-0 border-t border-l border-border-interface">
          {PROCESS_STEPS.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="p-12 border-b border-r border-border-interface relative overflow-hidden group min-h-[350px]"
            >
              <span className="text-[120px] font-display font-black text-zinc-50 absolute -bottom-10 -right-5 select-none group-hover:text-brand/5 transition-colors uppercase leading-none">{item.number}</span>
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-[3px] border border-border-interface flex items-center justify-center bg-white group-hover:bg-brand group-hover:text-white transition-all mb-8 shadow-premium-sm">
                  <item.icon size={20} strokeWidth={1.5} />
                </div>
                <h3 className="mb-6 uppercase">{item.title}</h3>
                <p className="text-[14px] text-text-muted font-medium leading-relaxed max-w-xs">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
