import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: `/dist/`,
  plugins: [react()],
  build: {
    outDir: `./dist/`,
    manifest: true,
    cssCodeSplit: false,
    rollupOptions: {
      input: "./src/main.tsx",
      output: {
        // Ensure all JavaScript goes into main.js
        chunkFileNames: `assets/[name]-[hash].js`,
        entryFileNames: `assets/main.js`,
        assetFileNames: (assetInfo) => {
          if (assetInfo.name && assetInfo.name.endsWith(".css")) {
            return "assets/main.css";
          }
          return "assets/[name]-[hash][extname]";
        },
        // Ensure no code splitting for JavaScript
        manualChunks: () => "everything.js",
      },
      external: (id) => id.endsWith(".stories.tsx"),
    },
  },
});
