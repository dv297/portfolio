import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import PageLayout from '../PageLayout/PageLayout'
import './index.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
  >
    {data => (
      <div>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Daniel Vu Portfolio' },
            {
              name: 'keywords',
              content:
                'Daniel, Vu, React, Frontend, Developer, Software, Engineering, Music',
            },
          ]}
        />
        <PageLayout>{children}</PageLayout>
      </div>
    )}
  </StaticQuery>
)

Layout.propTypes = {
  children: PropTypes.node,
}

export default Layout
