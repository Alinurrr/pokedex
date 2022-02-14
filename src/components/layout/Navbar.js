import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-md navbar-dark text-white">
          <NavLink to="/" className="navbar-brand col-sm-3 col-md 2 mr-0 align-items-center">Pokedex</NavLink>
        </nav>
      </div>
    );
  }
}

export default Navbar;