module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
        display: ["Playfair Display", "serif"],
      },
      colors: {
        ivory: "#E8DCC2",
        beige: "#F5F0E8",
        clay: "#C57B57",
        "clay-dark": "#A0643F",
        espresso: "#1a1a1a",
        "neutral-gray": "#E5E0DA",
        "rich-black": "#0f0f0f",
      },
      backgroundColor: {
        primary: "#F5F0E8",
        secondary: "#E8DCC2",
        accent: "#C57B57",
        "accent-light": "#E8DCC2",
      },
      boxShadow: {
        "glow-clay": "0 0 30px rgba(197, 123, 87, 0.3)",
        "glow-warm": "0 0 30px rgba(232, 220, 194, 0.3)",
        soft: "0 10px 30px rgba(0, 0, 0, 0.08)",
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-in-out",
        "slide-in": "slideIn 0.8s ease-out",
        "pulse-glow": "pulseGlow 2s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideIn: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(197, 123, 87, 0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(197, 123, 87, 0.5)" },
        },
      },
    },
  },
  plugins: [],
};
