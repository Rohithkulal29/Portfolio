import React from 'react';
import { motion } from 'framer-motion';

export default function ContactMe() {
  // Removed the handleSubmit function as Formspree handles direct form submission
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   alert('Form submitted! (This is a placeholder. You need to integrate a backend service like Formspree or Netlify Forms for actual submission.)');
  // };

  return (
    <section id="contact" className="p-10 backdrop-blur-sm bg-black/30 rounded-xl shadow-lg m-4 text-white">
      {/* Outer container for the section heading */}
      <div className="text-center mb-8">
        <p className="text-lg font-light text-cyan-400 uppercase tracking-widest">Get In Touch</p>
        {/* Adjusted heading to match portfolio theme */}
        <h2 className="text-3xl font-bold mt-2 font-heading text-purple-400 neon-glow">Contact.</h2>
      </div>

      {/* Main container for the form, now with reduced max-width and enhanced styling */}
      <motion.div
        className="max-w-lg mx-auto p-6 bg-gradient-to-br from-black/40 to-black/20 rounded-xl border border-white/10 shadow-2xl space-y-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <p className="text-center text-white/80 text-base mb-4">
          Have a project in mind or just want to chat? Feel free to reach out!
        </p>

        {/* Formspree Integration: YOUR_FORMSPREE_ID is used here */}
        <form
            action="https://formspree.io/f/mldnwogp" // Your specific Formspree ID
            method="POST"
            className="space-y-4 text-left"
            // Removed: onSubmit={handleSubmit} because Formspree handles direct submission
        >
          {/* Name Input */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-white/70 mb-1">Your Name</label>
            <input
              type="text"
              id="name"
              name="name" // Important for Formspree to capture this field
              placeholder="What's your name?"
              className="w-full p-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white text-base placeholder-white/50 transition duration-300 ease-in-out hover:border-cyan-400"
              required
            />
          </div>

          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white/70 mb-1">Your Email</label>
            <input
              type="email"
              id="email"
              name="email" // Important for Formspree to capture this field
              placeholder="What's your email?"
              className="w-full p-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white text-base placeholder-white/50 transition duration-300 ease-in-out hover:border-cyan-400"
              required
            />
          </div>

          {/* Message Textarea */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-white/70 mb-1">Your Message</label>
            <textarea
              id="message"
              name="message" // Important for Formspree to capture this field
              rows="4"
              placeholder="What's your message?"
              className="w-full p-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white text-base placeholder-white/50 resize-y transition duration-300 ease-in-out hover:border-cyan-400"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white font-semibold text-lg rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            Send Message
          </button>
        </form>
      </motion.div>
    </section>
  );
}