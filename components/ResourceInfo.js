import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';
import { linkResolver } from '../helpers'
import { Link } from 'prismic-reactjs'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const ResourceInfo = props => {
  return(
    <Document
      className="mr-4 light-shadow"
      file={{
        url: Link.url(props.doc.data.download_link)
      }}
    >
      <Page pageNumber={1} width={340} />
    </Document>
  )
}
export default ResourceInfo
