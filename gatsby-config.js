module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "5day-market",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-mdx",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    }, 
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "image",
        path: "./src/static/image",
      },
      __key: "image",
    }, 
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "svg",
        path: "./src/static/svg",
      },
      __key: "svg",
    }, 
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true,
        jsxPragma: `jsx`,
        allExtensions: true,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
  ],
};
