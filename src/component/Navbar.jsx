import React, { Fragment, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  //   const [showNav, setShowNav] = useState(false);
  //   const [activeDropdown, setActiveDropdown] = useState(false);

  //   function navToggle() {
  // setActiveDropdown(!activeDropdown);
  //   }

  return (
    <Fragment>
      {/* Navbar & Carousel Start */}
      <div className="container-fluid position-relative p-0">
        <nav className="navbar navbar-expand-lg navbar-dark px-5 py-3 py-lg-0">
          <NavLink href="/" className="navbar-brand p-0">
            <h1 className="m-0">
              <i className="fa fa-user-tie me-2" />
              Paratpar
            </h1>
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="fa fa-bars" />
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto py-0">
              <NavLink to="/" className="nav-item nav-link">
                Home
              </NavLink>
              <NavLink to="/about" className="nav-item nav-link">
                About
              </NavLink>

              <div className="nav-item dropdown">
                <NavLink
                  to="/product"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  Product
                </NavLink>
                <div className="dropdown-menu m-0">
                  <NavLink href="/" className="dropdown-item">
                    automotive parts
                  </NavLink>

                  <NavLink href="/" className="dropdown-item">
                    cable glands
                  </NavLink>

                  <NavLink href="/" className="dropdown-item">
                    earthing &amp; lightening
                  </NavLink>

                  <NavLink href="/" className="dropdown-item">
                    fasteners
                  </NavLink>

                  <NavLink href="/" className="dropdown-item">
                    hydraulic &amp; pneumatic fittings
                  </NavLink>

                  <NavLink href="/" className="dropdown-item">
                    measuring Instruments &amp; sensors
                  </NavLink>

                  <NavLink href="/" className="dropdown-item">
                    moulding inserts
                  </NavLink>

                  <NavLink href="/" className="dropdown-item">
                    neutral bar &amp; blocks
                  </NavLink>

                  <NavLink href="/" className="dropdown-item">
                    oil &amp; gas
                  </NavLink>

                  <NavLink href="/" className="dropdown-item">
                    sanitary &amp; plumbing fittings
                  </NavLink>
                </div>
              </div>
              <NavLink to="/contact" className="nav-item nav-link">
                Contact
              </NavLink>
            </div>

            {/* <button
              type="button"
              className="btn text-primary ms-3"
              data-bs-toggle="modal"
              data-bs-target="#searchModal"
            >
              <i className="fa fa-search" />
            </button> */}
          </div>
        </nav>
       
      </div>
      {/* Navbar & Carousel End */}
    </Fragment>
  );
};

export default Navbar;
