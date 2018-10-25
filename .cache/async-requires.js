// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-all-tags-index-js": () => import("C:\\Users\\Chris\\Development\\codegrunt\\gatsby-v2-blog\\src\\templates\\allTagsIndex.js" /* webpackChunkName: "component---src-templates-all-tags-index-js" */),
  "component---src-templates-single-tag-index-js": () => import("C:\\Users\\Chris\\Development\\codegrunt\\gatsby-v2-blog\\src\\templates\\singleTagIndex.js" /* webpackChunkName: "component---src-templates-single-tag-index-js" */),
  "component---src-templates-blog-post-js": () => import("C:\\Users\\Chris\\Development\\codegrunt\\gatsby-v2-blog\\src\\templates\\blogPost.js" /* webpackChunkName: "component---src-templates-blog-post-js" */),
  "component---src-pages-index-js": () => import("C:\\Users\\Chris\\Development\\codegrunt\\gatsby-v2-blog\\src\\pages\\index.js" /* webpackChunkName: "component---src-pages-index-js" */)
}

exports.data = () => import("C:\\Users\\Chris\\Development\\codegrunt\\gatsby-v2-blog\\.cache\\data.json")

