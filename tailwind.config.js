/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        neutral: colors.slate,
        primary: colors.blue,
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': theme('colors.neutral.600'),
            '--tw-prose-headings': theme('colors.neutral.800'),
            '--tw-prose-links': theme('colors.primary.600'),
            // Dark mode overrides for typography
            '--tw-prose-invert-body': theme('colors.neutral.400'),
            '--tw-prose-invert-headings': theme('colors.neutral.100'),
            '--tw-prose-invert-links': theme('colors.primary.400'),
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}