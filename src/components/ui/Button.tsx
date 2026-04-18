/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'text';
  asChild?: boolean;
  fullWidth?: boolean;
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', asChild = false, fullWidth = false, children, ...props }, ref) => {
    const Component = asChild ? Slot : motion.button;
    
    // motion props for the motion.button
    const motionProps = !asChild ? {
      whileHover: { y: -1 },
      whileTap: { scale: 0.98 }
    } : {};

    const variants = {
      primary: 'bg-brand text-white border-none hover:bg-brand-dark',
      secondary: 'bg-transparent text-text-main border border-border-interface hover:bg-surface',
      text: 'bg-transparent text-brand border-none p-0 h-auto min-h-0 hover:underline',
    };

    const baseStyles = 'inline-flex items-center justify-center font-sans font-medium uppercase tracking-wider transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none rounded-[3px] h-12 px-6 text-[15px] lg:text-[16px]';

    return (
      <Component
        ref={ref}
        {...motionProps}
        className={cn(
          baseStyles,
          variants[variant],
          fullWidth && 'w-full',
          className
        )}
        {...(props as any)}
      >
        {children}
      </Component>
    );
  }
);

Button.displayName = 'Button';
