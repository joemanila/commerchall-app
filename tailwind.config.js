/** @type {import('tailwindcss').Config} */

import { nextui } from "@nextui-org/react";

module.exports = {
  darkMode: false,
  important: true,
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '480px',    // Breakpoint adicional para pantallas muy pequeñas
        'sm': '640px',    // Breakpoint predeterminado en Tailwind
        'md': '768px',    // Breakpoint predeterminado en Tailwind
        'lg': '1024px',   // Breakpoint predeterminado en Tailwind
        'xl': '1280px',   // Breakpoint predeterminado en Tailwind
        '2xl': '1536px',  // Breakpoint predeterminado en Tailwind
        '3xl': '1600px',  // Breakpoint adicional para pantallas muy grandes
      },
      // Extender el tema con la clase `no-scroll`
      overflow: {
        'no-scroll': 'hidden',
      },
    },
  },
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            primary: {
              DEFAULT: "#ff4b35",
              foreground: "#fff",
            },
            focus: "#f07b54",
          },
        },
      },
    }),
  ],
};