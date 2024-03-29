import { useEffect } from "react";
import React from "react";
import "../style/ErrorPage.css";

import { NavLink, useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 11000);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  return (
    <div className="body1">
      <div
        className="container-fluid bg-primary py-5 bg-header"
        style={{ marginBottom: 90 }}
      >
        <div className="row py-5">
          <div className="col-12 pt-lg-5 mt-lg-5 text-center">
            <h1 className="display-4 text-white animated zoomIn">Not Found</h1>
            <NavLink to="/" className="h5 text-white">
              Home
            </NavLink>
            <i className="far fa-circle text-white px-2" />
           
          </div>
        </div>
      </div>
      <div className="breadcrumbs d-flex align-items-center">
        <div
          className="container position-relative d-flex flex-column align-items-center"
          data-aos="fade"
        >
          <h2> Sorry!</h2>
          <h6> The page you're looking for can't be found</h6>
        </div>
      </div>
      <section id="not-found">
        <div className="container h2 text-primary1 text-center ">
          You Will Be Redirect To Home page In Few Moment
          <div className="container h3 text-primary1 text-center">
            Thank You ....
          </div>
          <br />
        </div>
        {/* <div id="title" className="text-primary1">
          404 Error Page
        </div>
        <div className="circles">
          <p className="text-primary">
            404
            <br />
            <small className="text-primary">PAGE NOT FOUND</small>
          </p>
          <span className="circle big"></span>
          <span className="circle med"></span>
          <span className="circle small"></span>
        </div> */}
      </section>
    </div>
  );
};

export default ErrorPage;
