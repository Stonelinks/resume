import React from "react"

import { Columns, Column } from "./Columns"
import ExternalLink from "./ExternalLink"
import Styles from "./Styles"

const styles = Styles.Create({
  headerTitleText: {
    fontSize: Styles.vars.fontSize.xxl,
    marginBottom: Styles.vars.spacing.small
  },
  iconStyle: {
    height: Styles.vars.lineHeights.regular,
    marginTop: Styles.vars.spacing.regular
  },
  verticalDivider: {
    display: "inline-block",
    marginLeft: Styles.vars.spacing.small,
    marginRight: Styles.vars.spacing.small,
    width: "1px",
    backgroundColor: Styles.vars.colors.grey0,
    height: Styles.vars.lineHeights.regular
  }
})

const Header = ({
  name,
  email,
  cellphoneNumber,
  pdfLink,
  websiteName,
  websiteAddress,
  addressLineOne,
  addressLineTwo,
  socialNetworks
}) => {
  return (
    <div style={styles.root}>
      <Columns>
        <Column>
          <div>{addressLineOne}</div>
          <div>{addressLineTwo}</div>
          <div>{cellphoneNumber}</div>
        </Column>
        <Column centered>
          <h1 style={styles.headerTitleText}>{name}</h1>
          <ExternalLink href={`mailto:${email}?Subject=Hello`}>
            {email}
          </ExternalLink>
        </Column>
        <Column>
          <div>
            <ExternalLink href={websiteAddress} />
          </div>
          <div>
            {socialNetworks.map(({ address, Icon }, index) => (
              <React.Fragment key={index}>
                <ExternalLink href={address}>
                  <Icon style={styles.iconStyle} />
                </ExternalLink>
                {index !== socialNetworks.length - 1 && (
                  <div style={styles.verticalDivider} />
                )}
              </React.Fragment>
            ))}
          </div>
        </Column>
      </Columns>
    </div>
  )
}

export default Header
