import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'

const IndexPage = () => (
  <Layout>
    <h1>Hola</h1>
    <p>
      I'm Doug. Co-founder / CTO of{' '}
      <a href="https://www.prettyinstant.com">Pretty Instant, Inc</a>
    </p>
    <Link to="/about/">About</Link>
  </Layout>
)

export default IndexPage
