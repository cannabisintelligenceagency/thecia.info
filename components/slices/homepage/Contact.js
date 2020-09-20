import { RichText } from 'prismic-reactjs'

const Contact = props => (
  <section className="contact" id={props.slice.slice_type}>
    <div className="container mx-auto flex flex-wrap justify-center">

        <div className="contact-header-container">
          <img src="https://images.prismic.io/thecia/3dafb445-8cc7-4ca4-a5c9-4e6c2b00c321_rsz_cia-shield-final-color.png" alt="Cannabis Intelligence Agency Inc." />
          <h2 className="contact-header">{RichText.asText(props.slice.primary.title1)}</h2>
        </div>
        <div className="contact-column column-left">
          <h5 className="contact-column-header">On The Phone</h5>
          <div className="contact-phone">{props.slice.primary.phone}</div>
        </div>
        <div className="contact-column column-center">
          <h5 className="contact-column-header">Email</h5>
          <div className="contact-info">{props.slice.primary.email_1}</div>
          {/* <h5 className="contact-column-header">Media Inquiries</h5>
          <div className="contact-info media">{props.slice.primary.email_2}</div> */}
        </div>
        {/* <div className="contact-column column-right">
          <h5 className="contact-column-header">Our Address</h5>
          <div className="contact-info">{RichText.render(props.slice.primary.address)}</div>
        </div> */}

        <div className="contact-column column-right">
          <span className="contact-image-text">Proud research partner of</span>
          <img src="https://images.prismic.io/thecia/296f7666-2685-43c7-99b6-820fbf48bbce_mcba.png?auto=compress,format"  className="contact-image"/>
        </div>

    </div>
  </section>
)

export default Contact
