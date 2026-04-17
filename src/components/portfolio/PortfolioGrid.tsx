import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PROJECTS } from '../../constants';
import { PortfolioCard } from './PortfolioCard';
import { FilterTabs } from './FilterTabs';
import { Button } from '../ui/Button';
import { PortfolioModal } from './PortfolioModal';
import { Project } from '../../types';
import { Link } from 'react-router-dom';

interface PortfolioGridProps {
  initialLimit?: number;
  showFilters?: boolean;
}

export const PortfolioGrid = ({ initialLimit = 6, showFilters = true }: PortfolioGridProps) => {
  const categories = ['All', 'WordPress', 'Shopify', 'Performance Marketing'];
  const [activeCategory, setActiveCategory] = useState('All');
  const [visibleCount, setVisibleCount] = useState(initialLimit);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') return PROJECTS;
    return PROJECTS.filter(project => project.mainCategory === activeCategory);
  }, [activeCategory]);

  const displayedProjects = filteredProjects.slice(0, visibleCount);
  const hasMore = visibleCount < filteredProjects.length;

  return (
    <div className="w-full">
      {showFilters && (
        <FilterTabs 
          categories={categories} 
          activeCategory={activeCategory} 
          onCategoryChange={(cat) => {
            setActiveCategory(cat);
            setVisibleCount(initialLimit);
          }} 
        />
      )}

      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence mode="popLayout">
          {displayedProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
            >
              <PortfolioCard project={project} onClick={(p) => setSelectedProject(p)} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {hasMore && showFilters && (
        <div className="flex justify-center mt-20">
          <Button 
            variant="secondary" 
            className="px-12 h-16 uppercase"
            onClick={() => setVisibleCount(prev => prev + 3)}
          >
            Load More Work
          </Button>
        </div>
      )}

      {initialLimit === 3 && !showFilters && (
        <div className="flex justify-center mt-20">
          <Button asChild variant="secondary" className="px-12 h-16 uppercase">
            <Link to="/portfolio">View All Work</Link>
          </Button>
        </div>
      )}

      <PortfolioModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </div>
  );
};
