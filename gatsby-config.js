module.exports = {
  siteMetadata: {
    title: 'Jumbo',
    github: 'http://github.com/adaltas/jumbo',
    version: '0.4.4',
    siteUrl: `http://jumbo.adaltas.com`,
  },
  plugins: [
    'gatsby-plugin-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-offline',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-component',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 600,
            },
          },
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              classPrefix: 'language-',
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Jumbo',
        short_name: 'Jumbo',
        start_url: '/',
        background_color: '#565dbe',
        theme_color: '#565dbe',
        display: 'minimal-ui',
        icon: 'src/images/jumbo-icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-less',
      options: {
        javascriptEnabled: true,
      },
    },
    `gatsby-plugin-sitemap`,
  ],
}
