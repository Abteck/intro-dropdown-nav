/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        sm: "375px",
      },
      colors: {
        // Neutral

        "Almost-White": "hsl(0, 0%, 98%)",
        "Medium-Gray": "hsl(0, 0%, 41%)",
        "Almost-Black": "hsl(0, 0%, 8%)",
      },
      fontFamily: {
        Epilogue: "'Epilogue', sans-serif",
      },
    },
  },
  plugins: [],
};
