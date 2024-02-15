/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import Avatar from "react-avatar";

// Inside your render method or functional component body

const AboutUs = () => {
  return (
    <Fragment>
      {/* About Start */}
      <div
        className="container-fluid bg-primary py-5 bg-header"
        style={{ marginBottom: 90 }}
      >
        <div className="row py-5">
          <div className="col-12 pt-lg-5 mt-lg-5 text-center">
            <h1 className="display-4 text-white animated zoomIn">About Us</h1>
            <NavLink to="/" className="h5 text-white">
              Home
            </NavLink>
            <i className="far fa-circle text-white px-2" />
            <NavLink to="/about" className="h5 text-white">
              About
            </NavLink>
          </div>
        </div>
      </div>
      <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-7">
              <div className="section-title position-relative pb-3 mb-5">
                <h5 className="fw-bold text-primary text-uppercase">
                  About Us
                </h5>
                <h1 className="mb-0">
                  Providing High-Quality Brass Products with Precision
                  Engineering
                </h1>
              </div>
              <p className="mb-4">
                At Paratpar Industries, we specialize in manufacturing
                top-quality brass products using state-of-the-art technology and
                precision engineering techniques. With over a decade of
                experience in the industry, we have established ourselves as a
                trusted name in delivering excellence and innovation in every
                product we create.
              </p>
              <div className="row g-0 mb-3">
                <div className="col-sm-6 wow zoomIn" data-wow-delay="0.2s">
                  <h5 className="mb-3">
                    <i className="fa fa-check text-primary me-3" />
                    Award-Winning Solutions
                  </h5>
                  <h5 className="mb-3">
                    <i className="fa fa-check text-primary me-3" />
                    Highly Skilled Team
                  </h5>
                </div>
                <div className="col-sm-6 wow zoomIn" data-wow-delay="0.4s">
                  <h5 className="mb-3">
                    <i className="fa fa-check text-primary me-3" />
                    Round-the-Clock Support
                  </h5>
                  <h5 className="mb-3">
                    <i className="fa fa-check text-primary me-3" />
                    Competitive Prices
                  </h5>
                </div>
              </div>
              <div
                className="d-flex align-items-center mb-4 wow fadeIn"
                data-wow-delay="0.6s"
              >
                <div
                  className="bg-primary d-flex align-items-center justify-content-center rounded"
                  style={{ width: 60, height: 60 }}
                >
                  <i className="fa fa-phone-alt text-white" />
                </div>
                <div className="ps-4">
                  <h5 className="mb-2">Have a question?</h5>
                  <h4 className="text-primary mb-0">
                    <a
                      href="tel:+919586176608"
                      style={{ color: "#06A3DA" }}
                      onMouseEnter={(e) => (e.target.style.color = "#06A3DA")}
                      onMouseLeave={(e) => (e.target.style.color = "#06A3DA")}
                    >
                      {" "}
                      Call us at +91 9586176608
                    </a>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-lg-5" style={{ minHeight: 500 }}>
              <div className="position-relative h-100">
                <img
                  className="position-absolute w-100 h-100 rounded wow zoomIn"
                  data-wow-delay="0.9s"
                  src="img/about.jpg"
                  style={{ objectFit: "cover" }}
                  alt="About Us Image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* About End */}
      {/* Team Start */}
      <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
          <div
            className="section-title text-center position-relative pb-3 mb-5 mx-auto"
            style={{ maxWidth: 600 }}
          >
            <h5 className="fw-bold text-primary text-uppercase">
              Team Members
            </h5>
            <h1 className="mb-0">
              Professional Stuffs Ready to Help Your Business
            </h1>
          </div>
          <div className="row g-5">
            <div className="col-lg-4 wow slideInUp" data-wow-delay="0.3s">
              <div className="team-item bg-light rounded overflow-hidden">
                <div className="team-img position-relative overflow-hidden">
                  <img className="img-fluid w-100" src="/img/rh.png" alt="" />
                  {false && (
                    <div className="team-social">
                      <a
                        className="btn btn-lg btn-primary btn-lg-square rounded"
                        href="/"
                      >
                        <i className="fab fa-twitter fw-normal" />
                      </a>
                      <a
                        className="btn btn-lg btn-primary btn-lg-square rounded"
                        href="/"
                      >
                        <i className="fab fa-facebook-f fw-normal" />
                      </a>
                      <a
                        className="btn btn-lg btn-primary btn-lg-square rounded"
                        href="/"
                      >
                        <i className="fab fa-instagram fw-normal" />
                      </a>
                      <a
                        className="btn btn-lg btn-primary btn-lg-square rounded"
                        href="/"
                      >
                        <i className="fab fa-linkedin-in fw-normal" />
                      </a>
                    </div>
                  )}
                </div>
                <div className="text-center py-4">
                  <h4 className="text-primary">Rigal Hirapra</h4>
                  {/* <p className="text-uppercase m-0">Designation</p> */}
                </div>
              </div>
            </div>
            <div className="col-lg-4 wow slideInUp" data-wow-delay="0.6s">
              <div className="team-item bg-light rounded overflow-hidden">
                <div className="team-img position-relative overflow-hidden">
                  <img className="img-fluid w-100" src="img/vh.png" alt="" />
                  {/* <div className="initials-avatar img-fluid w-100">JD</div> */}

                  {false && (
                    <div className="team-social">
                      <a
                        className="btn btn-lg btn-primary btn-lg-square rounded"
                        href="/"
                      >
                        <i className="fab fa-twitter fw-normal" />
                      </a>
                      <a
                        className="btn btn-lg btn-primary btn-lg-square rounded"
                        href="/"
                      >
                        <i className="fab fa-facebook-f fw-normal" />
                      </a>
                      <a
                        className="btn btn-lg btn-primary btn-lg-square rounded"
                        href="/"
                      >
                        <i className="fab fa-instagram fw-normal" />
                      </a>
                      <a
                        className="btn btn-lg btn-primary btn-lg-square rounded"
                        href="/"
                      >
                        <i className="fab fa-linkedin-in fw-normal" />
                      </a>
                    </div>
                  )}
                </div>
                <div className="text-center py-4">
                  <h4 className="text-primary">Viral Hirapra</h4>
                  {/* <p className="text-uppercase m-0">Designation</p> */}
                </div>
              </div>
            </div>
            <div className="col-lg-4 wow slideInUp" data-wow-delay="0.9s">
              <div className="team-item bg-light rounded overflow-hidden">
                <div className="team-img position-relative overflow-hidden">
                  <img className="img-fluid w-100" src="img/ba.png" alt="" />
                  {false && (
                    <div className="team-social">
                      <a
                        className="btn btn-lg btn-primary btn-lg-square rounded"
                        href="/"
                      >
                        <i className="fab fa-twitter fw-normal" />
                      </a>
                      <a
                        className="btn btn-lg btn-primary btn-lg-square rounded"
                        href="/"
                      >
                        <i className="fab fa-facebook-f fw-normal" />
                      </a>
                      <a
                        className="btn btn-lg btn-primary btn-lg-square rounded"
                        href="/"
                      >
                        <i className="fab fa-instagram fw-normal" />
                      </a>
                      <a
                        className="btn btn-lg btn-primary btn-lg-square rounded"
                        href="/"
                      >
                        <i className="fab fa-linkedin-in fw-normal" />
                      </a>
                    </div>
                  )}
                </div>
                <div className="text-center py-4">
                  <h4 className="text-primary">Bharatbhai Ajudiya</h4>
                  {/* <p className="text-uppercase m-0">Designation</p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Avatar name="John Doe" size="60" round={true} />; */}
      {/* Team End */}
    </Fragment>
  );
};

export default AboutUs;
