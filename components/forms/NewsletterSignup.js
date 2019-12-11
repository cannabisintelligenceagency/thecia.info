
import { useForm } from '@statickit/react'

function NewsletterSignup() {
  const [state, submit] = useForm({
    site: process.env.STATICKIT_SITE_ID,
    form: process.env.STATICKIT_SIGNUP_FORM_KEY
  })

  if (state.succeeded) {
    return(
      <div className="footer-signup footer-signup-message">
        Thank you for signing up for our newsletter. We will not spam you and you may opt out at any time.
      </div>
    )
  }

  return(
    <form className="footer-signup" onSubmit={submit}>
      <input
        name="email"
        type="text"
        className="signup-input"
        placeholder="Enter your email address"
        aria-label="email"
        required />
      <input type="submit" value="Sign up for updates" className="signup-button" />
    </form>
  )
}

export default NewsletterSignup
