import path from "path";
import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";

const resolvedPath = path.resolve(__dirname, "src");

export default defineConfig({
  plugins: [sveltekit()],
  resolve: {
    alias: {
      "@/": `${resolvedPath}/`
    }
  }
});
