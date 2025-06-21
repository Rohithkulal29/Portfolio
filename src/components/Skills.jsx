// src/components/Skills.jsx
import { motion } from 'framer-motion';
import React from 'react';

// Custom SVG Icon Components for Skill Categories
// NEW ROBOT ICON FOR AI & Machine Learning
const RobotIcon = () => (
    // Represents AI/ML - a robot head
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-4.411 0-8 3.589-8 8v7c0 4.411 3.589 8 8 8s8-3.589 8-8V8c0-4.411-3.589-8-8-8zm5 12h-2v2h2v-2zm-6 0h-2v2h2v-2zm5 5H7v-2h10v2zM12 2c-3.309 0-6 2.691-6 6v2h12V8c0-3.309-2.691-6-6-6z"/>
    </svg>
);

const CodeBracketsIcon = () => (
    // Represents Frontend - code brackets
    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <polyline points="16 18 22 12 16 6"></polyline>
        <polyline points="8 6 2 12 8 18"></polyline>
    </svg>
);

const ServerRackIcon = () => (
    // Represents Backend - server rack
    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
        <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
        <line x1="6" y1="6" x2="6" y2="6"></line>
        <line x1="6" y1="18" x2="6" y2="18"></line>
    </svg>
);

const DatabaseCylinderIcon = () => (
    // Represents Databases - a classic database cylinder
    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
        <path d="M21 12c0 1.66-4.03 3-9 3s-9-1.34-9-3"></path>
        <path d="M21 19c0 1.66-4.03 3-9 3s-9-1.34-9-3"></path>
        <path d="M3 5v14"></path>
        <path d="M21 5v14"></path>
    </svg>
);

const GitBranchIcon = () => (
    // Represents Tools & Version Control - a git branch/fork icon
    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <circle cx="18" cy="18" r="3"></circle>
        <circle cx="6" cy="6" r="3"></circle>
        <path d="M13 18H8.5a4.5 4.5 0 0 1-4.5-4.5V6"></path>
        <polyline points="16 2 18 4 20 2"></polyline>
    </svg>
);


// Framer Motion variants for staggered animation of skills
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.07, // Smaller delay for faster appearance of each skill
            delayChildren: 0.2 // Start animations after a small initial delay
        }
    }
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring", // Use a spring animation for a bouncier feel
            stiffness: 100, // Stiffer spring
            damping: 10     // More damping to reduce oscillation
        }
    }
};

export default function Skills() {
    // Categorized skill list with updated 'iconComponent' property for AI & ML
    const categorizedSkills = [
        {
            title: 'AI & Machine Learning',
            iconComponent: <RobotIcon />, // <-- NOW USING THE ROBOT ICON
            skills: ['Python', 'Tensorflow', 'Keras', 'Generative AI', 'Numpy', 'Pandas', 'Scikit-learn', 'OpenCV']
        },
        {
            title: 'Web Development (Frontend)',
            iconComponent: <CodeBracketsIcon />,
            skills: ['React', 'Tailwind CSS', 'HTML', 'CSS']
        },
        {
            title: 'Web Development (Backend)',
            iconComponent: <ServerRackIcon />,
            skills: ['Flask', 'Node.js', 'Java']
        },
        {
            title: 'Databases',
            iconComponent: <DatabaseCylinderIcon />,
            skills: ['SQL', 'MongoDB', 'Firebase']
        },
        {
            title: 'Tools & Version Control',
            iconComponent: <GitBranchIcon />,
            skills: ['Git', 'GitHub']
        }
    ];

    return (
        <section id="skills" className="p-10 backdrop-blur-sm bg-black/30 rounded-xl shadow-lg m-4">
            {/* Main Heading */}
            <h2 className="text-3xl font-bold mb-8 text-center font-heading text-cyan-400 neon-glow">My Skills</h2>
            
            {/* Grid for skill cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> 
                {categorizedSkills.map((category, catIndex) => (
                    // Each category is a distinct card, styled like your project cards
                    <div 
                        key={catIndex} 
                        className="p-6 bg-gradient-to-br from-black/40 to-black/20 rounded-xl border border-white/10 
                                   hover:border-purple-500 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 backdrop-blur-sm"
                    >
                        {/* Category Heading with Icon */}
                        <h3 className="text-xl md:text-2xl font-semibold mb-4 text-center text-purple-400 neon-glow-sm 
                                       flex items-center justify-center space-x-3">
                            <span className="text-purple-400">{category.iconComponent}</span> {/* Icon component */}
                            <span>{category.title}</span>
                        </h3>
                        
                        {/* Skill badges */}
                        <motion.ul
                            className="flex flex-wrap justify-center gap-3 text-white/80"
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible" 
                        >
                            {category.skills.map((skill, skillIndex) => (
                                <motion.li
                                    key={`${catIndex}-${skillIndex}`} // Unique key
                                    className="px-4 py-2 rounded-full text-sm font-medium
                                               bg-gradient-to-r from-cyan-600/40 to-purple-600/40
                                               text-white border border-cyan-500/60 shadow-md 
                                               hover:scale-105 hover:border-purple-300 hover:text-purple-100
                                               transition-all duration-300 transform cursor-pointer"
                                    variants={itemVariants} // Apply item animation variants
                                >
                                    {skill}
                                </motion.li>
                            ))}
                        </motion.ul>
                    </div>
                ))}
            </div>
        </section>
    );
}