import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, Target, Zap, TrendingUp, ArrowRight } from 'lucide-react';
import { Project } from '../../types';
import { Button } from '../ui/Button';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

interface PortfolioModalProps {
  project: Project | null;
  onClose: () => void;
}

export const PortfolioModal = ({ project, onClose }: PortfolioModalProps) => {
  // Prevent scroll when modal is open
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [project]);

  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-text-main/80 backdrop-blur-md"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-6xl max-h-full bg-white rounded-[6px] shadow-premium-2xl overflow-y-auto"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 z-10 p-3 bg-surface hover:bg-brand hover:text-white rounded-full transition-all text-text-main"
            >
              <X size={24} />
            </button>

            <div className="flex flex-col">
              {/* Header Image */}
              <div className="aspect-video w-full overflow-hidden bg-surface relative border-b border-border-interface">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover grayscale opacity-90 transition-all duration-700 hover:grayscale-0 hover:opacity-100"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-10 left-10 z-10">
                   <span className="px-4 py-2 bg-brand text-white text-[10px] font-bold uppercase tracking-[0.3em] rounded-[3px] shadow-lg mb-4 inline-block">
                    {project.category}
                   </span>
                </div>
              </div>

              {/* Content Grid */}
              <div className="p-8 md:p-14 lg:p-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 mb-20">
                  <div className="lg:col-span-8">
                    <h2 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-tight mb-8 leading-tight">
                      {project.title}
                    </h2>
                    <p className="text-xl text-text-muted font-medium leading-relaxed mb-12">
                      {project.fullDescription || project.description}
                    </p>

                    <div className="space-y-12">
                      <div className="p-8 bg-surface rounded-[6px] border border-border-interface">
                        <h4 className="text-[12px] font-bold uppercase tracking-[0.3em] text-brand mb-4">The Challenge</h4>
                        <p className="text-text-muted font-medium leading-relaxed">
                          {project.challenge || "Optimizing the user journey to reduce friction and improve conversion rates across all touchpoints."}
                        </p>
                      </div>

                      <div className="p-8 bg-surface rounded-[6px] border border-border-interface">
                        <h4 className="text-[12px] font-bold uppercase tracking-[0.3em] text-brand mb-4">The Solution</h4>
                        <p className="text-text-muted font-medium leading-relaxed">
                          {project.solution || "Implementing a data-driven redesign focusing on mobile-first interactions and clear value propositions."}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-4 space-y-12">
                    <div className="space-y-6">
                      <span className="text-[10px] font-bold text-text-light uppercase tracking-[0.3em] block border-b border-border-interface pb-2">Results Achieved</span>
                      <div className="grid grid-cols-1 gap-4">
                        {project.results?.map((res, i) => (
                           <div key={i} className="p-6 border border-border-interface rounded-[3px] bg-white group hover:border-brand transition-colors">
                              <span className="text-3xl font-display font-bold text-brand block mb-1">{res.value}</span>
                              <span className="text-[10px] font-bold uppercase tracking-widest text-text-light">{res.label}</span>
                           </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-10 border-t border-border-interface space-y-4">
                       <Button fullWidth asChild className="h-16 uppercase">
                          <a href={project.link || "#"} target="_blank" rel="noopener noreferrer">View Live Website</a>
                       </Button>
                       <Button fullWidth variant="secondary" asChild className="h-16 uppercase">
                          <Link to="/contact" onClick={onClose}>Book a Call</Link>
                       </Button>
                    </div>
                  </div>
                </div>

                {/* Gallery Preview if any */}
                {project.gallery && project.gallery.length > 0 && (
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20 border-t border-border-interface pt-20">
                      {project.gallery.map((img, i) => (
                        <div key={i} className="aspect-[4/3] rounded-[6px] overflow-hidden border border-border-interface">
                          <img src={img} alt="Gallery" className="w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700" referrerPolicy="no-referrer" />
                        </div>
                      ))}
                   </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
