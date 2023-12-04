import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: "./src/dist/main.ts",
      name: "on-js",
    },
  },
});
