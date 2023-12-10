import type { Config } from 'tailwindcss'

const {nextui} = require("@nextui-org/react");

const config: Config = {
  content: [
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      black: "#000000",
      gray: "#808080",
      darkgray: "#0A0D11",
      blakishgray: "#1E2027",
      blackgray: "#181F29",
      bluishblack: "#17181C",
      mattewhite: "#F2F3F4",
      red: "#C42330",
      dangerred: "#FF0E0E",
    },
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui()],  
}
export default config
