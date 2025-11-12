import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import richSvg from "vite-plugin-react-rich-svg";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), richSvg()],
  resolve: {
    alias: [
      {
        find: /^~(.+)/,
        replacement: path.join(process.cwd(), "node_modules/$1"),
      },
      {
        find: "@",
        replacement: path.resolve(process.cwd(), "src"),
      },
      {
        find: /^src\/(.*)$/,
        replacement: path.join(process.cwd(), "src/$1"),
      },
    ],
  },

  server: { port: 8081, host: true },
  preview: { port: 8081, host: true },
});
