import adapter from '@sveltejs/adapter-auto';
import { preprocess } from "./mcss.config.js";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter()
	},
	preprocess,
};

export default config;
