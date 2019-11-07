import { RichText } from 'prismic-reactjs'

const WhatWeDo = props => (
  <div className="w-full h-full p-32 what-we-do" id={props.slice.slice_type}>
    <div className="container flex flex-wrap align-items-center mx-auto">
      <div className="w-4/12 text-center text-white flex justify-center items-center">
        <div>
          <img src="https://images.prismic.io/thecia/30434b15-453b-44f2-a6ee-c558938a09be_rsz_cia-shield-final-white.png" width="120" alt="Cannabis Intelligence Agency Inc." className="mx-auto mb-6" />
          <div className="leading-tight">{RichText.render(props.slice.primary.title1)}</div>
        </div>
      </div>
      <div className="w-7/12 ml-auto pl-12 text-3xl text-white leading-snug">
        {RichText.render(props.slice.primary.description)}
      </div>
    </div>
    <style jsx>{`
      .what-we-do {
        background: url(${props.slice.primary.background_image.url}) no-repeat center;
        background-size: cover;
      }
    `}</style>
  </div>
)

export default WhatWeDo
