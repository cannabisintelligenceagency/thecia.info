import React from 'react'
import { getHomepage, getNavigation, getFooter } from '../helpers/api'
import NavbarHome from '../components/navigation/NavbarHome'
import HomeLayout from '../components/layouts/HomeLayout'
import Slices from '../components/slices'
import Meta from '../components/Meta'
import Footer from '../components/Footer'

const renderSlices = arr => {
  if (arr.length === 0) {
    return <p>No slices yet, please add one.</p>
  } else {
    return <Slices sliceZone={arr} />
  }
}

const Index = ({ doc, nav, footer }) =>
  <React.Fragment>
    <Meta doc={doc.data} />
    <HomeLayout>
      <NavbarHome nav={nav} />
      {doc && renderSlices(doc.data.body)}
      <Footer footer={footer} />
    </HomeLayout>
  </React.Fragment>


Index.getInitialProps = async () => {
  const doc = await getHomepage()
  const nav = await getNavigation()
  const footer = await getFooter()
  return { doc, nav, footer }
}

export default Index
