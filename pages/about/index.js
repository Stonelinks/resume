import React from 'react';
import DocumentTitle from 'react-document-title';
import { config } from 'config';

import { Link } from 'react-router';
import { rhythm } from 'utils/typography';
import { prefixLink } from 'gatsby-helpers';

import 'font-awesome/css/font-awesome.css';

const style = {
  img: {
    float: 'left',
    marginTop: rhythm(0.25),
    marginRight: rhythm(0.5),
    marginBottom: rhythm(0.5),
    width: rhythm(5),
    height: rhythm(5),
    borderRadius: '50%',
  },
  p: {
    marginBottom: rhythm(0.5),
  },
  h3: {
    marginBottom: rhythm(0.25),
  },
  socialIcon: {
    marginBottom: rhythm(0.5),
  },
};

class PostsIndex extends React.Component {

  get socialIcons () {
    const socialIcons = [];
    Object.keys(config.socialNetworks).forEach((network) => {
      const URL = config.socialNetworks[network];
      socialIcons.push(
        <a key={URL} href={URL} target="blank_">
          <span className={`fa fa-${network}`} style={style.socialIcon} />
        </a>,
      );
    });

    return (
      <div>
        {socialIcons.reduce((accu, elem) => accu === null ? [elem] : [...accu, ' | ', elem], null)}
      </div>
    );
  }

  render () {
    return (
      <DocumentTitle title={`Posts - ${config.blogTitle}`}>
        <div>
          <img src={prefixLink('/author.png')} alt={config.authorName} style={style.img} />
          <h3 style={style.h3}>{config.authorName}</h3>
          <div>

            <a key={'resume'} href={'http://stonelinks.github.io/resume/'} target="blank_">
                  Résumé
                </a>
            {' | '}
            <a key={'contact'} href={'mailto:lucas.p.doyle@gmail.com?Subject=Hello'} target="blank_">
                  Contact
                </a>
          </div>
          {this.socialIcons}
          <p style={style.p}>
            I'm a roboticist, engineer, web developer, runner and furniture maker. I live in San Francisco where I work at <a target="blank_" href="http://www.airware.com/">Airware</a> building an operating system for commercial drones.
          </p>
          <p style={style.p}>
            Prior to SF, I lived in Tokyo for two years where I was the 4th employee of a Japanese startup called <a target="blank_" href="http://mujin.co.jp/en/">MUJIN</a> where I built tools to make industrial robots efficient and easy for others to program. I spent time during my college years at the Harvard-Smithsonian Center for Astrophysics developing systems to fabricate experimental X-ray optics.
          </p>
          <p style={style.p}>
            I constantly have <Link to={prefixLink('/projects/')}>side projects</Link> going on and am a naturally curious individual. I'm most excited when I'm learning new things and making technology useful for other people.
          </p>
          <p style={style.p}>
             Here is my <a target="blank_" href="https://gist.github.com/Stonelinks/1df867c1bb830a8c0c67">cryptographic proof of identity</a> for all the nerds out there.
          </p>
        </div>
      </DocumentTitle>
    );
  }
}

PostsIndex.propTypes = {
  route: React.PropTypes.object,
};

export default PostsIndex;
