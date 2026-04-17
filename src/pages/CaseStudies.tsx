import React from 'react';
import { motion } from 'motion/react';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Calendar, Tag } from 'lucide-react';

const CASE_STUDIES = [
  {
    id: 'ecommerce-growth',
    title: 'E-commerce Growth Hack',
    client: 'Elite Fashion Store',
    category: 'Shopify / Performance',
    image: 'https://picsum.photos/seed/elite/1200/800',
    description: 'How we scaled a local fashion brand to $1M in monthly revenue using custom Shopify development and Meta Ads funnel scaling.',
    results: ['+412% Revenue Increase', '2.8x ROAS Improvement', '12% CVR Optimization'],
  },
  {
    id: 'lead-gen',
    title: 'Lead Generation Funnel',
    client: 'Fintech Solutions',
    category: 'WordPress / Marketing',
    image: 'https://picsum.photos/seed/fintech/1200/800',
    description: 'Building a complex lead generation engine with custom CRM integration and high-speed WordPress architecture.',
    results: ['800+ High-Value Leads', '30% Cost-Per-Lead reduction', '99.9% Uptime achievement'],
  },
  {
    id: 'redesign',
    title: 'Digital Agency Redesign',
    client: 'Creative Pulse',
    category: 'Creative / Design',
    image: 'https://picsum.photos/seed/pulse/1200/800',
    description: 'A complete visual and technical overhaul for a leading creative agency, focusing on micro-interactions and performance.',
    results: ['2.5s Page Load improvement', '50% Bounce Rate reduction', 'Clutch Ranking top 1%'],
  },
];

export const CaseStudies = () => {
  return (
    <main className="pt-24 min-h-screen bg-white">
      <section className="section-spacing">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-24"
          >
            <span className="text-[12px] font-bold text-brand uppercase tracking-[0.4em] mb-8 block">STRATEGIC RESULTS</span>
            <h1 className="max-w-4xl uppercase">
              DEEP DIVES INTO <br />
              <span className="text-zinc-300">REAL BUSINESS IMPACT.</span>
            </h1>
          </motion.div>

          <div className="flex flex-col gap-32">
            {CASE_STUDIES.map((study, idx) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center"
              >
                <div className={`lg:col-span-6 ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="relative aspect-[16/10] overflow-hidden rounded-[6px] group cursor-pointer shadow-premium-xl">
                    <img 
                      src={study.image} 
                      alt={study.title}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                    <div className="absolute top-8 left-8">
                       <div className="px-5 py-2 bg-white/90 backdrop-blur-md rounded-[3px] text-[10px] font-bold uppercase tracking-widest text-text-main shadow-premium-sm">
                         {study.category}
                       </div>
                    </div>
                  </div>
                </div>

                <div className={`lg:col-span-6 flex flex-col items-start ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <span className="text-[12px] font-bold text-brand mb-6 uppercase tracking-widest leading-none">Client: {study.client}</span>
                  <h2 className="mb-8 uppercase">{study.title}</h2>
                  <p className="text-text-muted font-medium mb-12 leading-relaxed max-w-xl text-lg">
                    {study.description}
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mb-12 pb-12 border-b border-border-interface">
                    {study.results.map((result, rIdx) => (
                      <div key={rIdx} className="flex flex-col">
                        <span className="text-2xl font-display font-bold text-text-main tracking-tight uppercase">{result.split(' ')[0]}</span>
                        <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest leading-none mt-2">{result.split(' ').slice(1).join(' ')}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button asChild variant="primary" className="h-16 px-12 uppercase">
                    <Link to={`/case-studies/${study.id}`}>View Case Study <ExternalLink className="w-4 h-4 ml-2" /></Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};
