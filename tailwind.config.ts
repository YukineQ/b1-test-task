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
        'muted-secondary': 'hsl(var(--muted-secondary), <alpha-value>)'
      },
    },
  },
  plugins: [],
}
export default config
