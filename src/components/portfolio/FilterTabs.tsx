import { motion } from 'motion/react';
import { cn } from '../../lib/utils';

interface FilterTabsProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export const FilterTabs = ({ categories, activeCategory, onCategoryChange }: FilterTabsProps) => {
  return (
    <div className="flex flex-wrap justify-center gap-2 mb-16 p-1.5 bg-surface border border-border-interface rounded-[3px] max-w-fit mx-auto">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={cn(
            "relative px-8 py-3 rounded-[3px] text-[12px] font-bold uppercase tracking-widest transition-all duration-300",
            activeCategory === category 
              ? "text-white" 
              : "text-text-muted hover:text-text-main hover:bg-white"
          )}
        >
          {activeCategory === category && (
            <motion.div
              layoutId="activeTab"
              className="absolute inset-0 bg-brand rounded-[3px] shadow-premium-sm"
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
          <span className="relative z-10">{category}</span>
        </button>
      ))}
    </div>
  );
};
