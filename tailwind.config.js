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
        purple: "#21083F",
        lemon: "#7FF41A",
      },
      fontFamily: {
        vastago: ["Vastago Grotesque", "sans-serif"], // Heading texts h1-h6
        nohemi: ["Nohemi", "sans-serif"], // paragraphs, link texts, button texts, spans etc
      },
    },
  },
  plugins: [],
}

