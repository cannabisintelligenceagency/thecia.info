import { useState, useRef } from 'react'
import { RichText } from 'prismic-reactjs'
import Recaptcha from 'react-recaptcha'
import SimpleReactValidator from 'simple-react-validator'

const ResourceDownload = props => {
  const [disabled, setDisabled] = useState(true)
  const [, forceUpdate] = useState()
  const validator = useRef(new SimpleReactValidator())
  const [downloaderInfo, setDownloaderInfo] = useState({firstName: '', lastName: '', email: '', phone: '', company: '', title: ''})

  const handleChange = e => {
    setDownloaderInfo({...downloaderInfo, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (validator.current.allValid()) {

    } else {
      validator.current.showMessages();
      forceUpdate(1)
    }
  }

  const callback = () => {
    console.log("recaptcha loaded")
  }
  const verifyCallback = res => {
    if (res) {
      setDisabled(false)
    }
  }
  return(
    <form onSubmit={e => handleSubmit(e)}>
      <label className="w-full block mb-4">
        <span className="text-base mb-1 block font-medium">First name</span>
        <input
          name="firstName"
          type="text"
          className="w-full rounded bg-gray-300 border border-gray-300 py-3 px-6"
          placeholder="First name"
          onChange={e => handleChange(e)}
        />
        {validator.current.message('firstName', downloaderInfo.firstName, 'required')}

      </label>
      <label className="w-full block mb-4">
        <span className="text-base mb-1 block font-medium">Last name</span>
        <input
          name="lastName"
          type="text"
          className="w-full rounded bg-gray-300 border border-gray-300 py-3 px-6"
          placeholder="Last name"
          onChange={e => handleChange(e)}
        />
        {validator.current.message('lastName', downloaderInfo.lastName, 'required')}

      </label>
      <label className="w-full block mb-4">
        <span className="text-base mb-1 block font-medium">Email</span>
        <input
          name="email"
          type="text"
          className="w-full rounded bg-gray-300 border border-gray-300 py-3 px-6"
          placeholder="Email"
          onChange={e => handleChange(e)}
        />
        {validator.current.message('email', downloaderInfo.email, 'required|email')}

      </label>
      <label className="w-full block mb-4">
        <span className="text-base mb-1 block font-medium">Company name</span>
        <input
          name="company"
          type="text"
          className="w-full rounded bg-gray-300 border border-gray-300 py-3 px-6"
          placeholder="Company name"
          onChange={e => handleChange(e)}
        />
        {validator.current.message('company', downloaderInfo.company, 'required')}
      </label>
      <label className="w-full block mb-4">
        <span className="text-base mb-1 block font-medium">Job Title</span>
        <input
          name="title"
          type="text"
          className="w-full rounded bg-gray-300 border border-gray-300 py-3 px-6"
          placeholder="Job title"
          onChange={e => handleChange(e)}
        />
      </label>
      <label className="w-full block mb-6">
        <span className="text-base mb-1 block font-medium">Phone</span>
        <input
          name="phone"
          type="text"
          className="w-full rounded bg-gray-300 border border-gray-300 py-3 px-6"
          placeholder="Phone"
          onChange={e => handleChange(e)}
        />
      </label>
      <Recaptcha
        sitekey="6LdjaMMUAAAAAB_ItyvnaKR18cTin7IWJlnqYFJj"
        render="explicit"
        verifyCallback={verifyCallback}
        onloadCallback={callback}
      />
      <button
        className="bg-cia-500 font-eurostile rounded cursor-pointer tracking-wide font-medium text-white w-full py-4 mt-6"
        disabled={disabled}
      >Download Intel</button>
    </form>
  )
}

export default ResourceDownload
