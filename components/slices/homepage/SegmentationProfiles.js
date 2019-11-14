import { RichText } from 'prismic-reactjs'

const SegmentationProfiles = props => (
  <React.Fragment>
    <div className="segmentation" id={props.slice.slice_type}>
      <div className="container flex flex-wrap mx-auto">
        <div className="segmentation-header-container">
          <img src="https://images.prismic.io/thecia/3dafb445-8cc7-4ca4-a5c9-4e6c2b00c321_rsz_cia-shield-final-color.png"  alt="Cannabis Intelligence Agency Inc." />
          <h2 className="segmentation-header">{RichText.asText(props.slice.primary.title1)}</h2>
        </div>
        <div className="segmentation-subtext">
          {RichText.render(props.slice.primary.description)}
        </div>
        {props.slice.items.map((item, i) => (
          <div className="segmentation-profile" key={i}>
            <div className="segmentation-profile-header">
              {item.title1}
            </div>
            <div className="segmentation-profile-body">
              {RichText.render(item.description)}
            </div>
          </div>
        ))}
      </div>
    </div>
    <img src={props.slice.primary.image.url} alt={props.slice.primary.image.alt} className="w-full" />
  </React.Fragment>
)

export default SegmentationProfiles
