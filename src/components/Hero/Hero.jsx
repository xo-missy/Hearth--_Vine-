import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      
      {/* Background Image with Cinematic Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1543007630-9710e4a00a20?q=80&w=1600')",
          transform: 'scale(1.05)'
        }}
      />
      
      {/* Dark warm vignette gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-terracotta via-terracotta/40 to-black/50" />
      <div className="absolute inset-0 bg-black/20" />

      {/* Decorative vertical lines representing large arched windows layout */}
      <div className="absolute inset-0 flex justify-between pointer-events-none max-w-7xl mx-auto px-6 md:px-12 opacity-10">
        <div className="w-[1px] h-full bg-cream" />
        <div className="w-[1px] h-full bg-cream hidden md:block" />
        <div className="w-[1px] h-full bg-cream hidden md:block" />
        <div className="w-[1px] h-full bg-cream" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6 mt-16">
        
        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-4"
        >
          <span className="font-cormorant italic text-lg md:text-2xl text-accent tracking-widest">
            A Culinary Sanctuary
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, letterSpacing: '0.05em' }}
          animate={{ opacity: 1, letterSpacing: '0.01em' }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="font-playfair text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-cream mb-6 leading-[1.1]"
        >
          Where Every Meal <br />
          <span className="text-accent italic font-normal">Becomes a Memory</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="font-inter text-sm md:text-lg text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed font-light"
        >
          Crafted with passion, served with warmth, remembered forever. Experience the fine synergy of fire-cooked local Nigerian flavors and classical continental artistry.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
        >
          <Link to="/reserve">
            <button className="w-full sm:w-auto bg-accent hover:bg-cream text-terracotta font-medium text-xs tracking-widest uppercase py-4 px-8 rounded-none transition-colors duration-300 flex items-center justify-center space-x-2.5 shadow-xl border border-accent">
              <Calendar className="w-4 h-4" />
              <span>Reserve A Table</span>
            </button>
          </Link>
          
          <Link to="/menu">
            <button className="w-full sm:w-auto bg-transparent hover:bg-cream/5 text-cream font-medium text-xs tracking-widest uppercase py-4 px-8 rounded-none transition-colors duration-300 flex items-center justify-center space-x-2 border border-cream/25 hover:border-cream">
              <span>Explore Our Menu</span>
              <ArrowRight className="w-4 h-4 text-accent" />
            </button>
          </Link>
        </motion.div>
      </div>

      {/* Floating Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center cursor-pointer pointer-events-none"
      >
        <span className="font-cormorant italic text-xs tracking-widest text-accent uppercase mb-2">
          Scroll Down
        </span>
        <div className="w-[1px] h-12 bg-cream/20 relative overflow-hidden">
          <motion.div
            animate={{ 
              y: ['-100%', '100%'] 
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="absolute top-0 left-0 w-full h-1/2 bg-accent"
          />
        </div>
      </motion.div>

    </section>
  );
};

export default Hero;
