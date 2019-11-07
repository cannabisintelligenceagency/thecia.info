import { RichText } from 'prismic-reactjs'

const FooterLinks = props => {
  return props.slices.map((slice, i) => {
    if (slice.slice_type === 'nav') {
      return slice.items.map((item, i) => (
        <li key={i} className="float-left w-1/2 uppercase tracking-wide text-xl mb-1">
          {item.label}
        </li>
      ))
    } else {
      return null
    }
  })
}

const Footer = ({ footer }) => (
  <div className="py-32 w-full bg-black text-white">
    {footer && footer.data &&
      <div className="container mx-auto flex">
        <div className="w-1/2">
          <ul>
            <FooterLinks slices={footer.data.body} />
          </ul>
        </div>
        <div className="w-1/2 text-2xl text-center">
          {RichText.render(footer.data.signup_title)}
          <form className="w-8/12 mx-auto">
            <label htmlFor="email" className="block w-full">
              <input name="email" type="text" className="form-input w-full mb-2" />
            </label>
            <input type="submit" className="bg-cia-500 py-3 text-white text-base font-medium w-full rounded" />
          </form>
        </div>
      </div>
    }
  </div>
)

export default Footer
