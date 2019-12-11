import { Fragment } from 'react'
import Head from 'next/head'

export default () => (
  <Fragment>
    <Head>
      <meta charSet="utf-8" />
    </Head>
    <style jsx global>{`
      body {
        padding-top: 95px;
      }
    `}</style>
  </Fragment>
)
