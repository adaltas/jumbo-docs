module.exports = {
  siteMetadata: {
    title: "Jumbo",
    version: "0.4.3",
    github: {
      url: "https://github.com/adaltas/jumbo",
      title: "Jumbo GitHub Repository"
    },
    issues: {
      url: "https://github.com/adaltas/jumbo/issues",
      title: "Report an issue"
    },
    footer: [
      {
        title: "Navigate",
        links: [
          {
            label: "Overview",
            url: "/overview/"
          },
          {
            label: "Getting started",
            url: "/getting-started/"
          },
          {
            label: "Jumbo CLI",
            url: "/commands/"
          }
        ]
      },
      {
        title: "Contribute",
        links: [
          {
            label: "GitHub",
            url: "https://github.com/adaltas/jumbo"
          },
          {
            label: "Issue Tracker",
            url: "https://github.com/adaltas/jumbo/issues"
          },
          {
            label: "License",
            url: "https://github.com/adaltas/jumbo/blob/master/LICENSE"
          }
        ]
      },
      {
        title: "About",
        content:
          'Jumbo is an open source product hosted on <a href="https://www.github.com">GitHub</a> and developed by <a href="http://www.adaltas.com">Adaltas</a>.'
      }
    ]
  },
  plugins: [
    `gatsby-plugin-material-ui`,
    `gatsby-plugin-react-next`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/md`,
        name: "markdown-pages"
      }
      // },{
      //   resolve: `gatsby-plugin-typography`,
      //   options: {
      //     pathToConfigModule: `src/utils/typography.js`,
      //   },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              aliases: {}
            }
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-1322093-5"
      }
    }
  ]
};
