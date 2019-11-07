import { RichText } from 'prismic-reactjs'

const Team = props => (
  <div className="p-32 w-full bg-black text-white" id={props.slice.slice_type}>
    <div className="container mx-auto flex flex-wrap">
      <div className="w-full flex items-center justify-center mb-24">
        <img src="https://images.prismic.io/thecia/30434b15-453b-44f2-a6ee-c558938a09be_rsz_cia-shield-final-white.png" width="64" alt="Cannabis Intelligence Agency Inc." className="mr-6" />
        <h2 className="uppercase text-4xl tracking-wide font-medium">{RichText.asText(props.slice.primary.title1)}</h2>
      </div>
      {props.slice.items.map((item, i) => (
        <div className="w-1/3" key={i}>
          <img src={item.image.url} alt={item.image.alt} className="w-40 rounded-full mx-auto mb-6" />
          <h5 className="font-bold text-2xl text-center mb-1">{item.name}</h5>
          <h6 className="text-xl text-center">{item.job_title}</h6>
        </div>
      ))}
    </div>
  </div>
)

export default Team
