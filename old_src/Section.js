import React from "react"

import { FaExternalLinkAlt } from "react-icons/fa"

import { Columns, Column } from "./Columns"
import ExternalLink from "./ExternalLink"
import Styles from "./Styles"

const styles = Styles.Create({
  root: {
    marginTop: Styles.vars.spacing.large
  },
  firstColumn: {
    flexBasis: "70%"
  },
  lastColumn: {
    flexBasis: "30%"
  },
  iconStyle: {
    marginLeft: Styles.vars.spacing.small,
    marginBottom: "-2px"
  },
  techStack: {
    color: Styles.vars.colors.grey0
  }
})

const Section = ({
  name,
  link,
  where,
  start,
  end,
  title,
  description,
  techStack,
  children
}) => {
  return (
    <div style={styles.root}>
      <Columns>
        <Column style={styles.firstColumn}>
          <h2>
            {name}
            {link && (
              <ExternalLink href={link}>
                <FaExternalLinkAlt style={styles.iconStyle} />
              </ExternalLink>
            )}
          </h2>
          {title && <h4>{title}</h4>}
        </Column>
        <Column style={styles.lastColumn}>
          <div>{where}</div>
          <div>
            {start}
            {end && ` - ${end}`}
          </div>
        </Column>
      </Columns>
      <div>
        {children}
        {techStack && (
          <p style={styles.techStack}>
            <b>Tech stack:</b>
            {` ${techStack}`}
          </p>
        )}
      </div>
    </div>
  )
}

export default Section
