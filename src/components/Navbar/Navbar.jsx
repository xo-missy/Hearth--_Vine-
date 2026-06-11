import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Determine background transparency based on scroll depth
      if (currentScrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Hide navbar when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'About', path: '/about' },
    { name: 'Gallery', path: '/gallery' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: isVisible ? 0 : -100 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-terracotta/90 backdrop-blur-md border-b border-cream/10 py-4 shadow-xl' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="group flex flex-col">
            <span className="font-playfair text-2xl md:text-3xl font-bold tracking-tight text-cream group-hover:text-accent transition-colors duration-300">
              Hearth & Vine
            </span>
            <span className="font-cormorant italic text-xs tracking-[0.25em] text-accent uppercase self-end -mt-1 select-none">
              Lagos &middot; London
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className="relative group text-sm font-medium tracking-wider uppercase text-cream/80 hover:text-cream transition-colors duration-300"
                >
                  {link.name}
                  {/* Underline indicators */}
                  <span className={`absolute bottom-[-6px] left-0 h-[1px] bg-accent transition-all duration-300 ${
                    isActive ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} />
                </Link>
              );
            })}

            {/* Reservation Call To Action */}
            <Link to="/reserve">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="bg-accent hover:bg-cream text-terracotta font-medium text-xs tracking-widest uppercase py-3 px-6 rounded-none transition-colors duration-300 shadow-md flex items-center space-x-2 border border-accent"
              >
                <span>Reserve A Table</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </motion.button>
            </Link>
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-cream hover:text-accent transition-colors focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Fullscreen Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-terracotta flex flex-col justify-between p-8 pt-28 md:hidden"
          >
            {/* Ambient Background Glow */}
            <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-surface filter blur-[120px] opacity-30 pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-accent/10 filter blur-[100px] opacity-25 pointer-events-none" />

            <div className="flex flex-col space-y-6 z-10">
              <span className="font-cormorant italic text-sm text-accent tracking-widest uppercase mb-4">
                Navigation
              </span>
              {navLinks.map((link, i) => {
                const isActive = location.pathname === link.path;
                return (
                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.1, duration: 0.4 }}
                    key={link.name}
                  >
                    <Link
                      to={link.path}
                      className={`font-playfair text-4xl font-semibold tracking-wide block ${
                        isActive ? 'text-accent' : 'text-cream hover:text-accent'
                      } transition-colors duration-300`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            <div className="z-10 flex flex-col space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Link to="/reserve">
                  <button className="w-full bg-accent hover:bg-cream text-terracotta font-semibold py-4 px-8 tracking-widest uppercase text-sm rounded-none transition-colors duration-300 shadow-lg flex justify-center items-center space-x-3">
                    <span>Book Reservation</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="border-t border-cream/10 pt-6 flex justify-between items-center text-xs tracking-wider text-cream/50"
              >
                <span>Call: +234 1 888 9000</span>
                <span>Lagos, Nigeria</span>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
