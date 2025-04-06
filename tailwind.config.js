/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
        neon: ["Neonderthaw", "cursive"],
        lemon: ["lemon"],
      },
    },
  },
  plugins: [],
};
