const ghpages = require('gh-pages')

ghpages.publish(
  'public',
  {
    branch: 'master',
    repo: 'https://github.com/afxjzs/afxjzs.github.io.git',
  },
  () => {
    console.log('Deploy Complete!')
  }
)
