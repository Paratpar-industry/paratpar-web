import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <Fragment>
      {/* Footer Start */}
      <div
        className="container-fluid bg-dark text-light mt-5 wow fadeInUp"
        data-wow-delay="0.1s"
      >
        <div className="container">
          <div className="row gx-5">
            <div className="col-lg-12 col-md-6">
              <div className="row gx-5">
                <div className="col-lg-4 col-md-12 pt-5 mb-5">
                  <div className="section-title section-title-sm position-relative pb-3 mb-4">
                    <h3 className="text-light mb-0">Get In Touch</h3>
                  </div>
                  <div className="d-flex mb-2">
                    <i className="bi bi-geo-alt text-primary me-2" />
                    <p className="mb-0">
                      <a
                        href="https://maps.app.goo.gl/FkqPKfuf3gCJUYLP6"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "white" }}
                        onMouseEnter={(e) => (e.target.style.color = "#06A3DA")}
                        onMouseLeave={(e) => (e.target.style.color = "white")}
                      >
                        <address>
                          Ketan Estate, Plot no 28, Behind Godown Zone, Dared,
                          Jamnagar,
                        </address>
                      </a>
                    </p>
                  </div>
                  <div className="d-flex mb-2">
                    <i className="bi bi-envelope-open text-primary me-2" />
                    <p className="mb-0">
                      {" "}
                      <a
                        href="mailto:Paratparindustry28@gmail.com"
                        style={{ color: "white" }}
                        onMouseEnter={(e) => (e.target.style.color = "#06A3DA")}
                        onMouseLeave={(e) => (e.target.style.color = "white")}
                        // className="text-primary mb-0"
                      >
                        Paratparindustry28@gmail.com
                      </a>
                    </p>
                  </div>
                  <div className="d-flex mb-2">
                    <i className="bi bi-telephone text-primary me-2" />
                    <p className="mb-0">
                      <a
                        href="tel:+919586176608"
                        style={{ color: "white" }}
                        onMouseEnter={(e) => (e.target.style.color = "#06A3DA")}
                        onMouseLeave={(e) => (e.target.style.color = "white")}
                      >
                        +91 9586176608
                      </a>
                    </p>
                  </div>
                  {false && (
                    <div className="d-flex mt-4">
                      <a className="btn btn-primary btn-square me-2" href="/">
                        <i className="fab fa-twitter fw-normal" />
                      </a>
                      <a className="btn btn-primary btn-square me-2" href="/">
                        <i className="fab fa-facebook-f fw-normal" />
                      </a>
                      <a className="btn btn-primary btn-square me-2" href="/">
                        <i className="fab fa-linkedin-in fw-normal" />
                      </a>
                      <a className="btn btn-primary btn-square" href="/">
                        <i className="fab fa-instagram fw-normal" />
                      </a>
                    </div>
                  )}
                </div>
                <div className="col-lg-4 col-md-12 pt-0 pt-lg-5 mb-5">
                  <div className="section-title section-title-sm position-relative pb-3 mb-4">
                    <h3 className="text-light mb-0">Quick Links</h3>
                  </div>
                  <div className="link-animated d-flex flex-column justify-content-start">
                    <a className="text-light mb-2" href="/">
                      <i className="bi bi-arrow-right text-primary me-2" />
                      Home
                    </a>
                    <a className="text-light mb-2" href="/about">
                      <i className="bi bi-arrow-right text-primary me-2" />
                      About Us
                    </a>

                    <a className="text-light mb-2" href="/product">
                      <i className="bi bi-arrow-right text-primary me-2" />
                      Product
                    </a>
                    <a className="text-light" href="/contact">
                      <i className="bi bi-arrow-right text-primary me-2" />
                      Contact Us
                    </a>
                  </div>
                </div>
                <div className="col-lg-4 col-md-12 pt-0 pt-lg-5 mb-5">
                  <div className="section-title section-title-sm position-relative pb-3 mb-4">
                    <h3 className="text-light mb-0">Popular Links</h3>
                  </div>
                  <div className="link-animated d-flex flex-column justify-content-start">
                    <a className="text-light mb-2" href="/">
                      <i className="bi bi-arrow-right text-primary me-2" />
                      Home
                    </a>
                    <a className="text-light mb-2" href="/about">
                      <i className="bi bi-arrow-right text-primary me-2" />
                      About Us
                    </a>

                    <a className="text-light mb-2" href="/product">
                      <i className="bi bi-arrow-right text-primary me-2" />
                      Product
                    </a>
                    <a className="text-light" href="/contect">
                      <i className="bi bi-arrow-right text-primary me-2" />
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="container-fluid text-white"
        style={{ background: "#061429" }}
      >
        <div className="container text-center">
          <div className="row justify-content-end">
            <div className="col-lg-12 col-md-12">
              <div className="footer-legal text-center position-relative"></div>
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ height: 75 }}
              >
                <p className="mb-0">
                  © Copyright{" "}
                  <NavLink className="text-white border-bottom" to="/">
                    <span>Paratpar industries</span>
                  </NavLink>
                  . All Rights Reserved.
                  {/*/*** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. *** /*/}
                  Designed by{" "}
                  <div className="credits">
                    Designed by{" "}
                    <NavLink className="stop" tp="/">
                      Monil Nariya
                    </NavLink>
                  </div>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer End */}
    </Fragment>
  );
};

export default Footer;
