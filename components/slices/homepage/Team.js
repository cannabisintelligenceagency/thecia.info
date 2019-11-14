import { RichText } from 'prismic-reactjs'

const Team = props => (
  <section className="team" id={props.slice.slice_type}>
    <div className="container mx-auto flex flex-wrap">
      <div className="team-header-container">
        <img src="https://images.prismic.io/thecia/30434b15-453b-44f2-a6ee-c558938a09be_rsz_cia-shield-final-white.png" alt="Cannabis Intelligence Agency Inc." />
        <h2 className="team-header">{RichText.asText(props.slice.primary.title1)}</h2>
      </div>
      {props.slice.items.map((item, i) => (
        <div className="team-member" key={i}>
          <img src={item.image.url} alt={item.image.alt} className="team-photo" />
          <h5 className="team-name">{item.name}</h5>
          <h6 className="team-title">{item.job_title}</h6>
        </div>
      ))}
    </div>
  </section>
)

export default Team
