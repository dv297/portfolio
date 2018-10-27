import React from 'react'

import DefaultPageContainer from '../components/DefaultPageContainer/DefaultPageContainer'
import Layout from '../components/Layout'

const NotFoundPage = () => (
  <Layout>
    <DefaultPageContainer>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </DefaultPageContainer>
  </Layout>
)

export default NotFoundPage
