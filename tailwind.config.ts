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
      },
      animation: {
        glow: "glow 1s ease-in-out infinite alternate",
      },
      keyframes: {
        glow: {
          from: {
            textShadow:
              "0 0 5px #fff, 0 0 10px #fff, 0 0 15px #39FF14, 0 0 20px #39FF14",
          },
          to: {
            textShadow:
              "0 0 10px #fff, 0 0 20px #fff, 0 0 30px #39FF14, 0 0 40px #39FF14",
          },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "neon-green": "#39FF14",
        "dark-bg": "#0A0A0A",
      },
    },
  },
  plugins: [],
};
export default config;
