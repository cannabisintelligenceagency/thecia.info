const Preview = () => <div>Preview</div>

export default Preview
// 
// // pages/preview.js
//
// import React from 'react'
// import Error from 'next/error'
// import Router from 'next/router'
// import Prismic from 'prismic-javascript'
// import cookie from 'cookie'
//
// import { fetchBlogPost, linkResolver } from '../lib/prismic.js'
// import withPrismic from '../lib/withPrismic.js'
//
// // Universal cookie setter
// function setCookie (res, key, value) {
//   const options = { maxAge: 60 * 300, path: '/', httpOnly: false }
//   if (res) {
//     res.cookie(key, value, options)
//   } else {
//     document.cookie = cookie.serialize(key, value, options)
//   }
// }
//
// // Universal redirect
// function redirect (ctx, target) {
//   if (ctx.res) {
//     // On server
//     // 303: "See other"
//     ctx.res.writeHead(303, { Location: target })
//     ctx.res.end()
//   } else {
//     // In the browser, we just pretend this never even happened
//     Router.replace(target)
//   }
// }
//
// class Preview extends React.Component {
//   static async getInitialProps (ctx) {
//     const { token } = ctx.query
//     const redirectUrl = await ctx.prismic.api.previewSession(token, linkResolver, '/')
//
//     setCookie(ctx.res, Prismic.previewCookie, token)
//     redirect(ctx, redirectUrl)
//   }
//
//   render () {
//     // This component is supposed to redirect to an actual preview location
//     // We don't want this to render anything
//     return <Error statusCode={400} />
//   }
// }
//
// export default withPrismic(Preview)
