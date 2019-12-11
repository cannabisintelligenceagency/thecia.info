import MediaEmbed from './MediaEmbed'
import Intel from './Intel'
import LatestNews from './LatestNews'

export default props => {
  return props.sliceZone.map((slice, i) => {
    switch (slice.slice_type) {
      case("text"):
        return <div>Slice goes here</div>
      case("media"):
        return <MediaEmbed slice={slice} key={i} />
      case("intel"):
        return <Intel slice={slice} key={i} />
      case("news"):
        return <LatestNews slices={slice} key={i} />
      default:
        return null
    }
  })
}
