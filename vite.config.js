import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  link: [
    { rel: "icon", type: "image/png", href: "/favicon.png" }, // これを追記する
  ],
});
