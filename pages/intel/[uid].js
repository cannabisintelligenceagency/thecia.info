import { Fragment, useState } from 'react'
import { getResource} from '../../helpers/api'
import Navbar from '../../components/Navbar'

import Slices from '../../components/slices/page'
import Meta from '../../components/Meta'
import PageStyle from '../../components/PageStyle'

import ResourceDownload from '../../components/forms/ResourceDownload'
import ResourceInfo from '../../components/ResourceInfo'
import Head from 'next/head'

const Resource = ({ doc, settings }) => {

  return(
    <Fragment>
      <Head>
        <script src="https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit" async defer></script>
      </Head>
      <Meta doc={doc.data} />
      <PageStyle />
      <Navbar
        siteSettings={settings}
        navId={doc.data.navbar.id}
      />


        <div className="py-16 w-full bg-cia-500 text-white">
          <div className="container mx-auto">
            <div className="w-full text-center">
              <img src="https://images.prismic.io/thecia/30434b15-453b-44f2-a6ee-c558938a09be_rsz_cia-shield-final-white.png" alt={doc.data.title[0].text}  width="64" className="mx-auto mb-3"/>
              <h1 className="text-4xl uppercase tracking-wide font-medium leading-snug">
                <small className="uppercase block tracking-wide font-normal">{doc.data.resource_category.data.name[0].text}</small>
                {doc.data.title[0].text}
              </h1>
            </div>
          </div>
        </div>
        <div className="py-24 w-full">
          <div className="container mx-auto flex-wrap flex justify-center">
            <div classnname="w-4/12 text-center">
              <ResourceInfo doc={doc} />
            </div>
            <div className="w-5/12 pl-12 text-lg">
              <ResourceDownload />
            </div>
          </div>
        </div>

        {doc && doc.data.body && renderSlices(doc.data.body)}


    </Fragment>
  )
}

Resource.getInitialProps = async context => {
  const { uid } = context.query
  const doc = await getResource(uid)
  return { doc }
}

export default Resource
