import { Fragment } from 'react'
import { getPost, getFooter } from '../../helpers/api'
import NavbarVariant from '../../components/NavbarVariant'
import Slices from '../../components/slices/page'
import Meta from '../../components/Meta'
import PageStyle from '../../components/PageStyle'
import Footer from '../../components/Footer'
import { RichText } from 'prismic-reactjs'

const renderSlices = arr => {
  if (arr.length === 0) {
    return <p>No slices yet, please add one.</p>
  } else {
    return <Slices sliceZone={arr} />
  }
}

const Post = ({ doc, settings, footer }) =>
  <Fragment>
      <Meta doc={doc.data} />
      <PageStyle />
      <NavbarVariant
        navId={doc.data.navbar.id}
        siteSettings={settings}
        />

      {/* <div className="py-16 w-full bg-cia-500 text-white">
        <div className="container mx-auto">
          <div className="flex items-center">
            <img src="https://images.prismic.io/thecia/30434b15-453b-44f2-a6ee-c558938a09be_rsz_cia-shield-final-white.png" alt={doc.data.title[0].text}  width="64" className="mr-4"/>
            <h1 className="text-4xl uppercase tracking-wide font-medium leading-snug">
              {doc.data.title[0].text}
            </h1>
          </div>
        </div>
      </div> */}
      <div className="py-24 w-full">
        <div className="container mx-auto flex-wrap flex text-lg text-gray-800">
          {RichText.render(doc.data.body)}
        </div>
      </div>

      {doc && doc.data.body && renderSlices(doc.data.body)}
      <Footer footer={footer} />

  </Fragment>

Post.getInitialProps = async context => {
  const { uid } = context.query
  const doc = await getPost(uid)
  const footer = await getFooter()
  return { doc }
}

export default Post
