/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Poppins', 'system-ui', 'sans-serif'],
      },
      colors: {
        night: '#050816',
        ink: '#0b1026',
        cyanGlow: '#38bdf8',
        violetGlow: '#8b5cf6',
      },
      boxShadow: {
        neon: '0 0 35px rgba(56, 189, 248, 0.22), 0 0 65px rgba(139, 92, 246, 0.18)',
        card: '0 24px 80px rgba(2, 6, 23, 0.48)',
      },
      backgroundImage: {
        aurora:
          'radial-gradient(circle at 18% 12%, rgba(56,189,248,.2), transparent 26%), radial-gradient(circle at 84% 20%, rgba(139,92,246,.24), transparent 28%), radial-gradient(circle at 48% 88%, rgba(79,70,229,.18), transparent 34%)',
      },
    },
  },
  plugins: [],
};
