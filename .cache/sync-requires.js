const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-post-js": hot(preferDefault(require("/home/aim-arch/Documents/git/github/about-me-frontend/src/templates/post.js"))),
  "component---src-templates-tag-js": hot(preferDefault(require("/home/aim-arch/Documents/git/github/about-me-frontend/src/templates/tag.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/aim-arch/Documents/git/github/about-me-frontend/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/home/aim-arch/Documents/git/github/about-me-frontend/src/pages/404.js"))),
  "component---src-pages-archive-js": hot(preferDefault(require("/home/aim-arch/Documents/git/github/about-me-frontend/src/pages/archive.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/home/aim-arch/Documents/git/github/about-me-frontend/src/pages/index.js"))),
  "component---src-pages-pensieve-index-js": hot(preferDefault(require("/home/aim-arch/Documents/git/github/about-me-frontend/src/pages/pensieve/index.js"))),
  "component---src-pages-pensieve-tags-js": hot(preferDefault(require("/home/aim-arch/Documents/git/github/about-me-frontend/src/pages/pensieve/tags.js")))
}

