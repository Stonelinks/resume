import catchLinks from 'catch-links';
import slugify from 'slugify';
import include from 'underscore.string/include';
import uniq from 'lodash/uniq';
import moment from 'moment';

// update internal links to use router
export function fixLinks (ref, router) {
  catchLinks(ref, (href) => {
    const ext = href.split('.').pop().toLowerCase();
    if (['zip', 'png', 'jpg', 'jpeg', 'txt', 'md', 'pdf'].indexOf(ext) === -1) {
      router.push(href);
    } else {
      const link = document.createElement('a');
      link.href = href;
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
    }
  });
}

export function getPageDate (page) {
  return moment(page.data.date).add(0.5, 'days').format(page.data.dateFormat ? page.data.dateFormat : 'MM/DD/YYYY');
}
