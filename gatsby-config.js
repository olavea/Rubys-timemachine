module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-material-ui`,
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Rubys_timemachine!`,
        short_name: `Rubys_timemachine`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        headers: {
          "/manifest.webmanifest": [
            // Requirement of Blockstack
            // "Access-Control-Allow-Origin: *",
          ],
        },
      },
    },
  ],
}
