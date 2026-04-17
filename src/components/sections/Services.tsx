/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Layout, ShoppingBag, BarChart3, MousePointer2 } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { SERVICES } from '@/constants';

import { Link } from 'react-router-dom';

const ICON_MAP = {
  Layout: Layout,
  ShoppingBag: ShoppingBag,
  BarChart3: BarChart3,
  MousePointer2: MousePointer2,
};

export const Services = () => {
  return (
    <section id="services" className="section-spacing bg-white border-b border-border-interface">
      <div className="container-custom">
        <div className="flex flex-col mb-16 lg:mb-20">
          <span className="text-[12px] font-bold text-brand uppercase tracking-[4px] mb-4">WHAT I DO</span>
          <h2 className="max-w-3xl">
            SOLUTIONS FOR <br className="hidden md:block" /> DIGITAL GROWTH
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-border-interface">
          {[
            { id: 'wordpress', title: 'WordPress Web Development', description: 'Fast, scalable, and SEO-friendly websites built for growth.', icon: 'Layout' },
            { id: 'shopify', title: 'Shopify Store development', description: 'Conversion-optimized e-commerce stores designed to sell.', icon: 'ShoppingBag' },
            { id: 'marketing', title: 'Performance Marketing', description: 'Data-driven campaigns that maximize lead generation.', icon: 'BarChart3' },
          ].map((service, idx) => {
            const IconComponent = ICON_MAP[service.icon as keyof typeof ICON_MAP];
            return (
              <Link
                key={service.id}
                to={`/services/${service.id}`}
                className="group relative p-8 lg:p-12 border-b border-r border-border-interface hover:bg-surface transition-all duration-500 overflow-hidden min-h-[350px] lg:min-h-[400px] flex flex-col pt-16 lg:pt-24"
              >
                <div className="relative z-10">
                  <div className="w-12 h-12 flex items-center justify-center mb-8 border border-border-interface text-text-main group-hover:bg-brand group-hover:text-white group-hover:border-brand transition-all rounded-[3px]">
                    {IconComponent && <IconComponent className="w-5 h-5" />}
                  </div>
                  
                  <h3 className="mb-6">
                    {service.title}
                  </h3>
                  
                  <p className="text-text-muted max-w-xs">
                    {service.description}
                  </p>
                </div>

                <div className="mt-auto pt-10 flex items-center gap-3 text-brand font-medium text-[12px] uppercase tracking-widest translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  Read More <span>/</span> 0{idx + 1}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};
