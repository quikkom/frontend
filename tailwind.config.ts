import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        oswald: "var(--font-oswald)",
        raleway: "var(--font-raleway)",
      },
      colors: {
        primary: {
          "50": "#eff9ff",
          "100": "#dff2ff",
          "200": "#b8e8ff",
          "300": "#78d6ff",
          "400": "#1cbbff",
          "500": "#06aaf1",
          "600": "#0088ce",
          "700": "#006ca7",
          "800": "#025b8a",
          "900": "#084c72",
          "950": "#06304b",
        },
      },
    },
  },
  plugins: [],
};
export default config;
