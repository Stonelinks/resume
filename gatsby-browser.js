import ReactGA from 'react-ga';
import { config, pages } from 'config';
import find from 'lodash/find';
import _ from 'lodash';
import $ from 'jquery';

import { browserHistory } from 'react-router';

if (config.gaCode) {
  ReactGA.initialize(config.gaCode);
}

exports.onRouteUpdate = (state) => {
  const page = find(pages, { path: state.pathname });

  if (config.gaCode) {
    ReactGA.ga('send', 'pageview', {
      location: location.pathname,
      title: page && page.data && page.data.title ? page.data.title : state.pathname,
      page: state.pathname,
    });
  }
};
