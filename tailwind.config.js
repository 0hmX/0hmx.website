/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontSize: {
        'display-lg': ['3.75rem', { lineHeight: '1', md: '6rem' }], // text-6xl (mobile) -> md:text-8xl
        'display-md': ['3rem', { lineHeight: '1.2' }], // text-5xl
        'heading-1': ['2.25rem', { lineHeight: '1.25' }], // text-4xl
        'heading-2': ['1.5rem', { lineHeight: '1.3' }], // text-2xl
        'body-lg': ['1.25rem', { lineHeight: '1.5' }], // text-xl
        'body-base': ['1rem', { lineHeight: '1.6' }], // text-base
        'body-sm': ['0.875rem', { lineHeight: '1.7' }], // text-sm
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
        handwritten: ['Pacifico', 'cursive'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography')({
      // Customizing typography to apply Fira Code to code blocks
      // This will apply to elements rendered within the 'prose' class
      theme: {
        extend: {
          typography: ({ theme }) => ({
            DEFAULT: {
              css: {
                code: {
                  fontFamily: theme('fontFamily.mono'),
                },
                'code::before': {
                  content: '',
                },
                'code::after': {
                  content: '',
                },
              },
            },
          }),
        },
      },
    }),
  ],
};
