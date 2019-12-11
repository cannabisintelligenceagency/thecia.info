import React from 'react'
import Swiper from 'react-id-swiper'
import '../../../styles/swiper.css'

const Personas = props => {
  const params = {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    loop: true,
    slidesPerView: 4,
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 150,
      modifier: 1,
      slideShadows: true
    },
    breakpoints: {
      1024: {
        slidesPerView: 4
      },
      768: {
        slidesPerView: 3
      },
      640: {
        slidesPerView: 2
      },
      320: {
        slidesPerView: 1,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  }
  return (
    <div className="persona-container">
      <Swiper {...params}>
        {props.slice.items.map((item, i) => (
          <div className="img-container" key={i}>
            <img src={item.image.url} alt={item.image.alt} />
            <span
              className="persona-content">
                {item.text[0].text}
              </span>
          </div>
        ))}
      </Swiper>
    </div>
  )
};
export default Personas;
