require(`dotenv`).config()

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE

module.exports = {
  siteMetadata: {
    // You can overwrite values here that are used for the SEO component
    // You can also add new values here to query them like usual
    // See all options: https://github.com/LekoArts/gatsby-themes/blob/main/themes/gatsby-theme-cara/gatsby-config.js
    siteTitle: `MRBL`,
    siteTitleAlt: `MRBL - New World`,
    siteHeadline: `Cara - Gatsby Theme from @lekoarts`,
    siteUrl: `https://cara.lekoarts.de`,
    siteDescription: `Playful and Colorful One-Page portfolio featuring Parallax effects and animations`,
    siteLanguage: `en`,
    siteImage: `/banner.jpg`,
    author: `@lekoarts_de`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-cara`,
      // See the theme's README for all available options
      options: {
        // mdx: 'false'
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Cara - @lekoarts/gatsby-theme-cara`,
        short_name: `Cara`,
        description: `Playful and Colorful One-Page portfolio featuring Parallax effects and animations`,
        start_url: `/`,
        background_color: `#141821`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#f6ad55`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    {
      resolve: '@stackbit/gatsby-plugin-menus',
      options: {
        // static definition of menu items (optional)
        menus: {
          main: // identifier of menu container
            [ // array of contained children menu items
              {
                identifier: 'myId', // identifier for this item (optional)
                title: 'Title for page',
                url: '/page-1/',
                weight: 1
              }
            ]
        },
        // Gatsby node types from which we extract menus (optional, see "Advanced usage")
        sourceNodeType: 'MarkdownRemark', 
        // the relative node path where we can find the 'menus' container (optional)
        sourceDataPath: 'frontmatter',
        // the relative node path where we can find the page's URL (required)
        sourceUrlPath: 'fields.url',
        // custom menu loading function (optional)
        // menuLoader: customLoaderFunction,
        // the property to use for injecting to the page context (optional, see "Advanced usage")
        pageContextProperty: 'menus',
      },
    },
    // {
    //   resolve: `gatsby-plugin-mdx`,
    //   options: {
    //     defaultLayouts: {
    //       // posts: require.resolve("./src/components/posts-layout.js"),
    //       default: require.resolve("./src/@lekoarts/gatsby-theme-cara/components/layout.tsx"),
    //     },
    //   },
    // },
  ].filter(Boolean),
}
