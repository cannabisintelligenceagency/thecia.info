import Head from 'next/head'
import { RichText } from 'prismic-reactjs'

const Meta = ({ doc }) =>
  <Head>
    <title>{RichText.asText(doc.title)} - Cannabis Intelligence Agency Inc.</title>
    <meta
      name="viewport"
      content="initial-scale=1.0, width=device-width"
      key="viewport"
    />
    <meta name="description" content={RichText.asText(doc.meta_description)} />
    <meta property="og:title" content={RichText.asText(doc.title)} />
    <meta property="og:image" content={doc.open_graph_image.url} />
  </Head>

export default Meta
