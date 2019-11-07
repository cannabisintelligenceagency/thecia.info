import SlickSlider from './SlickSlider'
import Vision from './Vision'
import About from './About'
import WhatWeDo from './WhatWeDo'
import Team from './Team'
import Contact from './Contact'
import ConsumerTribe from './ConsumerTribe'

export default props => {
  return props.sliceZone.map((slice, i) => {
    switch (slice.slice_type) {
      case("slider"):
        return <SlickSlider slice={slice} key={i} />
      case("vision"):
        return <Vision slice={slice} key={i} />
      case("about"):
        return <About slice={slice} key={i} />
      case("what_we_do"):
        return <WhatWeDo slice={slice} key={i} />
      case("consumer_tribe"):
        return <ConsumerTribe slice={slice} key={i} />
      case("team"):
        return <Team slice={slice} key={i} />
      case("contact"):
        return <Contact slice={slice} key={i} />
      default:
        return null
    }
  })
}
