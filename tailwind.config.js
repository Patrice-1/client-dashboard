/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-gold": "#F5B800", // Your light gold color
        "dark-gold": "#C68D17", // Your dark gold color
        "deep-gold": "#B87535", // Shiny, vintage deep gold color (metallic looking)
        black: "#1C1C1C", // Black (Secondary Color)
        white: "#FFFFFF", // White (Accent Color)
        orange: "#FF7F32", // Orange (Accent Color)
      },
      fontFamily: {
        sans: ["Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
