import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#0E893D',
        'secondary': '#4C9168',
        'accent-1': '#3F993D',
        'accent-2': '#256135',
        'dark': '#0E100A',
        'dark2': '#262622',
        'light-1': '#8E9475',
        'light-2': '#8A8B76',
        'highlight-1': '#B32F25',
        'highlight-2': '#8D281F',
      },
      fontFamily: {
        'medieval': ['YourMedievalFont', 'serif'],
      },
    },
  },
  plugins: [],
};

export default config;