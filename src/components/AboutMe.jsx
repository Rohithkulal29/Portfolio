// src/components/AboutMe.jsx

import React from 'react';
import { motion } from 'framer-motion'; // For profile picture animation

export default function AboutMe() {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-black/40 backdrop-blur-md rounded-lg shadow-lg text-center md:text-left">
      <h2 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-8 neon-glow">About Me</h2>

      <div className="flex flex-col md:flex-row items-center md:space-x-8">
        {/* Profile Picture - Now with Framer Motion for subtle animation */}
        <motion.div
          className="flex-shrink-0 mb-6 md:mb-0"
          initial={{ opacity: 0, scale: 0.8 }} // Fade in and slightly grow
          whileInView={{ opacity: 1, scale: 1 }} // Animate when in view
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.5 }} // Only animate once when 50% visible
        >
          <img
            src="/profile.jpg" // Ensure this is your profile picture path
            alt="Rohith Kulal Profile" // Descriptive alt text
            className="w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-purple-500 shadow-xl object-cover hover:scale-105 transition-transform duration-300" // Added hover effect
          />
        </motion.div>

        {/* About Me Text */}
        <div className="text-lg leading-relaxed text-white/90">
          <p className="mb-4">
            I am an AI/ML Developer who is passionate about creating smart, sustainable solutions. My focus is on Machine Learning and Deep Learning, using frameworks like TensorFlow and PyTorch to build effective AI models.
          </p>
          <p>
            I am motivated by the ability of AI to solve environmental issues, concentrating on <span className="text-purple-300 font-semibold">green technology</span> and meaningful, data-driven solutions.
          </p>
        </div>
      </div>
    </div>
  );
}
