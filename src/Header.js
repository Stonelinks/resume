import React from "react"

import { FaDownload } from "react-icons/fa"

import { Columns, Column } from "./Columns"
import ExternalLink from "./ExternalLink"
import Styles from "./Styles"
import isPDF from "./isPDF"

const PDF_LINK = "http://stonelinks.org/resume/lucas_doyle_resume.pdf"

const styles = Styles.Create({
  headerTitleText: {
    fontSize: Styles.vars.fontSize.xxl,
    marginBottom: Styles.vars.spacing.small
  },
  addressText: {
    marginBottom: !isPDF ? Styles.vars.spacing.xs : null
  },
  iconStyle: {
    height: Styles.vars.lineHeights.regular,
    marginTop: Styles.vars.spacing.small
  },
  pdfIconStyle: {
    marginTop: Styles.vars.spacing.small,
    marginRight: Styles.vars.spacing.small
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
          <div style={styles.addressText}>{addressLineOne}</div>
          <div style={styles.addressText}>{addressLineTwo}</div>
          <div style={styles.addressText}>{cellphoneNumber}</div>
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

          {!isPDF && (
            <div>
              <ExternalLink download href={PDF_LINK}>
                <FaDownload style={styles.pdfIconStyle} />
                Download as PDF
              </ExternalLink>
            </div>
          )}
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
