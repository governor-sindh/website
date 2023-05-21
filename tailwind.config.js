/** @type {import('tailwindcss').Config} */
module.exports = {
  // plugins: [require("daisyui")],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        main: '#044e83',
        sub: '#2eb6e8'
      },
    },
    // screens: {
    //   '2xl': { 'max': '1535px' },
    //   // => @media (max-width: 1535px) { ... }

    //   'xl': { 'max': '1350px' },
    //   // => @media (max-width: 1350px) { ... }

    //   'xl-lg': { 'max': '1100px' },
    //   // => @media (max-width: 1100px) { ... }

    //   'lg': { 'max': '1023px' },
    //   // => @media (max-width: 1023px) { ... }

    //   'md': { 'max': '767px' },
    //   // => @media (max-width: 767px) { ... }

    //   'sm': { 'max': '639px' },
    //   // => @media (max-width: 639px) { ... }

    //   'xs': { 'max': '500px' },
    //   // => @media (max-width: 500px) { ... }
    // }

    screens: {
      'xs': '500px',
      'sm': '639px',
      'md': '769px',
      'lg': '1025px',
      'xl-lg': '1100px',
      'xl': '1350px',
      '2xl': '1535px'
    }
  },
  plugins: [],
};