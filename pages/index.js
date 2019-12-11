import { Fragment } from 'react'
import { getHomepage } from '../helpers/api'
import Slices from '../components/slices/homepage'
import Meta from '../components/Meta'
import HomepageNavbar from '../components/HomepageNavbar'
import HomepageFooter from '../components/HomepageFooter'

const renderSlices = arr => {
  if (arr.length === 0) {
    return <p>No slices yet, please add one.</p>
  } else {
    return <Slices sliceZone={arr} />
  }
}

const Index = ({ doc, settings }) =>
  <Fragment>
    <Meta doc={doc.data} />
    <HomepageNavbar
      siteSettings={settings}
      navId={doc.data.navbar.id}
    />
    {doc && renderSlices(doc.data.body)}
    {doc.data.footer_navbar && doc.data.footer_navbar.id &&
      <HomepageFooter footerNavId={doc.data.footer_navbar.id} />
    }
  </Fragment>


Index.getInitialProps = async context => {
  const doc = await getHomepage()
  return { doc }
}

export default Index
