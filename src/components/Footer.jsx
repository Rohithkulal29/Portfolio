// src/components/Footer.jsx
import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdLocationOn, MdPhone, MdEmail } from 'react-icons/md';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 bg-black/40 backdrop-blur-md border-t border-white/10 text-white py-12 mt-20">
      {/* Main content grid */}
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-8">
        {/* Left Section: Quote & Navigation */}
        <div className="space-y-6 text-center md:text-left">
          <p className="text-xl font-light leading-relaxed text-purple-200">
            "Every line of code is a step towards innovation. I build not just with logic, but with a passion for elegant solutions and impactful experiences."
          </p>
          {/* Changed nav to a div for more control, added flex justify-center for mobile nav links */}
          <div className="text-sm space-x-4 flex justify-center md:justify-start">
            <a href="#aboutme" className="hover:text-cyan-400 transition-colors">About</a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">Contacts</a>
          </div>
          {/* REMOVED COPYRIGHT FROM HERE */}
        </div>

        {/* Middle Section: Contact Details */}
        <div className="space-y-4 text-center md:text-left">
          <h3 className="text-xl font-semibold text-purple-400 mb-4">Get In Touch</h3>
          <div className="flex items-start justify-center md:justify-start gap-3 text-white/80">
            <MdLocationOn className="text-2xl text-red-400 flex-shrink-0 mt-1" />
            <div>
              <p>Mangalore, Karnataka, 575006</p>
              <p>India</p>
            </div>
          </div>
          <div className="flex items-center justify-center md:justify-start gap-3 text-white/80">
            <MdPhone className="text-2xl text-red-400 flex-shrink-0" />
            <p>+91 8123039379</p>
          </div>
          <div className="flex items-center justify-center md:justify-start gap-3 text-white/80">
            <MdEmail className="text-2xl text-red-400 flex-shrink-0" />
            <a href="mailto:rohithrohithkulal@gmail.com" className="hover:text-cyan-400 transition-colors">rohithrohithkulal@gmail.com</a>
          </div>
        </div>

        {/* Right Section: About Me & Social Icons */}
        <div className="space-y-4 text-center md:text-left">
          <h3 className="text-xl font-semibold text-purple-400 mb-4">About Me</h3>
          <p className="text-white/80 text-sm leading-relaxed">
            As a passionate software developer, I focus on creating green Artificial Intelligence solutions that prioritize efficiency and responsible technology. My expertise is in machine learning, and I am actively improving my skills in AI development and intuitive UI design. I always aim to reduce resource use through innovative tools.
          </p>
          <div className="flex gap-4 pt-4 justify-center md:justify-start">
            <a href="https://github.com/Rohithkulal29" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-cyan-400 transition-colors text-2xl">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/rohith-r-a62921349" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-cyan-400 transition-colors text-2xl">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      {/* NEW SECTION FOR COPYRIGHT AT THE BOTTOM */}
      <div className="mt-8 pt-4 border-t border-white/10 text-center text-sm text-white/50 px-4 md:px-8">
        <p>
          Copyright &copy; {currentYear} Rohith Kulal. All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;