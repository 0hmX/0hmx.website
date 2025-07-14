/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: ['class'],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
      },
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
                color: theme('colors.foreground'),
                a: {
                  color: theme('colors.primary.DEFAULT'),
                  '&:hover': {
                    color: theme('colors.primary.foreground'),
                  },
                },
                strong: {
                  color: theme('colors.foreground'),
                },
                code: {
                  fontFamily: theme('fontFamily.mono'),
                  color: theme('colors.foreground'),
                },
                'code::before': {
                  content: '',
                },
                'code::after': {
                  content: '',
                },
                h1: {
                  color: theme('colors.foreground'),
                },
                h2: {
                  color: theme('colors.foreground'),
                },
                h3: {
                  color: theme('colors.foreground'),
                },
                h4: {
                  color: theme('colors.foreground'),
                },
                blockquote: {
                  color: theme('colors.muted-foreground'),
                  borderLeftColor: theme('colors.border'),
                },
                li: {
                  color: theme('colors.foreground'),
                },
              },
            },
            dark: {
              css: {
                color: theme('colors.foreground'),
                h1: {
                  color: theme('colors.foreground'),
                },
                h2: {
                  color: theme('colors.foreground'),
                },
                h3: {
                  color: theme('colors.foreground'),
                },
                h4: {
                  color: theme('colors.foreground'),
                },
                p: {
                  color: theme('colors.foreground'),
                },
                strong: {
                  color: theme('colors.foreground'),
                },
                a: {
                  color: theme('colors.primary.DEFAULT'),
                  '&:hover': {
                    color: theme('colors.primary.foreground'),
                  },
                },
                li: {
                  color: theme('colors.foreground'),
                },
                code: {
                  color: theme('colors.foreground'),
                },
              },
            },
          }),
        },
      },
    }),
  ],
};
