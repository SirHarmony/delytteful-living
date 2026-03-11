import { cloudflare } from "@cloudflare/vite-plugin";
import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    cloudflare({ viteEnvironment: { name: "ssr" } }),
    tailwindcss(),
    reactRouter(),
    tsconfigPaths(),
  ],
  resolve: {
    mainFields: ["module", "main"],
  },
  ssr: {
    resolve: {
      conditions: ["workerd", "worker", "browser", "module", "import"],
      externalConditions: ["workerd", "worker"],
    },
    noExternal: ["react", "react-dom", "react-router"],
  },
});
