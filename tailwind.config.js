module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
        display: ["Playfair Display", "serif"],
      },
      colors: {
        ivory: "#f8f7f4",
        beige: "#faf9f6",
        mauve: "#c9a7b8",
        peach: "#e7b9a8",
        espresso: "#1a1a1a",
        "neutral-gray": "#f1efef",
        clay: "#c9a7b8",
        "rich-black": "#0f0f0f",
      },
      backgroundColor: {
        primary: "#faf9f6",
        secondary: "#f8f7f4",
        accent: "#c9a7b8",
        "accent-light": "#e7b9a8",
      },
      boxShadow: {
        "glow-mauve": "0 0 30px rgba(201, 167, 184, 0.3)",
        "glow-peach": "0 0 30px rgba(231, 185, 168, 0.3)",
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
          "0%, 100%": { boxShadow: "0 0 20px rgba(201, 167, 184, 0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(201, 167, 184, 0.5)" },
        },
      },
    },
  },
  plugins: [],
};
