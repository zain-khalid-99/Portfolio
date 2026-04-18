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
        {/* Project Image Wrapper */}
        <div className="relative aspect-[4/3] overflow-hidden rounded-[6px] border border-border-interface bg-surface shadow-premium-sm mb-6">
          <img
            src={project.image}
            alt={project.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover grayscale opacity-90 transition-all duration-700 ease-out group-hover:scale-110 group-hover:grayscale-0 group-hover:opacity-100"
          />
          
          {/* Dark Overlay on Hover */}
          <div className="absolute inset-0 bg-text-main/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
            <motion.div
              initial={false}
              whileHover={{ y: -5 }}
              className="flex items-center gap-2 text-white font-bold uppercase tracking-widest text-[12px]"
            >
              <span>View Project</span>
              <ArrowUpRight size={18} />
            </motion.div>
          </div>
          
          {/* Result Badge (Top Right) */}
          {project.results && project.results.length > 0 && (
            <div className="absolute top-4 right-4 z-10">
              <span className="px-4 py-2 bg-white/90 backdrop-blur-sm border border-border-interface rounded-[3px] text-[10px] font-bold text-brand uppercase tracking-widest shadow-premium-sm">
                {project.results[0].value} {project.results[0].label.includes('Conversion') ? 'Growth' : ''}
              </span>
            </div>
          )}
        </div>

        {/* Project Info */}
        <div className="flex flex-col flex-grow group-hover:-translate-y-2 transition-transform duration-500">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-bold text-text-light uppercase tracking-[0.3em] group-hover:text-brand transition-colors">
              {project.category}
            </span>
          </div>
          <h3 className="text-xl group-hover:text-brand transition-colors duration-300 uppercase">
            {project.title}
          </h3>
          <p className="mt-4 text-sm text-text-muted font-medium line-clamp-2 leading-relaxed opacity-100 group-hover:opacity-80 transition-opacity">
            {project.description}
          </p>
        </div>
      </motion.div>
    </div>
  );
};
