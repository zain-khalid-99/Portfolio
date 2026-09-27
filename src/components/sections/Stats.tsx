import { motion } from 'motion/react';

const STATS = [
  { number: '100+', label: 'Happy Clients' },
  { number: '2+', label: 'Years of Experience' },
  { number: '70+', label: 'Website Projects' },
  { number: '30+', label: 'Performance Marketing Projects' },
];

export const Stats = () => {
  return (
    <section className="py-14 lg:py-20 relative z-10 border-y border-white/10 bg-[#0e0e0e]/90 backdrop-blur-md">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl h-full bg-[#FF4500]/10 blur-3xl pointer-events-none -z-10" />

      <div className="container-custom">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {STATS.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 sm:p-8 rounded-2xl bg-[#141414]/90 border border-white/10 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.5),0_1px_2px_rgba(255,255,255,0.05)_inset] hover:border-[#FF4500]/50 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.7),0_0_30px_rgba(255,69,0,0.25)] transition-all duration-300 group flex flex-col justify-between"
            >
              <span className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight leading-none mb-3 group-hover:text-[#FF7A3D] transition-colors">
                {stat.number}
              </span>
              <span className="text-[12px] sm:text-[13px] font-semibold text-[#B0B0B0] leading-snug uppercase tracking-wider group-hover:text-white transition-colors">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
