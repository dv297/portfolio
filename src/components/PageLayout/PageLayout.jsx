import React from 'react'

import './PageLayout.css'
import Navigation from '../Navigation/Navigation'
import Footer from '../Footer/Footer'

function PageLayout(props) {
  return (
    <div>
      <div className="page">
        <Navigation style={{ flex: 1 }}>
          <div className="page-content">{props.children}</div>
        </Navigation>
        <Footer />
      </div>
    </div>
  )
}

export default PageLayout
