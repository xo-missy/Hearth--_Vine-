import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { menuData } from '../data/menuData';
import { Sparkles, Info, X } from 'lucide-react';

const MenuPage = () => {
  const [activeCategory, setActiveCategory] = useState('appetizers');
  const [selectedDish, setSelectedDish] = useState(null);

  const categories = [
    { key: 'appetizers', label: 'Appetizers' },
    { key: 'mains', label: 'Mains' },
    { key: 'desserts', label: 'Desserts' },
    { key: 'pairings', label: 'Pairings & Cellar' },
  ];

  const currentDishes = menuData[activeCategory] || [];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-terracotta min-h-screen pt-28 pb-24"
    >
      {/* Background visual detail */}
      <div className="absolute top-48 left-1/4 w-96 h-96 rounded-full bg-surface filter blur-[150px] opacity-40 pointer-events-none" />
      <div className="absolute bottom-48 right-1/4 w-96 h-96 rounded-full bg-accent/5 filter blur-[150px] opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Editorial Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <div className="flex justify-center items-center space-x-3 mb-4">
            <div className="h-[1px] w-8 bg-accent" />
            <span className="font-cormorant italic text-sm text-accent tracking-widest uppercase">
              Hearth & Vine Offerings
            </span>
            <div className="h-[1px] w-8 bg-accent" />
          </div>
          <h1 className="font-playfair text-4xl md:text-6xl font-bold leading-tight text-cream mb-6">
            The Seasonal <span className="text-accent italic font-normal">Equinox Menu</span>
          </h1>
          <p className="font-inter text-cream/70 text-sm md:text-base leading-relaxed font-light">
            Every dish is custom designed around wood fires, ember roasting, and botanical wine reductions. Experience the authentic spice signatures of West African traditions paired with contemporary presentation.
          </p>
        </div>

        {/* Category Filters Tab Menu */}
        <div className="flex justify-center items-center space-x-2 md:space-x-4 mb-16 border-b border-cream/10 pb-4 overflow-x-auto whitespace-nowrap">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.key;
            return (
              <button
                key={cat.key}
                onClick={() => {
                  setActiveCategory(cat.key);
                  setSelectedDish(null);
                }}
                className={`relative px-6 py-3 font-medium text-xs md:text-sm tracking-widest uppercase transition-colors duration-300 focus:outline-none ${
                  isActive ? 'text-accent' : 'text-cream/60 hover:text-cream'
                }`}
              >
                {cat.label}
                {isActive && (
                  <motion.div 
                    layoutId="activeTabUnderline"
                    className="absolute bottom-0 left-0 w-full h-[1.5px] bg-accent"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Dynamic Interactive Menu Cards Showcase */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
        >
          <AnimatePresence mode="popLayout">
            {currentDishes.map((dish) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={dish.id}
                className="group bg-surface/40 hover:bg-surface/70 border border-cream/10 hover:border-cream/20 flex flex-col justify-between overflow-hidden shadow-lg transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedDish(dish)}
              >
                <div>
                  {/* Image container with slow zoom hover effect */}
                  <div className="aspect-[4/3] w-full overflow-hidden relative">
                    <img 
                      src={dish.image} 
                      alt={dish.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Corner Tag */}
                    <div className="absolute top-4 right-4 bg-terracotta/80 backdrop-blur-sm border border-cream/15 text-accent font-cormorant italic text-xs tracking-wider px-3 py-1">
                      {dish.price}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 md:p-8">
                    <h3 className="font-playfair text-xl md:text-2xl font-bold text-cream group-hover:text-accent transition-colors duration-300 mb-2">
                      {dish.name}
                    </h3>
                    <p className="font-inter text-cream/70 text-xs md:text-sm font-light leading-relaxed mb-4 line-clamp-3">
                      {dish.description}
                    </p>
                    
                    {/* Ingredients List Snippet */}
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {dish.ingredients.slice(0, 3).map((ing, i) => (
                        <span key={i} className="text-[10px] uppercase tracking-wider bg-terracotta/60 border border-cream/5 px-2 py-0.5 text-cream/65">
                          {ing}
                        </span>
                      ))}
                      {dish.ingredients.length > 3 && (
                        <span className="text-[10px] uppercase tracking-wider text-accent py-0.5">
                          +{dish.ingredients.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Card Action footer bar */}
                <div className="px-6 md:px-8 pb-6 md:pb-8 pt-2 border-t border-cream/5 flex items-center justify-between text-xs text-accent font-semibold tracking-widest uppercase">
                  <span>Learn the Heritage</span>
                  <Info className="w-4 h-4 text-accent/60 group-hover:text-accent group-hover:rotate-12 transition-all" />
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Detailed Modal/Drawer for Selected Dish Heritage */}
        <AnimatePresence>
          {selectedDish && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              {/* Overlay shadow backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.8 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedDish(null)}
                className="absolute inset-0 bg-black"
              />
              
              {/* Modal Box */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 30 }}
                transition={{ type: "spring", duration: 0.5 }}
                className="relative bg-surface border border-cream/20 w-full max-w-2xl overflow-hidden shadow-2xl z-10 flex flex-col md:flex-row"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedDish(null)}
                  className="absolute right-4 top-4 z-20 w-8 h-8 rounded-full bg-black/50 text-cream/70 hover:text-cream flex items-center justify-center transition-colors"
                  aria-label="Close details"
                >
                  <X className="w-4 h-4" />
                </button>

                {/* Left: Image (on mobile becomes top) */}
                <div className="md:w-1/2 relative h-48 md:h-auto min-h-[200px]">
                  <img 
                    src={selectedDish.image} 
                    alt={selectedDish.name} 
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-surface/20 to-surface/90 hidden md:block" />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent md:hidden" />
                </div>

                {/* Right: Copy Description (on mobile becomes bottom) */}
                <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-between">
                  <div>
                    <span className="font-cormorant italic text-sm text-accent tracking-widest uppercase block mb-1">
                      {activeCategory}
                    </span>
                    <h3 className="font-playfair text-2xl md:text-3xl font-bold text-cream mb-2 leading-tight">
                      {selectedDish.name}
                    </h3>
                    <div className="text-accent font-playfair text-lg font-semibold mb-4">
                      {selectedDish.price}
                    </div>

                    <p className="font-inter text-cream/80 text-xs md:text-sm font-light leading-relaxed mb-4">
                      {selectedDish.description}
                    </p>

                    {/* Ingredients detail */}
                    <div className="mb-4">
                      <span className="block text-[10px] uppercase tracking-wider text-cream/40 mb-2">Ingredients</span>
                      <div className="flex flex-wrap gap-1">
                        {selectedDish.ingredients.map((ing, i) => (
                          <span key={i} className="text-[10px] bg-terracotta border border-cream/5 px-2 py-0.5 text-cream/80 rounded-none">
                            {ing}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Heritage Story */}
                    <div className="border-t border-cream/10 pt-4">
                      <span className="flex items-center space-x-1.5 text-[10px] uppercase tracking-wider text-accent mb-1.5 font-medium">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>The Heritage</span>
                      </span>
                      <p className="font-cormorant italic text-sm md:text-base text-cream/90 leading-relaxed">
                        &ldquo;{selectedDish.story}&rdquo;
                      </p>
                    </div>
                  </div>
                </div>

              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </motion.div>
  );
};

export default MenuPage;
