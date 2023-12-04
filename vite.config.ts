import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: "./src/lib/main.ts",
      name: "on-js",
    },
  },
});
