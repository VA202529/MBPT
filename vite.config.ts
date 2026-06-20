import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

import { cloudflare } from "@cloudflare/vite-plugin";

export default defineConfig({
  plugins: [tsconfigPaths(), tanstackStart({
    server: { entry: "server" },
  }), react(), tailwindcss(), cloudflare({
    viteEnvironment: {
      name: "ssr"
    }
  })],
});