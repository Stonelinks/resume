import React from "react"

import Styles from "./Styles"

const styles = Styles.Create({
  root: {
    marginTop: Styles.vars.spacing.large
  },
  sectionHeaderText: {
    marginBottom: Styles.vars.spacing.small
  },
  horizontalDivider: {
    backgroundColor: Styles.vars.colors.grey0,
    width: "100%",
    height: "1px"
  }
})

const SectionHeading = ({ name, children }) => {
  return (
    <div style={styles.root}>
      <h1 style={styles.sectionHeaderText}>{name}</h1>
      <div style={styles.horizontalDivider} />
      {children}
    </div>
  )
}

export default SectionHeading
