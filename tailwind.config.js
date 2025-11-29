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
        fadeInUp: "fadeInUp 0.8s ease-out forwards",
        fadeInDown: "fadeInDown 0.8s ease-out forwards",
        slideInLeft: "slideInLeft 0.8s ease-out forwards",
        slideInRight: "slideInRight 0.8s ease-out forwards",
        float: "floatAnimation 3s ease-in-out infinite",
        scaleInUp: "scaleInUp 0.6s ease-out forwards",
        shimmer: "shimmer 2s infinite",
        "glow-pulse": "glow-pulse 2s ease-in-out infinite",
        reveal: "reveal 0.8s ease-out forwards",
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
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeInDown: {
          "0%": { opacity: "0", transform: "translateY(-30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-50px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(50px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        floatAnimation: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        scaleInUp: {
          "0%": { opacity: "0", transform: "scale(0.8) translateY(20px)" },
          "100%": { opacity: "1", transform: "scale(1) translateY(0)" },
        },
        shimmer: {
          "0%": { "background-position": "-1000px 0" },
          "100%": { "background-position": "1000px 0" },
        },
        "glow-pulse": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(197, 123, 87, 0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(197, 123, 87, 0.6)" },
        },
        reveal: {
          "0%": { "clip-path": "inset(0 100% 0 0)" },
          "100%": { "clip-path": "inset(0 0 0 0)" },
        },
      },
    },
  },
  plugins: [],
};
