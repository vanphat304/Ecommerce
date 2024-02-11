/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      white: 'var(--white)',
      black: 'var(--black)',
      blackSecond: 'var(--black-second)',
      textPrimary: 'var(--text-primary)',
      textSecondary: 'var(--text-secondary)',
      menuShadow: 'var(--box-shadow)',
      buttonShadow: 'var(--shadow-button)',
      primary: {
        100: 'var(--primary-100)',
        200: 'var(--primary-200)',
        300: 'var(--primary-300)',
        400: 'var(--primary-400)',
        500: 'var(--primary-500)',
        600: 'var(--primary-600)',
        700: 'var(--primary-700)'
      },
      yellow: {
        100: 'var(--yellow-100)',
        200: 'var(--yellow-200)',
        300: 'var(--yellow-300)',
        400: 'var(--yellow-400)'
      },
      blue: {
        50: 'var(--blue-50)',
        100: 'var(--blue-100)',
        200: 'var(--blue-200)',
        300: 'var(--blue-300)',
        400: 'var(--blue-400)'
      },
      gray: {
        50: 'var(--gray-50)',
        100: 'var(--gray-100)',
        200: 'var(--gray-20p0)',
        300: 'var(--gray-300)',
        400: 'var(--gray-400)',
        500: 'var(--gray-500)',
        600: 'var(--gray-600)',
        700: 'var(--gray-700)',
        extra: 'var(--extra-gray)'
      },
      red: {
        50: 'var(--danger-50)',
        100: 'var(--danger-100)',
        200: 'var(--danger-200)',
        300: 'var(--danger-300)',
        400: 'var(--danger-400)',
        500: 'var(--danger-500)',
        600: 'var(--danger-600)',
        700: 'var(--danger-700)',
        800: 'var(--danger-800)',
        900: 'var(--danger-900)'
      },
      purple: {
        500: 'var(--purple-500)'
      }
    },
    fontSize: {
      'display-2xl': ['var(--fs-display-2xl)', 'var(--lh-display-2xl)'],
      'display-xl': ['var(--fs-display-xl)', 'var(--lh-display-xl)'],
      'display-lg': ['var(--fs-display-lg)', 'var(--lh-display-lg)'],
      'display-md': ['var(--fs-display-md)', 'var(--lh-display-md)'],
      'display-sm': ['var(--fs-display-sm)', 'var(--lh-display-sm)'],
      'display-xs': ['var(--fs-display-xs)', 'var(--lh-display-xs)'],
      xl: ['var(--fs-text-xl)', 'var(--lh-text-xl)'],
      lg: ['var(--fs-text-lg)', 'var(--lh-text-lg)'],
      md: ['var(--fs-text-md)', 'var(--lh-text-md)'],
      sm: ['var(--fs-text-sm)', 'var(--lh-text-sm)'],
      xs: ['var(--fs-text-xs)', 'var(--lh-text-xs)'],
      '2xs': ['var(--fs-text-2xs)', 'var(--lh-text-2xs)']
    },
    zIndex: {
      negative: 'var(--z-negative)',
      elevate: 'var(--z-elevate)',
      sticky: 'var(--z-sticky)',
      drawer: 'var(--z-drawer)',
      dropdown: 'var(--z-dropdown)',
      modal: 'var(--z-modal)',
      popover: 'var(--z-popover)',
      maximum: 'var(--z-maximum)'
    },

    extend: {
      keyframes: {
        scroll: {
          '0%': { transform: "translateY(0%)" },
          '100%': { transform: "translateY(-100%)" }
        },
        scroll1: {
          '0%': { transform: "translateY(100%)" },
          '100%': { transform: "translateY(-5%)" }
        },
        negativeScroll: {
          '0%': { transform: "translateY(-90%)" },
          '100%': { transform: "translateY(20%)" }
        },
        negativeScroll1:{
          '0%': { transform: "translateY(10%)" },
          '100%': { transform: "translateY(80%)" }
        }
      },
      animation: {
        autScroll: 'scroll 70s linear infinite',
        autScroll1: 'scroll1 70s linear infinite',
        autoScrollNegative: 'negativeScroll 70s linear infinite',
        autoScrollNegative1:'negativeScroll1 70s linear infinite'
      }
    }
  },
  corePlugins: {
    preflight: false
  },
  important: '#root',
  plugins: []
}
