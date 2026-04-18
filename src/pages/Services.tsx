import { motion } from 'motion/react';
import { Button } from '../components/ui/Button';
import { 
  Monitor, 
  ShoppingCart, 
  TrendingUp, 
  Check, 
  Zap, 
  Shield, 
  Award, 
  LineChart,
  Search,
  Lightbulb,
  Code2,
  Calendar,
  Layers,
  Target
} from 'lucide-react';

import { Link } from 'react-router-dom';

const SERVICE_SECTIONS = [
  {
    id: 'wordpress',
    slug: 'wordpress',
    title: 'WordPress Web Development',
// ... (omitted similar pattern for breivity, but I will apply to all)
    subtitle: 'Custom Websites Built for Speed, Scalability, and Conversion',
    description: 'I design and develop WordPress websites that are fast, SEO-optimized, and tailored to your business goals. Whether you need a business website or a high-converting landing page, every project is built with performance in mind.',
    image: 'https://images.unsplash.com/photo-1551033406-611cf9a28f67?q=80&w=1000&auto=format&fit=crop',
    points: [
      'Custom WordPress website design',
      'Responsive, mobile-first development',
      'Speed and performance optimization',
      'SEO-friendly structure',
      'Conversion-focused layouts',
      'Easy-to-manage backend'
    ],
    ideal: 'Businesses looking for a professional, scalable website that generates leads and supports long-term growth.'
  },
  {
    id: 'shopify',
    title: 'Shopify Store Design',
    subtitle: 'E-commerce Stores Designed to Sell, Not Just Display',
    description: 'Your Shopify store should do more than showcase products — it should convert visitors into buyers. I design clean, user-focused stores that improve the shopping experience and increase sales.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1000&auto=format&fit=crop',
    points: [
      'Shopify store setup and customization',
      'Product page optimization',
      'Mobile-first and responsive design',
      'User experience (UX) improvements',
      'Conversion-focused layouts',
      'Checkout flow optimization'
    ],
    ideal: 'eCommerce brands that want to improve conversions, user experience, and overall store performance.'
  },
  {
    id: 'marketing',
    title: 'Performance Marketing',
    subtitle: 'Data-Driven Campaigns That Generate Real ROI',
    description: 'Driving traffic is only valuable when it converts. I create and manage performance marketing campaigns that bring targeted visitors and turn them into leads and customers.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop',
    points: [
      'Meta Ads (Facebook & Instagram) campaigns',
      'Google Ads campaign setup and management',
      'Funnel strategy and optimization',
      'Lead generation systems',
      'Conversion tracking and analytics',
      'Continuous performance optimization'
    ],
    ideal: 'Businesses looking to scale with paid advertising and achieve measurable, consistent growth.'
  }
];

const PROCESS_STEPS = [
  { number: '01', title: 'Discovery', desc: 'Understanding your business, audience, and goals.', icon: Search },
  { number: '02', title: 'Strategy', desc: 'Planning structure, user flow, and conversion paths.', icon: Lightbulb },
  { number: '03', title: 'Execution', desc: 'Designing and developing with precision and performance.', icon: Code2 },
  { number: '04', title: 'Optimization', desc: 'Improving based on real data and user behavior.', icon: LineChart }
];

export const Services = () => {
  return (
    <main className="pt-24 min-h-screen bg-white">
      {/* 1. HERO SECTION */}
      <section className="section-spacing">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <span className="text-[12px] font-bold text-brand uppercase tracking-[0.4em] mb-6 block">Our Solutions</span>
            <h1 className="uppercase">
              SOLUTIONS BUILT <br /> FOR <span className="text-brand italic">PERFORMANCE.</span>
            </h1>
            <p className="text-xl md:text-2xl text-text-muted font-medium max-w-2xl leading-relaxed mt-8">
              I help businesses build high-performance websites and marketing systems designed to attract, convert, and scale. Every service is focused on delivering measurable results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. SERVICES (FULL-WIDTH CARDS) */}
      <section className="pb-32">
        <div className="container-custom flex flex-col gap-32">
          {SERVICE_SECTIONS.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center`}
            >
              <div className={`space-y-8 ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                <span className="text-[10px] font-bold p-3 bg-brand/5 border border-brand/10 rounded-[3px] text-brand uppercase tracking-widest leading-none inline-block">0{idx + 1} // Service</span>
                <h2 className="uppercase">
                  {service.title}
                </h2>
                <h3 className="text-brand uppercase tracking-tight">
                  {service.subtitle}
                </h3>
                <p className="text-text-muted font-medium leading-relaxed">
                  {service.description}
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-8 border-y border-border-interface">
                  {service.points.map((point, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-3">
                      <div className="mt-1 bg-brand/10 p-1 rounded-full">
                        <Check size={14} className="text-brand" />
                      </div>
                      <span className="text-[14px] font-bold text-text-main translate-y-[-1px]">{point}</span>
                    </div>
                  ))}
                </div>

                <div className="p-8 bg-surface border border-border-interface rounded-[6px] shadow-premium-sm">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-text-muted mb-3 italic">Ideal for:</p>
                  <p className="text-[16px] font-medium text-text-main leading-relaxed">"{service.ideal}"</p>
                </div>

                <div className="pt-8">
                  <Button asChild size="lg" className="h-16 px-12 text-xs font-bold uppercase tracking-widest">
                    <Link to={`/services/${service.id}`}>Learn More</Link>
                  </Button>
                </div>
              </div>

              <Link 
                to={`/services/${service.id}`}
                className={`relative group rounded-[6px] overflow-hidden aspect-[4/5] shadow-premium-xl ${idx % 2 === 1 ? 'lg:order-1' : ''}`}
              >
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale hover:grayscale-0"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. WHY CHOOSE ME (GRID) */}
      <section className="section-spacing bg-surface border-y border-border-interface">
        <div className="container-custom">
          <div className="mb-20">
            <h2 className="mb-6 uppercase">WHY WORK <br /> WITH ME</h2>
            <p className="text-text-muted font-medium max-w-xl text-lg">
              You’re not just hiring a service — you’re investing in a system designed to perform. Clean, scalable, and results-focused.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { title: 'Strategy + Execution', icon: Layers, desc: 'A combined approach in one place.' },
              { title: 'Results Focus', icon: Target, desc: 'Deliverables that drive real revenue.' },
              { title: 'Clean & Scalable', icon: Shield, desc: 'Technical debt-free solutions.' },
              { title: 'Industry Versatility', icon: Award, desc: 'Cross-industry proven growth.' },
              { title: 'Growth Mindset', icon: Zap, desc: 'Long-term partnership focus.' }
            ].map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-[6px] border border-border-interface hover:shadow-premium-lg transition-all shadow-premium-sm group"
              >
                <div className="text-brand mb-6 p-4 bg-brand/5 rounded-[3px] w-fit group-hover:bg-brand group-hover:text-white transition-all">
                  <card.icon size={24} strokeWidth={1.5} />
                </div>
                <h4 className="font-bold text-sm mb-3 uppercase tracking-tight">{card.title}</h4>
                <p className="text-xs text-text-muted font-medium leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PROCESS SECTION */}
      <section className="section-spacing bg-white">
        <div className="container-custom">
          <div className="mb-24 text-center">
            <h2 className="mb-6 uppercase">MY PROCESS</h2>
            <p className="text-text-muted font-medium max-w-xl mx-auto text-lg">
              A structured approach designed for results. We leave nothing to chance.
            </p>
          </div>

          <div className="relative">
            {/* Connection Line */}
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-border-interface -translate-y-1/2 hidden lg:block" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
              {PROCESS_STEPS.map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2 }}
                  className="relative z-10 lg:text-center group"
                >
                  <div className="bg-white p-2 inline-block lg:mx-auto">
                    <div className="w-16 h-16 rounded-[3px] border border-border-interface flex items-center justify-center bg-white group-hover:bg-brand group-hover:text-white transition-all duration-500 shadow-premium-sm">
                      <step.icon size={24} strokeWidth={1.5} />
                    </div>
                  </div>
                  <div className="mt-8 space-y-4">
                    <span className="text-[10px] font-bold text-brand tracking-[0.3em] uppercase">{step.number} — {step.title}</span>
                    <h4 className="text-xl uppercase">{step.title}</h4>
                    <p className="text-[14px] text-text-muted font-medium leading-relaxed max-w-[240px] lg:mx-auto">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. FINAL CTA */}
      <section className="section-spacing">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center bg-brand p-16 md:p-24 rounded-[6px] text-white overflow-hidden relative shadow-premium-2xl"
          >
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-black/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl pointer-events-none" />
            
            <h2 className="mb-8 text-white uppercase">LET’S BUILD SOMETHING <br /> THAT PERFORMS.</h2>
            <p className="text-white/80 font-medium text-lg max-w-2xl mx-auto mb-12">
              If you’re looking for a website or marketing system that actually delivers results, let’s connect and start building your future today.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button asChild size="lg" className="bg-white text-brand hover:bg-surface h-16 px-12 text-xs font-bold uppercase tracking-widest gap-3 shadow-premium-lg">
                <Link to="/free-audit" className="flex items-center gap-3">
                  <Search size={18} />
                  Free Website Audit
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-transparent border-white/20 hover:bg-white/10 text-white h-16 px-12 text-xs font-bold uppercase tracking-widest gap-3">
                <Link to="/contact" className="flex items-center gap-3">
                  <Calendar size={18} />
                  Book a call
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};
