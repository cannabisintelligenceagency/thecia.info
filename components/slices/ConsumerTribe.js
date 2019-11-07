import { RichText } from 'prismic-reactjs'

const ConsumerTribe = props => (
  <div className="w-full h-full p-32 bg-white" id={props.slice.slice_type}>
    <div className="container flex flex-wrap mx-auto">
      <div className="w-full flex items-center justify-center mb-8">
        <img src="https://images.prismic.io/thecia/3dafb445-8cc7-4ca4-a5c9-4e6c2b00c321_rsz_cia-shield-final-color.png" width="64" alt="Cannabis Intelligence Agency Inc." className="mr-6" />
        <h2 className="uppercase text-4xl tracking-wide font-medium">{RichText.asText(props.slice.primary.title1)}</h2>
      </div>
      <div className="w-full text-2xl mb-8 text-center">
        {RichText.render(props.slice.primary.description)}
      </div>
      {props.slice.items.map((item, i) => (
        <div className="w-1/4 px-3" key={i}>
          <div className="w-full">
            <div className="py-4 bg-black text-white uppercase text-center rounded-t-lg">
              {item.title1}
            </div>
            <div className="p-4 border-b border-l border-r rounded-b-lg text-center">
              {RichText.render(item.description)}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
)

export default ConsumerTribe
