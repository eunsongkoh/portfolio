/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "576px",
      xs: "300px",
      md: "768px",
      lg: "1024px",
    },
    extend: {
      colors: {
        frosted: "rgba(240, 248, 255, 0.008)",
      },
    },
  },
  plugins: [],
};
