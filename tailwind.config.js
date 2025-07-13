/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
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
          typography: ({
            theme
          }) => ({
            DEFAULT: {
              css: {
                code: {
                  fontFamily: theme('fontFamily.mono'),
                },
                'code::before': {
                  content: ''
                },
                'code::after': {
                  content: ''
                },
              },
            },
          }),
        },
      },
    }),
  ],
};
