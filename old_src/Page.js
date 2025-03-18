import React, { Component } from "react"
import { TypographyStyle, GoogleFont } from "react-typography"
import Typography from "typography"
import theme from "typography-theme-noriega"
import { Motion, spring } from "react-motion"

import Styles from "./Styles"
import isPDF from "./isPDF"

const typography = new Typography({
  ...theme,
  baseFontSize: Styles.vars.fontSize.regular,
  baseLineHeight: Styles.vars.lineHeights.regular,
  blockMarginBottom: 0.5,
  scaleRatio: 1.5
})

const styles = Styles.Create({
  container: {
    backgroundColor: !isPDF ? Styles.vars.colors.grey0 : null
  },
  paper: {
    backgroundColor: Styles.vars.colors.white,
    maxWidth: Styles.vars.pageWidth,
    margin: "0 auto",
    padding: Styles.vars.spacing.large
  }
})

class Page extends Component {
  constructor(props) {
    super(props)

    this.state = {
      easterEggActive: false
    }

    // not the greatest, but seems to be the easiest way of having one global function
    this.checkEasterEggActive = this.checkEasterEggActive.bind(this)
    setInterval(() => {
      this.checkEasterEggActive()
    }, 500)
  }

  checkEasterEggActive() {
    this.setState({
      easterEggActive: window.__easterEggActive
    })
  }

  render() {
    const { children } = this.props
    const { easterEggActive } = this.state
    return (
      <React.Fragment>
        <TypographyStyle typography={typography} />
        <GoogleFont typography={typography} />
        <div style={styles.container}>
          <Motion
            style={{
              x: spring(easterEggActive ? 180 : 0, {
                stiffness: 10,
                damping: 4
              })
            }}
          >
            {({ x }) => {
              const containerStyle = Styles.Create({
                transform: `rotate3d(0, 1, 0, ${x}deg)`
              })

              return (
                <div style={containerStyle}>
                  <div style={styles.paper}>{children}</div>
                </div>
              )
            }}
          </Motion>
        </div>
      </React.Fragment>
    )
  }
}

export default Page
