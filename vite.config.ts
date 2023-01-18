import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@src": path.resolve(__dirname, "./src"),
      "@app": path.resolve(__dirname, "./src/app"),
      "@pages": path.resolve(__dirname, "./src/app/pages"),
      "@components": path.resolve(__dirname, "./src/app/components"),
      "@assets": path.resolve(__dirname, "./src/assets"),
    },
  },
});
