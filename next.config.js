const withCSS = require('@zeit/next-css')
const { parsed: localEnv } = require('dotenv').config()
const webpack = require('webpack')

module.exports = withCSS({
  webpack(config) {
    config.plugins.push(new webpack.EnvironmentPlugin(localEnv))

    return config
  },
  env: {
    PRISMIC: process.env.PRISMIC,
    STATICKIT_DEPLOY_KEY: process.env.STATICKIT_DEPLOY_KEY,
    STATICKIT_SITE_ID: process.env.STATICKIT_SITE_ID,
    STATICKIT_SIGNUP_FORM_KEY: process.env.STATICKIT_SIGNUP_FORM_KEY
  },
  webpack: function (config) {
    config.module.rules.push({
      test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 100000,
          name: '[name].[ext]'
        }
      }
    })
    return config
  }
})
