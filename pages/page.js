import { Fragment } from 'react'
import { getPage } from '../helpers/api'
import NavbarVariant from '../components/NavbarVariant'
import Nav from '../components/Nav'
import Slices from '../components/slices/page'
import Meta from '../components/Meta'
import PageStyle from '../components/PageStyle'
// import Footer from '../components/Footer'

const renderSlices = arr => {
  if (arr.length === 0) {
    return <p>No slices yet, please add one.</p>
  } else {
    return <Slices sliceZone={arr} />
  }
}

const Page = ({ doc, settings }) =>
  <Fragment>

    <Meta doc={doc.data} />
    <PageStyle />
    <NavbarVariant
      siteSettings={settings}
      navId={doc.data.navbar.id}
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



        <div className="bg-grey-100 text-gray-800">
          <div className="mx-auto">
            <div className="relative">
              <div className="relative lg:flex overflow-hidden">
                <div className="h-56 lg:h-auto lg:w-5/12 relative flex items-center justify-center">
                  <img className="absolute h-full w-full object-cover" src={doc.data.open_graph_image.url} alt={doc.data.open_graph_image.alt} />
                  <div className="absolute inset-0 bg-cia-700 opacity-75"></div>
                  <h1 className="relative text-white font-semibold font-work uppercase text-5xl">{doc.data.title[0].text}</h1>
                </div>
                <div className="relative lg:w-7/12 bg-gray-200">
                  <svg className="absolute h-full text-gray-200 w-24 -ml-12" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <polygon points="50,0 100,0 50,100 0,100" />
                  </svg>
                  <div className="relative py-12 lg:py-24 px-8 lg:px-32 text-gray-700 leading-relaxed">
                    <p className="text-lg">
                      This is just a test to provide some text on this element. Minim excepteur exercitation eiusmod proident id voluptate. Nisi enim dolore irure nisi ex enim labore mollit dolore incididunt nostrud elit ut. Irure culpa qui aliqua velit pariatur labore. Nulla voluptate sunt do pariatur sunt nisi laborum in esse ad.
                    </p>
                    <p className="mt-6">
                      <a href="#" className="font-medium text-lg text-green-600 hover:text-green-900">Learn more about our users &rarr;</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>



      {doc && renderSlices(doc.data.body)}
      <Footer />

  </Fragment>

Page.getInitialProps = async context => {
  const { uid } = context.query
  // const nav = await getNavigation()
  const doc = await getPage(uid)
  // const footer = await getFooter()
  return { doc }
}

export default Page
