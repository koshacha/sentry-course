import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import viteSentry from "vite-plugin-sentry";

const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, ".env.local") });

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  plugins: [
    vue(),
    viteSentry({
      authToken: process.env.SENTRY_AUTH_TOKEN,
      org: "ilya-m",
      project: "javascript-vue",
      release: `${process.env.npm_package_name}@${process.env.npm_package_version}`,
      setCommits: {},
      sourceMaps: {
        include: ["./dist/assets"],
        ignore: ["node_modules"],
        urlPrefix: "~/assets",
      },
    }),
  ],
  build: {
    sourcemap: "hidden",
  },
  define: {
    __SENTRY_RELEASE__: `"${process.env.npm_package_name}@${process.env.npm_package_version}"`,
  },
});
