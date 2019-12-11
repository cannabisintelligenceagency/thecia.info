import { useState, useEffect } from 'react'
import { getNavigation } from '../helpers/api'
import { RichText } from 'prismic-reactjs'
import NewsletterSignup from './forms/NewsletterSignup'
import { Link as ScrollLink } from 'react-scroll'

const FooterLinks = props => {
  return props.slices.map((slice, i) => {
    if (slice.slice_type === 'nav_item') {
      return(
        <li key={i} className="footer-link">
          <ScrollLink href="/"
            key={i}
            activeClass="text-cia-500"
            to={`${slice.primary.scroll_target}`}
            spy={true}
            smooth={true}
            offset={-84}
            duration={400}
          >
            {RichText.asText(slice.primary.label)}
          </ScrollLink>
        </li>
      )
    } else {
      return null
    }
  })
}

const HomepageFooter = ({ footerNavId }) => {
  const [ nav, setNav ] = useState({})

  useEffect(
    () => {
      const fetchNav = async () => {
        const res = await getNavigation(footerNavId)
        setNav(res)
      }
      fetchNav()
    },[]
  )

  return(
    <footer>
      <div className="container mx-auto flex flex-wrap items-center">
        <div className="footer-nav-container">
          {nav && nav.data &&
            <ul>
              <FooterLinks slices={nav.data.body} />
            </ul>
          }
        </div>
        <div className="signup-container">
          <div className="mb-6">
            Don't miss a thing <br/>
            <span className="font-semibold">Sign up for our newsletter today</span>
          </div>
          <NewsletterSignup />
        </div>
      </div>
    </footer>
  )
}


export default HomepageFooter
