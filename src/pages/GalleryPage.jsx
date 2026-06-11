import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { galleryData } from '../data/galleryData';
import { ZoomIn, X, Compass, Aperture } from 'lucide-react';

const GalleryPage = () => {
  const [filter, setFilter] = useState('all');
  const [activeImage, setActiveImage] = useState(null);

  const filters = [
    { key: 'all', label: 'All Photos' },
    { key: 'culinary', label: 'Culinary Art' },
    { key: 'atmosphere', label: 'Atmosphere & Design' },
  ];

  const filteredData = filter === 'all' 
    ? galleryData 
    : galleryData.filter(item => item.category === filter);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-terracotta min-h-screen pt-28 pb-24"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex justify-center items-center space-x-3 mb-4">
            <div className="h-[1px] w-8 bg-accent" />
            <span className="font-cormorant italic text-sm text-accent tracking-widest uppercase">
              Visual Narrative
            </span>
            <div className="h-[1px] w-8 bg-accent" />
          </div>
          <h1 className="font-playfair text-4xl md:text-6xl font-bold leading-tight text-cream mb-6">
            The Cinematic <span className="text-accent italic font-normal">Gallery</span>
          </h1>
          <p className="font-inter text-cream/70 text-sm md:text-base leading-relaxed font-light">
            A visual journey into the amber lights, hand-shaped clay textures, open embers, and delicate platings that form Hearth & Vine.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center items-center space-x-4 mb-12 border-b border-cream/10 pb-4 overflow-x-auto whitespace-nowrap">
          {filters.map((f) => {
            const isActive = filter === f.key;
            return (
              <button
                key={f.key}
                onClick={() => setFilter(f.key)}
                className={`relative px-5 py-2.5 font-medium text-xs tracking-widest uppercase transition-colors duration-300 focus:outline-none ${
                  isActive ? 'text-accent' : 'text-cream/60 hover:text-cream'
                }`}
              >
                {f.label}
                {isActive && (
                  <motion.div 
                    layoutId="activeGalleryUnderline"
                    className="absolute bottom-0 left-0 w-full h-[1.5px] bg-accent"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Masonry Grid Layout */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[250px]"
        >
          <AnimatePresence mode="popLayout">
            {filteredData.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={item.id}
                onClick={() => setActiveImage(item)}
                className={`group relative overflow-hidden bg-surface/30 border border-cream/10 cursor-pointer ${item.span || 'col-span-1 row-span-1'}`}
              >
                {/* Image */}
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out filter brightness-[0.85] group-hover:brightness-[0.95]"
                  loading="lazy"
                />

                {/* Dark Vignette Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6 z-10" />

                {/* Hover Details overlay */}
                <div className="absolute inset-0 p-6 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                  <div className="flex justify-end">
                    <div className="w-8 h-8 rounded-full bg-cream/15 backdrop-blur-sm flex items-center justify-center border border-cream/20">
                      <ZoomIn className="w-4 h-4 text-cream" />
                    </div>
                  </div>
                  <div>
                    <span className="font-cormorant italic text-xs text-accent uppercase tracking-widest block mb-1">
                      {item.category}
                    </span>
                    <h3 className="font-playfair text-lg md:text-xl font-bold text-cream">
                      {item.title}
                    </h3>
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Full Screen Lightbox Viewer */}
        <AnimatePresence>
          {activeImage && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              {/* Overlay shadow */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.9 }}
                exit={{ opacity: 0 }}
                onClick={() => setActiveImage(null)}
                className="absolute inset-0 bg-black"
              />

              {/* Lightbox Contents */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="relative max-w-4xl w-full z-10 flex flex-col bg-surface border border-cream/20 shadow-2xl"
              >
                {/* Close Button */}
                <button
                  onClick={() => setActiveImage(null)}
                  className="absolute right-4 top-4 z-20 w-10 h-10 rounded-full bg-black/60 text-cream/70 hover:text-cream flex items-center justify-center transition-colors border border-cream/10"
                  aria-label="Close photo"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Lightbox Image */}
                <div className="aspect-[16/10] w-full overflow-hidden bg-black flex items-center justify-center">
                  <img 
                    src={activeImage.image} 
                    alt={activeImage.title} 
                    className="max-h-full max-w-full object-contain"
                  />
                </div>

                {/* Lightbox Meta Details bar */}
                <div className="p-6 md:p-8 bg-surface">
                  <span className="font-cormorant italic text-sm text-accent uppercase tracking-widest block mb-1">
                    {activeImage.category}
                  </span>
                  <h3 className="font-playfair text-2xl md:text-3xl font-bold text-cream mb-2">
                    {activeImage.title}
                  </h3>
                  <p className="font-inter text-cream/70 text-xs md:text-sm font-light leading-relaxed max-w-xl">
                    {activeImage.description}
                  </p>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </motion.div>
  );
};

export default GalleryPage;
