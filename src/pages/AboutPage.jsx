import React from 'react';
import { motion } from 'framer-motion';

const AboutPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-terracotta min-h-screen pt-28 pb-24"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-96 right-10 w-96 h-96 bg-surface filter blur-[130px] opacity-40 pointer-events-none" />
      <div className="absolute bottom-96 left-10 w-80 h-80 bg-accent/5 filter blur-[120px] opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Editorial Heading */}
        <div className="border-b border-cream/10 pb-8 mb-16">
          <span className="font-cormorant italic text-sm text-accent tracking-widest uppercase block mb-3">
            Hearth & Vine Story
          </span>
          <h1 className="font-playfair text-4xl md:text-7xl font-bold leading-none text-cream mb-4">
            Curated Heritage
          </h1>
          <p className="font-cormorant italic text-lg md:text-2xl text-accent">
            A dialogue between Nigerian wood-fire kitchen culture and continental gastronomy.
          </p>
        </div>

        {/* Column Grid - Magazine Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Main Editorial Text - 7 Columns */}
          <div className="lg:col-span-7 space-y-8 text-cream/80 font-inter text-sm md:text-base leading-relaxed font-light">
            
            <h2 className="font-playfair text-2xl md:text-3xl font-semibold text-cream">
              The Genesis of Our Fire
            </h2>
            <p>
              Hearth & Vine was conceptualized in 2024 by culinary director Evelyn Vance and a small collective of artists, sommeliers, and agriculturalists. Our goal was simple: to strip away the complex, clinical clutter of molecular dining and return to the primary elements that define human culinary history: fire, iron, clay, and wood.
            </p>
            <p>
              At the center of our open dining room sits our custom-built hearth. Made from local refractory brick and fueled by select hardwoods, the hearth burns continuously. We use Nigerian cherrywood, cashew wood, and local oak to smoke, sear, and braise. Every piece of wood is selected for the specific temperature range it reaches and the distinct, subtle oil perfume it releases into the meat and seafood.
            </p>

            <div className="relative aspect-[16/9] w-full overflow-hidden border border-cream/10 my-8">
              <img 
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800" 
                alt="The Hearth fire cookery"
                className="w-full h-full object-cover filter brightness-90"
              />
            </div>

            <h2 className="font-playfair text-2xl md:text-3xl font-semibold text-cream pt-4">
              West African Spices, European Structure
            </h2>
            <p>
              Technique is our tool, but memory is our chef. Evelyn Vance combines her Michelin training in London and Paris with the ancestral flavor registers of West Africa. We do not dilute spices; we refine their presentation.
            </p>
            <p>
              The fiery warmth of yaji (Hausa suya rub) is applied to premium marbled Wagyu; the deep, fermented umami of iru (locust bean oil) is used as an oil emulsion under pan-seared Chilean sea bass; the tart, floral brightness of zobo (hibiscus) is reduced into a rich port wine glaze for roasted duck breast. The result is a dining experience that feels both completely new and ancient.
            </p>

            <blockquote className="font-cormorant italic text-xl md:text-2xl border-l-2 border-accent pl-6 py-2 text-accent">
              &ldquo;We cook with local ingredients that carry ancestral memories—cooking them on fire to reveal their deepest, most primitive sweetness.&rdquo;
            </blockquote>
          </div>

          {/* Sidebar & Metrics - 5 Columns */}
          <div className="lg:col-span-5 space-y-12 lg:sticky lg:top-28">
            
            {/* Sidebar Photo */}
            <div className="relative">
              <div className="absolute inset-0 border border-accent/20 translate-x-3 translate-y-3 pointer-events-none" />
              <div className="aspect-[4/5] overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?q=80&w=800" 
                  alt="Chef Evelyn Vance"
                  className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <div className="bg-surface p-4 border border-cream/10 mt-3">
                <span className="font-playfair text-sm font-bold block text-cream">Chef Evelyn Vance</span>
                <span className="font-cormorant italic text-xs text-accent uppercase tracking-widest mt-0.5 block">Founding Culinary Director</span>
              </div>
            </div>

            {/* Sourcing & Values Card */}
            <div className="bg-surface/30 border border-cream/10 p-6 md:p-8 space-y-6">
              <h3 className="font-playfair text-xl font-bold text-cream">Our Commitments</h3>
              <ul className="space-y-4 text-sm font-light text-cream/80">
                <li className="flex items-start space-x-3">
                  <span className="text-accent mt-1">&middot;</span>
                  <span><strong>Locally Harvested Spices:</strong> All of our alligator peppers, ehuru seeds, and uda pods are sourced from smallholder farms in southern and western Nigeria.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-accent mt-1">&middot;</span>
                  <span><strong>Direct Sourcing:</strong> Our prawns and sea bass are landed daily by local artisanal fishermen and transported immediately to our cold rooms.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-accent mt-1">&middot;</span>
                  <span><strong>Ecological Integrity:</strong> Our cooking wood is sourced only from orchards clearing old, non-bearing trees, ensuring zero forest depletion.</span>
                </li>
              </ul>
            </div>

          </div>

        </div>

      </div>
    </motion.div>
  );
};

export default AboutPage;
