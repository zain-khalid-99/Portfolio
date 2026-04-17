import { motion } from 'motion/react';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';
import Image from "../../public/heroimg.png"
import {
  Monitor,
  ShoppingCart,
  TrendingUp,
  Target,
  Zap,
  Users,
  CheckCircle2,
  Calendar,
  Search
} from 'lucide-react';
import { image } from 'motion/react-client';

export const About = () => {
  return (
    <main className="pt-24 min-h-screen bg-white">
      {/* 1. HERO SECTION */}
      <section className="section-spacing md:pt-32 lg:pt-40">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <span className="text-[12px] font-bold text-brand uppercase tracking-[0.4em] mb-6 block">The Architect of Growth</span>
            <h1 className="mb-8">
              MUHAMMAD ZAIN
            </h1>
            <p className="text-xl md:text-2xl text-text-muted font-medium max-w-2xl leading-relaxed">
              WordPress Developer | Shopify Designer | Performance Marketing Specialist
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. ABOUT SECTION (SPLIT LAYOUT) */}
      <section className="section-spacing bg-surface">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-[4/5] rounded-[6px] overflow-hidden group shadow-premium-md border border-border-interface"
            >
              <img
                src={Image}
                className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-8">
                I BUILD DIGITAL <br />
                <span className="text-text-light">EXPERIENCES THAT PERFORM.</span>
              </h2>
              <div className="space-y-6">
                <p className="text-text-muted font-medium">
                  I’m Muhammad Zain, a WordPress developer and Shopify designer with a strong focus on performance marketing and conversion-driven design.
                </p>
                <p className="text-text-muted font-medium">
                  My work is built around a simple principle: <br />
                  <span className="text-text-main font-bold">A website should not just look good — it should generate real results.</span>
                </p>
                <p className="text-text-muted font-medium">
                  I’ve worked with businesses across multiple industries, helping them improve their online presence, enhance user experience, and turn traffic into measurable growth.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. WHAT I DO (CARD GRID) */}
      <section className="section-spacing bg-white">
        <div className="container-custom">
          <div className="mb-20">
            <h2 className="mb-6 uppercase">MORE THAN JUST <br /> DEVELOPMENT</h2>
            <p className="text-text-muted font-medium max-w-xl">
              Most websites fail because they focus only on design or development. I take a different approach by combining three core pillars.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Monitor,
                title: 'WordPress Development',
                desc: 'Fast, scalable, and SEO-friendly websites built on the world’s most popular CMS.'
              },
              {
                icon: ShoppingCart,
                title: 'Shopify Store Design',
                desc: 'Stores optimized for user experience and conversions, turning visitors into loyal customers.'
              },
              {
                icon: TrendingUp,
                title: 'Performance Marketing',
                desc: 'Data-driven strategies using Meta Ads and Google Ads to build complete systems that attract and convert.'
              }
            ].map((skill, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 lg:p-10 group border border-border-interface bg-white rounded-[6px] shadow-premium-sm hover:shadow-premium-md transition-all duration-500"
              >
                <div className="w-14 h-14 bg-surface rounded-[3px] flex items-center justify-center mb-8 group-hover:bg-brand group-hover:text-white transition-colors duration-500">
                  <skill.icon size={28} strokeWidth={1.5} />
                </div>
                <h3 className="mb-4">{skill.title}</h3>
                <p className="text-text-muted font-medium">
                  {skill.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. APPROACH SECTION */}
      <section className="section-spacing bg-surface">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">
            <div>
              <h2 className="mb-8 uppercase">A STRATEGY-FIRST <br /> APPROACH</h2>
              <p className="text-text-muted font-medium">
                Every project starts with understanding your business goals, audience, and challenges. From there, I focus on creating a structure that guides users toward action.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: 'Conversion-focused design', icon: Target },
                { title: 'Performance optimization', icon: Zap },
                { title: 'User-centered experience', icon: Users },
                { title: 'Data-driven decision making', icon: CheckCircle2 }
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col gap-4 p-8 bg-white border border-border-interface rounded-[3px] shadow-premium-sm">
                  <div className="text-brand mb-2">
                    <item.icon size={28} strokeWidth={1.5} />
                  </div>
                  <span className="text-[13px] font-bold uppercase tracking-widest text-text-main">
                    {item.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. EXPERIENCE SECTION */}
      <section className="section-spacing bg-white border-y border-border-interface">
        <div className="container-custom">
          <div className="mb-16">
            <h2 className="mb-4 uppercase font-bold tracking-tight">EXPERIENCE & <br /> RESULTS</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { value: '70+', label: 'WordPress & Shopify Websites Delivered' },
              { value: '50+', label: 'Ads Campaigns Managed' },
              { value: 'Multiple', label: 'Industries Served' },
              { value: '100%', label: 'Commitment to Growth' }
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="flex flex-col"
              >
                <span className="text-5xl md:text-6xl font-display font-bold text-brand mb-4 tracking-tighter">{stat.value}</span>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-text-muted leading-relaxed">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CTA SECTION */}
      <section className="section-spacing bg-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto py-20 lg:py-32 px-10 bg-surface rounded-[6px] border border-border-interface"
          >
            <h2 className="mb-8 uppercase">
              LET’S BUILD SOMETHING <br />
              <span className="text-brand">THAT PERFORMS.</span>
            </h2>
            <p className="text-text-muted font-medium text-lg max-w-2xl mx-auto mb-12">
              If you’re looking for a website or marketing system that actually delivers results, let’s connect and strategize your next move.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="w-full sm:w-auto h-16 px-12 gap-2 uppercase font-bold tracking-widest text-[12px]">
                <Link to="/contact" className="flex items-center gap-2">
                  <Calendar size={18} />
                  Book a call
                </Link>
              </Button>
              <Button variant="secondary" asChild className="w-full sm:w-auto h-16 px-12 gap-2 uppercase font-bold tracking-widest text-[12px]">
                <Link to="/free-audit" className="flex items-center gap-2">
                  <Search size={18} />
                  Free Website Audit
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};
