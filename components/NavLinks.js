import { Link as ScrollLink } from 'react-scroll'
import Link from 'next/link'
import { linkResolver, hrefResolver } from '../helpers'

const NavLinks = ({ slices, closeNavbar }) => {
  return slices.map((slice, i) => {
    if (slice.slice_type === 'nav_item') {
      if (slice.primary.scroll_target) {
        return(
          <ScrollLink href="/"
            className="scroll-link"
            key={i}
            activeClass="text-cia-500"
            to={`${slice.primary.scroll_target}`}
            spy={true}
            smooth={true}
            offset={-84}
            duration={400}
            onClick={closeNavbar}
          >
            {slice.primary.label[0].text}
          </ScrollLink>
        )
      } else {
        return(
          <Link
            key={i}
            as={linkResolver(slice.primary.link)}
            href={hrefResolver(slice.primary.link)}
            onClick={closeNavbar}
          >
            <a className="scroll-link">
              {slice.primary.label[0].text}
            </a>
          </Link>
        )
      }
    } else {
      return null
    }
  })
}

export default NavLinks
