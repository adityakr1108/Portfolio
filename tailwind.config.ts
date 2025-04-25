import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: '#4CAF50',
          foreground: '#FFFFFF'
        },
        secondary: {
          DEFAULT: '#2E7D32',
          foreground: '#FFFFFF'
        },
        destructive: {
          DEFAULT: '#B71C1C',
          foreground: '#FFFFFF'
        },
        muted: {
          DEFAULT: '#F5F5F5',
          foreground: '#424242'
        },
        accent: {
          DEFAULT: '#81C784',
          foreground: '#000000'
        },
        popover: {
          DEFAULT: '#FFFFFF',
          foreground: '#000000'
        },
        card: {
          DEFAULT: '#FFFFFF',
          foreground: '#000000'
        },
        dark: {
          100: '#121212',
          200: '#1E1E1E',
        },
        green: {
          100: '#81C784',
          200: '#4CAF50',
          300: '#2E7D32',
        },
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(0.98)' },
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'code-flow': {
          '0%': { transform: 'translateY(-66.67%)' },
          '100%': { transform: 'translateY(0)' },
        },
        glow: {
          '0%, 100%': { opacity: '0.8', filter: 'brightness(1)' },
          '50%': { opacity: '1', filter: 'brightness(1.2)' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 8s ease infinite',
        'code-flow': 'code-flow 20s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-soft': 'pulse-soft 3s ease-in-out infinite',
        'slide-up': 'slide-up 0.5s ease-out forwards',
        'code-flow': 'code-flow 20s linear infinite',
        glow: 'glow 2s ease-in-out infinite',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
