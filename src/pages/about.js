import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const About = () => (
  <Layout>
    <h1>About</h1>
    <p>This is the about me.</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default About
