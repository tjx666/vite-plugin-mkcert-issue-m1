import { defineConfig } from "vite";
import mkcert from "vite-plugin-mkcert";
import path from "node:path";

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        https: true,
    },
    plugins: [
        mkcert({
            source: "coding",
            savePath: path.resolve(process.cwd(), "node_modules/.cert"),
        }),
    ],
});
