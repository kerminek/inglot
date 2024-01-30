import { defineConfig } from "astro/config";
//
import tailwind from "@astrojs/tailwind";
//
import node from "@astrojs/node";

import solidJs from "@astrojs/solid-js";

const IS_DEV = process.env.NODE_ENV === "development";
console.log({ IS_DEV });

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), solidJs()],
  output: "hybrid",
  adapter: node({
    mode: "standalone",
  }),
  image: {
    domains: ["inglot.pl"],
  },
  site: IS_DEV ? undefined : "https://www.jakubkrwawicz.pl",
  base: IS_DEV ? undefined : "/portfolio-apps/inglot",
});
