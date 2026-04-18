import { motion } from 'motion/react';
import { Button } from '../../components/ui/Button';
import { 
  ShoppingCart, 
  Zap, 
  Smartphone, 
  Calendar,
  Search,
  CheckCircle2,
  Package,
  CreditCard,
  Target,
  Globe,
  Layout
} from 'lucide-react';
import { Process } from '../../components/sections/Process';
import { Link } from 'react-router-dom';

export const Shopify = () => {
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
              <span className="text-[12px] font-bold text-brand uppercase tracking-[0.4em] mb-6 block">Service // E-commerce</span>
              <h1 className="mb-8 uppercase leading-[1.1]">
                SHOPIFY <br /> 
                <span className="text-brand">STORE DESIGN.</span>
              </h1>
              <p className="text-lg text-text-muted font-medium mb-12 max-w-xl">
                I design and optimize Shopify stores that turn visitors into customers. Every store is built with a focus on user experience, conversion, and performance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="w-full sm:w-auto px-12 h-16 uppercase gap-2 text-[12px] font-bold tracking-widest">
                  <Link to="/contact" className="flex items-center gap-2">
                    <Calendar size={18} />
                    Book a call
                  </Link>
                </Button>
                <Button variant="secondary" asChild className="w-full sm:w-auto px-12 h-16 uppercase gap-2 text-[12px] font-bold tracking-widest">
                  <Link to="/free-audit" className="flex items-center gap-2">
                    <Search size={18} />
                    Free Website Audit
                  </Link>
                </Button>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative aspect-square lg:aspect-video rounded-[6px] overflow-hidden border border-border-interface shadow-premium-md bg-surface"
            >
              <img 
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1000&auto=format&fit=crop" 
                alt="Shopify Store Design"
                className="w-full h-full object-cover grayscale opacity-80"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-brand/5" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. PROBLEM SECTION */}
      <section className="section-spacing bg-surface border-y border-border-interface">
        <div className="container-custom">
          <div className="max-w-[700px] mx-auto text-center">
            <h2 className="mb-8 uppercase">THE PROBLEM</h2>
            <p className="text-xl text-text-muted font-medium leading-relaxed">
              Many Shopify stores struggle with low conversion rates and high cart abandonment. Traffic alone isn’t enough — your store needs to convert visitors into buyers through strategic design and seamless user journeys.
            </p>
          </div>
        </div>
      </section>

      {/* 3. SOLUTION SECTION */}
      <section className="section-spacing bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <div>
              <h2 className="mb-8 uppercase">THE SOLUTION</h2>
              <p className="text-lg text-text-muted font-medium leading-relaxed">
                I create Shopify stores that are clean, easy to navigate, and structured for better product discovery. My approach focuses on reducing friction and building trust throughout the entire customer journey.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6">
              {[
                { title: 'Intuitive Navigation', desc: 'Seamless menus and user flows that simplify the shopping journey.' },
                { title: 'Conversion Optimization', desc: 'Strategic placement of CTAs and trust signals to drive purchase action.' },
                { title: 'Mobile-First Experience', desc: 'Crafting the best shopping experience for mobile segments.' },
                { title: 'Checkout Optimization', desc: 'Reducing friction where it matters most to prevent lost sales.' }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-6 p-6 border border-border-interface rounded-[6px] bg-surface group hover:border-brand transition-colors">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand mt-2 group-hover:scale-150 transition-transform" />
                  <div>
                    <h4 className="text-[14px] font-bold uppercase tracking-tight text-text-main mb-1">{item.title}</h4>
                    <p className="text-sm text-text-muted font-medium">{item.desc}</p>
                  </div>
                </div>
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
            <p className="text-text-muted font-medium">Scalable e-commerce solutions built on Shopify.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Bespoke Storefront', desc: 'Unique visual design that sets you apart from template stores.', icon: Layout },
              { title: 'Product Optimization', desc: 'High-impact product pages designed to sell.', icon: Package },
              { title: 'Mobile Excellence', desc: 'Flawless performance on phones and tablets.', icon: Smartphone },
              { title: 'Merchant Systems', desc: 'Secure payment and inventory systems setup.', icon: CreditCard },
              { title: 'Growth Ready', desc: 'Architecture that scales as your product line grows.', icon: Globe },
              { title: 'High ROI Logic', desc: 'Design decisions backed by data and results.', icon: Target }
            ].map((feature, idx) => (
              <div key={idx} className="p-10 bg-white rounded-[6px] border border-border-interface shadow-premium-sm hover:shadow-premium-md transition-all group">
                <div className="w-12 h-12 rounded-[3px] bg-surface flex items-center justify-center mb-8 border border-border-interface group-hover:bg-brand group-hover:text-white transition-colors">
                  <feature.icon size={24} strokeWidth={1.5} />
                </div>
                <h3 className="mb-4 uppercase text-lg">{feature.title}</h3>
                <p className="text-sm text-text-muted font-medium leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. BENEFITS / RESULTS */}
      <section className="section-spacing bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
             <div>
              <h2 className="mb-8 uppercase">BUSINESS RESULTS</h2>
              <p className="text-lg text-text-muted font-medium max-w-xl">
                eCommerce success is measured by revenue. My stores are engineered to maximize your ROI through better metrics across the board.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: 'Conversion Rate', val: '+3.5%' },
                { title: 'Cart Recovery', val: '+22%' },
                { title: 'Average Order', val: '+18%' },
                { title: 'Customer LTV', val: '2.5x' }
              ].map((stat, idx) => (
                <div key={idx} className="p-10 bg-surface border border-border-interface rounded-[6px] text-center">
                  <span className="text-4xl font-display font-bold text-brand block mb-2">{stat.val}</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-text-muted">{stat.title}</span>
                </div>
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
              LET’S BUILD A STORE <br />
              <span className="text-brand">THAT SELLS.</span>
            </h2>
            <p className="text-text-muted font-medium text-lg max-w-2xl mx-auto mb-12">
              If your Shopify store isn’t converting, it’s time to fix the leaks and build a system that delivers consistent revenue.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="w-full sm:w-auto h-16 px-12 gap-2 text-[13px] font-bold uppercase tracking-widest">
                <Link to="/contact" className="flex items-center gap-2">
                  <Calendar size={18} />
                  Book a call
                </Link>
              </Button>
              <Button variant="secondary" asChild className="w-full sm:w-auto h-16 px-12 gap-2 text-[13px] font-bold uppercase tracking-widest">
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
