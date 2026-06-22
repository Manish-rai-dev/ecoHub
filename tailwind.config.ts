import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#1a4a1f',
          secondary: '#2d6e34',
          accent: '#e8b84b',
          light: '#f0f7f0',
          dark: '#0f2e12',
          orange: '#e8661a',
          cream: '#f5eed8',
          tan: '#c4a96b',
        },
        wa: '#25d366',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
