import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const items = [
    {
      id: 1,
      tag: "The Space",
      title: "Arched Sunsets & Natural Wood",
      description: "Step into a sanctuary styled with hand-finished terracotta walls, towering arched windows, and natural mahogany tables. Soft hanging warm lights cast a sunset-like glow over lush indoor plants, creating an intimate yet open dining atmosphere.",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800",
      layout: "left"
    },
    {
      id: 2,
      tag: "Sourcing",
      title: "Hearth-Smoked Spices & Fresh Catch",
      description: "We work directly with local organic farmers and coastal fishermen. Our kitchen celebrates indigenous spices—toasting alligator peppers, calabash nutmeg, and uda pods on wood embers to create complex dry rubs and deeply flavorful broths daily.",
      image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=800",
      layout: "right"
    },
    {
      id: 3,
      tag: "The Cellar",
      title: "Sommelier-Curated Pairings",
      description: "Our wine collection bridges continents. Hand-selected bottles from South Africa's Stellenbosch and France's Bordeaux are carefully paired with our smoky, pepper-forward menu to balance temperatures and unlock hidden flavor profiles.",
      image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=800",
      layout: "left"
    }
  ];

  return (
    <section className="relative bg-terracotta py-24 md:py-32 overflow-hidden border-b border-cream/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20 md:mb-28">
          <div className="flex justify-center items-center space-x-3 mb-4">
            <div className="h-[1px] w-8 bg-accent" />
            <span className="font-cormorant italic text-sm text-accent tracking-widest uppercase">
              The Experience
            </span>
            <div className="h-[1px] w-8 bg-accent" />
          </div>
          <h2 className="font-playfair text-3xl md:text-5xl font-bold leading-tight text-cream">
            Immerse Yourself in <br />
            <span className="text-accent italic font-normal">Hearth & Vine</span>
          </h2>
        </div>

        {/* Experience Blocks */}
        <div className="space-y-24 md:space-y-36">
          {items.map((item, index) => {
            const isLeft = item.layout === "left";
            return (
              <div 
                key={item.id} 
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
              >
                {/* Image Column */}
                <div className={`lg:col-span-6 ${isLeft ? 'order-1' : 'order-1 lg:order-2'} relative`}>
                  <div className="absolute inset-0 border border-cream/10 translate-x-3 translate-y-3 pointer-events-none" />
                  
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="relative aspect-[4/3] md:aspect-[1.5] lg:aspect-[4/3] overflow-hidden"
                  >
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/10" />
                  </motion.div>
                </div>

                {/* Text Column */}
                <div className={`lg:col-span-6 ${isLeft ? 'order-2' : 'order-2 lg:order-1'} flex flex-col space-y-4`}>
                  <span className="font-cormorant italic text-sm text-accent uppercase tracking-widest block">
                    {item.tag}
                  </span>
                  <h3 className="font-playfair text-2xl md:text-4xl font-bold text-cream">
                    {item.title}
                  </h3>
                  <p className="font-inter text-cream/70 text-sm md:text-base leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Experience;
