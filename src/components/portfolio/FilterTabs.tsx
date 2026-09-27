import { motion } from 'motion/react';
import { cn } from '../../lib/utils';

interface FilterTabsProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export const FilterTabs = ({ categories, activeCategory, onCategoryChange }: FilterTabsProps) => {
  return (
    <div className="flex flex-wrap justify-center gap-2 mb-16 p-2 bg-[#141414]/80 backdrop-blur-xl border border-white/10 rounded-full max-w-fit mx-auto shadow-[0_10px_30px_rgba(0,0,0,0.4)]">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={cn(
            "relative px-6 py-2.5 rounded-full text-[12px] font-bold uppercase tracking-widest transition-all duration-300",
            activeCategory === category 
              ? "text-white" 
              : "text-text-muted hover:text-white hover:bg-white/10"
          )}
        >
          {activeCategory === category && (
            <motion.div
              layoutId="activeTab"
              className="absolute inset-0 bg-gradient-to-r from-[#FF4500] to-[#FF7A3D] rounded-full shadow-[0_4px_20px_rgba(255,69,0,0.45)]"
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
          <span className="relative z-10">{category}</span>
        </button>
      ))}
    </div>
  );
};
