import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Merriweather", "serif"],
        mono: ["Fira Code", "monospace"],
      },
      animation: {
        glow: "glow 2s ease-in-out infinite alternate",
        fadeIn: "fadeIn 1s ease-in forwards",
      },
      keyframes: {
        glow: {
          "0%, 100%": {
            textShadow:
              "0 0 5px #1D4ED8, 0 0 10px #1D4ED8, 0 0 15px #1D4ED8, 0 0 20px #1D4ED8",
          },
          "50%": {
            textShadow:
              "0 0 10px #1D4ED8, 0 0 20px #1D4ED8, 0 0 30px #1D4ED8, 0 0 40px #1D4ED8",
          },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "blue-800": "#1D4ED8",
        "dark-bg": "#0A0A0A",
        "accent-1": "#64ffda",
        "accent-2": "#ffb86c",
      },
      fontSize: {
        xxs: "0.65rem",
        mega: "4rem",
      },
      lineHeight: {
        "extra-loose": "2.5",
        "12": "3rem",
      },
      spacing: {
        "72": "18rem",
        "84": "21rem",
        "96": "24rem",
      },
      screens: {
        xs: "475px",
        "3xl": "1600px",
      },
      zIndex: {
        "-10": "-10",
        "60": "60",
        "70": "70",
      },
    },
  },
  plugins: [],
};

export default config;
