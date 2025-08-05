/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue"
  ],
  theme: {
    extend: {
      colors: {
        'teal': {
          950: '#042f2e',
          900: '#134e4a',
          800: '#115e59',
          700: '#0f766e',
          600: '#0d9488',
          500: '#14b8a6',
          400: '#2dd4bf',
          300: '#5eead4',
          200: '#99f6e4',
          100: '#ccfbf1',
          50: '#f0fdfa'
        },
        'gray': {
          900: '#111827',
          800: '#1f2937',
          700: '#374151',
          600: '#4b5563',
          500: '#6b7280',
          400: '#9ca3af',
          300: '#d1d5db',
          200: '#e5e7eb',
          100: '#f3f4f6',
          50: '#f9fafb'
        },
        'warm': {
          900: '#2d3748',
          800: '#4a5568',
          700: '#718096',
          600: '#a0aec0',
          500: '#cbd5e0',
          400: '#e2e8f0',
          300: '#edf2f7',
          200: '#f7fafc'
        }
      },
      fontFamily: {
        'sans': ['Montserrat', 'system-ui', 'sans-serif'],
        'display': ['Playfair Display', 'Georgia', 'serif'],
        'body': ['Montserrat', 'system-ui', 'sans-serif']
      }
    },
  },
  plugins: [],
} 