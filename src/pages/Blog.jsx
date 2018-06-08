import React from 'react'
import Link from 'gatsby-link'
import BlogPostListing from '../components/BlogPostListing/BlogPostListing'

import DefaultPageContainer from '../components/DefaultPageContainer/DefaultPageContainer'

const IndexPage = ({ data: { allMarkdownRemark: { edges } } }) => {
  const Posts = edges
    .filter((edge) => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(({ node }) => <BlogPostListing post={node} key={node.id} />)

  return <DefaultPageContainer>{Posts}</DefaultPageContainer>
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
