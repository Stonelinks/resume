import React from "react"

const ExternalLink = props => {
  const cleanLinkText = props.href
    .replace(/https?:\/\//g, "")
    .replace(/\/$/g, "")
  return (
    <a {...props} target="blank_" title={cleanLinkText}>
      {(props.children && props.children) || cleanLinkText}
    </a>
  )
}

export default ExternalLink
