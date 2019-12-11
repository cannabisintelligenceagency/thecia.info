import Slider from "react-slick"
import MagicSliderDots from 'react-magic-slider-dots'
import '../../../styles/slider.css'

const settings = {
  dots: true,
  arrows: false,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
  autoplay: true,
  mobileFirst: true,
  appendDots: (dots) => {
    return <MagicSliderDots dots={dots} numDotsToShow={3} dotWidth={30} />
  }
}

const SlickSlider = props => (
  <div id={props.slice.slice_type} >
    <Slider {...settings}>
      {props.slice.items.map((item, i) => (
        <img src={item.image.url} className="object-cover max-h-screen w-full" alt={item.image.alt} key={i}/>
      ))}
    </Slider>
  </div>
)

export default SlickSlider
