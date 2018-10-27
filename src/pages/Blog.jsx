import React from 'react'
import { graphql } from 'gatsby'

import BlogPostListing from '../components/BlogPostListing/BlogPostListing'

import DefaultPageContainer from '../components/DefaultPageContainer/DefaultPageContainer'
import Layout from '../components/Layout'

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(({ node }) => <BlogPostListing post={node} key={node.id} />)

  return (
    <Layout>
      <DefaultPageContainer>{Posts}</DefaultPageContainer>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
          }
        }
      }
    }
  }
`
