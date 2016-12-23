import React from 'react';
import DocumentTitle from 'react-document-title';
import { rhythm } from 'utils/typography';
import { config } from 'config';

import PostsList from 'components/PostsList';
import ProjectList from 'components/ProjectList';

class SiteIndex extends React.Component {
  render () {
    return (
      <DocumentTitle title={config.blogTitle}>
        <div>
          <PostsList route={this.props.route} limit={5} />
          <ProjectList route={this.props.route} limit={5} />
        </div>
      </DocumentTitle>
    );
  }
}

SiteIndex.propTypes = {
  route: React.PropTypes.object,
};

export default SiteIndex;
