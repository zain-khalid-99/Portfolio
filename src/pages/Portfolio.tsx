import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, X, SlidersHorizontal } from 'lucide-react';
import { PROJECTS } from '../constants';
import { PortfolioCard } from '../components/portfolio/PortfolioCard';
import { PortfolioModal } from '../components/portfolio/PortfolioModal';
import { Project } from '../types';
import { Button } from '../components/ui/Button';
import { cn } from '../lib/utils';
import { Link } from 'react-router-dom';

const ALL_CATEGORIES = ['All', 'WordPress', 'Shopify', 'Performance Marketing', 'Social Media'];

export const Portfolio = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [visibleCount, setVisibleCount] = useState(6);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showFilters, setShowFilters] = useState(false);

  const clearAll = () => {
    setSearchQuery('');
    setActiveCategory('All');
    setVisibleCount(6);
  };

  const filteredProjects = useMemo(() => {
    return PROJECTS.filter((p) => {
      const matchesCategory =
        activeCategory === 'All' || p.mainCategory === activeCategory;
      const q = searchQuery.toLowerCase();
      const matchesSearch =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const displayedProjects = filteredProjects.slice(0, visibleCount);
  const hasMore = visibleCount < filteredProjects.length;
  const hasActiveFilters = activeCategory !== 'All' || searchQuery !== '';

  return (
    <main className="pt-24 min-h-screen bg-white">
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="section-spacing pb-0">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[12px] font-bold text-brand uppercase tracking-[0.4em] mb-8 block">
              Curated Work
            </span>
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-16">
              <h1 className="max-w-3xl uppercase leading-[1.1]">
                SELECTED <br />
                <span className="text-zinc-300">SUCCESS STORIES.</span>
              </h1>
              <p className="max-w-sm text-text-muted font-medium pb-6 border-b border-border-interface leading-relaxed lg:mb-2">
                WordPress, Shopify, Performance Marketing, and Social Media projects — all focused on measurable results.
              </p>
            </div>
          </motion.div>

          {/* ── SEARCH + FILTER ROW ───────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-6 pb-12"
          >
            {/* Search Bar */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search
                  size={16}
                  className="absolute left-5 top-1/2 -translate-y-1/2 text-text-light pointer-events-none"
                />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setVisibleCount(6);
                  }}
                  placeholder="Search projects, categories, or tags…"
                  className="w-full h-14 pl-12 pr-12 border border-border-interface rounded-[6px] bg-surface text-[13px] font-medium text-text-main placeholder:text-text-light focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/10 transition-all"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-text-light hover:text-brand transition-colors"
                  >
                    <X size={16} />
                  </button>
                )}
              </div>

              <button
                onClick={() => setShowFilters((v) => !v)}
                className={cn(
                  'flex items-center gap-2 h-14 px-6 border rounded-[6px] text-[12px] font-bold uppercase tracking-widest transition-all',
                  showFilters
                    ? 'bg-brand text-white border-brand'
                    : 'bg-surface border-border-interface text-text-muted hover:border-brand hover:text-text-main'
                )}
              >
                <SlidersHorizontal size={15} />
                Filters
                {(activeCategory !== 'All') && (
                  <span className="ml-1 w-5 h-5 rounded-full bg-white/30 text-white text-[10px] flex items-center justify-center">
                    1
                  </span>
                )}
              </button>

              {hasActiveFilters && (
                <button
                  onClick={clearAll}
                  className="flex items-center gap-2 h-14 px-6 border border-border-interface rounded-[6px] text-[12px] font-bold uppercase tracking-widest text-text-muted hover:text-brand hover:border-brand transition-all bg-white"
                >
                  <X size={14} />
                  Clear All
                </button>
              )}
            </div>

            {/* Expandable Filter Panel */}
            <AnimatePresence>
              {showFilters && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.35, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className="p-6 bg-surface border border-border-interface rounded-[6px] flex flex-col gap-6">
                    {/* Category Filter */}
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-text-light mb-3 block">
                        Filter by Category
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {ALL_CATEGORIES.map((cat) => (
                          <button
                            key={cat}
                            onClick={() => {
                              setActiveCategory(cat);
                              setVisibleCount(6);
                            }}
                            className={cn(
                              'relative px-5 py-2.5 rounded-[3px] text-[12px] font-bold uppercase tracking-widest transition-all duration-300',
                              activeCategory === cat
                                ? 'bg-brand text-white shadow-premium-sm'
                                : 'bg-white border border-border-interface text-text-muted hover:border-brand hover:text-text-main'
                            )}
                          >
                            {cat}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Active Filters Summary */}
            {hasActiveFilters && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex flex-wrap items-center gap-2"
              >
                <span className="text-[11px] font-bold uppercase tracking-widest text-text-light">
                  Active:
                </span>
                {activeCategory !== 'All' && (
                  <span className="flex items-center gap-1.5 px-3 py-1.5 bg-brand/10 border border-brand/30 text-brand rounded-[3px] text-[11px] font-bold uppercase tracking-wide">
                    {activeCategory}
                    <button onClick={() => setActiveCategory('All')}>
                      <X size={11} />
                    </button>
                  </span>
                )}
                {searchQuery && (
                  <span className="flex items-center gap-1.5 px-3 py-1.5 bg-surface border border-border-interface text-text-muted rounded-[3px] text-[11px] font-bold uppercase tracking-wide">
                    "{searchQuery}"
                    <button onClick={() => setSearchQuery('')}>
                      <X size={11} />
                    </button>
                  </span>
                )}
                <span className="text-[11px] text-text-light font-medium ml-2">
                  {filteredProjects.length} result{filteredProjects.length !== 1 ? 's' : ''}
                </span>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* ── GRID ─────────────────────────────────────────────── */}
      <section className="section-spacing pt-0">
        <div className="container-custom">
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {displayedProjects.length > 0 ? (
                displayedProjects.map((project) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                  >
                    <PortfolioCard
                      project={project}
                      onClick={(p) => setSelectedProject(p)}
                    />
                  </motion.div>
                ))
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="col-span-full flex flex-col items-center justify-center py-32 text-center"
                >
                  <div className="w-20 h-20 rounded-full bg-surface border border-border-interface flex items-center justify-center mb-6">
                    <Search size={28} className="text-text-light" />
                  </div>
                  <h3 className="text-2xl font-display font-bold uppercase mb-4">
                    No Projects Found
                  </h3>
                  <p className="text-text-muted font-medium max-w-sm mb-8">
                    No projects match your current filters. Try adjusting your search or clearing the filters.
                  </p>
                  <Button onClick={clearAll} variant="secondary" className="px-10 h-14 uppercase">
                    Clear Filters
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Load More */}
          {hasMore && (
            <div className="flex justify-center mt-20">
              <Button
                variant="secondary"
                className="px-12 h-16 uppercase"
                onClick={() => setVisibleCount((prev) => prev + 3)}
              >
                Load More Work
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="section-spacing bg-surface border-t border-border-interface">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <span className="text-[12px] font-bold text-brand uppercase tracking-[0.4em] mb-6 block">
              Ready to Start?
            </span>
            <h2 className="mb-8 uppercase">
              LET'S BUILD SOMETHING <br />
              <span className="text-brand">THAT PERFORMS.</span>
            </h2>
            <p className="text-text-muted font-medium text-lg max-w-2xl mx-auto mb-12">
              Every project above started with a conversation. Let's talk about yours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="w-full sm:w-auto h-16 px-12 gap-2 text-[13px] font-bold uppercase tracking-widest">
                <Link to="/contact">Book a Call</Link>
              </Button>
              <Button variant="secondary" asChild className="w-full sm:w-auto h-16 px-12 gap-2 text-[13px] font-bold uppercase tracking-widest">
                <Link to="/free-audit">Get Free Audit</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <PortfolioModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </main>
  );
};
