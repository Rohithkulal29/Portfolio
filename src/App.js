// src/App.js

// import { useEffect, useState } from 'react'; // Keep useState if used elsewhere, remove useEffect if not
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

// Imports for components
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import ContactMe from './components/ContactMe';
import CV from './components/CV';
import Footer from './components/Footer';
// Removed: import Preloader from './components/Preloader'; // This line is removed
import Navbar from './components/Navbar';
import CustomCursor from './components/CustomCursor'; // Custom Cursor Component

export default function App() {
  // Removed: const [isLoading, setIsLoading] = useState(true);
  // Removed: useEffect for loading timeout
  // Removed: if (isLoading) { return <Preloader />; }

  const NAVBAR_HEIGHT = 64; 
  // const SCROLL_OFFSET = -NAVBAR_HEIGHT - 20; 

  return (
    <div className="relative overflow-hidden text-white">
      <CustomCursor /> {/* Custom Cursor */}

      {/* Background Image */}
      <div
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: "url('/background.jpg')" }}
      ></div>

      {/* Navbar */}
      <Navbar className="z-50" />

      {/* Main Content Sections */}
      <div className="relative z-10">
        <Hero />

        <div className="space-y-40 px-4 md:px-12 py-20">
          {/* About Me Section */}
          <SectionWrapper id="aboutme" component={AboutMe} />

          {/* Education Section */}
          <SectionWrapper id="education" component={Education} />

          {/* Experience Section */}
          <SectionWrapper id="experience" component={Experience} />

          {/* Projects Section */}
          <SectionWrapper 
            id="projects" 
            component={Projects} 
            tiltSettings={{ glareMaxOpacity: 0.1, scale: 1.02, tiltMaxAngleX: 5, tiltMaxAngleY: 5 }} 
          />

          {/* Skills Section - Reduced tilt, but similar to Projects */}
          <SectionWrapper 
            id="skills" 
            component={Skills} 
            tiltSettings={{ glareMaxOpacity: 0.08, scale: 1.018, tiltMaxAngleX: 4, tiltMaxAngleY: 4 }} 
          />

          {/* CV Section */}
          <SectionWrapper 
            id="cv" 
            component={CV} 
            tiltSettings={{ glareMaxOpacity: 0.05, scale: 1.01, tiltMaxAngleX: 2, tiltMaxAngleY: 2 }} 
          />

          {/* Contact Me Section */}
          <SectionWrapper 
            id="contact" 
            component={ContactMe} 
            tiltSettings={{ glareMaxOpacity: 0.05, scale: 1.01, tiltMaxAngleX: 2, tiltMaxAngleY: 2 }} 
          />
        </div>

        {/* Footer Section */}
        <Footer />
      </div>
    </div>
  );
}

// Helper component to reduce redundancy in code
const SectionWrapper = ({ id, component: Component, tiltSettings }) => (
  <motion.div
    id={id}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    viewport={{ once: true, amount: 0.3 }}
  >
    <Tilt glareEnable {...tiltSettings}>
      <Component />
    </Tilt>
  </motion.div>
);