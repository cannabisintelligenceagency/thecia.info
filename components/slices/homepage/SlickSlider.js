import Slider from "react-slick"
import '../../../styles/slider.css'
import MagicSliderDots from 'react-magic-slider-dots'
import 'react-magic-slider-dots/dist/magic-dots.css'

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
  <div id={props.slice.slice_type} >
    <Slider {...settings}>
      {props.slice.items.map((item, i) => (
        <div className="slider-image" key={i}>
          <style jsx>{`
            .slider-image {
              width: 100%;
              height: 100vh;
              background-size: cover;
              background: url(${item.image.url}) no-repeat center center;
            }
          `}</style>
        </div>
      ))}
    </Slider>
  </div>
)

export default SlickSlider
