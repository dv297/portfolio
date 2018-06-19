import React from 'react';
import Link from 'gatsby-link';

import './BlogPostListing.css';

const BlogPostListing = ({ post }) => (
  <div className="blog-post-listing">
    <Link to={post.frontmatter.path} className="blog-post-listing-title">
      {post.frontmatter.title}
    </Link>
    <div className="blog-post-listing-excerpt">{post.excerpt}</div>
    <small>{post.frontmatter.date}</small>
  </div>
);

export default BlogPostListing;
