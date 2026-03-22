import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: "autoUpdate",

      manifest: {
        name: "StudyNotion: An Edtech Platform",
        short_name: "StudyNotion",
        start_url: "/",
        display: "standalone",
        background_color: "#000814",
        theme_color: "#161d29",
        orientation: "portrait",
        icons: [
          {
            src: "/StudyNotion192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/StudyNotion512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
  server: {
    port: 3000,
  },
});
