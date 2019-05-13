import React from 'react'
import PropTypes from 'prop-types'
import FontAwesome from 'react-fontawesome'
import Link from 'gatsby-link'
import cx from 'classnames'

import './style.css'

const OverlayWrapper = props => {
  if (!props.showOverlay) {
    return <div>{props.children}</div>
  }

  const overlayProps = {}
  if (props.isOpen) {
    overlayProps.onClick = props.toggleSidebarMenu
  }

  return (
    <div
      className={cx({
        'sidebar-overlay': true,
        'sidebar-overlay-open': props.isOpen,
      })}
      {...overlayProps}
    >
      {props.children}
    </div>
  )
}

const Sidebar = props => {
  return (
    <OverlayWrapper {...props} showOverlay={props.isLocked}>
      <div className={cx({ sidebar: true, 'sidebar-open': props.isOpen })}>
        {props.isLocked && (
          <button className="sidebar-close-button">
            <FontAwesome name="close" onClick={props.toggleSidebarMenu} />
          </button>
        )}
        <div className="sidebar-links">
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
      </div>
    </OverlayWrapper>
  )
}

Sidebar.propTypes = {
  toggleSidebarMenu: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  isLocked: PropTypes.bool.isRequired,
}

export default Sidebar
