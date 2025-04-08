/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        purple: {
          600: "#8B5CF6",
          700: "#6D28D9",
          800: "#5B21B6",
          900: "#4C1D95",
        },
      },
      boxShadow: {
        neon: "0 0 15px rgba(139, 92, 246, 0.8)",
        "neon-btn": "0 0 20px rgba(139, 92, 246, 0.6)",
      },
      textShadow: {
        glow: "0 0 5px rgba(255, 255, 255, 0.5)",
      },
    },
  },
  plugins: [require("tailwindcss-textshadow")],
};
