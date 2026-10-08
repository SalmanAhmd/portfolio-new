/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#111110',
          soft: '#1A1A18',
          muted: '#55554F',
          faint: '#6F6F67',
        },
        paper: {
          DEFAULT: '#F7F7F4',
          raised: '#FFFFFF',
          sunk: '#EFEFEA',
        },
        line: {
          DEFAULT: '#E3E3DC',
          strong: '#CFCFC6',
          dark: '#26262A',
        },
        panel: {
          DEFAULT: '#0B0B0D',
          raised: '#131316',
        },
        accent: {
          DEFAULT: '#D4541E',
          soft: '#E8703C',
          deep: '#A63C12',
          tint: '#FBEDE6',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
        serif: ['"Instrument Serif"', 'ui-serif', 'Georgia', 'serif'],
      },
      letterSpacing: {
        tightest: '-0.045em',
        label: '0.14em',
      },
      screens: {
        xs: '460px',
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(14px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'line-flow': {
          '0%': { 'stroke-dashoffset': '0' },
          '100%': { 'stroke-dashoffset': '-64' },
        },
        'pulse-dot': {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.45', transform: 'scale(0.82)' },
        },
        'menu-in': {
          '0%': { opacity: '0', transform: 'translateY(-8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'scan': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(400%)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.16,1,0.3,1) both',
        'fade-in': 'fade-in 0.8s ease both',
        'line-flow': 'line-flow 2.4s linear infinite',
        'pulse-dot': 'pulse-dot 2.6s ease-in-out infinite',
        'menu-in': 'menu-in 0.35s cubic-bezier(0.16,1,0.3,1) both',
        'scan': 'scan 5s linear infinite',
      },
    },
  },
  plugins: [],
}
