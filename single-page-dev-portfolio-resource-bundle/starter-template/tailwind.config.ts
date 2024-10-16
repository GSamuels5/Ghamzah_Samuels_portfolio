import { transform } from "next/dist/build/swc";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1200px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        md: "2rem",
      },
    },
    extend: {
      fontFamily:{
        sans: 'var(--font-sans)',
        serif: 'var(--font-serif)'
      },
      animation: {
        'ping-large': "ping-large 1s ease-in-out infinite",
        "move-left": "move-left 1s linear infinite ",
         "move-right": "move-right 1s linear infinite ",
         "zoom-in":"zoom-in 3s ease-in ",
         "zoomInRight": "zoom-in-right 3s ease-out",
         "zoomInLeft": "zoom-in-left 3s ease-out"
      },
      keyframes:{
        'ping-large':{
          '75%, 100%':{
            transform: 'scale(3)',
            opacity: '0',
          }
        },
        'move-left':{
          '0%':{
            transform: 'translateX(0%)'
          },
          '100%':{
            transform: 'translateX(-50%)'
          }
        },
        "zoom-in-right": {
          "0%": {
            transform: "scale3d(0.3, 0.3, 0.3) translate3d(-100%, 0, 0)",
            opacity: '0',
          },
          "80%": {
            opacity: '0.8',
            transform: "scale3d(1.1, 1.1, 1.1)",
          },
          "100%": {
            opacity: '1',
            transform: "translate3d(0, 0%, 0)"
          },
        },
        "zoom-in-left": {
          "0%": {
            opacity: '0',
            transform: "scale3d(0.3, 0.3, 0.3) translate3d(100%, 0, 0)",
          },
          "80%": {
            opacity: '0.8',
            transform: "scale3d(1.1, 1.1, 1.1)",
          },
          "100%": {
            opacity: '1',
            transform: "translate3d(0, 0%, 0)"
          },  },
        'move-right':{
          '0%':{
            transform: 'translateX(0%)'
          },
          '100%':{
            transform: 'translateX(-50%)'
          }
        }

      }
    },
  },
  plugins: [],
};
export default config;
