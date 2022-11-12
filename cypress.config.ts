import { defineConfig } from 'cypress'

export default defineConfig({
  component: {
		devServer: {
			framework: 'react',
			bundler: 'vite',
		},
	},
  e2e: {
		baseUrl: 'http://localhost:5173',
		viewportHeight: 1920,
		viewportWidth: 1080,
		setupNodeEvents(on, config) {
			// implement node event listeners here
		},
		excludeSpecPattern: [
			'**/1-getting-started/*.js',
			'**/2-advanced-examples/*.js',
		],
	},
})