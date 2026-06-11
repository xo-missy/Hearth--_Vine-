import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote: "The Wagyu Suya is a culinary revelation. Fusing the robust heat of traditional yaji pepper with the rich, buttery marble of Wagyu carpaccio is pure culinary genius.",
    author: "David Cole",
    role: "Lead Critic, Fine Dining Guide",
    location: "London"
  },
  {
    id: 2,
    quote: "Hearth & Vine achieves the impossible: capturing the soulful warmth and deep smokiness of West African hearth cooking with modern Michelin-level structure and wine pairings.",
    author: "Amara Okoye",
    role: "Gastronomy Editor, Lagos Life",
    location: "Lagos"
  },
  {
    id: 3,
    quote: "An absolute atmospheric masterpiece. The terracotta archways, natural mahogany textures, and soft sunset illumination make the dining room feel like a sacred editorial space.",
    author: "Elena Rostova",
    role: "Traveler & Food Writer, World Gourmand",
    location: "Paris"
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section className="relative bg-surface py-24 md:py-32 overflow-hidden border-b border-cream/5">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-accent/5 filter blur-[150px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center items-center space-x-3 mb-4">
            <div className="h-[1px] w-8 bg-accent" />
            <span className="font-cormorant italic text-sm text-accent tracking-widest uppercase">
              Guest Reflections
            </span>
            <div className="h-[1px] w-8 bg-accent" />
          </div>
          <h2 className="font-playfair text-3xl md:text-5xl font-bold text-cream">
            Stories from Our Table
          </h2>
        </div>

        {/* Carousel Slide Area */}
        <div className="relative min-h-[300px] md:min-h-[260px] flex flex-col justify-center items-center">
          
          {/* Floating Quote Icon */}
          <div className="absolute top-0 text-accent/15 z-0">
            <Quote className="w-24 h-24 stroke-[1px]" />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5 }}
              className="text-center z-10 max-w-3xl"
            >
              <p className="font-cormorant italic text-2xl md:text-3xl lg:text-4xl text-cream leading-relaxed mb-8">
                &ldquo;{testimonials[activeIndex].quote}&rdquo;
              </p>
              
              <div className="flex flex-col items-center">
                <span className="font-playfair text-lg font-bold text-accent">
                  {testimonials[activeIndex].author}
                </span>
                <span className="font-inter text-xs uppercase tracking-widest text-cream/50 mt-1">
                  {testimonials[activeIndex].role} &middot; {testimonials[activeIndex].location}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>

        </div>

        {/* Custom Navigation buttons */}
        <div className="flex justify-center items-center space-x-8 mt-12">
          
          <button
            onClick={handlePrev}
            className="w-12 h-12 rounded-full border border-cream/20 flex items-center justify-center text-cream/70 hover:text-accent hover:border-accent hover:bg-cream/5 transition-all focus:outline-none"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          {/* Slide dots indicators */}
          <div className="flex space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-1.5 transition-all duration-300 rounded-full ${
                  activeIndex === index ? 'w-6 bg-accent' : 'w-1.5 bg-cream/20'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="w-12 h-12 rounded-full border border-cream/20 flex items-center justify-center text-cream/70 hover:text-accent hover:border-accent hover:bg-cream/5 transition-all focus:outline-none"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

        </div>

      </div>
    </section>
  );
};

export default Testimonials;
