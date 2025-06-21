import { motion } from 'framer-motion';
import { useMemo, useState } from 'react';
import { Link } from 'react-scroll';

// Define SCROLL_OFFSET (adjust if your Navbar height changes)
const NAVBAR_HEIGHT = 64;
const SCROLL_OFFSET = -NAVBAR_HEIGHT - 10;

export default function Hero() {
  const text = "Hi, I'm Rohith R";
  const [hovered, setHovered] = useState(false);

  const letters = useMemo(() => {
    return [...text].map((char) => ({
      char,
      x: Math.random() * 400 - 200,
      y: Math.random() * 300 - 150,
      rotate: Math.random() * 180 - 90,
      scale: 0.7 + Math.random() * 0.4,
    }));
  }, []);

  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center px-4 overflow-hidden"
      style={{ backgroundImage: "url('/images/hero-bg-ai-green.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      {/* Semi-transparent overlay for text readability */}
      <div className="absolute inset-0 bg-black/10"></div>

      {/* Content container for text, now correctly centered and above the background */}
      <div
        className="relative z-10 text-white max-w-4xl"
      >
        {/* Intro text */}
        <div
          className="text-center" // Removed md:text-left to keep it centered on all screens
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {/* Ensure h1 uses 'font-heading' for Rajdhani and other styles */}
          <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text
                         bg-gradient-to-r from-pink-500 via-red-500 to-orange-400
                         animate-gradient-move bg-[length:400%_400%] drop-shadow-xl
                         flex flex-wrap justify-center font-heading"> {/* Removed md:justify-start */}
            {letters.map(({ char, x, y, rotate, scale }, i) => (
              <motion.span
                key={i}
                className="inline-block"
                initial={{ opacity: 0, x, y, rotate, scale }}
                animate={{ opacity: 1, x: 0, y: 0, rotate: 0, scale: hovered ? 1.15 : 1 }}
                transition={{
                  type: "spring",
                  stiffness: 80,
                  damping: 14,
                  delay: i * 0.05,
                }}
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
            <motion.span
              className="inline-block ml-2"
              animate={{ rotate: [0, 20, -10, 20, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              👋
            </motion.span>
          </h1>

          <p className="mt-4 text-lg md:text-xl text-gray-300">
            AI/ML Developer | Green Tech Enthusiast
          </p>

          {/* Call to Action Buttons - Now stacking on mobile */}
          {/* Changed 'flex justify-center md:justify-start space-x-4' to 'flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4' */}
          <div className="mt-8 flex flex-col items-center space-y-4 md:flex-row md:space-y-0 md:space-x-4">
            <Link to="projects" smooth={true} duration={500} offset={SCROLL_OFFSET}
                  className="px-6 py-3 w-fit bg-purple-600 text-white font-semibold rounded-full shadow-lg hover:bg-purple-700 transition duration-300 transform hover:scale-105 cursor-pointer">
              View My Projects
            </Link>
            <Link to="contact" smooth={true} duration={500} offset={SCROLL_OFFSET}
                  className="px-6 py-3 w-fit border border-cyan-400 text-cyan-400 font-semibold rounded-full shadow-lg hover:bg-cyan-400 hover:text-black transition duration-300 transform hover:scale-105 cursor-pointer">
              Get In Touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}