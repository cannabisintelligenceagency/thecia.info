import { useEffect, useState } from 'react'
import { RichText } from 'prismic-reactjs'
import Link from 'next/link'
import Prismic from 'prismic-javascript'
import Burger from '../../node_modules/react-css-burger/dist/'
import { Link as ScrollLink, animateScroll } from 'react-scroll'

const NavbarHome = ({ nav }) => {

  const [ scroll, setScroll ] = useState(1)
  const [ isOpen, setIsOpen ] = useState(false)

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

  const NavLinks = props => {
    return props.slices.map((slice, i) => {
      if (slice.slice_type === 'nav_item') {
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
            {RichText.asText(slice.primary.label)}
          </ScrollLink>
        )
      } else {
        return null
      }
    })
  }

  const scrollClass = scroll ? 'bg-transparent pt-3 xl:pt-6' : 'bg-white shadow-md py-3'
  const showHideClass = isOpen ? '' : 'hidden'
  const showHideFixedClass = isOpen ? 'topnav-fixed bg-white' : ''

  return(
    <header className={`${scrollClass}`}>
      {nav && nav.data &&
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
              <img src={nav.data.site_logo.url} alt={RichText.asText(nav.data.site_name)} />
            </ScrollLink>
          </div>
          <div className="block pr-3 lg:hidden">
            {/* <Burger
              onClick={toggle}
              active={isOpen}
              burger="squeeze"
              color="#4CB348"
              hoverOpacity={0.8}
              scale={1}
              marginTop='0.625rem'
            /> */}
          </div>
          <div className={`w-full lg:flex lg:items-center lg:w-auto ${showHideClass}`}>
            <div className="mt-6 lg:mt-0 lg:flex-grow">
              <NavLinks slices={nav.data.nav} />
            </div>
          </div>
        </nav>
      }
    </header>
  )

}
export default NavbarHome
