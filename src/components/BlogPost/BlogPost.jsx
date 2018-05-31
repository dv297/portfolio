/**
 * @license
 * Copyright &copy 2018 Cerner Corporation
 *
 * @author Daniel Vu
 */

import React from 'react';

import './BlogPost.css';
import LoremIpsum from '../LoremIpsum';

const BlogPost = () => {
  return (
    <div>
      <h1 className="blog-post-title">New Beginnings</h1>
      <LoremIpsum className="blog-post-content"/>
      <div className="blog-post-footer">
        <div className="blog-post-footer-date">
          <small>May 22, 2018</small>
        </div>
        <div className="blog-post-footer-tags">
          <small>Tags: Personal</small>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
