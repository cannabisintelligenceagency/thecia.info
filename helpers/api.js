import Prismic from 'prismic-javascript'

const endPoint = process.env.PRISMIC

const getGlobal = async() => {
  try {
    const API = await Prismic.api(endPoint)
    const res = await API.query(
      Prismic.Predicates.at('document.type', 'site_settings')
    )
    return res.results[0]
  } catch (error) {
    console.error(error)
    return error
  }
}

const getNavigation = async id => {
  try {
    const API = await Prismic.api(endPoint)
    const res = await API.query(
      Prismic.Predicates.at('document.id', id)
    )
    return res.results[0]
  } catch (error) {
    console.error(error)
    return error
  }
}

const getFooter = async() => {
  try {
    const API = await Prismic.api(endPoint)
    const res = await API.query(
      Prismic.Predicates.at('document.type', 'footer')
    )
    return res.results[0]
  } catch (error) {
    console.error(error)
    return error
  }
}

const getHomepage = async() => {
  try {
    const API = await Prismic.api(endPoint)
    const res = await API.query(
      Prismic.Predicates.at('document.type', 'homepage')
    )
    return res.results[0]
  } catch (error) {
    console.error(error)
    return error
  }
}

const getPage = async uid => {
  try {
    const API = await Prismic.api(endPoint)
    const res = await API.query(
      Prismic.Predicates.at('my.page.uid', uid),
      { fetchLinks: ['resource.title', 'resource.download_link', 'resource.published', 'resource.resource_category', 'resource_category.name']}
    )
    return res.results[0];
  } catch (error) {
    console.error(error)
    return error
  }
}

const getPost = async uid => {
  try {
    const API = await Prismic.api(endPoint)
    const res = await API.query(
      Prismic.Predicates.at('my.post.uid', uid)
    )
    return res.results[0];
  } catch (error) {
    console.error(error)
    return error
  }
}

const getResource = async uid => {
  try {
    const API = await Prismic.api(endPoint)
    const res = await API.query(
      Prismic.Predicates.at('my.resource.uid', uid), { fetchLinks: ['resource_category.name'] }
    )
    return res.results[0];
  } catch (error) {
    console.error(error)
    return error
  }
}

export {
  getGlobal,
  getFooter,
  getNavigation,
  getHomepage,
  getPage,
  getPost,
  getResource
}
