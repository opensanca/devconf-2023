/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  safelist: [
    'h-10',
  ],
  theme: {
    extend: {
      colors: {
        'slate': {
          900: '#1D2939',
        },
        'red': {
          700: '#BE3455',
          // 700: '#bc2649',
        },
      },
    },
  },
  plugins: [],
}
