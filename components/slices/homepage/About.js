import { RichText } from 'prismic-reactjs'

const About = props => (
  <section className="about" id={props.slice.slice_type}>
    <div className="container flex flex-wrap align-items-center mx-auto">
      <div className="about-header">
        <img src="https://images.prismic.io/thecia/3dafb445-8cc7-4ca4-a5c9-4e6c2b00c321_rsz_cia-shield-final-color.png" alt="Cannabis Intelligence Agency Inc." className="mb-4 mx-auto" />
        {RichText.render(props.slice.primary.title1)}
      </div>
      <div className="speech-bubble-container">
        <div className="speech-bubble triangle">
          <div className="callout">{RichText.asText(props.slice.primary.callout)}</div>
          <style jsx>{`
            .triangle:before {
              content: "";
              width: 0px;
              height: 0px;
              position: absolute;
              border-left: 25px solid #4CB348;
              border-right: 25px solid transparent;
              border-top: 25px solid #4CB348;
              border-bottom: 25px solid transparent;
              right: -50px;
              top: 50%;
            }
            .triangle:after {
              content: "";
              width: 0px;
              height: 0px;
              position: absolute;
              border-left: 20px solid #fff;
              border-right: 22px solid transparent;
              border-top: 22px solid #fff;
              border-bottom: 20px solid transparent;
              right: -40px;
              top: 51.25%;
            }
          `}</style>
        </div>
      </div>
      <div className="about-content">
        <div>
          {RichText.render(props.slice.primary.description)}
        </div>
      </div>
    </div>
  </section>
)

export default About
