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
      whileHover: { scale: 1.04 },
      whileTap: { scale: 0.98 },
      transition: { duration: 0.2, ease: "easeOut" }
    } : {};

    const variants = {
      primary: 'bg-gradient-to-r from-[#FF4500] via-[#FF7A3D] to-[#FF8C00] text-white font-bold border-none shadow-[0_4px_20px_rgba(255,69,0,0.35)] hover:shadow-[0_8px_32px_rgba(255,69,0,0.6)] hover:brightness-110 animate-shimmer-streak relative overflow-hidden hover:scale-[1.04] active:scale-[0.98]',
      secondary: 'bg-white/[0.08] backdrop-blur-md text-white font-bold border border-white/25 hover:border-white/50 hover:bg-white/[0.18] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.25),0_4px_20px_rgba(0,0,0,0.4)] hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.4),0_6px_25px_rgba(0,0,0,0.5)] relative overflow-hidden hover:scale-[1.04] active:scale-[0.98]',
      text: 'bg-transparent text-[#FF7A3D] hover:text-[#FF4500] border-none p-0 h-auto min-h-0 hover:underline font-bold tracking-wider',
    };

    const baseStyles = 'inline-flex items-center justify-center font-sans uppercase tracking-wider transition-all duration-300 ease-out disabled:opacity-50 disabled:pointer-events-none rounded-full min-h-[44px] md:min-h-[50px] py-3 px-6 md:py-3.5 md:px-8 text-[14px] md:text-[15px] font-bold select-none cursor-pointer';

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
        <span className="relative z-10 inline-flex items-center justify-center gap-2.5 w-full h-full">
          {children}
        </span>
      </Component>
    );
  }
);

Button.displayName = 'Button';
