import { RichText } from 'prismic-reactjs'

const Vision = props => (
  <section className="vision" id={props.slice.slice_type}>
    <div className="container flex flex-wrap mx-auto">
      <div className="vision-column-left">
        <div className="vision-icon">
          <img src="https://images.prismic.io/thecia/30434b15-453b-44f2-a6ee-c558938a09be_rsz_cia-shield-final-white.png" alt="Cannabis Intelligence Agency Inc." />
        </div>
        <div className="vision-content">
          {RichText.render(props.slice.primary.first_column)}
        </div>
      </div>
      <div className="vision-column-right">
        <div className="vision-icon">
          <img src="https://images.prismic.io/thecia/30434b15-453b-44f2-a6ee-c558938a09be_rsz_cia-shield-final-white.png" alt="Cannabis Intelligence Agency Inc." />
        </div>
        <div className="vision-content">
          {RichText.render(props.slice.primary.second_column)}
        </div>
      </div>
    </div>
  </section>
)

export default Vision
