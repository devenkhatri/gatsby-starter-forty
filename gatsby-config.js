module.exports = {
  siteMetadata: {
    title: "JAMStack",
    author: "Deven Goratela",
    description: "JAMStack Project using Gatsby, React, Netlify CMS and Netlify platform by Deven Goratela"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'JAMStack',
        short_name: 'JAMStack',
        start_url: '/',
        background_color: '#009688',
        theme_color: '#009688',
        display: 'minimal-ui',
        icon: 'src/assets/images/icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
        enableIdentityWidget: true,
        htmlTitle: `JAMStack Content Manager`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/service`,
        name: `service`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/autopage`,
        name: `autopage`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/settings`,
        name: `settings`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content`,
        name: `fixedpage`,
      },
    },
    `gatsby-transformer-remark`,
    //'gatsby-plugin-offline'
  ],
}
