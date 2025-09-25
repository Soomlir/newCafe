import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from "path";

export default defineConfig({
	base: "./",
	build: {
		outDir: "dist",
		assetsDir: "assets",
	},
   plugins: [vue()],
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `@use "@/assets/sass/_variables" as *;`,
			},
		},
	},
	resolve: {
		alias: {
			"@": resolve(__dirname, "src"),
		},
	},
});