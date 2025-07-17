/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    // Or if using `src` directory:
    // "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        orangePrimary: "#FF6700",
        bluePrimary: "#00BFFF",
        greenPrimary: "#32CD32",
        blackPrimary: "#101010",
        violetprimary: "#6461FC",
        whiteprimary: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
