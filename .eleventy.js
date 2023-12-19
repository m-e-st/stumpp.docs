const htmlMinifier = require ('html-minifier');
const lucideIcons = require("@grimlink/eleventy-plugin-lucide-icons");

module.exports = function (eleventyConfig) {

    //~ eleventyConfig.addPlugin(lucideIcons, {
        //~ "class": "custom-class",
        //~ "width": 24,
        //~ "height": 24,
        //~ "stroke": "currentColor",
        //~ "stroke-width": 2
    //~ });
    eleventyConfig.addPlugin(lucideIcons);

	eleventyConfig.addTransform ('htmlMinifier', content => {
		if (process.env.ELEVENTY_ENV === 'production') {
			return htmlMinifier.minify (content, {
				useShortDoctype: true,
				removeComments: true,
				collapseWhitespace: true,
				minifyJS: true,
				minifyCSS: true,
			});
		}
		return content;
	});
  	
	// Folders to copy to build dir (See. 1.1)
	eleventyConfig.addPassthroughCopy("src/static/**");
	eleventyConfig.addPassthroughCopy("src/favicon.ico");
	//eleventyConfig.addPassthroughCopy("src/**/*.php");
	
	// This allows Eleventy to watch for file changes during local development.
	eleventyConfig.addWatchTarget("src/**/*.php");
	eleventyConfig.setUseGitIgnore(false);

	return {
		dir: {
			input: "src/",
			output: "public",
			includes: "_includes",
			layouts: "_layouts"
		},
		templateFormats: ["html", "md", "njk"],
		markdownTemplateEngine: "njk",
		htmlTemplateEngine: "njk",
		passthroughFileCopy: true	// 1.1 Enable eleventy to pass dirs specified above
	};
};

