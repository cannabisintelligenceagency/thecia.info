function linkResolver(doc) {
  if (doc.type === 'homepage') return '/'
  else if (doc.type === 'page') return `/${doc.uid}`
  else if (doc.type === 'post') return `/news/${doc.uid}`
  else return '/';
}

function hrefResolver(doc) {
  if (doc.type === 'page') {
    return `/page?uid=${doc.uid}`
  }
  return '/'
}

const options = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric'
};

module.exports = {
  linkResolver,
  hrefResolver,
  options
}
