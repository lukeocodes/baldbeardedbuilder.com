// @type-check enabled!
// VSCode and other TypeScript-enabled text editors will provide auto-completion,
// helpful tooltips, and warnings if your exported object is invalid.
// You can disable this by removing "@ts-check" and `@type` comments below.

// @ts-check
export default ({
	buildOptions: {
		sitemap: true,
	},
	renderers: [
		'@astrojs/renderer-preact',
		'@astrojs/renderer-vue'
	],
	markdownOptions: {
		render: [
			'@astrojs/markdown-remark',
			{
				remarkPlugins: [
					[
						[import('remark-autolink-headings'), { behavior: 'prepend' }],
						import('remark-prism'),
						import('remark-rehype')
					],
				],
			},
		]
	},
	tailwindConfig: './tailwind.config.cjs'
});
