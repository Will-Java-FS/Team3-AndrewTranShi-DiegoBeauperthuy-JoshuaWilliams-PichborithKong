import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
	plugins: [react()],
	server: {
		port: 3001, // Set your desired port here
		proxy: {
			"/api": "http://localhost:8080" // Example proxy configuration
		}
	}
});
