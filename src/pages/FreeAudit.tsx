import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Button } from '../components/ui/Button';
import { CheckCircle2, Search, Zap, BarChart3, Target } from 'lucide-react';

export const FreeAudit = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <main className="pt-40 pb-20 min-h-screen bg-white">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-xl mx-auto text-center p-12 bg-surface rounded-[6px] border border-border-interface"
          >
            <div className="w-20 h-20 bg-brand/10 text-brand rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle2 size={40} />
            </div>
            <h2 className="mb-4 uppercase">Audit Requested</h2>
            <p className="text-text-muted font-medium mb-8">
              Thank you for your interest. I will review your website and marketing strategy and get back to you within 48 hours with a detailed audit.
            </p>
            <Button onClick={() => window.location.href = '/'} className="uppercase px-12 h-14">Back to Home</Button>
          </motion.div>
        </div>
      </main>
    );
  }

  return (
    <main className="auditSection pt-32 min-h-screen bg-white">
      {/* Hero Section */}
      <section className="section-spacing bg-white">
        <div className="container-custom">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-[12px] font-bold text-brand uppercase tracking-[0.4em] mb-6 block">Performance Check</span>
              <h1 className="mb-8 uppercase leading-[1.1]">
                GET A FREE WEBSITE & <br /> 
                <span className="text-zinc-300">MARKETING AUDIT.</span>
              </h1>
              <p className="text-lg text-text-muted font-medium mb-12 max-w-2xl">
                Identify the leaks in your conversion funnel. I'll personally review your site's UX, performance, and marketing strategy to find growth opportunities you're missing.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                {[
                  { icon: Search, label: 'SEO & Performance' },
                  { icon: Zap, label: 'Conversion UX' },
                  { icon: BarChart3, label: 'Growth Strategy' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 p-4 border border-border-interface rounded-[3px] bg-surface">
                    <item.icon size={20} className="text-brand" />
                    <span className="text-[11px] font-bold uppercase tracking-widest">{item.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="section-spacing bg-surface border-y border-border-interface">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-8 uppercase">WHY REQUEST AN AUDIT?</h2>
              <div className="space-y-8">
                {[
                  { title: 'Data-Driven Insights', desc: 'No guesswork. I look at real performance metrics and UX patterns.' },
                  { title: 'Conversion Focus', desc: 'Find exactly where users are dropping off in your customer journey.' },
                  { title: 'Actionable Roadmap', desc: 'Receive a step-by-step list of improvements you can implement immediately.' }
                ].map((benefit, idx) => (
                  <div key={idx} className="flex gap-6">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand mt-2 flex-shrink-0" />
                    <div>
                      <h4 className="text-[14px] font-bold uppercase tracking-tight text-text-main mb-1">{benefit.title}</h4>
                      <p className="text-sm text-text-muted font-medium leading-relaxed">{benefit.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-10 md:p-12 rounded-[6px] border border-border-interface shadow-premium-lg"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-text-muted">Full Name</label>
                    <input type="text" required className="w-full bg-surface border border-border-interface p-4 rounded-[3px] focus:border-brand focus:outline-none transition-colors" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-text-muted">Email Address</label>
                    <input type="email" required className="w-full bg-surface border border-border-interface p-4 rounded-[3px] focus:border-brand focus:outline-none transition-colors" placeholder="john@example.com" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-text-muted">Website URL</label>
                  <input type="url" required className="w-full bg-surface border border-border-interface p-4 rounded-[3px] focus:border-brand focus:outline-none transition-colors" placeholder="https://yourwebsite.com" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-text-muted">Business Type</label>
                    <input type="text" required className="w-full bg-surface border border-border-interface p-4 rounded-[3px] focus:border-brand focus:outline-none transition-colors" placeholder="eCommerce, SaaS, etc." />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-text-muted">Monthly Traffic</label>
                    <input type="text" className="w-full bg-surface border border-border-interface p-4 rounded-[3px] focus:border-brand focus:outline-none transition-colors" placeholder="e.g. 5,000" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-text-muted">Project Budget</label>
                  <select required className="w-full bg-surface border border-border-interface p-4 rounded-[3px] focus:border-brand focus:outline-none transition-colors appearance-none">
                    <option value="less-1000">Less than $1,000</option>
                    <option value="1000-3000">$1,000 – $3,000</option>
                    <option value="3000-5000">$3,000 – $5,000</option>
                    <option value="5000-plus">$5,000+</option>
                  </select>
                </div>

                <Button type="submit" className="w-full h-16 uppercase gap-2 mt-4">
                  <Target size={18} />
                  Request Free Audit
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
};
