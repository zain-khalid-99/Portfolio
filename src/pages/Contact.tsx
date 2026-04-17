import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Button } from '../components/ui/Button';
import { Send, MapPin, Mail, Phone, Linkedin, Instagram, Facebook, CheckCircle2 } from 'lucide-react';

export const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'WordPress Development',
    budget: 'Less than $1,000',
    message: ''
  });

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
            <h2 className="mb-4 uppercase">Inquiry Received</h2>
            <p className="text-text-muted font-medium mb-8">
              Thank you for reaching out. Muhammad Zain will review your message and get back to you within 24 hours to schedule a strategy call.
            </p>
            <Button onClick={() => window.location.href = '/'} className="uppercase px-12 h-14">Back to Home</Button>
          </motion.div>
        </div>
      </main>
    );
  }

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
            <span className="text-[12px] font-bold text-brand uppercase tracking-[0.4em] mb-8 block">CONSULTATION</span>
            <h1 className="max-w-4xl uppercase">
              READY TO <br />
              <span className="text-zinc-300">MAKE IT HAPPEN?</span>
            </h1>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            <div className="lg:col-span-5 flex flex-col gap-12">
              <div className="p-10 bg-surface rounded-[6px] border border-border-interface shadow-premium-md">
                <h3 className="mb-8 uppercase">Project Inquiries</h3>
                <p className="text-text-muted font-medium mb-10 leading-relaxed">
                  Looking to start a new high-performance project or scale your existing business? Let's discuss your vision.
                </p>
                
                <div className="flex flex-col gap-6">
                   <div className="flex items-center gap-6 group cursor-pointer">
                      <div className="w-12 h-12 rounded-[3px] bg-white flex items-center justify-center border border-border-interface group-hover:bg-brand group-hover:border-brand transition-all shadow-premium-sm">
                        <Mail className="w-5 h-5 text-text-muted group-hover:text-white transition-all" />
                      </div>
                      <div className="flex flex-col">
                         <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">E-mail</span>
                         <a href="mailto:zain.developer@gmail.com" className="text-sm font-bold text-text-main translate-y-[-2px]">zain.developer@gmail.com</a>
                      </div>
                   </div>

                   <div className="flex items-center gap-6 group cursor-pointer">
                      <div className="w-12 h-12 rounded-[3px] bg-white flex items-center justify-center border border-border-interface group-hover:bg-brand group-hover:border-brand transition-all shadow-premium-sm">
                        <Phone className="w-5 h-5 text-text-muted group-hover:text-white transition-all" />
                      </div>
                      <div className="flex flex-col">
                         <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Phone</span>
                         <a href="tel:+923194931082" className="text-sm font-bold text-text-main translate-y-[-2px]">+92 319 4931082</a>
                      </div>
                   </div>

                   <div className="flex items-center gap-6 group cursor-pointer">
                      <div className="w-12 h-12 rounded-[3px] bg-white flex items-center justify-center border border-border-interface group-hover:bg-brand group-hover:border-brand transition-all shadow-premium-sm">
                        <MapPin className="w-5 h-5 text-text-muted group-hover:text-white transition-all" />
                      </div>
                      <div className="flex flex-col">
                         <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Location</span>
                         <span className="text-sm font-bold text-text-main translate-y-[-2px]">Remote / Global</span>
                      </div>
                   </div>
                </div>
              </div>
              
              <div className="flex flex-col gap-6 p-6">
                 <h4 className="text-[10px] font-bold uppercase tracking-[3.3px] text-text-muted">FOLLOW EXCELLENCE</h4>
                 <div className="flex gap-4">
                    {[
                      { icon: Linkedin, href: 'https://linkedin.com' },
                      { icon: Instagram, href: 'https://instagram.com' },
                      { icon: Facebook, href: 'https://facebook.com' }
                    ].map((s, idx) => (
                       <a key={idx} href={s.href} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-[3px] border border-border-interface flex items-center justify-center hover:bg-brand hover:text-white hover:border-brand transition-all bg-white shadow-premium-sm">
                          <s.icon size={18} />
                       </a>
                    ))}
                 </div>
              </div>
            </div>

            <div className="lg:col-span-1 hidden lg:block" />

            <div className="lg:col-span-6">
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-3">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-text-muted ml-2">Your Name</label>
                    <input 
                      type="text" 
                      placeholder="John Doe"
                      required
                      className="w-full bg-surface border border-border-interface focus:border-brand focus:bg-white rounded-[6px] px-8 py-4 outline-none transition-all font-medium"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div className="flex flex-col gap-3">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-text-muted ml-2">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="john@example.com"
                      required
                      className="w-full bg-surface border border-border-interface focus:border-brand focus:bg-white rounded-[6px] px-8 py-4 outline-none transition-all font-medium"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-3">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-text-muted ml-2">Service Required</label>
                    <select 
                      className="w-full bg-surface border border-border-interface focus:border-brand focus:bg-white rounded-[6px] px-8 py-4 outline-none transition-all font-medium appearance-none shadow-premium-sm"
                      value={formData.service}
                      onChange={(e) => setFormData({...formData, service: e.target.value})}
                    >
                      <option>WordPress Development</option>
                      <option>Shopify Design</option>
                      <option>Performance Marketing</option>
                      <option>Consultation & Audit</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-3">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-text-muted ml-2">Estimated Budget</label>
                    <select 
                      className="w-full bg-surface border border-border-interface focus:border-brand focus:bg-white rounded-[6px] px-8 py-4 outline-none transition-all font-medium appearance-none shadow-premium-sm"
                      value={formData.budget}
                      onChange={(e) => setFormData({...formData, budget: e.target.value})}
                    >
                      <option>Less than $1,000</option>
                      <option>$1,000 - $3,000</option>
                      <option>$3,000 - $5,000</option>
                      <option>$5,000+</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-text-muted ml-2">How can I help you?</label>
                  <textarea 
                    placeholder="Tell me about your project or business goals..."
                    rows={6}
                    required
                    className="w-full bg-surface border border-border-interface focus:border-brand focus:bg-white rounded-[6px] px-8 py-6 outline-none transition-all font-medium resize-none shadow-premium-sm"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  />
                </div>

                <div className="mt-4">
                  <Button className="w-full md:w-auto px-16 h-16 uppercase">
                    Send Inquiry <Send className="w-4 h-4 ml-3" />
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
