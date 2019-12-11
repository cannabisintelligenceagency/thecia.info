
const MediaEmbed = props => {
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

  return(
    <div className="w-full pt-32 pb-20 flex justify-center">
      <div className="container -mx-3 flex flex-wrap">
        {props.slice.items.map((item,i) => {
          let pubDate = new Date(item.published)
          return(
            <div className="w-1/3 px-3 mb-12" key={i}>
              <div dangerouslySetInnerHTML={{ __html: item.embed.html }} className="w-full h-auto embed-container mb-3" />
              <span className="text-sm uppercase font-semibold font-work text-cia-600 block mb-2">{pubDate.toLocaleDateString("en-US", options)}</span>
              <h3 className="text-xl uppercase font-semibold font-work mb-1">{item.title1[0].text}</h3>
              <p className="text-gray-700">{item.summary[0].text}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default MediaEmbed
