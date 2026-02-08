import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";
import path from "path";

const manifest = {
  theme_color: "#0a0e10",
  background_color: "#0a0e10",
  icons: [
    {
      purpose: "maskable",
      sizes: "512x512",
      src: "icons/icon512_maskable.png",
      type: "image/png",
    },
    {
      purpose: "any",
      sizes: "512x512",
      src: "icons/icon512_rounded.png",
      type: "image/png",
    },
  ],
  orientation: "portrait",
  display: "standalone",
  dir: "auto",
  lang: "en-US",
  name: "Pocket Mind",
  short_name: "Mind",
  start_url: "/Pocket-Mind/",
};

// https://vite.dev/config/
export default defineConfig({
  base: "/Pocket-Mind/",
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      workbox: {
        globPatterns: ["**/*{html,css,js,ico,png,svg}"],
      },
      manifest: manifest,
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/styles/_mixins.scss" as *; \n@use "@/styles/_variables.scss" as *; \n`,
      },
    },
  },
});
