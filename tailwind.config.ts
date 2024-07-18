import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        "md": "8px",
      },
      borderColor: {
        DEFAULT: '#ededed',
      },
      colors: {
        gray: {
          "20": "#f9f9f9",
          "30": "#f6f6f6",
          "50": "#ededed",
          "100": "#c9c9c9",
          "200": "#B0B3B9",
          "300": "#667085",
          "400": "#51525F",
          "500": "#292A33",
          "600": "#14173C",
          "700": "#212230",
          "800": "#090A1A",
        },
        accent: {
          "blue": "#535AFF",
          "green": "#49DD9F",
          "red": "#EF655F",
          "yellow": "#F9BC15",
          "dark-blue": "#462CC6",
          "light-blue": "#E7E8FF",
        }
      }
    }
  },
  plugins: [],
};
export default config;
