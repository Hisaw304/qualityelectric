import React from "react";
import { motion } from "framer-motion";
import heroImg from "../assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative h-screen w-full">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImg})` }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-bold text-white mb-4"
        >
          Quality Electric & Construction
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-lg md:text-2xl text-white mb-8 max-w-2xl"
        >
          Reliable electrical and construction services delivered with safety,
          professionalism, and quality workmanship.
        </motion.p>

        <motion.a
          href="#services"
          whileHover={{ scale: 1.05 }}
          className="bg-[var(--yellow)] text-[var(--dark-navy)] font-semibold px-8 py-4 rounded-lg shadow-lg hover:opacity-90 transition"
        >
          Our Services
        </motion.a>

        {/* Scroll Down Arrow */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="absolute bottom-10"
        >
          <span className="text-white text-2xl animate-bounce">⬇️</span>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
