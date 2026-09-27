/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'motion/react';
import { PROJECTS } from '../../constants';
import { Project } from '../../types';
import { PortfolioModal } from '../portfolio/PortfolioModal';
import { ArrowUpRight, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';

// Crisp dummy screenshot mockups for clean visual demonstration
const DUMMY_PROJECT_IMAGES = [
  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1600&auto=format&fit=crop',
];

interface SlideCardProps {
  project: Project;
  index: number;
  total: number;
  scrollYProgress: MotionValue<number>;
  onSelect: () => void;
}

const SlideCard = ({
  project,
  index,
  total,
  scrollYProgress,
  onSelect,
}: SlideCardProps) => {
  // Total steps for slide-up transitions between total cards
  // Card 0 (1st card): Always fully in view (y = 0%)
  // Card 1 (2nd card): Slides up 0.0 -> 0.333
  // Card 2 (3rd card): Slides up 0.333 -> 0.666
  // Card 3 (4th card): Slides up 0.666 -> 1.0
  const stepSize = 1 / (total - 1);
  const start = (index - 1) * stepSize;
  const end = index * stepSize;

  // Transform y from '100%' (below screen) to '0%' (fully covering previous card)
  const yVal = useTransform(scrollYProgress, [start, end], ['100%', '0%']);
  const y = index === 0 ? '0%' : yVal;

  // Z-index increases sequentially so each card cleanly covers the card before it
  const zIndex = (index + 1) * 10;
  const bgImage = DUMMY_PROJECT_IMAGES[index] || project.image;

  return (
    <motion.div
      style={{
        y,
        zIndex,
      }}
      className="absolute inset-3 sm:inset-5 md:inset-[30px] lg:inset-[50px] p-4 sm:p-6 lg:p-[30px] flex flex-col justify-between overflow-hidden cursor-pointer select-none border border-white/20 bg-[#0a0a12] rounded-[16px] sm:rounded-[24px] lg:rounded-[28px] shadow-[0_-20px_50px_rgba(0,0,0,0.9)] group"
      onClick={onSelect}
    >
      {/* Background Full-Bleed Image with Solid Dark Gradient Overlay */}
      <div className="absolute inset-0 w-full h-full -z-10 overflow-hidden">
        <img
          src={bgImage}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#08080d] via-[#08080d]/80 to-[#08080d]/40" />
      </div>

      {/* Top Header Row (30px padding area content) */}
      <div className="relative z-10 flex items-center justify-between pb-4 border-b border-white/15">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-full bg-[#FF4500] text-white font-mono font-bold text-xs flex items-center justify-center shadow-md">
            0{index + 1}
          </span>
          <span className="px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-[10px] font-bold text-[#FF7A3D] uppercase tracking-widest backdrop-blur-md">
            {project.mainCategory}
          </span>
        </div>

        <span className="text-[11px] sm:text-xs font-bold text-white/70 uppercase tracking-widest font-mono">
          0{index + 1} / 0{total}
        </span>
      </div>

      {/* Bottom Content Area */}
      <div className="relative z-10 text-left max-w-4xl pt-6 pb-4">
        <span className="text-[11px] sm:text-xs font-bold text-[#FF7A3D] uppercase tracking-[0.3em] mb-2 block">
          {project.category}
        </span>

        <h3 className="text-3xl sm:text-5xl lg:text-6xl font-display font-bold uppercase text-white mb-4 leading-tight tracking-tight group-hover:text-[#FF7A3D] transition-colors duration-300">
          {project.title}
        </h3>

        <p className="text-xs sm:text-base lg:text-lg text-text-muted font-medium mb-6 lg:mb-8 max-w-2xl leading-relaxed line-clamp-3">
          {project.description}
        </p>

        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onSelect();
          }}
          className="inline-flex items-center gap-3 px-7 py-3.5 sm:px-8 sm:py-4 rounded-full bg-white/10 group-hover:bg-gradient-to-r group-hover:from-[#FF4500] group-hover:to-[#FF7A3D] border border-white/25 group-hover:border-transparent text-white font-bold text-xs sm:text-sm uppercase tracking-widest transition-all duration-300 shadow-xl"
        >
          <span>View Project</span>
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-1 transition-transform">
            <ArrowUpRight size={18} />
          </div>
        </button>
      </div>
    </motion.div>
  );
};

export const PortfolioStack = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const pinTrackRef = useRef<HTMLDivElement>(null);

  // Take first 4 projects as specified
  const featuredProjects = PROJECTS.slice(0, 4);

  // Pinned viewport scroll progress for the 4-card sequence
  const { scrollYProgress } = useScroll({
    target: pinTrackRef,
    offset: ['start start', 'end end'],
  });

  return (
    <section id="portfolio" className="relative w-full bg-transparent">
      {/* ── SECTION HEADER ───────────────────────── */}
      <div className="w-full max-w-5xl mx-auto text-center px-4 pt-16 pb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/15 bg-[#14141d] mb-4 shadow-sm">
          <Layers size={14} className="text-[#FF7A3D]" />
          <span className="text-[11px] font-bold text-[#FF7A3D] uppercase tracking-[0.35em]">PORTFOLIO</span>
        </div>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-bold uppercase tracking-tight text-white mb-4">
          FEATURED <span className="bg-gradient-to-r from-[#FF4500] via-[#FF7A3D] to-[#FF8C00] bg-clip-text text-transparent">PROJECTS</span>
        </h2>
        <p className="text-text-muted text-base sm:text-lg font-medium leading-relaxed max-w-2xl mx-auto">
          Explore a selection of high-performing WordPress websites, Shopify stores, and performance marketing campaigns built to scale.
        </p>
      </div>

      {/* ── PINNED SCROLL TRACK ── */}
      <div
        ref={pinTrackRef}
        className="relative w-full h-[400vh]"
      >
        {/* Sticky Container pinning 100vh viewport */}
        <div className="sticky top-0 h-screen w-full overflow-hidden bg-black/40">
          <div className="relative w-full h-full">
            {featuredProjects.map((project, index) => (
              <SlideCard
                key={project.id}
                project={project}
                index={index}
                total={featuredProjects.length}
                scrollYProgress={scrollYProgress}
                onSelect={() => setSelectedProject(project)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* ── BOTTOM CTA ── */}
      <div className="w-full py-16 px-4 flex justify-center items-center border-t border-white/10 bg-transparent">
        <Link
          to="/portfolio"
          className="group relative inline-flex items-center gap-3 px-10 py-5 rounded-full bg-gradient-to-r from-[#FF4500] to-[#FF7A3D] text-white font-bold text-sm sm:text-base uppercase tracking-widest shadow-[0_10px_30px_rgba(255,69,0,0.4)] hover:shadow-[0_15px_40px_rgba(255,69,0,0.6)] hover:scale-105 active:scale-95 transition-all duration-300 animate-shimmer-streak overflow-hidden"
        >
          <span className="relative z-10">View All Projects</span>
          <div className="relative z-10 w-7 h-7 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-1 transition-transform">
            <ArrowUpRight size={18} />
          </div>
        </Link>
      </div>

      {/* Detail Modal */}
      <PortfolioModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

