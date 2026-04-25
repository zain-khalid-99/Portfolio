import { motion } from 'motion/react';

const marqueeVariants = {
  animate: {
    x: [0, -1035],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: 'loop',
        duration: 10,
        ease: 'linear',
      },
    },
  },
};

export const Marquee = () => {
  return (
    <div className="w-full overflow-hidden bg-brand py-4 border-y border-brand-dark flex whitespace-nowrap relative select-none">
      <motion.div
        className="flex space-x-12 items-center"
        variants={marqueeVariants}
        animate="animate"
      >
        {Array.from({ length: 10 }).map((_, i) => (
          <div key={i} className="flex items-center space-x-12">
            <span className="text-xl md:text-3xl font-display font-black text-white uppercase tracking-widest">
              High Performance
            </span>
            <div className="w-2 h-2 rounded-full bg-white/50" />
            <span className="text-xl md:text-3xl font-display font-black text-transparent uppercase tracking-widest" style={{ WebkitTextStroke: '1px white' }}>
              Web Development
            </span>
            <div className="w-2 h-2 rounded-full bg-white/50" />
            <span className="text-xl md:text-3xl font-display font-black text-white uppercase tracking-widest">
              Digital Marketing
            </span>
            <div className="w-2 h-2 rounded-full bg-white/50" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};
