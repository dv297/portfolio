import React from 'react'
import Helmet from 'react-helmet'

import './BlogPost.css'
import DefaultPageContainer from '../DefaultPageContainer/DefaultPageContainer'

export default function Template({ data }) {
  const { markdownRemark: post } = data
  return (
    <DefaultPageContainer>
      <div className="blog-post-container">
        <Helmet title={`Daniel Vu - ${post.frontmatter.title}`} />
        <div className="blog-post">
          <h1 className="blog-post-title">{post.frontmatter.title}</h1>
          <div className="blog-post-content">
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
            <div className="blog-post-footer-date">
              <small>{post.frontmatter.date}</small>
            </div>
            <div className="blog-post-footer-tags">
              <small>Tags: {post.frontmatter.tags.join(', ')}</small>
            </div>
          </div>
        </div>
      </div>
    </DefaultPageContainer>
  )
}

export const pageQuery = graphql`
    query BlogPostByPath($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path } }) {
            html
            frontmatter {
                date(formatString: "MMMM DD, YYYY")
                path
                title
                tags
            }
        }
    }
`
