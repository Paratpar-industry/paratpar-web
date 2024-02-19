import React, { Fragment, useEffect, useState } from "react";

import { Link, NavLink } from "react-router-dom";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { NavPath } from "../common/nevigation/NavPath";
import { mainProductArr } from "../data/Product.ts";
const Navbar = () => {
  //   const [showNav, setShowNav] = useState(false);
  //   const [activeDropdown, setActiveDropdown] = useState(false);

  //   function navToggle() {
  // setActiveDropdown(!activeDropdown);
  //   }
  const nav = useNavigate();
  const location = useLocation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    window.scrollTo({ top: 0 });
    nav(location.pathname);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Fragment>
      {/* Navbar & Carousel Start */}
      <div className="container-fluid position-relative p-0">
        <nav className="navbar navbar-expand-lg navbar-dark px-5 py-3 py-lg-0">
          <NavLink to="/" className="navbar-brand p-0">
            <h1 className="m-0">
              {/* <i className="fa fa-user-tie me-2" /> */}
              Paratpar
            </h1>
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            {/*   data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded={isDropdownOpen ? "true" : "false"}
            aria-label="Toggle navigation"
            onClick={toggleDropdown} */}
            <span className="fa fa-bars" />
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto py-0">
              <NavLink to={NavPath.HomeRoute} className="nav-item nav-link">
                Home
              </NavLink>
              <NavLink to={NavPath.AboutRoute} className="nav-item nav-link">
                About
              </NavLink>
              <div
                className={`nav-item dropdown ${isDropdownOpen ? "show" : ""}`}
                onBlur={closeDropdown}
                onMouseEnter={toggleDropdown}
                onMouseLeave={closeDropdown}
              >
                <NavLink
                  to={NavPath.ProductRoute}
                  className="nav-link dropdown-toggle"
                  onClick={toggleDropdown}
                >
                  Product
                </NavLink>
                <div
                  className={`dropdown-menu m-0 ${
                    isDropdownOpen ? "show" : ""
                  }`}
                >
                  {mainProductArr
                    .filter((item) => parseInt(item.Shortorder) !== 0) // Filter out items with Shortorder not equal to 0
                    .sort(
                      (a, b) => parseInt(a.Shortorder) - parseInt(b.Shortorder)
                    )
                    .map((item, index) => (
                      <NavLink
                        key={index}
                        to={NavPath.ProducDetailtRoute(item.path)} // Using ProductDetailRoute method to generate dynamic route
                        className="dropdown-item"
                        onClick={toggleDropdown} // Close dropdown when an item is clicked
                      >
                        {item.name}
                      </NavLink>
                    ))}
                </div>
              </div>
              <NavLink to={NavPath.Quality} className="nav-item nav-link">
                Quality
              </NavLink>
              <NavLink to={NavPath.ContactRoute} className="nav-item nav-link">
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
