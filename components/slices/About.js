import { RichText } from 'prismic-reactjs'

const About = props => (
  <div className="w-full h-full p-32 bg-white" id={props.slice.slice_type}>
    <div className="container flex flex-wrap align-items-center mx-auto">
      <div className="w-full text-center mb-16">
        <img src="https://images.prismic.io/thecia/3dafb445-8cc7-4ca4-a5c9-4e6c2b00c321_rsz_cia-shield-final-color.png" width="64" alt="Cannabis Intelligence Agency Inc." className="mb-4 mx-auto" />
        {RichText.render(props.slice.primary.title1)}
      </div>
      <div className="w-4/12">
        <div className="px-16 pt-12 pb-8 uppercase text-5xl border-4 border-cia-500 rounded-lg leading-tight bubble relative">
          {RichText.render(props.slice.primary.callout)}
          <style jsx>{`
            .bubble:before {
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
            .bubble:after {
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
      <div className="w-7/12 ml-auto px-12 text-2xl flex items-center">
        <div className="w-full">
          {RichText.render(props.slice.primary.description)}
        </div>
      </div>
    </div>
  </div>
)

export default About
