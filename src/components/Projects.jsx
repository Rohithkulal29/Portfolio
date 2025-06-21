// src/components/Projects.jsx
import { motion } from 'framer-motion';
import React from 'react';

// GitHub icon as SVG component
const GitHubIcon = () => (
    <svg className="w-4 h-4" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
);

// Lock icon for private source code
const LockIcon = () => (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.5c-2.485 0-4.5-2.015-4.5-4.5s2.015-4.5 4.5-4.5 4.5 2.015 4.5 4.5-2.015 4.5-4.5 4.5zm0-7c-1.38 0-2.5 1.12-2.5 2.5s1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5-1.12-2.5-2.5-2.5zm0-5c-6.837 0-11 5.394-11 9.5s4.163 9.5 11 9.5 11-5.394 11-9.5-4.163-9.5-11-9.5zm0 17c-4.821 0-8.5-4.11-8.5-7.5s3.679-7.5 8.5-7.5 8.5 4.11 8.5 7.5-3.679 7.5-8.5 7.5z"/></svg>
);


export default function Projects() {
    const projectList = [
        {
            id: 'pdd-1',
            name: "Plant Disease Detection",
            description: "This project aims to develop a CNN-based system for early detection and classification of plant diseases using leaf images to support precision agriculture.",
            tech: ["Python", "TensorFlow", "Keras", "OpenCV", "Numpy", "Pandas", "Matplotlib", "Google Colab", "ImageDataGenerator"],
            github: "https://github.com/Rohithkulal29/Plant-Disease-Detection",
            // image: "/images/plant_disease_detection_preview.jpg", // Removed image path
        },
        {
            id: 'as-4',
            name: "ArecaSafe",
            description: "Spearheaded ArecaSafe, an AI/IoT system for real-time crop health monitoring and disease prediction,providing actionable insights to farmers. (Work in progress)",
            tech: ["Flutterflow", "Python", "InfluxDB", "IoT", "Deep Learning"],
            github: "",
            // image: "/images/arecasafe_preview.jpg", // Removed image path
            sourceCodePrivate: true,
        },
        {
            id: 'tbb-3',
            name: "Travel Buddy Bot (GenAI Chatbot)",
            description: "Travel Buddy Bot is a chatbot created with Flask and the Gemini API. It helps users plan trips by offering travel information, itineraries, and packages for tourist destinations through a modern and responsive web interface.",
            tech: ["Python", "Flask", "HTML", "CSS", "JS", "Google Gemini API", "Python-dotenv", "Generative AI"],
            github: "https://github.com/Rohithkulal29/Travel-Buddy-Bot",
            // image: "/images/travel_buddy_bot_preview.jpg", // Removed image path
        },
        {
            id: 'ca-2',
            name: "Chat Application (Java Socket Programming)",
            description: "This Java-based chat application allows real-time messaging between a client and server using sockets. It features a GUI with message formatting, timestamps, and user profiles. The client sends messages to the server, which broadcasts them back, enabling bidirectional communication.",
            tech: ["Java Swing", "Socket Programming", "Data Streams"],
            github: "https://github.com/Rohithkulal29/Chatapplication",
            // image: "/images/chat_application_preview.jpg", // Removed image path
        },
    ];

    // Removed DEFAULT_IMAGE_FALLBACK as images are no longer displayed

    return (
        <section id="projects" className="p-10 backdrop-blur-sm bg-black/30 rounded-xl shadow-lg m-4">
            <h2 className="text-3xl font-bold mb-8 text-center font-heading text-cyan-400 neon-glow">Projects</h2>

            <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-2">
                {projectList.map((project) => (
                    <motion.div
                        key={project.id}
                        className="p-6 bg-gradient-to-br from-black/40 to-black/20 rounded-xl border border-white/10 hover:border-purple-500 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 backdrop-blur-sm"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        whileHover={{ scale: 1.03, boxShadow: "0 0 20px rgba(168, 85, 247, 0.7)" }}
                    >
                        <div className="space-y-4">
                            {/* Removed the entire image div block */}
                            {/* <div className="mb-4">
                                <img
                                    src={project.image || DEFAULT_IMAGE_FALLBACK}
                                    alt={`${project.name} project preview`}
                                    className="w-full h-48 object-cover rounded-md border border-purple-700 shadow-md"
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src = DEFAULT_IMAGE_FALLBACK;
                                    }}
                                />
                            </div> */}

                            <h3 className="text-xl font-semibold text-purple-400 border-b border-purple-400/30 pb-2 font-heading">
                                {project.name}
                            </h3>

                            <p className="text-white/80 leading-relaxed text-sm">
                                {project.description}
                            </p>

                            <div className="space-y-3">
                                <div>
                                    <span className="text-cyan-400 font-semibold text-sm">Technologies:</span>
                                    <div className="flex flex-wrap gap-2 mt-1">
                                        {project.tech.map((tech, techIndex) => (
                                            <span key={techIndex} className="px-3 py-1 bg-gray-700/50 rounded-full text-xs text-white/90 border border-gray-600">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-4 pt-2">
                                    {project.github && !project.sourceCodePrivate && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 px-5 py-2 border border-cyan-400 text-cyan-400 font-semibold rounded-full hover:bg-cyan-400 hover:text-black transition duration-300"
                                        >
                                            <GitHubIcon />
                                            View Source
                                        </a>
                                    )}

                                    {project.sourceCodePrivate && (
                                        <span className="inline-flex items-center gap-2 text-gray-500 text-sm px-3 py-1 border border-gray-600 rounded-full">
                                            <LockIcon />
                                            Source Private
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}