import { cloudflare } from "@cloudflare/vite-plugin";
import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

const devPollWatch =
  process.env.VITE_DEV_POLL_WATCH === "1" ||
  process.env.VITE_DEV_POLL_WATCH === "true";

export default defineConfig({
  plugins: [
    cloudflare({ viteEnvironment: { name: "ssr" } }),
    tailwindcss(),
    reactRouter(),
    tsconfigPaths(),
  ],
  server: {
    // When file events are unreliable (some Docker/WSL/VM setups), set VITE_DEV_POLL_WATCH=1 so saves are picked up without focusing the browser to “wake” the watcher.
    ...(devPollWatch && {
      watch: { usePolling: true, interval: 300 },
    }),
    hmr: {
      protocol: "ws",
      host: "localhost",
      clientPort: 5173,
    },
  },
});
