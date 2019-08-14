const ghpages = require('gh-pages')

ghpages.publish(
  'public',
  {
    branch: 'master',
    repo: 'https://github.com/afxjzs/doug-is.git',
  },
  () => {
    console.log('Deploy Complete!')
  }
)
