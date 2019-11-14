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

const Footer = ({ footer }) => (
  <footer>
    {footer && footer.data &&
      <div className="container mx-auto flex flex-wrap">
        <div className="footer-nav-container">
          <ul>
            <FooterLinks slices={footer.data.body} />
          </ul>
        </div>
        <div className="signup-container">
          {RichText.render(footer.data.signup_title)}
          <NewsletterSignup />
        </div>
      </div>
    }
  </footer>
)

export default Footer
