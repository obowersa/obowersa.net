/** @type {import('tailwindcss').Config} */

const dracula = require("daisyui/src/theming/themes")["dracula"];
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],

	theme: {
		extend: {
			typography: (theme) => ({
				DEFAULT: {
					css: {
						...dracula,
						"code::before": false,
						"code::after": false,
						"blockquote p:first-of-type::before": false,
						"blockquote p:last-of-type::after": false,
						"blockquote": {
							"border-left": "0.25rem solid #9f7aea",
						},

						// ...
					},
				},
			}),
		},
	},
	plugins: [require("@tailwindcss/typography"), require("daisyui")],
	daisyui: {
		themes: true, // true: all themes | false: only light + dark | array: specific themes like this ["light", "dark", "cupcake"]
		darkTheme: "dracula", // name of one of the included themes for dark mode
		logs: false, // Shows info about daisyUI version and used config in the console when building your CSS
	},

}