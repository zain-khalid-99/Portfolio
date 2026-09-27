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
        <div className="relative p-8 h-[340px] rounded-2xl border border-white/15 bg-white/[0.08] backdrop-blur-[16px] flex flex-col justify-between group-hover:border-white/30 transition-all duration-500 overflow-hidden shadow-[0_1px_0_0_rgba(255,255,255,0.2)_inset,0_10px_30px_rgba(0,0,0,0.5)] group-hover:-translate-y-2 group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.7),0_0_30px_rgba(255,69,0,0.2)]">
          {/* subtle background gradient on hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#FF4500]/5 via-transparent to-[#FF7A3D]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          
          <div className="relative z-10">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <span className="text-[10px] font-bold text-text-light uppercase tracking-[0.3em] group-hover:text-[#FF7A3D] transition-colors">
                {project.category}
              </span>
              {project.results && project.results.length > 0 && (
                <span className="self-start sm:self-auto px-3 py-1 rounded-full bg-[#181818]/90 border border-white/10 text-[10px] font-bold text-[#FF7A3D] uppercase tracking-widest shadow-sm whitespace-nowrap">
                  {project.results[0].value} {project.results[0].label.includes('Conversion') ? 'Growth' : ''}
                </span>
              )}
            </div>
            
            <h3 className="text-2xl font-display font-bold uppercase leading-tight text-white group-hover:text-white transition-colors duration-300 line-clamp-2">
              {project.title}
            </h3>
            <p className="mt-4 text-sm text-text-muted font-medium line-clamp-3 leading-relaxed opacity-100 group-hover:opacity-90 transition-opacity">
              {project.description}
            </p>
          </div>
          
          <div className="relative z-10 flex items-center justify-between mt-6 pt-6 border-t border-white/10">
            <span className="text-[12px] font-bold uppercase tracking-widest text-text-main group-hover:text-[#FF7A3D] transition-colors">
              View Project
            </span>
            <div className="w-10 h-10 rounded-full border border-white/15 bg-[#181818] text-white flex items-center justify-center group-hover:bg-gradient-to-r group-hover:from-[#FF4500] group-hover:to-[#FF7A3D] group-hover:text-white group-hover:border-transparent group-hover:shadow-[0_0_15px_rgba(255,69,0,0.5)] transition-all duration-300">
              <ArrowUpRight size={18} />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
