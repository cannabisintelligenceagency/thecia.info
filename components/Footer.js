import { RichText } from 'prismic-reactjs'
import NewsletterSignup from './forms/NewsletterSignup'

const FooterLinks = props => {
  return props.slices.map((slice, i) => {
    if (slice.slice_type === 'nav') {
      return slice.items.map((item, i) => (
        <li key={i} className="footer-link">
          {item.label}
        </li>
      ))
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
