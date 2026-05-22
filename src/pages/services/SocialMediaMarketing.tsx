import { motion } from 'motion/react';
import { Button } from '../../components/ui/Button';
import {
  Calendar,
  Search,
  TrendingUp,
  Award,
  FileText,
  BarChart4,
  Palette,
  Target,
  Globe,
  Zap,
  MessageCircle,
  Video,
  Lightbulb,
  Instagram,
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const SocialMediaMarketing = () => {
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
              <span className="text-[12px] font-bold text-brand uppercase tracking-[0.4em] mb-6 block">
                Service // Marketing
              </span>
              <h1 className="mb-8 uppercase leading-[1.1]">
                SOCIAL MEDIA <br />
                MARKETING <br />
                <span className="text-brand">THAT GROWS.</span>
              </h1>
              <p className="text-lg text-text-muted font-medium mb-12 max-w-xl">
                Strategic social media marketing designed to build authority, attract qualified leads, and turn attention into measurable business growth across every platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="w-full sm:w-auto px-12 h-16 uppercase gap-2 text-[12px] font-bold tracking-widest relative overflow-hidden group">
                  <Link to="/contact" className="flex items-center gap-2">
                    <Calendar size={18} className="group-hover:rotate-12 transition-transform" />
                    Book a Call
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
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
              transition={{
                opacity: { duration: 0.8, delay: 0.2 },
                scale: { duration: 0.8, delay: 0.2 },
                y: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
              }}
              className="relative aspect-square lg:aspect-video rounded-[6px] overflow-hidden border border-border-interface shadow-premium-md bg-surface group"
            >
              <img
                src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1000&auto=format&fit=crop"
                alt="Social Media Marketing"
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
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="max-w-[700px] mx-auto text-center"
          >
            <h2 className="mb-8 uppercase">THE PROBLEM</h2>
            <p className="text-xl text-text-muted font-medium leading-relaxed">
              Most businesses post content consistently but still struggle to grow. Low engagement, weak branding, inconsistent messaging, and poor strategy lead to wasted time, weak conversions, and missed revenue opportunities.
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
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="mb-8 uppercase">THE SOLUTION</h2>
              <p className="text-lg text-text-muted font-medium leading-relaxed">
                I build data-driven social media systems that combine branding, content strategy, audience psychology, and performance marketing to help businesses grow faster online.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 gap-6">
              {[
                {
                  title: 'Modern Brand Positioning',
                  desc: 'Create a premium and memorable social presence that builds trust instantly.',
                  icon: Award,
                },
                {
                  title: 'Content That Converts',
                  desc: 'Strategic content frameworks designed to increase engagement and drive action.',
                  icon: FileText,
                },
                {
                  title: 'Performance-Driven Strategy',
                  desc: 'Every campaign is backed by analytics, audience insights, and conversion data.',
                  icon: BarChart4,
                },
                {
                  title: 'Multi-Platform Growth',
                  desc: 'Optimized strategies tailored for Instagram, Facebook, LinkedIn, TikTok, and more.',
                  icon: Globe,
                },
              ].map((item, idx) => (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ scale: 1.02, x: 5 }}
                  key={idx}
                  className="flex gap-6 p-6 border border-border-interface rounded-[6px] bg-surface group hover:border-brand hover:shadow-premium-sm transition-all cursor-default"
                >
                  <div className="w-10 h-10 rounded-[3px] bg-white flex items-center justify-center border border-border-interface group-hover:bg-brand group-hover:text-white transition-colors duration-300 flex-shrink-0">
                    <item.icon size={18} strokeWidth={1.5} />
                  </div>
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

      {/* 4. WHAT YOU GET */}
      <section className="section-spacing bg-surface border-y border-border-interface">
        <div className="container-custom">
          <div className="text-center mb-20">
            <h2 className="mb-6 uppercase">WHAT YOU GET</h2>
            <p className="text-text-muted font-medium">Fully managed, conversion-focused social media marketing solutions.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Content Strategy', desc: 'Clear monthly content planning aligned with your business goals and audience.', icon: FileText },
              { title: 'High-Quality Designs', desc: 'Professional visuals and branded creatives designed to stop scrolling.', icon: Palette },
              { title: 'Short-Form Video Content', desc: 'Engaging reels and video content optimized for reach and retention.', icon: Video },
              { title: 'Community Management', desc: 'Audience interaction and engagement strategies that strengthen loyalty.', icon: MessageCircle },
              { title: 'Paid Ad Campaigns', desc: 'Performance-focused Meta advertising designed to generate leads and sales.', icon: Target },
              { title: 'Analytics & Reporting', desc: 'Transparent reporting with measurable insights and growth tracking.', icon: BarChart4 },
            ].map((feature, idx) => (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                key={idx}
                className="p-10 bg-white rounded-[6px] border border-border-interface shadow-premium-sm hover:shadow-premium-md transition-all group cursor-default"
              >
                <div className="w-12 h-12 rounded-[3px] bg-surface flex items-center justify-center mb-8 border border-border-interface group-hover:bg-brand group-hover:text-white transition-colors duration-300">
                  <feature.icon size={24} strokeWidth={1.5} className="group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="mb-4 uppercase text-lg">{feature.title}</h3>
                <p className="text-sm text-text-muted font-medium leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. BUSINESS RESULTS */}
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
                My strategies are focused on outcomes that directly impact business growth, visibility, and customer acquisition.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: 'Increase in Engagement', val: '+320%' },
                { title: 'Higher Reach Growth', val: '4.1X' },
                { title: 'Lower Cost Per Lead', val: '-38%' },
                { title: 'More Website Traffic', val: '120%' },
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

      {/* 6. METHODOLOGY — THE GROWTH FRAMEWORK */}
      <section className="section-spacing bg-surface border-y border-border-interface">
        <div className="container-custom">
          <div className="text-center mb-20">
            <span className="text-[12px] font-bold text-brand uppercase tracking-[0.4em] mb-4 block">
              Our Methodology
            </span>
            <h2 className="uppercase">
              THE GROWTH <br />
              <span className="text-brand">FRAMEWORK</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Research', desc: 'Understanding your brand, audience behavior, competitors, and market positioning.', icon: Search },
              { step: '02', title: 'Strategy', desc: 'Building a content and marketing strategy focused on growth and conversions.', icon: Lightbulb },
              { step: '03', title: 'Execution', desc: 'Designing, creating, publishing, and optimizing high-performing content.', icon: Zap },
              { step: '04', title: 'Scaling', desc: 'Analyzing data, refining campaigns, and scaling what performs best.', icon: TrendingUp },
            ].map((phase, idx) => (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                whileHover={{ y: -5 }}
                key={idx}
                className="p-10 bg-white rounded-[6px] border border-border-interface shadow-premium-sm hover:shadow-premium-md hover:border-brand transition-all group cursor-default"
              >
                <div className="flex items-center justify-between mb-8">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-text-light">{phase.step}</span>
                  <div className="w-10 h-10 rounded-[3px] bg-surface flex items-center justify-center border border-border-interface group-hover:bg-brand group-hover:text-white transition-colors duration-300">
                    <phase.icon size={18} strokeWidth={1.5} />
                  </div>
                </div>
                <h3 className="mb-4 uppercase text-lg">{phase.title}</h3>
                <p className="text-sm text-text-muted font-medium leading-relaxed">{phase.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FINAL CTA */}
      <section className="section-spacing bg-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto py-20 lg:py-32 px-10 bg-surface rounded-[6px] border border-border-interface"
          >
            <h2 className="mb-8 uppercase">
              LET'S BUILD A SOCIAL PRESENCE <br />
              <span className="text-brand">THAT DRIVES RESULTS.</span>
            </h2>
            <p className="text-text-muted font-medium text-lg max-w-2xl mx-auto mb-12">
              If your brand isn't getting attention, engagement, or leads — it's time to implement a strategy built for growth and conversions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="w-full sm:w-auto h-16 px-12 gap-2 text-[13px] font-bold uppercase tracking-widest relative overflow-hidden group">
                <Link to="/contact" className="flex items-center gap-2">
                  <Calendar size={18} className="group-hover:rotate-12 transition-transform" />
                  Book a Call
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
                </Link>
              </Button>
              <Button variant="secondary" asChild className="w-full sm:w-auto h-16 px-12 gap-2 text-[13px] font-bold uppercase tracking-widest group">
                <Link to="/free-audit" className="flex items-center gap-2">
                  <Search size={18} className="group-hover:scale-110 transition-transform" />
                  Free Social Media Audit
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

    </main>
  );
};
