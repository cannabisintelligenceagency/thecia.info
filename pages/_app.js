import React, { Fragment } from 'react'
import App from 'next/app'

import { getFooter, getGlobal } from '../helpers/api'

import '../styles/global.css'
import '../styles/tailwind.css'
import '../fa'


class MyApp extends App {
  static async getInitialProps(appContext) {
    const appProps = await App.getInitialProps(appContext);
    const siteSettings = await getGlobal()
    return { ...appProps, siteSettings }
  }

  render() {
    const { Component, pageProps, siteSettings } = this.props
    return <Component {...pageProps} settings={siteSettings} />
  }
}

export default MyApp
