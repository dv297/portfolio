import React from 'react'
import Link from 'gatsby-link'

import './Navigation.css'

const Navigation = props => {
  return (
    <div className="navigation-container">
      <div className="nav-links">
        <Link to="/" onClick={props.toggleSidebarMenu}>
          Home
        </Link>
        <Link to="/Resume" onClick={props.toggleSidebarMenu}>
          About
        </Link>
        <Link to="/Blog" onClick={props.toggleSidebarMenu}>
          Blog
        </Link>
      </div>
      <div className="navigation-content-container">{props.children}</div>
    </div>
  )
}

export default Navigation
