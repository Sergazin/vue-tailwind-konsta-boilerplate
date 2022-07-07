import fs from "fs";
import { fileURLToPath, URL } from "url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server: {
    https: {
      key: fs.readFileSync("/Users/a1/.ssls/sergazin-soft.key"),
      cert: fs.readFileSync("/Users/a1/.ssls/sergazin-soft.crt"),
    },
    fs: {
      allow: ["/Users/a1/projects"],
    },
    port: 443,
    host: "0.0.0.0",
    proxy: {
      //     "/api": { target: "https://app.grap.me", changeOrigin: true },
      "/api": { target: "http://localhost:8083", changeOrigin: true },
    },
  },
});
