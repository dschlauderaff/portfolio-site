import React from 'react'
import Link from 'gatsby-link'
import Container from '../components/container'

const IndexPage = () => (
  <Container>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/blog/">Go to the blog</Link>
  </Container>
)

export default IndexPage
