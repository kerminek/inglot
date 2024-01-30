import { defineConfig } from "astro/config";
//
import tailwind from "@astrojs/tailwind";
//
// import node from "@astrojs/node";
import vercel from "@astrojs/vercel/serverless";

import solidJs from "@astrojs/solid-js";

const IS_DEV = process.env.NODE_ENV === "development";
console.log({ IS_DEV });

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), solidJs()],
  output: "server",
  adapter: vercel(),
  image: {
    domains: ["inglot.pl"],
  },
  // site: IS_DEV ? undefined : "https://www.jakubkrwawicz.pl",
  // base: IS_DEV ? undefined : "/portfolio-apps/inglot",
  // site: "http://localhost:4321",
  base: "/portfolio-apps/inglot",
});
