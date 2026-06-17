import React from 'react';
import { motion } from 'framer-motion';

const Chef = () => {
  return (
    <section className="relative bg-surface py-24 md:py-32 overflow-hidden border-b border-cream/5">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-0 w-80 h-80 rounded-full bg-accent/5 filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 rounded-full bg-terracotta/40 filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Magazine Portrait Column */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="absolute inset-0 border border-cream/15 translate-x-4 translate-y-4 pointer-events-none" />
            
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-[3/4] overflow-hidden"
            >
              <img 
                src="/chef_oladipo.png" 
                alt="Head Chef & Owner Oladipo Twinee"
                className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 text-cream">
                <span className="font-playfair text-xl font-bold block">Oladipo Twinee</span>
                <span className="font-cormorant italic text-sm text-accent tracking-widest uppercase mt-0.5 block">Chef & Owner</span>
              </div>
            </motion.div>
          </div>

          {/* Right: Philosophy Column */}
          <div className="lg:col-span-7 flex flex-col space-y-8 order-1 lg:order-2">
            
            <div className="flex items-center space-x-3">
              <div className="h-[1px] w-8 bg-accent" />
              <span className="font-cormorant italic text-sm text-accent tracking-widest uppercase">
                Culinary Philosophy
              </span>
            </div>

            <h3 className="font-playfair text-3xl md:text-5xl font-bold leading-tight text-cream">
              Honoring Roots, <br />
              <span className="text-accent italic font-normal">Refining Technique</span>
            </h3>

            {/* Signature Quote Block */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="border-l-2 border-accent pl-6 py-2"
            >
              <blockquote className="font-cormorant italic text-2xl md:text-3xl text-cream/90 leading-relaxed">
                &ldquo;Food is a living narrative, told through smoke, spice, and memory. We do not cook to feed; we cook to remember who we are.&rdquo;
              </blockquote>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-4 font-inter text-cream/70 text-sm md:text-base leading-relaxed font-light"
            >
              <p>
                Chef-Owner Oladipo Twinee’s culinary journey is rooted in a deep reverence for ancestral wood-fire cooking, refined through years of mastering smoke-craft and global gastronomy. Hearth & Vine is his personal sanctuary, where heritage meets high artistry.
              </p>
              <p>
                &ldquo;Every ingredient tells a story. When we grill fresh local Lagos seafood over wood embers, or finish a slow-cooked goat shoulder with suya yaji, we are connecting ancestral grilling methods with contemporary gastronomy. It is a dialogue between smoke and the vine, fire and wine.&rdquo;
              </p>
            </motion.div>

            {/* Chef Credentials/Highlights */}
            <div className="grid grid-cols-2 gap-6 pt-4 border-t border-cream/10">
              <div>
                <span className="font-playfair text-3xl font-bold text-accent">100%</span>
                <span className="block text-xs uppercase tracking-wider text-cream/50 mt-1">Sustainably Sourced</span>
              </div>
              <div>
                <span className="font-playfair text-3xl font-bold text-accent">24hr</span>
                <span className="block text-xs uppercase tracking-wider text-cream/50 mt-1">Slow-Cook Prep</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Chef;
