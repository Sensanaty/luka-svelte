import preprocess from "svelte-preprocess";
import adapter from "@sveltejs/adapter-static";
import path from "path";

const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: preprocess(),

  kit: {
    target: "#svelte",
    adapter: adapter(),
    files: {
      assets: "public",
      routes: "src/pages"
    },
    prerender: {
      enabled: true
    },
    trailingSlash: "never",
    host: "0.0.0.0",
    vite: {
      resolve: {
        alias: {
          "@": path.resolve("./src")
        }
      }
    }
  },
};

export default config;
