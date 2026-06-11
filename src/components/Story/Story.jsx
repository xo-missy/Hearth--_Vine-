import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Story = () => {
  return (
    <section className="relative bg-terracotta py-24 md:py-32 overflow-hidden border-b border-cream/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Content Column */}
          <div className="lg:col-span-6 flex flex-col space-y-6">
            
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="flex items-center space-x-3"
            >
              <div className="h-[1px] w-8 bg-accent" />
              <span className="font-cormorant italic text-sm text-accent tracking-widest uppercase">
                Our Origins
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-playfair text-3xl md:text-5xl font-bold leading-tight text-cream"
            >
              Fusing the Wood-Fire Hearth <br />
              <span className="text-accent italic font-normal">with the Spirit of the Vine</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-inter text-cream/75 text-sm md:text-base leading-relaxed font-light"
            >
              Hearth & Vine was born from a desire to return to the primal essence of cooking. Our culinary philosophy centers around a wood-fired brick hearth—the heart of our kitchen. Here, seasoned cherrywood and African oak embers slowly roast, smoke, and caramelize ingredients to perfection.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="font-inter text-cream/75 text-sm md:text-base leading-relaxed font-light"
            >
              We honor West Africa’s legendary spice trails—infusing rich, aromatic yaji, uda, and calabash nutmeg into premium Wagyu, freshly landed tiger prawns, and slow-braised meats. Every dish is paired with fine vintage wines curated to elevate individual flavor structures.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="pt-4"
            >
              <Link to="/about">
                <button className="group text-accent hover:text-cream text-xs font-semibold tracking-widest uppercase flex items-center space-x-2 transition-colors duration-300">
                  <span>Discover Our Full Story</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
                </button>
              </Link>
            </motion.div>
          </div>

          {/* Right: Immersive Image Column */}
          <div className="lg:col-span-6 relative">
            {/* Background design elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-accent/30 pointer-events-none" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-accent/30 pointer-events-none" />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-[4/5] md:aspect-[1.2] lg:aspect-[4/5] overflow-hidden"
            >
              <img 
                src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800" 
                alt="Smoked Wagyu Suya Platter"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              {/* Warm light overlay on image */}
              <div className="absolute inset-0 bg-gradient-to-t from-terracotta/40 to-transparent mix-blend-multiply" />
            </motion.div>
            
            {/* Floating visual detail badge */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="absolute -bottom-6 -left-6 bg-surface p-6 shadow-2xl hidden sm:block border border-cream/10"
            >
              <span className="font-playfair text-xl font-bold block text-cream">Authentic &middot; Raw</span>
              <span className="font-cormorant italic text-sm text-accent uppercase tracking-widest mt-1 block">Wood-fired fine dining</span>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Story;
