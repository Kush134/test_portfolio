var plugins = [{
      plugin: require('/Users/worning77/Desktop/my-portfolio/node_modules/gatsby-plugin-react-helmet/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/worning77/Desktop/my-portfolio/node_modules/gatsby-plugin-styled-components/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/worning77/Desktop/my-portfolio/node_modules/gatsby-plugin-google-analytics/gatsby-ssr'),
      options: {"plugins":[],"trackingId":"UA-130561639-1","head":false},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  let results = plugins.map(plugin => {
    if (plugin.plugin[api]) {
      const result = plugin.plugin[api](args, plugin.options)
      return result
    }
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}
