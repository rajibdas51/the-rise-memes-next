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

    screens: {
      'xs': '475px',  // Custom screen size for extra small devices
      'sm': '640px',  // Small devices (default Tailwind)
      'md': '768px',  // Medium devices (default Tailwind)
      'lg': '1024px', // Large devices (default Tailwind)
      'xl': '1280px', // Extra large devices (default Tailwind)
      '2xl': '1536px',// 2x large devices (default Tailwind)
      '3xl': '1820px',// Example for ultra-wide screens
    },



  },
  plugins: [],
};
export default config;
