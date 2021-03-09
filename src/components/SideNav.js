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
          <h1>LOTR</h1>
          <h3>Poems</h3>
        </div>

        <div className="book-icon-group">
          <NavLink exact to="/" activeClassName="active">
            <i class="las la-book"></i>
            <h2>All Poems</h2>
          </NavLink>

          <NavLink to="/fotr" activeClassName="active">
            <i className="las la-ring"></i>
            <h2>The Fellowship of The Ring</h2>
          </NavLink>

          <NavLink to="/twotowers" activeClassName="active">
            <i className="las la-monument"></i>
            <h2>Two Towers</h2>
          </NavLink>

          <NavLink to="/rotk" activeClassName="active">
            <i className="las la-dungeon"></i>
            <h2>The Return of the King</h2>
          </NavLink>
        </div>

        <div className="page-icon-group">
          <NavLink to="/home" activeClassName="active">
            <i className="las la-home"></i>
            <h2>Home</h2>
          </NavLink>

          <NavLink to="/about" activeClassName="active">
            <i className="las la-scroll"></i>
            <h2>About</h2>
          </NavLink>

          <NavLink to="/contact" activeClassName="active">
            <i class="las la-envelope"></i>
            <h2>Contact</h2>
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
