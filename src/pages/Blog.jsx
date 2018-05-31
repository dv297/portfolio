/**
 * @license
 * Copyright &copy 2018 Cerner Corporation
 *
 * @author Daniel Vu
 */

import React from 'react';

import BlogPost from '../components/BlogPost/BlogPost';
import DefaultPageContainer from '../components/DefaultPageContainer/DefaultPageContainer';

const Blog = () => {
  return (
    <DefaultPageContainer>
      <BlogPost />
    </DefaultPageContainer>
  );
};

export default Blog;
