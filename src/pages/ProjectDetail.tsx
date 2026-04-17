import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { PROJECTS } from '../constants';
import { Button } from '../components/ui/Button';
import { ArrowLeft, ArrowRight, Calendar, ExternalLink, Target, Zap, TrendingUp } from 'lucide-react';
import { useEffect } from 'react';

export const ProjectDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  
  const project = PROJECTS.find(p => p.slug === slug);
  const currentIndex = PROJECTS.findIndex(p => p.slug === slug);
  const nextProject = PROJECTS[(currentIndex + 1) % PROJECTS.length];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="mb-8 uppercase">Project Not Found</h2>
          <Button onClick={() => navigate('/portfolio')}>Back to Portfolio</Button>
        </div>
      </div>
    );
  }

  return (
    <main className="pt-24 min-h-screen bg-white">
      {/* 1. HERO SECTION */}
      <section className="section-spacing bg-white">
        <div className="container-custom">
          <Link to="/portfolio" className="inline-flex items-center gap-2 text-[10px] font-bold text-text-muted uppercase tracking-widest hover:text-brand transition-colors mb-12">
            <ArrowLeft size={14} />
            Back to All Projects
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-end mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-[12px] font-bold text-brand uppercase tracking-[0.4em] mb-6 block">{project.category}</span>
              <h1 className="mb-8 uppercase leading-tight">{project.title}</h1>
              <p className="text-xl text-text-muted font-medium max-w-xl">
                {project.description}
              </p>
            </motion.div>
            
            <div className="flex flex-wrap gap-8 py-8 border-t border-border-interface w-full">
              <div>
                <span className="text-[10px] font-bold text-text-light uppercase tracking-widest block mb-2">Client</span>
                <span className="text-[13px] font-bold text-text-main uppercase">{project.client}</span>
              </div>
              <div>
                <span className="text-[10px] font-bold text-text-light uppercase tracking-widest block mb-2">Year</span>
                <span className="text-[13px] font-bold text-text-main uppercase">{project.year}</span>
              </div>
              <div>
                <span className="text-[10px] font-bold text-text-light uppercase tracking-widest block mb-2">Industry</span>
                <span className="text-[13px] font-bold text-text-main uppercase">{project.mainCategory}</span>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="aspect-[21/9] rounded-[6px] overflow-hidden border border-border-interface shadow-premium-lg bg-surface"
          >
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover grayscale opacity-90"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </section>

      {/* 2. OVERVIEW & PROBLEM */}
      <section className="section-spacing bg-surface border-y border-border-interface">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <h2 className="mb-8 text-xl uppercase tracking-widest">Project Overview</h2>
              <p className="text-lg text-text-muted font-medium leading-relaxed">
                {project.fullDescription}
              </p>
            </div>
            <div>
              <h2 className="mb-8 text-xl uppercase tracking-widest">The Problem</h2>
              <p className="text-lg text-text-muted font-medium leading-relaxed">
                {project.challenge}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SOLUTION */}
      <section className="section-spacing bg-white">
        <div className="container-custom">
          <div className="max-w-4xl">
            <h2 className="mb-12 uppercase">The Solution</h2>
            <p className="text-2xl text-text-main font-medium leading-relaxed uppercase tracking-tight mb-12">
              {project.solution}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-full border border-brand bg-brand/5 flex items-center justify-center text-brand flex-shrink-0">
                  <Zap size={20} />
                </div>
                <div>
                  <h4 className="text-[14px] font-bold uppercase mb-2">High Efficiency</h4>
                  <p className="text-sm text-text-muted font-medium">Built for rapid interactions and zero lag in user journeys.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-full border border-brand bg-brand/5 flex items-center justify-center text-brand flex-shrink-0">
                  <Target size={20} />
                </div>
                <div>
                  <h4 className="text-[14px] font-bold uppercase mb-2">Intent Focused</h4>
                  <p className="text-sm text-text-muted font-medium">Every design choice was driven by data and user purchase intent.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. RESULTS */}
      <section className="section-spacing bg-text-main text-white">
        <div className="container-custom">
          <div className="flex flex-col items-center text-center mb-20">
            <span className="text-brand font-bold uppercase tracking-[0.4em] mb-4 text-[12px]">Outcome</span>
            <h2 className="text-white uppercase font-display">THE IMPACT MEASURED</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {project.results?.map((res, idx) => (
              <div key={idx} className="p-12 bg-white/5 border border-white/10 rounded-[6px] text-center group hover:border-brand/40 transition-colors">
                <span className="text-4xl md:text-5xl font-display font-bold text-brand block mb-4 group-hover:scale-110 transition-transform">{res.value}</span>
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/60">{res.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. VISUAL SHOWCASE */}
      {project.gallery && project.gallery.length > 0 && (
        <section className="section-spacing bg-white">
          <div className="container-custom">
            <h2 className="mb-20 text-center uppercase tracking-widest text-xl font-body font-normal text-text-muted">Process & Interface</h2>
            <div className="grid grid-cols-1 gap-12">
               {project.gallery.map((img, idx) => (
                 <motion.div 
                   key={idx}
                   initial={{ opacity: 0, y: 40 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   className="rounded-[6px] overflow-hidden border border-border-interface bg-surface"
                 >
                   <img 
                    src={img} 
                    alt={`Gallery ${idx}`} 
                    className="w-full grayscale opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
                    referrerPolicy="no-referrer"
                   />
                 </motion.div>
               ))}
            </div>
          </div>
        </section>
      )}

      {/* 7. NEXT PROJECT NAVIGATION */}
      <section className="border-t border-border-interface">
        <Link to={`/portfolio/${nextProject.slug}`} className="group block py-32 bg-surface hover:bg-brand transition-colors duration-700">
          <div className="container-custom text-center">
            <span className="text-[12px] font-bold text-text-muted group-hover:text-white/60 uppercase tracking-[0.4em] mb-8 block transition-colors">UP NEXT</span>
            <h2 className="text-4xl md:text-6xl uppercase group-hover:text-white transition-colors mb-12">
              {nextProject.title}
            </h2>
            <div className="inline-flex items-center gap-4 text-brand group-hover:text-white font-bold uppercase tracking-widest text-[14px] transition-colors">
              <span>View Next Case Study</span>
              <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </div>
          </div>
        </Link>
      </section>

      {/* 8. CTA SECTION */}
      <section className="section-spacing bg-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto py-20 lg:py-32 px-10 bg-surface rounded-[6px] border border-border-interface"
          >
            <h2 className="mb-8 uppercase">
              WANT RESULTS <br />
              <span className="text-brand">LIKE THESE?</span>
            </h2>
            <p className="text-text-muted font-medium text-lg max-w-2xl mx-auto mb-12 text-center">
              Every business has a growth ceiling. My job is to find it and break it through better design and data.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
               <Button className="w-full sm:w-auto h-16 px-12 gap-2 text-[13px] font-bold uppercase">
                <Calendar size={18} />
                Book a call
              </Button>
              <Button variant="secondary" className="w-full sm:w-auto h-16 px-12 gap-2 text-[13px] font-bold uppercase">
                <TrendingUp size={18} />
                Scale your brand
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};
