// src/components/CustomCursor.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isClicked, setIsClicked] = useState(false); // State for click animation

  useEffect(() => {
    const mouseMoveHandler = (event) => {
      // Update mouse position for the custom cursor
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    const mouseDownHandler = () => {
      setIsClicked(true); // Set clicked state to true on mouse down
    };

    const mouseUpHandler = () => {
      setIsClicked(false); // Set clicked state to false on mouse up
    };

    // Add event listeners to the document
    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mousedown', mouseDownHandler);
    document.addEventListener('mouseup', mouseUpHandler);

    // Clean up event listeners on component unmount
    return () => {
      document.removeEventListener('mousemove', mouseMoveHandler);
      document.removeEventListener('mousedown', mouseDownHandler);
      document.removeEventListener('mouseup', mouseUpHandler);
    };
  }, []); // Empty dependency array ensures this runs once on mount

  // Variants for the main dot animation
  const dotVariants = {
    default: {
      x: mousePosition.x,
      y: mousePosition.y,
      scale: 1, // Default scale
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 500, // Faster spring for main dot
        damping: 30,
        mass: 1
      }
    },
    clicked: {
      scale: 0.8, // Shrink on click
      opacity: 0.8,
      transition: {
        type: 'spring',
        stiffness: 800, // Quick click animation
        damping: 20
      }
    }
  };

  // Variants for the glowing ring animation (slightly delayed)
  const ringVariants = {
    default: {
      x: mousePosition.x,
      y: mousePosition.y,
      scale: 1,
      opacity: 0.6,
      transition: {
        type: 'spring',
        stiffness: 300, // Slower spring for the ring to create a trail effect
        damping: 25,
        mass: 1.2
      }
    },
    clicked: {
      scale: 1.2, // Expand on click
      opacity: 0.4,
      transition: {
        type: 'spring',
        stiffness: 600,
        damping: 25
      }
    }
  };

  return (
    <>
      {/* The main glowing dot */}
      <motion.div
        className="custom-cursor-dot"
        variants={dotVariants}
        animate={isClicked ? 'clicked' : 'default'}
        style={{
          // Center the div on the cursor's actual position
          left: -10, // Half of dot's width (20px)
          top: -10,  // Half of dot's height (20px)
          position: 'fixed',
          pointerEvents: 'none', // Crucial: allows clicks to pass through
          zIndex: 9999, // Ensure it's always on top
        }}
      />
      {/* The secondary, trailing glowing ring */}
      <motion.div
        className="custom-cursor-ring"
        variants={ringVariants}
        animate={isClicked ? 'clicked' : 'default'}
        style={{
          // Center the div on the cursor's actual position
          left: -20, // Half of ring's width (40px)
          top: -20,  // Half of ring's height (40px)
          position: 'fixed',
          pointerEvents: 'none', // Crucial: allows clicks to pass through
          zIndex: 9998, // Slightly lower z-index than the dot
        }}
      />
    </>
  );
}