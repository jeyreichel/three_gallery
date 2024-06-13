import { defineConfig } from "vite";
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

export default defineConfig({
  build: {
    rollupOptions: {
      input: "/main.js",
    },
  },
});

