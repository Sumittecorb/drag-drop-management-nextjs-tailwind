/** @type {import('tailwindcss').Config} */

module.exports = {
  mode: "jit",

  purge: {
    content: [
      // Your content paths...
      "./src/app/**/*.{js,ts,jsx,tsx}",
      "./src/components/**/*.{js,ts,jsx,tsx}",
    ],
  },
};
