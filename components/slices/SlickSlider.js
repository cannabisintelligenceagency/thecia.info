import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import MagicSliderDots from 'react-magic-slider-dots'
import 'react-magic-slider-dots/dist/magic-dots.css'
import { RichText } from 'prismic-reactjs'

const settings = {
  dots: true,
  arrows: false,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
  autoplay: true,
  appendDots: (dots) => {
    return <MagicSliderDots dots={dots} numDotsToShow={3} dotWidth={30} />
  }
}

const SlickSlider = props => (
  <Slider {...settings}>
    {props.slice.items.map((item, i) => (
      <div className="w-full h-screen slider-image" key={i}>
        <div className="tagline w-full text-center">
          <img src={props.slice.primary.image.url} alt={props.slice.primary.image.alt} className="mb-6 mx-auto" />
          <div className="uppercase text-5xl">{RichText.render(props.slice.primary.tagline)}</div>
        </div>
        <style jsx>{`
          .slider-image {
            background-size: cover;
            background: url(${item.image.url}) no-repeat center;
          }
          .tagline {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
          }
        `}</style>
      </div>
    ))}
  </Slider>
)

export default SlickSlider
