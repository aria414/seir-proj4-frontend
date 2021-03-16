import { NavLink } from "react-router-dom";

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
          <i className="las la-bars"></i>
        </button>

        <div className="logo-area">
          <h1>LOTR</h1>
          <h3>Poems</h3>
        </div>

        <div className="book-icon-group">
          <NavLink
            exact
            to="/"
            activeClassName="active"
            aria-label="Link to All Poems"
          >
            <i className="las la-book"></i>
            <h2>All Poems</h2>
          </NavLink>

          <NavLink
            to="/fotr"
            activeClassName="active"
            aria-label="Link to the poems from The Fellowship of the Ring"
          >
            <i className="las la-ring"></i>
            <h2>The Fellowship of The Ring</h2>
          </NavLink>

          <NavLink
            to="/twotowers"
            activeClassName="active"
            aria-label="Link to the poems from The Two Towers"
          >
            <i className="las la-monument"></i>
            <h2>Two Towers</h2>
          </NavLink>

          <NavLink
            to="/rotk"
            activeClassName="active"
            aria-label="Link to the poems from The Return of the King"
          >
            <i className="las la-dungeon"></i>
            <h2>The Return of the King</h2>
          </NavLink>
        </div>

        <div className="page-icon-group">
          <NavLink
            to="/home"
            activeClassName="active"
            aria-label="Link to Home Page"
          >
            <i className="las la-home"></i>
            <h2>Home</h2>
          </NavLink>

          <NavLink
            to="/about"
            activeClassName="active"
            aria-label="Link to About Page"
          >
            <i className="las la-scroll"></i>
            <h2>About</h2>
          </NavLink>

          <NavLink
            to="/contact"
            activeClassName="active"
            aria-label="Link to Contact Page"
          >
            <i className="las la-envelope"></i>
            <h2>Contact</h2>
          </NavLink>
        </div>
      </div>

      <div className="collapse" id="navbarToggleExternalContent">
        <div className="p-4">
          <NavLink
            to="/home"
            activeClassName="active"
            aria-label="Link to Home Page"
          >
            <h2>Home</h2>
          </NavLink>
          <NavLink
            to="/about"
            activeClassName="active"
            aria-label="Link to About Page"
          >
            <h2>About</h2>
          </NavLink>
          <NavLink
            to="/contact"
            activeClassName="active"
            aria-label="Link to Contact Page"
          >
            <h2>Contact</h2>
          </NavLink>
        </div>
      </div>
    </header>
  );
};
export default SideNav;
