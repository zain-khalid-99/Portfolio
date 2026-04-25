import { motion } from 'motion/react';
import { Button } from '../../components/ui/Button';
import {
  BarChart4,
  Target,
  TrendingUp,
  Calendar,
  Search,
  Zap,
  MousePointer2,
  PieChart,
  LineChart,
  Globe,
  CheckCircle2,
  Users,
  Star
} from 'lucide-react';
import { Process } from '../../components/sections/Process';
import { Link } from 'react-router-dom';

export const PerformanceMarketing = () => {
  return (
    <main className="pt-24 min-h-screen bg-white">
      {/* 1. HERO SECTION */}
      <section className="section-spacing bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-[12px] font-bold text-brand uppercase tracking-[0.4em] mb-6 block">Service // Growth</span>
              <h1 className="mb-8 uppercase leading-[1.1]">
                PERFORMANCE <br />
                <span className="text-brand">MARKETING.</span>
              </h1>
              <p className="text-lg text-text-muted font-medium mb-12 max-w-xl">
                I create and manage performance marketing campaigns that drive targeted traffic and convert it into leads and customers with measurable ROI.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <Button asChild className="w-full sm:w-auto px-12 h-16 uppercase gap-2 text-[12px] font-bold tracking-widest relative overflow-hidden group">
                  <Link to="/contact" className="flex items-center gap-2">
                    <Calendar size={18} className="group-hover:rotate-12 transition-transform" />
                    Book a call
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
                  </Link>
                </Button>
                <Button variant="secondary" asChild className="w-full sm:w-auto px-12 h-16 uppercase gap-2 text-[12px] font-bold tracking-widest group">
                  <Link to="/free-audit" className="flex items-center gap-2">
                    <Search size={18} className="group-hover:scale-110 transition-transform" />
                    Get Free Audit
                  </Link>
                </Button>
              </div>
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="flex items-center gap-3 text-sm text-text-muted font-medium"
              >
                <div className="flex">
                  {[1,2,3,4,5].map(i => <Star key={i} size={14} className="fill-brand text-brand" />)}
                </div>
                <span>Trusted by 50+ scaling businesses</span>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
              transition={{ 
                opacity: { duration: 0.8, delay: 0.2 },
                scale: { duration: 0.8, delay: 0.2 },
                y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
              }}
              className="relative aspect-square lg:aspect-video rounded-[6px] overflow-hidden border border-border-interface shadow-premium-md bg-surface group"
            >
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop"
                alt="Performance Marketing"
                className="w-full h-full object-cover grayscale opacity-80 group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-brand/5 group-hover:bg-transparent transition-colors duration-500" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. PROBLEM SECTION */}
      <section className="section-spacing bg-surface border-y border-border-interface">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="max-w-[700px] mx-auto text-center"
          >
            <h2 className="mb-8 uppercase">THE PROBLEM</h2>
            <p className="text-xl text-text-muted font-medium leading-relaxed">
              Running ads without strategy leads to inconsistent results and wasted budget. Many businesses struggle with poor targeting and high acquisition costs, resulting in a low ROI that hurts their bottom line.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 3. SOLUTION SECTION */}
      <section className="section-spacing bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="mb-8 uppercase">THE SOLUTION</h2>
              <p className="text-lg text-text-muted font-medium leading-relaxed">
                I build data-driven marketing systems that focus on pure ROI. Using high-converting creatives and continuous performance tracking, I ensure every cent of your ad spend is optimized for growth.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 gap-6">
              {[
                { title: 'Targeted Segmentation', desc: 'Reaching high-value leads through precise audience data analysis.' },
                { title: 'High-Convert Creatives', desc: 'Visuals and copies designed to stop the scroll and drive action.' },
                { title: 'Funnel Optimization', desc: 'Plugging leaks in your customer journey to increase efficiency.' },
                { title: 'Continuous Tracking', desc: 'Scaling what works and killing what doesn’t in real-time.' }
              ].map((item, idx) => (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ scale: 1.02, x: 5 }}
                  key={idx} 
                  className="flex gap-6 p-6 border border-border-interface rounded-[6px] bg-surface group hover:border-brand hover:shadow-premium-sm transition-all cursor-default"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-brand mt-2 group-hover:scale-150 transition-transform" />
                  <div>
                    <h4 className="text-[14px] font-bold uppercase tracking-tight text-text-main mb-1">{item.title}</h4>
                    <p className="text-sm text-text-muted font-medium">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. WHAT YOU GET (FEATURES) */}
      <section className="section-spacing bg-surface border-y border-border-interface">
        <div className="container-custom">
          <div className="text-center mb-20">
            <h2 className="mb-6 uppercase">WHAT YOU GET</h2>
            <p className="text-text-muted font-medium">End-to-end performance management systems.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Meta Ads Management', desc: 'Expert handling of Facebook and Instagram ad systems.', icon: Globe },
              { title: 'Google Ads Setup', desc: 'Strategic search and display campaigns for high intent.', icon: Search },
              { title: 'Funnel Strategy', desc: 'End-to-end mapping from awareness to conversion.', icon: Target },
              { title: 'Lead Gen Systems', desc: 'Automated processes to capture and nurture leads.', icon: Users },
              { title: 'Conversion Tracking', desc: 'Full-stack analytics to monitor every dollar spent.', icon: BarChart4 },
              { title: 'Ongoing Optimization', desc: 'Continuous testing of creatives, copy, and audience.', icon: Zap }
            ].map((feature, idx) => (
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                key={idx} 
                className="p-10 bg-white rounded-[6px] border border-border-interface shadow-premium-sm hover:shadow-premium-md transition-all group cursor-default"
              >
                <div className="w-12 h-12 rounded-[3px] bg-surface flex items-center justify-center mb-8 border border-border-interface group-hover:bg-brand group-hover:text-white transition-colors duration-300">
                  <feature.icon size={24} strokeWidth={1.5} className="group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="mb-4 uppercase text-lg">{feature.title}</h3>
                <p className="text-sm text-text-muted font-medium leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. BENEFITS / RESULTS */}
      <section className="section-spacing bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="mb-8 uppercase">BUSINESS RESULTS</h2>
              <p className="text-lg text-text-muted font-medium max-w-xl">
                Marketing should be a profit center, not an expense. I focus on the metrics that actually impact your revenue and business sustainability.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: 'Account Growth', val: '+120%' },
                { title: 'CPA Reduction', val: '-35%' },
                { title: 'RoAS Avg', val: '4.2x' },
                { title: 'Lead Quality', val: '+60%' }
              ].map((stat, idx) => (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  key={idx} 
                  className="p-10 bg-surface border border-border-interface rounded-[6px] text-center hover:shadow-premium-sm transition-shadow cursor-default"
                >
                  <span className="text-4xl font-display font-bold text-brand block mb-2">{stat.val}</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-text-muted">{stat.title}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. PROCESS SECTION */}
      <Process />

      {/* 7. CTA SECTION */}
      <section className="section-spacing bg-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto py-20 lg:py-32 px-10 bg-surface rounded-[6px] border border-border-interface"
          >
            <h2 className="mb-8 uppercase">
              LET’S SCALE YOUR <br />
              <span className="text-brand">GROWTH.</span>
            </h2>
            <p className="text-text-muted font-medium text-lg max-w-2xl mx-auto mb-12">
              If your ads aren’t generating the results you need, it’s time to switch to a strategy that focuses on ROI and scalable growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="w-full sm:w-auto h-16 px-12 gap-2 text-[13px] font-bold uppercase tracking-widest relative overflow-hidden group">
                <Link to="/contact" className="flex items-center gap-2">
                  <Calendar size={18} className="group-hover:rotate-12 transition-transform" />
                  Book a call
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
                </Link>
              </Button>
              <Button variant="secondary" asChild className="w-full sm:w-auto h-16 px-12 gap-2 text-[13px] font-bold uppercase tracking-widest group">
                <Link to="/free-audit" className="flex items-center gap-2">
                  <Search size={18} className="group-hover:scale-110 transition-transform" />
                  Free Website Audit
                </Link>
              </Button>
            </div>
            <p className="mt-6 text-[12px] text-text-muted font-bold uppercase tracking-widest">
              No commitment. 100% Free Strategy Session.
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
};
