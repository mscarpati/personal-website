import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'main' : '#2E2A47',
        'light-grey' : '#D9D9D9',
        'beige' : '#C8BBB0',
        'white' : '#FFFFFF',
        'dark' : '#25212F',
        'dark-grey' : '#9e9e9e',
        'main-light' : '#2e2a4775',
      },
      fontFamily: {
        'khula' : ['Khula', 'sans-serif'],
        'libre' : ['Libre_Caslon_Text', 'serif'],
      },
    },
  },
  plugins: [],
}
export default config
