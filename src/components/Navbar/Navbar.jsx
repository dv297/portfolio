/**
 * @license
 * Copyright &copy 2018 Cerner Corporation
 *
 * @author Daniel Vu
 */

import React from 'react';
import { NavLink } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';

import './Navbar.css';

class Navbar extends React.Component {
  state = {
    isMenuOpen: false,
  };

  toggleMenu = () => {
    this.setState(({ isMenuOpen }) => ({
      isMenuOpen: !isMenuOpen,
    }));
  };

  closeMenu = () => {
    this.setState(({ isMenuOpen }) => ({
      isMenuOpen: false,
    }));
  };

  render() {
    const navbarItemsClass = this.state.isMenuOpen
      ? 'navbar-items navbar-item-toggle-show'
      : 'navbar-items navbar-item-toggle-hide';

    const NavbarLink = ({ to, children }) => (
      <NavLink to={to} className="navbar-link" activeClassName="navbar-item-active" onClick={this.closeMenu} exact>
        {children}
      </NavLink>
    );

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
          <NavbarLink to="/resume">
            <div className="navbar-item">Resume</div>
          </NavbarLink>
          <NavbarLink to="/blog">
            <div className="navbar-item">Blog</div>
          </NavbarLink>
          <NavbarLink to="/contact">
            <div className="navbar-item">Contact</div>
          </NavbarLink>
        </div>
      </nav>
    );
  }
}

export default Navbar;
