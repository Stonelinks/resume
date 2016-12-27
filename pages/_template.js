import React from 'react'
import { Container } from 'react-responsive-grid'
import { rhythm, scale } from 'utils/typography'
import { config } from 'config'

const style = {
  header: {
    marginBottom: rhythm(1)
  },
  h1: {
    marginBottom: 0,
    fontSize: scale(1.5).fontSize,
    lineHeight: scale(1.5).lineHeight,
    marginTop: 0
  },
  Container: {
    maxWidth: rhythm(26),
    padding: rhythm(0.75)
  },
  headerItem: {
    display: 'inline-block'
  },
  headerItemSmall: {
    fontSize: '15px',
    lineHeight: '19px'
  },
  left: {
    display: 'inline-block',
    width: '30%',
    position: 'relative',
    bottom: '-4px'
  },
  middle: {
    display: 'inline-block',
    width: '40%',
    textAlign: 'center'
  },
  right: {
    display: 'inline-block',
    width: '30%',
    textAlign: 'right'
  }
}

class Template extends React.Component {

  get socialIcons () {
    const socialIcons = []
    Object.keys(config.socialNetworks).forEach((network) => {
      const URL = config.socialNetworks[network]
      socialIcons.push(
        <a key={URL} href={URL} target='blank_'>
          <div className={`fa fa-${network}`} style={style.socialIcon} />
        </a>,
        )
    })

    return (
      <div>
        {socialIcons.reduce((accu, elem) => accu === null ? [elem] : [...accu, ' | ', elem], null)}
      </div>
    )
  }

  get headerContents () {
    return (
      <div>
        <div style={style.left}>
          <div style={style.headerItemSmall}>
            {config.addressLineOne}
          </div>
          <div style={style.headerItemSmall}>
            {config.addressLineTwo}
          </div>
          <div style={style.headerItemSmall}>
            {config.cellphone}
          </div>
        </div>

        <div style={style.middle}>
          <h1 style={style.h1}>
            {config.name}
          </h1>
          <div style={style.headerItem}>
            <a href={`mailto:${config.email}?Subject=Hello`} target='blank_'>
              {config.email}
            </a>
          </div>
        </div>

        <div style={style.right}>
          <div style={style.headerItem}>
            <a href={config.websiteAddress} target='blank_'>
              {config.websiteName}
            </a>
          </div>
          <div style={style.headerItem}>
            {this.socialIcons}
          </div>
        </div>
      </div>
    )
  }

  render () {
    const { children } = this.props
    return (
      <Container style={style.Container}>
        <header style={style.header}>
          {this.headerContents}
        </header>
        {children}
      </Container>
    )
  }
}

Template.propTypes = {
  children: React.PropTypes.any,
  route: React.PropTypes.object
}

export default Template
