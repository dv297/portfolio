import React from 'react'
import Link from 'gatsby-link'
import FontAwesome from 'react-fontawesome'

import './Navbar.css'

class Navbar extends React.Component {
  state = {
    isMenuOpen: false,
  }

  toggleMenu = () => {
    this.setState(({ isMenuOpen }) => ({
      isMenuOpen: !isMenuOpen,
    }))
  }

  closeMenu = () => {
    this.setState(({ isMenuOpen }) => ({
      isMenuOpen: false,
    }))
  }

  render() {
    const navbarItemsClass = this.state.isMenuOpen
      ? 'navbar-items navbar-item-toggle-show'
      : 'navbar-items navbar-item-toggle-hide'

    const NavbarLink = ({ to, children }) => (
      <Link
        to={to}
        className="navbar-link"
        activeClassName="navbar-item-active"
        onClick={this.closeMenu}
      >
        {children}
      </Link>
    )

    return (
      <nav className="navbar">
        <div className="navbar-title">Daniel Vu</div>
        <div className="navbar-toggle navbar-link" onClick={this.toggleMenu}>
          <FontAwesome name="bars" />
        </div>
        <div className={navbarItemsClass}>
          <NavbarLink to="/">
            <div className="navbar-item">Home</div>
          </NavbarLink>
          <NavbarLink to="/Resume">
            <div className="navbar-item">Resume</div>
          </NavbarLink>
          <NavbarLink to="/Blog">
            <div className="navbar-item">Blog</div>
          </NavbarLink>
          <NavbarLink to="/Contact">
            <div className="navbar-item">Contact</div>
          </NavbarLink>
        </div>
      </nav>
    )
  }
}

export default Navbar
