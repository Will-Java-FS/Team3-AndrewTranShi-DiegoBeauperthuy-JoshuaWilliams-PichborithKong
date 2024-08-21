import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
	theme: {
		extend: {
			colors: {
				brightColor: "#F4511F",
				backgroundColor: "#b7bca9",
				lightText: "#959595"
			},
			content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"]
		}
	},
	plugins: [daisyui]
};
