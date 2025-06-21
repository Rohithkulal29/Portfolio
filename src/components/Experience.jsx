// src/components/Experience.jsx
import React from 'react';

export default function Experience() {
  return (
    <section className="p-10 backdrop-blur-sm bg-black/30 rounded-xl shadow-lg m-4">
      {/* Ensure h2 uses 'font-heading' class for Rajdhani */}
      <h2 className="text-3xl font-bold mb-4 font-heading text-cyan-400 neon-glow">Experience</h2>
      <ul className="text-lg text-white/90 space-y-6"> {/* Use ul for list of experiences */}
        <li className="flex items-start">
            {/* Custom bullet point with neon style */}
            <span className="text-cyan-400 text-xl mr-3 leading-none neon-glow">&#x2022;</span>
            <div>
                <p className="font-semibold text-xl">Internship at Edunet Foundation</p>
                <p className="text-sm text-white/70">May 2025</p>
                <p className="mt-2 leading-relaxed">
                    Internship on Artificial Intelligence and Data Analytics focused on Green Skills, organized by AICTE,
                    Shell India Markets Private Limited and Edunet Foundation under Skills4Future program.
                </p>
                {/* Add bullet points for specific responsibilities/achievements within the internship */}
                <ul className="list-disc list-inside text-white/70 mt-2 ml-4 space-y-1">
                    <li>Developed foundational understanding of AI/ML concepts for sustainable solutions.</li>
                    <li>Gained practical experience in data analytics workflows.</li>
                    <li>Contributed to projects emphasizing responsible technology use.</li>
                </ul>
            </div>
        </li>
        {/* Add more experience entries here as needed */}
        {/*
        <li className="flex items-start">
            <span className="text-cyan-400 text-xl mr-3 leading-none neon-glow">&#x2022;</span>
            <div>
                <p className="font-semibold text-xl">[Your Next Role/Project]</p>
                <p className="text-sm text-white/70">[Dates]</p>
                <p className="mt-2 leading-relaxed">
                    [Description of responsibilities and impact.]
                </p>
            </div>
        </li>
        */}
      </ul>
    </section>
  );
}