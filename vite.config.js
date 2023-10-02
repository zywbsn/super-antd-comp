import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { name, peerDependencies } from "./package.json";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "lib",
    lib: {
      name,
      fileName: name,
      entry: path.resolve(__dirname, "packages/index.js")
    },
    rollupOptions: {
      external: [...Object.keys(peerDependencies)],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM"
        }
      }
    }
  }
});
