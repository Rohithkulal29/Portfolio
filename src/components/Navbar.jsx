// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const NAVBAR_HEIGHT = 64;
  const SCROLL_OFFSET = -NAVBAR_HEIGHT - 10;

  const handleNavLinkClick = () => {
    setIsMobileMenuOpen(false); // Close mobile menu when a link is clicked
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-sm shadow-md px-6 py-4 flex items-center justify-between">
      {/* ---------------------------------------------------- */}
      {/* YOUR LOGO IMAGE - SIZE ADJUSTED AGAIN */}
      {/* ---------------------------------------------------- */}
      <motion.img
        src="/images/logo_rk.png"
        alt="RK Logo"
        className="h-14 cursor-pointer" // <--- CHANGED FROM h-12 TO h-14 (56px height)
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        onClick={() => {
          if (isMobileMenuOpen) {
            setIsMobileMenuOpen(false);
          }
          document.getElementById('hero').scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* ---------------------------------------------------- */}
      {/* DESKTOP NAVIGATION LINKS - HIDDEN ON MOBILE, FLEX ON MD+ */}
      {/* ---------------------------------------------------- */}
      <ul className="hidden md:flex space-x-8 text-white text-base font-medium">
        <li>
          <Link to="hero" smooth={true} duration={500} offset={SCROLL_OFFSET} className="cursor-pointer hover:text-red-500 transition">
            Home
          </Link>
        </li>
        <li>
          <Link to="aboutme" smooth={true} duration={500} offset={SCROLL_OFFSET} className="cursor-pointer hover:text-red-500 transition">
            About
          </Link>
        </li>
        <li>
          <Link to="projects" smooth={true} duration={500} offset={SCROLL_OFFSET} className="cursor-pointer hover:text-red-500 transition">
            Projects
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500} offset={SCROLL_OFFSET} className="cursor-pointer hover:text-red-500 transition">
            Contact Me
          </Link>
        </li>
      </ul>

      {/* ---------------------------------------------------- */}
      {/* MOBILE HAMBURGER ICON - SHOWN ON MOBILE, HIDDEN ON MD+ */}
      {/* ---------------------------------------------------- */}
      <div className="md:hidden">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-white focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          {isMobileMenuOpen ? (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          ) : (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          )}
        </button>
      </div>

      {/* ---------------------------------------------------- */}
      {/* MOBILE MENU OVERLAY - CONDITIONAL RENDERING + ANIMATION */}
      {/* ---------------------------------------------------- */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="md:hidden fixed inset-0 bg-black/90 backdrop-blur-lg flex flex-col items-center justify-center space-y-8 text-2xl font-bold text-white z-40"
          >
            {/* Links inside the mobile menu */}
            <Link to="hero" smooth={true} duration={500} offset={SCROLL_OFFSET} className="cursor-pointer hover:text-red-500 transition" onClick={handleNavLinkClick}>
              Home
            </Link>
            <Link to="aboutme" smooth={true} duration={500} offset={SCROLL_OFFSET} className="cursor-pointer hover:text-red-500 transition" onClick={handleNavLinkClick}>
              About
            </Link>
            <Link to="projects" smooth={true} duration={500} offset={SCROLL_OFFSET} className="cursor-pointer hover:text-red-500 transition" onClick={handleNavLinkClick}>
              Projects
            </Link>
            <Link to="contact" smooth={true} duration={500} offset={SCROLL_OFFSET} className="cursor-pointer hover:text-red-500 transition" onClick={handleNavLinkClick}>
              Contact Me
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}