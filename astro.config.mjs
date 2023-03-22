import { defineConfig } from 'astro/config';

// https://astro.build/config
import mdx from "@astrojs/mdx";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  sitemap: true,
  site: "https://devconf.lotuz.dev",
  outDir: "build",
  output: "static",
  integrations: [mdx(), tailwind(), image()]
});
