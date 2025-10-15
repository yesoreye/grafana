/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/**/*.{js,ts,jsx,tsx,html}',
    './packages/grafana-ui/src/**/*.{js,ts,jsx,tsx}',
    './packages/*/src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      // Extend Tailwind's default theme to match Grafana's design system
      colors: {
        // These will be replaced with actual Grafana theme colors
        primary: {
          DEFAULT: 'var(--primary-color)',
          main: 'var(--primary-main)',
          shade: 'var(--primary-shade)',
          text: 'var(--primary-text)',
        },
        secondary: {
          DEFAULT: 'var(--secondary-color)',
          main: 'var(--secondary-main)',
          shade: 'var(--secondary-shade)',
          text: 'var(--secondary-text)',
        },
      },
      spacing: {
        // Grafana spacing scale
        0.5: '4px',
        1: '8px',
        1.5: '12px',
        2: '16px',
        3: '24px',
        4: '32px',
        5: '40px',
        6: '48px',
      },
    },
  },
  plugins: [],
  // Prevent conflicts with existing styles during migration
  corePlugins: {
    preflight: false,
  },
};
