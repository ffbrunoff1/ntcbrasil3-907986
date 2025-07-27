/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand-primary': '#5BAFE1', // Blue from logo
        'brand-secondary': '#FFFFFF', // White from logo
        'brand-accent': '#1E3A8A', // Darker blue for contrast
        'text-primary': '#111827', // Almost black for main text
        'text-secondary': '#4B5563', // Gray for secondary text
        'bg-light': '#F9FAFB', // A very light gray for backgrounds
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        subtle: '0 4px 12px rgba(0, 0, 0, 0.05)',
        medium: '0 8px 24px rgba(0, 0, 0, 0.1)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
