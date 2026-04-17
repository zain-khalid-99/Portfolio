/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeader = ({ title, subtitle, align = 'left', className }: SectionHeaderProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={cn(
        'mb-12 md:mb-16',
        align === 'center' ? 'text-center mx-auto' : 'text-left',
        className
      )}
    >
      {subtitle && (
        <span className="text-primary text-sm font-bold uppercase tracking-[0.2em] mb-4 block">
          {subtitle}
        </span>
      )}
      <h2 className={cn(
        "text-4xl md:text-5xl lg:text-6xl font-black text-zinc-900 leading-tight md:leading-tight lg:leading-tight",
        align === 'center' ? 'max-w-3xl mx-auto' : ''
      )}>
        {title}
      </h2>
    </motion.div>
  );
};
