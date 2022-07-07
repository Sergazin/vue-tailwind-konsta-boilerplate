const konstaConfig = require("konsta/config");

module.exports = konstaConfig({
  content: [
    "./index.html",
    "./pages/**/*.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./@ix/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  theme: {
    extend: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
        "3xl": "2100px",
      },
    },
  },
  variants: {},
});
