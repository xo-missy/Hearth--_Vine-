import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero/Hero';
import Story from '../components/Story/Story';
import Chef from '../components/Chef/Chef';
import Experience from '../components/Experience/Experience';
import Testimonials from '../components/Testimonials/Testimonials';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full"
    >
      <Hero />
      <Story />
      <Chef />
      <Experience />
      <Testimonials />
    </motion.div>
  );
};

export default Home;
