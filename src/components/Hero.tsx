import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-scroll';

const letterAnimation = {
  initial: { y: 100, opacity: 0 },
  animate: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      delay: i * 0.1,
      ease: [0.2, 0.65, 0.3, 0.9],
    },
  }),
};

export default function Hero() {
  const title = "Creative Developer";
  const subtitle = "Crafting digital experiences with WordPress & Shopify";

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-black text-white overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-black to-black"></div>
      
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black_70%,transparent_100%)]"></div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          {/* Main title with letter animation */}
          <div className="overflow-hidden mb-8">
            <motion.h1 
              className="text-6xl md:text-8xl font-bold tracking-tighter"
              initial="initial"
              animate="animate"
              transition={{ staggerChildren: 0.1 }}
            >
              {title.split("").map((letter, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  variants={letterAnimation}
                  className="inline-block"
                >
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              ))}
            </motion.h1>
          </div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="text-xl md:text-3xl text-gray-400 mb-12 max-w-2xl"
          >
            {subtitle}
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6"
          >
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="group relative px-8 py-4 bg-white text-black rounded-full overflow-hidden transition-transform hover:scale-105"
            >
              <span className="relative z-10">View Projects</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
            </Link>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
            className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
          >
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="flex flex-col items-center gap-2 text-gray-400 hover:text-white transition-colors"
            >
              <span className="text-sm uppercase tracking-widest">Scroll</span>
              <ChevronDown size={20} className="animate-bounce" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}