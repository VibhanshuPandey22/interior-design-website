/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
        fitgree: ["Figtree", "sans-serif"],
        urbanist: ["Urbanist", "sans-serif"],
        varela: ["Varela", "sans-serif"],
        montserrat: ["Montserrat", "serif"],
      },
      colors: {
        offWhite: "#FAF9F6",
        darkerOffWhite: "#f7f5f1",
      },
    },
  },
  plugins: [],
};
