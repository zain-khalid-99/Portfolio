import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Project } from '../../types';
import { ArrowUpRight } from 'lucide-react';

interface PortfolioCardProps {
  project: Project;
  onClick?: (project: Project) => void;
}

export const PortfolioCard = ({ project, onClick }: PortfolioCardProps) => {
  return (
    <div 
      onClick={() => onClick?.(project)} 
      className="group block cursor-pointer"
    >
      <motion.div
        layout
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col h-full"
      >
        {/* Project Card Content */}
        <div className="relative p-8 h-[340px] rounded-[6px] border border-border-interface bg-surface flex flex-col justify-between group-hover:border-brand transition-all duration-500 overflow-hidden shadow-premium-sm">
          {/* subtle background pattern or gradient on hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-surface to-brand/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="relative z-10">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <span className="text-[10px] font-bold text-text-light uppercase tracking-[0.3em] group-hover:text-brand transition-colors">
                {project.category}
              </span>
              {project.results && project.results.length > 0 && (
                <span className="self-start sm:self-auto px-3 py-1.5 bg-white border border-border-interface rounded-[3px] text-[10px] font-bold text-brand uppercase tracking-widest shadow-premium-sm whitespace-nowrap">
                  {project.results[0].value} {project.results[0].label.includes('Conversion') ? 'Growth' : ''}
                </span>
              )}
            </div>
            
            <h3 className="text-2xl font-display font-bold uppercase leading-tight group-hover:text-brand transition-colors duration-300 line-clamp-2">
              {project.title}
            </h3>
            <p className="mt-4 text-sm text-text-muted font-medium line-clamp-3 leading-relaxed opacity-100 group-hover:opacity-80 transition-opacity">
              {project.description}
            </p>
          </div>
          
          <div className="relative z-10 flex items-center justify-between mt-6 pt-6 border-t border-border-interface">
            <span className="text-[12px] font-bold uppercase tracking-widest text-text-main group-hover:text-brand transition-colors">
              View Project
            </span>
            <div className="w-10 h-10 rounded-full border border-border-interface bg-white flex items-center justify-center group-hover:bg-brand group-hover:text-white group-hover:border-brand transition-all duration-300">
              <ArrowUpRight size={18} />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
