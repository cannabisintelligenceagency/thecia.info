import { RichText } from 'prismic-reactjs'

const Vision = props => (
  <div className="w-full h-screen bg-cia-500 text-white flex items-center" id={props.slice.slice_type}>
    <div className="container flex flex-wrap mx-auto">
      <div className="w-1/2 px-20">
        <div className="icon-container">
          <img src="https://images.prismic.io/thecia/30434b15-453b-44f2-a6ee-c558938a09be_rsz_cia-shield-final-white.png" width="64" alt="Cannabis Intelligence Agency Inc." />
        </div>
        <div className="content-container">
          {RichText.render(props.slice.primary.first_column)}
        </div>
      </div>
      <div className="w-1/2 px-20">
        <div className="icon-container">
          <img src="https://images.prismic.io/thecia/30434b15-453b-44f2-a6ee-c558938a09be_rsz_cia-shield-final-white.png" width="64" alt="Cannabis Intelligence Agency Inc." />
        </div>
        <div className="content-container">
          {RichText.render(props.slice.primary.second_column)}
        </div>
      </div>
    </div>
    <style jsx>{`
      .icon-container {
        width: 64px;
        float:left;
      }
      .content-container {
        margin-left: 88px;
      }
    `}</style>
  </div>
)

export default Vision
