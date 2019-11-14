import Prismic from 'prismic-javascript'

const endPoint = process.env.PRISMIC

const getNavigation = async() => {
  try {
    const API = await Prismic.api(endPoint)
    const res = await API.query(
      Prismic.Predicates.at('document.type', 'navigation')
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
      Prismic.Predicates.at('my.page.uid', uid)
    )
    return res.results[0];
  } catch (error) {
    console.error(error)
    return error
  }
}

export {
  getFooter,
  getNavigation,
  getHomepage,
  getPage
}
