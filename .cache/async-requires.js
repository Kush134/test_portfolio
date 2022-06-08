// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-pages-404-js": require("gatsby-module-loader?name=component---src-pages-404-js!/Users/worning77/Desktop/my-portfolio/src/pages/404.js"),
  "component---src-pages-home-js": require("gatsby-module-loader?name=component---src-pages-home-js!/Users/worning77/Desktop/my-portfolio/src/pages/home.js"),
  "component---src-pages-index-js": require("gatsby-module-loader?name=component---src-pages-index-js!/Users/worning77/Desktop/my-portfolio/src/pages/index.js"),
  "component---src-pages-work-1-js": require("gatsby-module-loader?name=component---src-pages-work-1-js!/Users/worning77/Desktop/my-portfolio/src/pages/work1.js"),
  "component---src-pages-work-2-js": require("gatsby-module-loader?name=component---src-pages-work-2-js!/Users/worning77/Desktop/my-portfolio/src/pages/work2.js"),
  "component---src-pages-work-3-js": require("gatsby-module-loader?name=component---src-pages-work-3-js!/Users/worning77/Desktop/my-portfolio/src/pages/work3.js"),
  "component---src-pages-work-4-js": require("gatsby-module-loader?name=component---src-pages-work-4-js!/Users/worning77/Desktop/my-portfolio/src/pages/work4.js")
}

exports.json = {
  "layout-index.json": require("gatsby-module-loader?name=path---!/Users/worning77/Desktop/my-portfolio/.cache/json/layout-index.json"),
  "404.json": require("gatsby-module-loader?name=path---404!/Users/worning77/Desktop/my-portfolio/.cache/json/404.json"),
  "home.json": require("gatsby-module-loader?name=path---home!/Users/worning77/Desktop/my-portfolio/.cache/json/home.json"),
  "index.json": require("gatsby-module-loader?name=path---index!/Users/worning77/Desktop/my-portfolio/.cache/json/index.json"),
  "work-1.json": require("gatsby-module-loader?name=path---work-1!/Users/worning77/Desktop/my-portfolio/.cache/json/work-1.json"),
  "work-2.json": require("gatsby-module-loader?name=path---work-2!/Users/worning77/Desktop/my-portfolio/.cache/json/work-2.json"),
  "work-3.json": require("gatsby-module-loader?name=path---work-3!/Users/worning77/Desktop/my-portfolio/.cache/json/work-3.json"),
  "work-4.json": require("gatsby-module-loader?name=path---work-4!/Users/worning77/Desktop/my-portfolio/.cache/json/work-4.json"),
  "404-html.json": require("gatsby-module-loader?name=path---404-html!/Users/worning77/Desktop/my-portfolio/.cache/json/404-html.json")
}

exports.layouts = {
  "layout---index": require("gatsby-module-loader?name=component---src-layouts-index-js!/Users/worning77/Desktop/my-portfolio/.cache/layouts/index.js")
}