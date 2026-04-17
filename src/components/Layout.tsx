import { Outlet } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'motion/react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export const Layout = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative">
      {/* Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-brand z-[110] origin-left"
        style={{ scaleX }}
      />

      <Navbar />
      
      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};
