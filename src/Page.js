import React from "react"
import { TypographyStyle, GoogleFont } from "react-typography"
import Typography from "typography"
import theme from "typography-theme-noriega"

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

const Page = ({ children }) => {
  return (
    <React.Fragment>
      <TypographyStyle typography={typography} />
      <GoogleFont typography={typography} />
      <div style={styles.container}>
        <div style={styles.paper}>{children}</div>
      </div>
    </React.Fragment>
  )
}

export default Page
