import { useState, useEffect } from 'react'
import Prismic from 'prismic-javascript'
import { options } from '../../../helpers'

const LatestNews = props => {
  const [news, setNews] = useState([])
  const [perPage, setPerPage] = useState(4)
  useEffect(
    () => {
      const fetchNews = async numPage => {
        try {
          const API = await Prismic.api(process.env.PRISMIC)
          const res = await API.query(
            Prismic.Predicates.at('document.type', 'post'),
            { pageSize: numPage, orderings: '[my.post.published desc]' }
          )
          setNews(res.results)
        } catch (error) {
          console.error(error)
          return error
        }
      }
      fetchNews(perPage)
    },[]
  )
  return(
    <div className="w-full pt-32 pb-20">
      <div className="container mx-auto flex flex-wrap">
        {news && news.map((item, i) => {
          let pubDate = new Date(item.data.published)
          return(
            <div className="mb-12 w-1/2 px-3">
              <span className="text-sm uppercase font-semibold font-work text-cia-600 block mb-1">{pubDate.toLocaleDateString("en-US", options)}</span>
              <h2 className="text-2xl uppercase font-semibold font-work">{item.data.title[0].text}</h2>
              {/* <p className="text-gray-700">{item.data.subtitle[0].text}</p> */}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default LatestNews
