import Client from '../../helpers/client'
import { linkResolver } from '../../helpers'

const Preview = async (req, res) => {
  const token = req.query.token;
  console.log(token)
  if (token) {

    try {
      const url = await Client(req).previewSession(token, linkResolver, '/')
      res.writeHead(302, { Location: url })
      res.end()
    } catch {
      res.status(400).send('Something went wrong with the previewSession request');
    }
  } else {
    res.status(400).send('Missing token from preview request');
  }
}

export default Preview

// import { useEffect } from 'react'
// import qs from 'qs'
// import Prismic from 'prismic-javascript'
// import { linkResolver } from '../../helpers'
//
// const Preview = ({ history, location }) => {
//   useEffect(() => {
//     const params = qs.parse(location.search.slice(1))
//     if (!params.token) {
//       return console.warn(`No token available, check your configuration`)
//     }
//
//     client.previewSession(params.token, linkResolver, '/')
//       .then(url => history.push(url))
//   })
//   return null
// }
//
// export default Preview
