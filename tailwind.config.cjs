/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
        colors: {
          'red': {
            700: '#BE3455',
            // 700: '#bc2649',
          },
      },
    },
  },
	plugins: [],
}
