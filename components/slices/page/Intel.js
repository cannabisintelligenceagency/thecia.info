import { Link } from 'prismic-reactjs'
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Intel = props => {
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

  return(
    <div className="w-full pt-32 pb-20 flex justify-center">
      <div className="container -mx-3 flex flex-wrap">
        {props.slice.items.map((item,i) => {
          let pubDate = new Date(item.intel.data.published)
          return(
            <div className="w-1/2 px-3 mb-12 flex" key={i}>
              <Document
                className="mr-4 light-shadow"
                file={{
                  url: Link.url(item.intel.data.download_link)
                }}
              >
                <Page pageNumber={1} width={160} />
              </Document>
              <div>
                <span className="text-gray-700 font-work font-semibold uppercase">{item.intel.data.resource_category.data.name[0].text}</span>
                <h3 className="text-2xl uppercase font-work font-semibold leading-tight">{item.intel.data.title[0].text}</h3>
                <span className="text-sm uppercase text-cia-600 block mb-3 font-work font-semibold">{pubDate.toLocaleDateString("en-US", options)}</span>
                <p className="text-gray-700">{item.summary[0].text}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default Intel
