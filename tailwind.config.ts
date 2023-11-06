import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      gray: "#808080",
      darkgray: "#1d1e24",
      blakishgray: "#1e2027",
      blackgray: "#242730",
      bluishblack: "#17181c",
      mattewhite: "#F2F3F4",
    },
    extend: {},
  },
  plugins: [],
}
export default config
