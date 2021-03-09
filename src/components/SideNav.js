import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

const SideNav = () => {
  return (
    <header>
      <div className="nav">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarToggleExternalContent"
          aria-controls="navbarToggleExternalContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="las la-bars"></i>
        </button>

        <div className="logo-area">
          <h1>LO</h1>
          <h1>TR</h1>
          <h3>Poems</h3>
        </div>

        <div className="book-icon-group">
          <NavLink exact to="/" activeClassName="active">
            <i class="las la-book"></i>
            <h3>All Poems</h3>
          </NavLink>

          <NavLink to="/fotr" activeClassName="active">
            <i className="las la-ring"></i>
            <h3>The Fellowship of The Ring</h3>
          </NavLink>

          <NavLink to="/twotowers" activeClassName="active">
            <i className="las la-monument"></i>
            <h3>Two Towers</h3>
          </NavLink>

          <NavLink to="/rotk" activeClassName="active">
            <i className="las la-dungeon"></i>
            <h3>The Return of the King</h3>
          </NavLink>
        </div>

        <div className="page-icon-group">
          <NavLink to="/home" activeClassName="active">
            <i className="las la-home"></i>
            <h3>Home</h3>
          </NavLink>

          <NavLink to="/about" activeClassName="active">
            <i className="las la-scroll"></i>
            <h3>About</h3>
          </NavLink>

          <NavLink to="/contact" activeClassName="active">
            <i class="las la-envelope"></i>
            <h3>Contact</h3>
          </NavLink>
        </div>
      </div>

      <div className="collapse" id="navbarToggleExternalContent">
        <div className="p-4">
          <Link to="/home">
            <h2>Home</h2>
          </Link>
          <Link to="/about">
            <h2>About</h2>
          </Link>
          <Link to="/contact">
            <h2>Contact</h2>
          </Link>
        </div>
      </div>
    </header>
  );
};
export default SideNav;
