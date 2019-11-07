import { RichText } from 'prismic-reactjs'

const Contact = props => (
  <div className="p-32 w-full bg-white text-black" id={props.slice.slice_type}>
    <div className="container mx-auto flex flex-wrap">
      <div className="w-full flex items-center justify-center mb-16">
        <img src="https://images.prismic.io/thecia/3dafb445-8cc7-4ca4-a5c9-4e6c2b00c321_rsz_cia-shield-final-color.png" width="64" alt="Cannabis Intelligence Agency Inc." className="mr-6" />
        <h2 className="uppercase text-4xl tracking-wide font-medium">{RichText.asText(props.slice.primary.title1)}</h2>
      </div>
      <div className="w-1/3 px-12">
        <h5 className="text-cia-500 text-2xl font-medium">On The Phone</h5>
        <h4 className="text-3xl">{props.slice.primary.phone}</h4>
      </div>
      <div className="w-1/3 px-12 border-r border-l border-gray-300">
        <h5 className="text-cia-500 text-2xl font-medium">Email</h5>
        <h5 className="text-2xl mb-8">{props.slice.primary.email_1}</h5>
        <h5 className="text-cia-500 text-2xl font-medium">Media Inquiries</h5>
        <h5 className="text-2xl">{props.slice.primary.email_2}</h5>
      </div>
      <div className="w-1/3 px-12">
        <h5 className="text-cia-500 text-2xl font-medium">Our Address</h5>
        <div className="text-2xl">{RichText.render(props.slice.primary.address)}</div>
      </div>
    </div>
  </div>
)

export default Contact
