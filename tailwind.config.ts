import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      fontFamily: {
        cinzel: ['Cinzel'], 

      },
      lineHeight: {
        custom: '21.57px', // Add custom line height
      },
      backgroundImage: {
        'text-gradient': 'linear-gradient(180deg, #FFF1DE 0%, #8C6742 100%)',
      },
    },
  },
  plugins: [],
};
export default config;
