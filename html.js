import React from "react"
import { prefixLink } from "gatsby-helpers"
import { GoogleFont, TypographyStyle } from "react-typography"
import { config } from "config"

import typography from "./utils/typography"

const BUILD_TIME = new Date().getTime()

module.exports = React.createClass({
  displayName: "HTML",

  propTypes: {
    body: React.PropTypes.string
  },

  render() {
    const { body } = this.props

    // have to manually include this in prod
    let extraStyles = null
    if (process.env.NODE_ENV === "production") {
      extraStyles = [
        <link rel="stylesheet" type="text/css" href="/font-awesome.css" />
      ]
    }

    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0 maximum-scale=5.0"
          />
          <title>{`${config.name}'s Resume`}</title>
          <TypographyStyle typography={typography} />
          {extraStyles}
          <GoogleFont typography={typography} />
        </head>
        <body>
          <div id="react-mount" dangerouslySetInnerHTML={{ __html: body }} />
          <script src={prefixLink(`/bundle.js?t=${BUILD_TIME}`)} />
        </body>
      </html>
    )
  }
})
