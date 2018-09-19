import React from "react"

import { Columns, Column } from "./Columns"
import ExternalLink from "./ExternalLink"
import Styles from "./Styles"
import { FaExternalLinkAlt } from "react-icons/fa"

const styles = Styles.Create({
  root: {
    marginTop: Styles.vars.spacing.large
  },
  companyColumn: {
    flexBasis: "60%"
  },
  whereColumn: {
    flexBasis: "25%"
  },
  durationColumn: {
    flexBasis: "40%"
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
        <Column style={styles.companyColumn}>
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
        <Column style={styles.durationColumn}>
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
