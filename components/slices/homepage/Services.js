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
        <div className="w-full md:w-11/12 md:mx-auto lg:w-1/2 px-3 mb-6" key={i}>
          <div className="md:flex shadow">
            <div className="w-full md:w-1/4 md:flex-shrink-0 relative bg-white icon-container">
              <span className={`fa-layers fa-fw md:ml-6 lg:ml-0 xl:ml-4 hidden md:block shield-icon`} >
                <FontAwesomeIcon icon={['fas', 'shield']} size="6x" fixedWidth color="#4CB348" />
                <FontAwesomeIcon icon={['fal', item.icon]} size="3x" inverse transform="right-10" fixedWidth />
              </span>
            </div>
            <div className="w-full md:w-3/4 text-white bg-cia-500 pl-6 md:pl-16 py-6">
              <div className="uppercase tracking-wide font-eurostile text-lg md:text-xl lg:text-2xl font-medium mb-2">{item.name[0].text}</div>
              <div className="font-montserrat md:text-lg services-description">{RichText.render(item.description)}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>

export default Services
