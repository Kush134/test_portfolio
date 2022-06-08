module.exports = {
  siteMetadata: {
    title: "Gao's | Design"
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-styled-components",
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-130561639-1",
        head: false
      }
    }
  ]
};
