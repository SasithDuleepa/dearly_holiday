import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'cs-blue-dark': '#1b3c53',
        'cs-blue-medium': '#234c6a',
        'cs-blue-light': '#456882',
        'cs-powder': '#d2c1b6',
        'cs-bg-light': '#f5f6f7',
        'cs-text-light': '#ffffff',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config