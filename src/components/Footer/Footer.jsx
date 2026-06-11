import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, ArrowRight, Check } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 5000);
    }
  };

  return (
    <footer className="bg-surface border-t border-cream/10 text-cream relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute -bottom-48 -right-48 w-96 h-96 rounded-full bg-accent/10 filter blur-[100px] pointer-events-none" />
      <div className="absolute -top-48 -left-48 w-96 h-96 rounded-full bg-terracotta/50 filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 pb-16 border-b border-cream/10">
          
          {/* Brand Column */}
          <div className="flex flex-col space-y-6">
            <Link to="/" className="inline-block">
              <span className="font-playfair text-3xl font-bold tracking-tight text-cream">
                Hearth & Vine
              </span>
              <div className="font-cormorant italic text-xs tracking-[0.2em] text-accent uppercase -mt-1">
                Fine Dining
              </div>
            </Link>
            <p className="text-cream/70 text-sm leading-relaxed max-w-xs">
              Blending wood-fired culinary heritage with the rich, bold spices of West Africa and classical European structure.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-8 h-8 rounded-full border border-cream/20 flex items-center justify-center text-cream/70 hover:text-accent hover:border-accent transition-colors duration-300" aria-label="Instagram">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full border border-cream/20 flex items-center justify-center text-cream/70 hover:text-accent hover:border-accent transition-colors duration-300" aria-label="Facebook">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full border border-cream/20 flex items-center justify-center text-cream/70 hover:text-accent hover:border-accent transition-colors duration-300" aria-label="Twitter">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </a>
            </div>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col space-y-6">
            <h4 className="font-cormorant italic text-lg text-accent tracking-wider font-semibold">
              Contact Us
            </h4>
            <ul className="space-y-4 text-sm text-cream/80">
              <li className="leading-relaxed">
                <span className="block font-medium text-cream mb-1">Address</span>
                42 Sunset Boulevard, Victoria Island,<br />Lagos, Nigeria
              </li>
              <li>
                <span className="block font-medium text-cream mb-1">Phone</span>
                +234 (1) 888 9000
              </li>
              <li>
                <span className="block font-medium text-cream mb-1">Email</span>
                reservations@hearthvine.com
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div className="flex flex-col space-y-6">
            <h4 className="font-cormorant italic text-lg text-accent tracking-wider font-semibold">
              Hours of Service
            </h4>
            <ul className="space-y-4 text-sm text-cream/80">
              <li>
                <span className="block font-medium text-cream mb-1">Lunch</span>
                Tuesday &ndash; Sunday<br />12:00 PM &ndash; 3:30 PM
              </li>
              <li>
                <span className="block font-medium text-cream mb-1">Dinner</span>
                Tuesday &ndash; Saturday: 6:00 PM &ndash; 11:30 PM<br />
                Sunday: 5:00 PM &ndash; 10:00 PM
              </li>
              <li className="text-accent italic font-cormorant text-sm">
                Closed on Mondays
              </li>
            </ul>
          </div>

          {/* Newsletter signup */}
          <div className="flex flex-col space-y-6">
            <h4 className="font-cormorant italic text-lg text-accent tracking-wider font-semibold">
              Newsletter
            </h4>
            <p className="text-cream/70 text-sm leading-relaxed">
              Subscribe to receive updates on seasonal menu releases and exclusive culinary dinners.
            </p>
            <form onSubmit={handleSubscribe} className="relative mt-2">
              <input
                type="email"
                required
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-terracotta/40 border border-cream/20 text-cream placeholder-cream/40 py-3 px-4 text-sm rounded-none focus:outline-none focus:border-accent transition-colors duration-300"
              />
              <button
                type="submit"
                className="absolute right-0 top-0 h-full px-4 text-accent hover:text-cream flex items-center justify-center transition-colors"
                aria-label="Subscribe"
              >
                {isSubscribed ? (
                  <Check className="w-4 h-4 text-green-400" />
                ) : (
                  <ArrowRight className="w-4 h-4" />
                )}
              </button>
            </form>
            {isSubscribed && (
              <motion.span 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-xs text-accent italic font-cormorant"
              >
                Thank you! You have been subscribed.
              </motion.span>
            )}
          </div>

        </div>

        {/* Footer Bottom copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 text-xs text-cream/50 tracking-widest uppercase space-y-4 md:space-y-0">
          <span>&copy; {new Date().getFullYear()} Hearth & Vine. All rights reserved.</span>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-cream transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-cream transition-colors duration-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
