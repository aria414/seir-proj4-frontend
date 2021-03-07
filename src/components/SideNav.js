import React from "react";
import { Link } from "react-router-dom";

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
        <div className="icon">
          <Link to="/">
            <i className="las la-home"></i>
            <h3>All Poems</h3>
          </Link>
        </div>
        <div className="icon">
          <Link to="/fotr">
            <i className="las la-ring"></i>
            <h3>The Fellowship of The Ring</h3>
          </Link>
        </div>
        <div className="icon">
          <Link to="/twotowers">
            <i className="las la-monument"></i>
            <h3>Two Towers</h3>
          </Link>
        </div>
        <div className="icon">
          <Link to="/retotk">
            <i className="las la-dungeon"></i>
            <h3>The Return of the King</h3>
          </Link>
        </div>
      </div>

      <div className="collapse" id="navbarToggleExternalContent">
        <div className="p-4">
          <Link to="home">
            <h2>Home</h2>
          </Link>
          <Link to="about">
            <h2>About</h2>
          </Link>
          <Link to="contact">
            <h2>Contact</h2>
          </Link>
        </div>
      </div>
    </header>
  );
};
export default SideNav;
