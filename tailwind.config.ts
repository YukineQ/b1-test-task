import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/features/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': 'hsl(var(--primary), <alpha-value>)',
        'secondary': 'hsl(var(--secondary), <alpha-value>)',
        'muted-secondary': 'hsl(var(--muted-secondary), <alpha-value>)',
        'danger': 'hsl(var(--danger), <alpha-value>)',
        'bright': 'hsl(var(--bright), <alpha-value>)',
      },
      boxShadow: {
        'bottom': '0 2px 0 rgba(255, 255, 255, 0.7), 0 4px 0 rgba(225, 225, 225, 0.5)'
      }
    },
  },
  plugins: [],
}
export default config
