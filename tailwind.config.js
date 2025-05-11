/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,

  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontSize: {
        tiny: 'var(--font-size-tiny)',
        xxs: 'var(--font-size-xxs)',
      },
    },
  },
  plugins: [],
};
