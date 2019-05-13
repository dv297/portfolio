import React from 'react'
import PropTypes from 'prop-types'
import FontAwesome from 'react-fontawesome'

import './Navbar.css'

function Navbar(props) {
  return (
    <nav className="navbar">
      <div className="navbar-toggle" onClick={props.onMenuToggle}>
        <FontAwesome name="bars" />
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  onMenuToggle: PropTypes.func.isRequired,
}

export default Navbar
