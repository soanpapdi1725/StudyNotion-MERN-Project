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
        screenshots: [
          {
            src: "/Screenshot-Desktop.png",
            sizes: "1898x864",
            type:"image/png",
            form_factor: "wide"
          },
          {
            src: "/Screenshot-Mobile.png",
            sizes: "413x749",
            type:"image/png",
            form_factor: "narrow"
          }
        ],
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
  preview:{
    port: 3000,
  },
  server: {
    port: 3000,
  },
});
