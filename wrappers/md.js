import React from "react"
import { fixLinks, getPageDate } from "utils"

import { rhythm } from "utils/typography"
import { config } from "config"

import "font-awesome/css/font-awesome.min.css"

const style = {
  h1: {
    marginTop: 0,
    marginBottom: rhythm(0.25)
  },
  date: {
    marginTop: rhythm(0.25),
    marginBottom: rhythm(0.5),
    fontSize: rhythm(0.5),
    color: "gray"
  }
}

class MarkdownWrapper extends React.Component {
  componentDidMount() {
    fixLinks(this.refs.markdown, this.context.router)
  }

  render() {
    const { route } = this.props
    const page = route.page.data

    const header = (
      <div>
        <h1 style={style.h1}>{page.title}</h1>
        {page.date && <div style={style.date}>{getPageDate(route.page)}</div>}
      </div>
    )

    const footer = (
      <div>
        <hr style={style.hr} />
      </div>
    )

    return (
      <div className="markdown">
        {header}
        <div
          className="article"
          ref="markdown"
          dangerouslySetInnerHTML={{ __html: page.body }}
        />
        {footer}
      </div>
    )
  }
}

MarkdownWrapper.propTypes = {
  route: React.PropTypes.object
}

MarkdownWrapper.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default MarkdownWrapper
