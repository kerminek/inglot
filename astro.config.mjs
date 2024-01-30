import { defineConfig } from "astro/config";
//
import tailwind from "@astrojs/tailwind";
import solidJs from "@astrojs/solid-js";
//
import vercel from "@astrojs/vercel/serverless";
//

// https://astro.build/config
export default defineConfig({
  output: "server",
  integrations: [tailwind(), solidJs()],
  adapter: vercel(),
  image: {
    domains: ["inglot.pl"],
  },
});
