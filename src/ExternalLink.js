import React from "react"

import isPDF from "./isPDF"

const ExternalLink = props => {
  const cleanLinkText = props.href
    .replace(/https?:\/\//g, "")
    .replace(/\/$/g, "")

  const extraProps = {
    target: !isPDF ? "blank_" : null,
    title: cleanLinkText
  }
  return (
    <a {...props} {...extraProps}>
      {(props.children && props.children) || cleanLinkText}
    </a>
  )
}

export default ExternalLink
