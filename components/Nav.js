
const Nav = props => {
  return(
    <header className="lg:px-16 px-8 bg-green-700 shadow-md py-4 md:py-0">
      <div className="container mx-auto flex flex-wrap items-center">
        <div className="flex-1 flex justify-between items-center">
          <a href="/" className="text-xl font-semibold text-green-100 hover:text-white tracking-normal">Tailwind CSS</a>
        </div>
        <label for="menu-toggle" className="pointer-cursor md:hidden block">
          <svg className="fill-current text-gray-300 hover:text-white" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
            <title>menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>
        </label>
        <input className="hidden" type="checkbox" id="menu-toggle" />
        <div className="hidden md:flex md:items-center md:w-auto w-full" id="menu">
          <nav>
            <ul className="md:flex items-center justify-between text-base pt-4 md:pt-0">
              <li><a className="md:px-4 py-2 md:py-4 px-0 block text-green-100 hover:text-white md:hover:bg-green-800" href="/">About Us</a></li>
              <li><a className="md:px-4 py-2 md:py-4 px-0 block text-green-100 hover:text-white md:hover:bg-green-800" href="/">Treatments</a></li>
              <li><a className="md:px-4 py-2 md:py-4 px-0 block text-green-100 hover:text-white md:hover:bg-green-800" href="/">Blog</a></li>
              <li><a className="md:px-4 py-2 md:py-4 px-0 block text-green-100 hover:text-white md:hover:bg-green-800" href="/">Contact Us</a></li>
              <li className="dropdown inline-block relative w-full md:w-auto md:mb-0 mb-2">
                <a className="md:px-4 py-2 md:py-4 px-0 block text-green-100 hover:text-white md:hover:bg-green-800 inline-flex items-center">
                  <span className="mr-1">Dropdown</span>
                  <svg className="fill-current h-4 w-4 mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </a>
                <ul className="dropdown-menu absolute z-50 md:right-0 hidden text-gray-700 md:-mt-4 md:pt-3 pt-1 shadow-lg">
                  <li className="">
                    <a className="rounded-t bg-white hover:bg-gray-100 py-2 px-4 block whitespace-no-wrap" href="/">
                      Testing Link One
                    </a>
                  </li>
                  <li className="">
                    <a className="bg-white hover:bg-gray-100 py-2 px-4 block whitespace-no-wrap" href="/">
                      Testing Link Two
                    </a>
                  </li>
                  <li className="">
                    <a className="rounded-b bg-white hover:bg-gray-100 py-2 px-4 block whitespace-no-wrap" href="/">
                      Testing Link Three, Nice!
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Nav
