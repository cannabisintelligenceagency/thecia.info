import '../../../styles/slider.css'
import Slider from "react-slick"
import MagicSliderDots from 'react-magic-slider-dots'


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
        <div className="w-full h-screen slider-image" key={i}>
          <style jsx>{`
            .slider-image {
              background-size: cover;
              background: url(${item.image.url}) no-repeat center center;
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
  </div>
)

export default SlickSlider
