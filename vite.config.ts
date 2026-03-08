import { defineConfig }   from "vite";
import { svelte }         from "@sveltejs/vite-plugin-svelte";
import tailwindcss        from "@tailwindcss/vite";
import path               from "path";

export default defineConfig(({ command, mode }) => {
    const isProduction = command === "build";

    return {
        plugins: [
            svelte(),
            tailwindcss(),
        ],

        server: {
            port:           3000,
            strictPort:     true,
            open:           true,
            cors:           { origin: "*" },
            fs:             { allow: [path.resolve(__dirname)] },
        },

        resolve: {
            alias: {
                "@":                path.resolve(__dirname, "./src"),
                "@assets":          path.resolve(__dirname, "./src/assets"),
                "@components":      path.resolve(__dirname, "./src/lib/components"),
                "@utilities":       path.resolve(__dirname, "./src/lib/utilities"),
            },
        },

        build: {
            outDir:                     "dist",
            assetsDir:                  "assets",
            target:                     "es2022",
            minify:                     "oxc",           // new and faster minifier in vite (default in 2026) :contentReference[oaicite:1]{index=1}
            cssCodeSplit:               true,
            sourcemap:                  isProduction ? false : true,
            reportCompressedSize:       true,
            chunkSizeWarningLimit:      800,
            rollupOptions:              { output: { manualChunks: { vendor: ["svelte"] } } },
        },

        optimizeDeps: {
            esbuildOptions:             { target: "es2022" } // reduce memory footprint
        },

        define: {
            __APP_ENV__:                JSON.stringify(mode) // for feature flags / logging
        },

        envPrefix: "VITE_",
    };
});