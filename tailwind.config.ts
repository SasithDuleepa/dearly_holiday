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
        'white': '#FFFFFF',
        'beige': '#F5F5DC',
        'green': '#556B2F',
        'brown': '#8B4513',
        'forest-green': '#4E7C4F',
        'warm-sand-beige': '#E5D3B3',
        'terracotta-accent': '#C2704E',
        'ivory-background': '#FAF8F3',
        'custom-beige': '#F8F6F2',
        'custom-olive': '#7A8450',
        'custom-brown': '#4A3F35',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
