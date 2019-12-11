import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { RichText } from 'prismic-reactjs'

const Services = props =>
  <div className="services-container" id={props.slice.slice_type}>
    <div className="container mx-auto flex flex-wrap">
      <div className="services-header-container">
        <img src="https://images.prismic.io/thecia/3dafb445-8cc7-4ca4-a5c9-4e6c2b00c321_rsz_cia-shield-final-color.png" alt="Cannabis Intelligence Agency Inc." />
        <h2 className="services-header">Our Services</h2>
      </div>
      {props.slice.items.map((item, i) => (
        <div className="service-column" key={i}>
          <div className="service">
            <div className="icon-container">
              <span className={`fa-layers fa-fw shield-icon`} >
                <FontAwesomeIcon icon={['fas', 'shield']} size="6x" fixedWidth color="#4CB348" />
                <FontAwesomeIcon icon={['fal', item.icon]} size="3x" inverse transform="right-10" fixedWidth />
              </span>
            </div>
            <div className="services-description">
              <div className="service-title">{item.name[0].text}</div>
              <div className="service-body">{RichText.render(item.description)}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>

export default Services
