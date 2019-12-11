import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import { Link as ScrollLink } from 'react-scroll'
import { getNavigation } from '../helpers/api'
import Link from 'next/link'
import { linkResolver, hrefResolver } from '../helpers'

const NavLinks = ({ slices, closeNavbar }) => {
  return slices.map((slice, i) => {
    if (slice.slice_type === 'nav_item') {
      if (slice.primary.scroll_target) {
        return(
          <ScrollLink href="/"
            className="font-work tracking-wide font-semibold uppercase py-4  ml-12 mr-0 text-white"
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
            <a className="font-work tracking-wide font-semibold uppercase py-4  ml-12 mr-0 text-white">
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

const Burger = dynamic(
  () => import('../node_modules/react-css-burger/dist/'),
  { ssr: false }
)

const Navbar = ({ siteSettings, navId }) => {

  const [ scroll, setScroll ] = useState(1)
  const [ isOpen, setIsOpen ] = useState(false)
  const [ nav, setNav ] = useState({})

  useEffect(
    () => {
      const fetchNav = async () => {
        const res = await getNavigation(navId)
        setNav(res)
      }
      fetchNav()
    },[]
  )

  useEffect(
    () => {
      document.addEventListener("scroll", () => {
        const scrollCheck = window.scrollY < 1
        if (scrollCheck !== scroll) {
          setScroll(scrollCheck)
        }
      })
    },[]
  )

  const toggle = () => {
    setIsOpen(!isOpen)
	}

	const closeNavbar = () => {
    setIsOpen(false)
	}

  const scrollClass = scroll ? 'bg-cia-500 py-3' : 'bg-cia-500 py-3'
  const showHideClass = isOpen ? '' : 'hide'
  const showHideFixedClass = isOpen ? 'bg-white' : ''

  return(
    <header className={`${scrollClass} ${showHideFixedClass}`}>
      {siteSettings && siteSettings.data &&
        <nav className="container">
          <div className="logo-container">
            <ScrollLink href="/"
              className="logo"
              to="slider"
              spy={true}
              smooth={true}
              duration={400}
              onClick={closeNavbar}
            >
              <img src="https://images.prismic.io/thecia/836cf55a-31ce-44f9-87ff-cdb3ad90464c_cia-logo-white-edited.png?auto=compress,format" alt={siteSettings.data.site_name[0].text} />
            </ScrollLink>
          </div>
          <div className="burger-container">
            <Burger
              onClick={toggle}
              active={isOpen}
              burger="squeeze"
              color="#4CB348"
              hoverOpacity={0.8}
              scale={1}
              marginTop='0.625rem'
            />
          </div>
          {nav && nav.data &&
            <div className={`navlinks-container ${showHideClass}`}>
              <div className="navlinks">
                <NavLinks slices={nav.data.body} closeNavbar={closeNavbar} />
              </div>
            </div>
          }
        </nav>
      }
    </header>
  )

}
export default Navbar
