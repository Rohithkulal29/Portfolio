// src/components/Education.jsx
import React from 'react';

export default function Education() {
  return (
    <section className="p-10 backdrop-blur-sm bg-black/30 rounded-xl shadow-lg m-4">
      {/* Ensure h2 uses 'font-heading' class for Rajdhani */}
      <h2 className="text-3xl font-bold mb-4 font-heading text-cyan-400 neon-glow">Education</h2>
      <ul className="text-lg text-white/90 space-y-4">
        <li className="flex items-start">
            {/* Custom bullet point with neon style */}
            <span className="text-cyan-400 text-xl mr-3 leading-none neon-glow">&#x2022;</span>
            <div>
                <p className="font-semibold">B.E. in Information Science</p>
                <p>A. J. INSTITUTE OF ENGINEERING AND TECHNOLOGY MANGALURU (2022 – 2026)</p>
            </div>
        </li>
        <li className="flex items-start">
            {/* Custom bullet point with neon style */}
            <span className="text-cyan-400 text-xl mr-3 leading-none neon-glow">&#x2022;</span>
            <div>
                <p className="font-semibold">PCMC</p>
                <p>SRI VENKATARAMANA PU COLLEGE KUNDAPURA (2020 – 2022)</p>
                {/* Optional: Add a brief focus or achievement if relevant */}
                {/* <p className="text-sm text-white/70">Completed pre-university coursework with emphasis on sciences.</p> */}
            </div>
        </li>
      </ul>
    </section>
  );
}