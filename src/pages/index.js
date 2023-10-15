import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'

import Layout from '../components/layout'
// import Image from '../components/image'

const TitleAndDescription = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => <div>{data.site.siteMetadata.title}</div>}
    />
  )
}

const IndexPage = () => (
  <Layout>
    <h1>Hola</h1>
    <p>
      I'm Doug! Co-founder / CTO of{' '}
      <a href="https://www.prettyinstant.com">Pretty Instant, Inc</a>
    </p>
    <Link to="/about/">About</Link>
    <TitleAndDescription />
  </Layout>
)

export default IndexPage
