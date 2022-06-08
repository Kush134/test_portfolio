// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("/Users/worning77/Desktop/my-portfolio/.cache/layouts/index.js"))
}

exports.components = {
  "component---src-pages-404-js": preferDefault(require("/Users/worning77/Desktop/my-portfolio/src/pages/404.js")),
  "component---src-pages-home-js": preferDefault(require("/Users/worning77/Desktop/my-portfolio/src/pages/home.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/worning77/Desktop/my-portfolio/src/pages/index.js")),
  "component---src-pages-work-1-js": preferDefault(require("/Users/worning77/Desktop/my-portfolio/src/pages/work1.js")),
  "component---src-pages-work-2-js": preferDefault(require("/Users/worning77/Desktop/my-portfolio/src/pages/work2.js")),
  "component---src-pages-work-3-js": preferDefault(require("/Users/worning77/Desktop/my-portfolio/src/pages/work3.js")),
  "component---src-pages-work-4-js": preferDefault(require("/Users/worning77/Desktop/my-portfolio/src/pages/work4.js"))
}

exports.json = {
  "layout-index.json": require("/Users/worning77/Desktop/my-portfolio/.cache/json/layout-index.json"),
  "404.json": require("/Users/worning77/Desktop/my-portfolio/.cache/json/404.json"),
  "home.json": require("/Users/worning77/Desktop/my-portfolio/.cache/json/home.json"),
  "index.json": require("/Users/worning77/Desktop/my-portfolio/.cache/json/index.json"),
  "work-1.json": require("/Users/worning77/Desktop/my-portfolio/.cache/json/work-1.json"),
  "work-2.json": require("/Users/worning77/Desktop/my-portfolio/.cache/json/work-2.json"),
  "work-3.json": require("/Users/worning77/Desktop/my-portfolio/.cache/json/work-3.json"),
  "work-4.json": require("/Users/worning77/Desktop/my-portfolio/.cache/json/work-4.json"),
  "404-html.json": require("/Users/worning77/Desktop/my-portfolio/.cache/json/404-html.json")
}