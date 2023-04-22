/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        themeDarkGray: "#191919",
        themeGray: "#2e2e2e",
      },
      colors: {
        themeWhite: "#e5e5e5",
        themeIndigo: "#4f46e5",
        themeDarkGray: "#191919",
        themeYellow: "#e5b567",
      },
    },
  },
  plugins: [],
};
