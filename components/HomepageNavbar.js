import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import { Link as ScrollLink } from 'react-scroll'
import { getNavigation } from '../helpers/api'
import NavLinks from './NavLinks'

const Burger = dynamic(
  () => import('../node_modules/react-css-burger/dist/'),
  { ssr: false }
)

const HomepageNavbar = ({ siteSettings, navId }) => {

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

  const scrollClass = scroll ? 'transparent-nav' : 'solid-nav'
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
              <img src={siteSettings.data.brand_logo.url} alt={siteSettings.data.site_name[0].text} />
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
              marginTop='0.5rem'
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
export default HomepageNavbar
