import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { tanstackRouter } from "@tanstack/router-plugin/vite";

// GitHub Pages base path. Project lives at:
//   https://mwingrov.github.io/theSweetSpot/
// Override with VITE_BASE when running locally or on another host.
const base = process.env.VITE_BASE ?? "/theSweetSpot/";

export default defineConfig({
  base,
  plugins: [
    tanstackRouter({
      target: "react",
      autoCodeSplitting: true,
      routesDirectory: "./src/routes",
      generatedRouteTree: "./src/routeTree.gen.ts",
    }),
    react(),
    tailwindcss(),
    tsconfigPaths(),
  ],
  server: {
    host: "::",
    port: 8080,
    strictPort: false,
  },
});
