import React from 'react'

import './PageLayout.css'
import Navigation from '../Navigation/Navigation'

function PageLayout(props) {
  return (
    <div>
      <div className="page">
        <Navigation>
          <div>{props.children}</div>
        </Navigation>
      </div>
    </div>
  )
}

export default PageLayout
