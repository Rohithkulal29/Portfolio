/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        signature: ["Great Vibes", "cursive"],
      },
      animation: {
        'gradient-move': 'gradient-move 10s ease infinite',
      },
      keyframes: {
        'gradient-move': {
          '0%': { backgroundPosition: '0% 0%' },
          '50%': { backgroundPosition: '100% 100%' },
          '100%': { backgroundPosition: '0% 0%' },
        },
      },
      dropShadow: {
        neon: '0 0 5px #f43f5e, 0 0 10px #f43f5e, 0 0 20px #f43f5e',
        glow: '0 0 8px rgba(255, 255, 255, 0.8)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
