import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Button } from '../components/ui/Button';
import { CheckCircle2, Search, Zap, BarChart3, Target } from 'lucide-react';

export const FreeAudit = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [location, setLocation] = useState('United States Of America');
  const [otherLocation, setOtherLocation] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <main className="pt-40 pb-20 min-h-screen bg-transparent">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-xl mx-auto text-center p-12 bg-[#141414] rounded-[6px] border border-white/10 shadow-2xl"
          >
            <div className="w-20 h-20 bg-brand/10 text-brand rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle2 size={40} />
            </div>
            <h2 className="mb-4 uppercase text-white">Audit Requested</h2>
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
    <main className="auditSection pt-32 min-h-screen bg-transparent">
      {/* Hero Section */}
      <section className="section-spacing bg-transparent">
        <div className="container-custom">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-[12px] font-bold text-brand uppercase tracking-[0.4em] mb-6 block">Performance Check</span>
              <h1 className="mb-8 uppercase leading-[1.1] text-white">
                GET A FREE WEBSITE & <br /> 
                <span className="text-text-muted/60">MARKETING AUDIT.</span>
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
                  <div key={idx} className="flex items-center gap-4 p-4 border border-white/10 rounded-[3px] bg-[#141414]">
                    <item.icon size={20} className="text-brand" />
                    <span className="text-[11px] font-bold uppercase tracking-widest text-white">{item.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="section-spacing bg-[#111111]/60 border-y border-white/10">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-8 uppercase text-white">WHY REQUEST AN AUDIT?</h2>
              <div className="space-y-8">
                {[
                  { title: 'Data-Driven Insights', desc: 'No guesswork. I look at real performance metrics and UX patterns.' },
                  { title: 'Conversion Focus', desc: 'Find exactly where users are dropping off in your customer journey.' },
                  { title: 'Actionable Roadmap', desc: 'Receive a step-by-step list of improvements you can implement immediately.' }
                ].map((benefit, idx) => (
                  <div key={idx} className="flex gap-6">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand mt-2 flex-shrink-0" />
                    <div>
                      <h4 className="text-[14px] font-bold uppercase tracking-tight text-white mb-1">{benefit.title}</h4>
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
              className="bg-[#141414] p-10 md:p-12 rounded-[6px] border border-white/10 shadow-2xl"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-text-muted">Full Name</label>
                    <input type="text" required className="w-full bg-[#181818] border border-white/10 p-4 rounded-[3px] focus:border-brand focus:outline-none transition-colors text-white" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-text-muted">Email Address</label>
                    <input type="email" required className="w-full bg-[#181818] border border-white/10 p-4 rounded-[3px] focus:border-brand focus:outline-none transition-colors text-white" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-text-muted">Website URL</label>
                    <input type="url" required className="w-full bg-[#181818] border border-white/10 p-4 rounded-[3px] focus:border-brand focus:outline-none transition-colors text-white" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-text-muted">Location</label>
                    <select 
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className="w-full bg-[#181818] border border-white/10 p-4 rounded-[3px] focus:border-brand focus:outline-none transition-colors appearance-none text-white"
                    >
                      <option value="United States Of America" className="bg-[#181818] text-white">United States Of America</option>
                      <option value="United Kingdom" className="bg-[#181818] text-white">United Kingdom</option>
                      <option value="Canada" className="bg-[#181818] text-white">Canada</option>
                      <option value="Australia" className="bg-[#181818] text-white">Australia</option>
                      <option value="Pakistan" className="bg-[#181818] text-white">Pakistan</option>
                      <option value="Other" className="bg-[#181818] text-white">Other</option>
                    </select>
                  </div>
                </div>

                {location === 'Other' && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="space-y-2 overflow-hidden"
                  >
                    <label className="text-[10px] font-bold uppercase tracking-widest text-text-muted">Specify Other Location</label>
                    <input 
                      type="text" 
                      required 
                      value={otherLocation}
                      onChange={(e) => setOtherLocation(e.target.value)}
                      className="w-full bg-[#181818] border border-white/10 p-4 rounded-[3px] focus:border-brand focus:outline-none transition-colors text-white" 
                    />
                  </motion.div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-text-muted">Business Type</label>
                    <input type="text" required className="w-full bg-[#181818] border border-white/10 p-4 rounded-[3px] focus:border-brand focus:outline-none transition-colors text-white" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-text-muted">Monthly Traffic</label>
                    <input type="text" className="w-full bg-[#181818] border border-white/10 p-4 rounded-[3px] focus:border-brand focus:outline-none transition-colors text-white" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-text-muted">Project Budget</label>
                  <select required className="w-full bg-[#181818] border border-white/10 p-4 rounded-[3px] focus:border-brand focus:outline-none transition-colors appearance-none text-white">
                    <option value="less-1000" className="bg-[#181818] text-white">Less than $1,000</option>
                    <option value="1000-3000" className="bg-[#181818] text-white">$1,000 – $3,000</option>
                    <option value="3000-5000" className="bg-[#181818] text-white">$3,000 – $5,000</option>
                    <option value="5000-plus" className="bg-[#181818] text-white">$5,000+</option>
                  </select>
                </div>

                <Button type="submit" className="w-full mt-4">
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
