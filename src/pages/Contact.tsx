import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Button } from '../components/ui/Button';
import { Send, MapPin, Mail, Phone, Linkedin, Instagram, Facebook, CheckCircle2 } from 'lucide-react';

export const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    location: 'United States Of America',
    otherLocation: '',
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
            <h2 className="mb-4 uppercase text-white">Inquiry Received</h2>
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
    <main className="pt-24 min-h-screen bg-transparent">
      <section className="section-spacing">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-24"
          >
            <span className="text-[12px] font-bold text-brand uppercase tracking-[0.4em] mb-8 block">CONSULTATION</span>
            <h1 className="max-w-4xl uppercase text-white">
              READY TO <br />
              <span className="text-text-muted/60">MAKE IT HAPPEN?</span>
            </h1>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            <div className="lg:col-span-5 flex flex-col gap-12">
              <div className="p-10 bg-white/[0.08] backdrop-blur-[16px] border border-white/15 rounded-2xl shadow-[0_1px_0_0_rgba(255,255,255,0.2)_inset,0_10px_30px_rgba(0,0,0,0.5)]">
                <h3 className="mb-8 uppercase text-white">Project Inquiries</h3>
                <p className="text-text-muted font-medium mb-10 leading-relaxed">
                  Looking to start a new high-performance project or scale your existing business? Let's discuss your vision.
                </p>
                
                <div className="flex flex-col gap-6">
                   <div className="flex items-center gap-6 group cursor-pointer">
                      <div className="w-12 h-12 rounded-xl bg-white/[0.08] backdrop-blur-md flex items-center justify-center border border-white/15 group-hover:bg-brand group-hover:border-brand transition-all shadow-[0_1px_0_0_rgba(255,255,255,0.2)_inset]">
                        <Mail className="w-5 h-5 text-text-muted group-hover:text-white transition-all" />
                      </div>
                      <div className="flex flex-col">
                         <span className="text-[10px] font-bold text-text-muted uppercase tracking-widest">E-mail</span>
                         <a href="mailto:zain.developer@gmail.com" className="text-sm font-bold text-white translate-y-[-2px]">zain.developer@gmail.com</a>
                      </div>
                   </div>

                   <div className="flex items-center gap-6 group cursor-pointer">
                      <div className="w-12 h-12 rounded-xl bg-white/[0.08] backdrop-blur-md flex items-center justify-center border border-white/15 group-hover:bg-brand group-hover:border-brand transition-all shadow-[0_1px_0_0_rgba(255,255,255,0.2)_inset]">
                        <Phone className="w-5 h-5 text-text-muted group-hover:text-white transition-all" />
                      </div>
                      <div className="flex flex-col">
                         <span className="text-[10px] font-bold text-text-muted uppercase tracking-widest">Phone</span>
                         <a href="tel:+923194931082" className="text-sm font-bold text-white translate-y-[-2px]">+92 319 4931082</a>
                      </div>
                   </div>

                   <div className="flex items-center gap-6 group cursor-pointer">
                      <div className="w-12 h-12 rounded-xl bg-white/[0.08] backdrop-blur-md flex items-center justify-center border border-white/15 group-hover:bg-brand group-hover:border-brand transition-all shadow-[0_1px_0_0_rgba(255,255,255,0.2)_inset]">
                        <MapPin className="w-5 h-5 text-text-muted group-hover:text-white transition-all" />
                      </div>
                      <div className="flex flex-col">
                         <span className="text-[10px] font-bold text-text-muted uppercase tracking-widest">Location</span>
                         <span className="text-sm font-bold text-white translate-y-[-2px]">Remote / Global</span>
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
                       <a key={idx} href={s.href} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl border border-white/15 flex items-center justify-center hover:bg-brand hover:text-white hover:border-brand transition-all bg-white/[0.08] backdrop-blur-md text-white shadow-[0_1px_0_0_rgba(255,255,255,0.2)_inset]">
                          <s.icon size={18} />
                       </a>
                    ))}
                 </div>
              </div>
            </div>

            <div className="lg:col-span-1 hidden lg:block" />

            <div className="lg:col-span-6">
              <form onSubmit={handleSubmit} className="flex flex-col gap-6 p-8 lg:p-10 bg-white/[0.08] backdrop-blur-[16px] border border-white/15 rounded-2xl shadow-[0_1px_0_0_rgba(255,255,255,0.2)_inset,0_10px_30px_rgba(0,0,0,0.5)]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-3">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-text-muted ml-2">Your Name</label>
                    <input 
                      type="text" 
                      required
                      className="w-full bg-white/[0.08] backdrop-blur-md border border-white/15 focus:border-[#FF4500] focus:bg-white/[0.12] text-white rounded-xl px-6 py-4 outline-none transition-all font-medium shadow-[0_1px_0_0_rgba(255,255,255,0.15)_inset]"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div className="flex flex-col gap-3">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-text-muted ml-2">Email Address</label>
                    <input 
                      type="email" 
                      required
                      className="w-full bg-white/[0.08] backdrop-blur-md border border-white/15 focus:border-[#FF4500] focus:bg-white/[0.12] text-white rounded-xl px-6 py-4 outline-none transition-all font-medium shadow-[0_1px_0_0_rgba(255,255,255,0.15)_inset]"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-3">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-text-muted ml-2">Location</label>
                    <select 
                      className="w-full bg-white/[0.08] backdrop-blur-md border border-white/15 focus:border-[#FF4500] focus:bg-white/[0.12] text-white rounded-xl px-6 py-4 outline-none transition-all font-medium appearance-none shadow-[0_1px_0_0_rgba(255,255,255,0.15)_inset]"
                      value={formData.location}
                      onChange={(e) => setFormData({...formData, location: e.target.value})}
                    >
                      <option value="United States Of America" className="bg-[#141414] text-white">United States Of America</option>
                      <option value="United Kingdom" className="bg-[#141414] text-white">United Kingdom</option>
                      <option value="Canada" className="bg-[#141414] text-white">Canada</option>
                      <option value="Australia" className="bg-[#141414] text-white">Australia</option>
                      <option value="Pakistan" className="bg-[#141414] text-white">Pakistan</option>
                      <option value="Other" className="bg-[#141414] text-white">Other</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-3">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-text-muted ml-2">Service Required</label>
                    <select 
                      className="w-full bg-white/[0.08] backdrop-blur-md border border-white/15 focus:border-[#FF4500] focus:bg-white/[0.12] text-white rounded-xl px-6 py-4 outline-none transition-all font-medium appearance-none shadow-[0_1px_0_0_rgba(255,255,255,0.15)_inset]"
                      value={formData.service}
                      onChange={(e) => setFormData({...formData, service: e.target.value})}
                    >
                      <option className="bg-[#141414] text-white">WordPress Development</option>
                      <option className="bg-[#141414] text-white">Shopify Design</option>
                      <option className="bg-[#141414] text-white">Performance Marketing</option>
                      <option className="bg-[#141414] text-white">Consultation & Audit</option>
                    </select>
                  </div>
                </div>

                {formData.location === 'Other' && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="flex flex-col gap-3 overflow-hidden"
                  >
                    <label className="text-[10px] font-bold uppercase tracking-widest text-text-muted ml-2">Specify Other Location</label>
                    <input 
                      type="text" 
                      required
                      className="w-full bg-white/[0.08] backdrop-blur-md border border-white/15 focus:border-[#FF4500] focus:bg-white/[0.12] text-white rounded-xl px-6 py-4 outline-none transition-all font-medium shadow-[0_1px_0_0_rgba(255,255,255,0.15)_inset]"
                      value={formData.otherLocation}
                      onChange={(e) => setFormData({...formData, otherLocation: e.target.value})}
                    />
                  </motion.div>
                )}

                <div className="flex flex-col gap-3">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-text-muted ml-2">Estimated Budget</label>
                  <select 
                    className="w-full bg-white/[0.08] backdrop-blur-md border border-white/15 focus:border-[#FF4500] focus:bg-white/[0.12] text-white rounded-xl px-6 py-4 outline-none transition-all font-medium appearance-none shadow-[0_1px_0_0_rgba(255,255,255,0.15)_inset]"
                    value={formData.budget}
                    onChange={(e) => setFormData({...formData, budget: e.target.value})}
                  >
                    <option className="bg-[#141414] text-white">Less than $1,000</option>
                    <option className="bg-[#141414] text-white">$1,000 - $3,000</option>
                    <option className="bg-[#141414] text-white">$3,000 - $5,000</option>
                    <option className="bg-[#141414] text-white">$5,000+</option>
                  </select>
                </div>

                <div className="flex flex-col gap-3">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-text-muted ml-2">How can I help you?</label>
                  <textarea 
                    rows={6}
                    required
                    className="w-full bg-white/[0.08] backdrop-blur-md border border-white/15 focus:border-[#FF4500] focus:bg-white/[0.12] text-white rounded-xl px-6 py-4 outline-none transition-all font-medium resize-none shadow-[0_1px_0_0_rgba(255,255,255,0.15)_inset]"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  />
                </div>

                <div className="mt-4">
                  <Button className="w-full md:w-auto">
                    Send Inquiry <Send className="w-4 h-4" />
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
