/* eslint-disable jsx-a11y/alt-text */
import React, { Fragment } from "react";
import QuateForm from "../component/QuoteForm";
import TestimonialCarousel from "./TestimonialCrowsel";
import { NavLink } from "react-router-dom";
const Home = () => {
  return (
    <Fragment>
      <>
        <div
          id="header-carousel"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
          data-bs-interval="3000"
        >
          <div className="carousel-inner">
            <div className="carousel-item active" style={{ height: "700px" }}>
              <img
                className="w-100 h-100"
                style={{ objectFit: "cover", height: "100%" }}
                src="https://i.postimg.cc/L5DTgGQf/Front-page-image-1.jpg"
                alt="img"
              />
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div className="p-3" style={{ maxWidth: 900 }}>
                  <h5 className="text-white text-uppercase mb-3 animated slideInDown">
                    Creative &amp; Innovative
                  </h5>
                  <h1 className="display-1 text-white mb-md-4 animated zoomIn">
                    Creative &amp; Innovative industries Solution
                  </h1>
                  {/* <a
                    href="/"
                    className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft"
                  >
                    Free Quote
                  </a>
                  <a
                    href="/"
                    className="btn btn-outline-light py-md-3 px-md-5 animated slideInRight"
                  >
                    Contact Us
                  </a> */}
                </div>
              </div>
            </div>
            <div className="carousel-item" style={{ height: "700px" }}>
              <img
                className="w-100 h-100"
                style={{ objectFit: "cover", height: "100%" }}
                src="https://i.postimg.cc/43gnSj7V/crousal-1.jpg"
                alt="img"
              />
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div className="p-3" style={{ maxWidth: 900 }}>
                  <h5 className="text-white text-uppercase mb-3 animated slideInDown">
                    Creative &amp; Innovative
                  </h5>
                  <h1 className="display-1 text-white mb-md-4 animated zoomIn">
                    Creative &amp; Innovative industries Solution
                  </h1>
                  {/* <a
                    href="quote.html"
                    className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft"
                  >
                    Free Quote
                  </a>
                  <a
                    href="/"
                    className="btn btn-outline-light py-md-3 px-md-5 animated slideInRight"
                  >
                    Contact Us
                  </a> */}
                </div>
              </div>
            </div>

            <div className="carousel-item" style={{ height: "700px" }}>
              <img
                className="w-100 h-100"
                style={{ objectFit: "cover", height: "100%" }}
                src="https://i.postimg.cc/tg8QZ3Qq/some-brass-bars-in-my-familys-industry-R0-R6-EB-transformed.jpg"
                alt="img"
              />
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div className="p-3" style={{ maxWidth: 900 }}>
                  <h5 className="text-white text-uppercase mb-3 animated slideInDown">
                    Creative &amp; Innovative
                  </h5>
                  <h1 className="display-1 text-white mb-md-4 animated zoomIn">
                    Creative &amp; Innovative industries Solution
                  </h1>
                  {/* <a
                    href="quote.html"
                    className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft"
                  >
                    Free Quote
                  </a>
                  <a
                    href="/"
                    className="btn btn-outline-light py-md-3 px-md-5 animated slideInRight"
                  >
                    Contact Us
                  </a> */}
                </div>
              </div>
            </div>
            <div className="carousel-item" style={{ height: "700px" }}>
              <img
                className="w-100 h-100"
                style={{ objectFit: "cover", height: "100%" }}
                src="https://i.postimg.cc/mkMnFJ3V/Top-brass-machining-manufacturers-suppliers-usa-min.jpg"
                alt="img"
              />
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div className="p-3" style={{ maxWidth: 900 }}>
                  <h5 className="text-white text-uppercase mb-3 animated slideInDown">
                    Creative &amp; Innovative
                  </h5>
                  <h1 className="display-1 text-white mb-md-4 animated zoomIn">
                    Creative &amp; Innovative industries Solution
                  </h1>
                  {/* <a
                    href="quote.html"
                    className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft"
                  >
                    Free Quote
                  </a>
                  <a
                    href="/"
                    className="btn btn-outline-light py-md-3 px-md-5 animated slideInRight"
                  >
                    Contact Us
                  </a> */}
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#header-carousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#header-carousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        {/* Full Screen Search Start */}
        <div className="modal fade" id="searchModal" tabIndex={-1}>
          <div className="modal-dialog modal-fullscreen">
            <div
              className="modal-content"
              style={{ background: "rgba(9, 30, 62, .7)" }}
            >
              <div className="modal-header border-0">
                <button
                  type="button"
                  className="btn bg-white btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body d-flex align-items-center justify-content-center">
                <div className="input-group" style={{ maxWidth: 600 }}>
                  <input
                    type="text"
                    className="form-control bg-transparent border-primary p-3"
                    placeholder="Type search keyword"
                  />
                  <button className="btn btn-primary px-4">
                    <i className="bi bi-search" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Full Screen Search End */}

        {/* Features Start */}
        <div
          className="container-fluid py-5 wow fadeInUp"
          data-wow-delay="0.1s"
        >
          <div className="container py-5">
            <div
              className="section-title text-center position-relative pb-3 mb-5 mx-auto"
              style={{ maxWidth: 600 }}
            >
              <h5 className="fw-bold text-primary text-uppercase">
                Why Choose Us
              </h5>
              <h1 className="mb-0">
                We Are Here to Grow Your Business Exponentially
              </h1>
            </div>
            <div className="row g-5">
              <div className="col-lg-4">
                <div className="row g-5">
                  <div className="col-12 wow zoomIn" data-wow-delay="0.2s">
                    <div
                      className="bg-primary rounded d-flex align-items-center justify-content-center mb-3"
                      style={{ width: 60, height: 60 }}
                    >
                      <i className="fa fa-cubes text-white" />
                    </div>
                    <h4>Best In Industry</h4>
                    <p className="mb-0">
                      With a focus on excellence and continuous improvement, we
                      strive to exceed industry standards and deliver
                      unparalleled value to our clients.
                    </p>
                  </div>
                  <div className="col-12 wow zoomIn" data-wow-delay="0.6s">
                    <div
                      className="bg-primary rounded d-flex align-items-center justify-content-center mb-3"
                      style={{ width: 60, height: 60 }}
                    >
                      <i className="fa fa-award text-white" />
                    </div>
                    <h4>Quality Excellence and Industry Recognition</h4>
                    <p className="mb-0">
                      At Brasspart Industries, we pride ourselves on delivering
                      unparalleled quality and innovation, setting us apart as a
                      trusted industry leader. you're selecting a partner
                      renowned for its relentless pursuit of quality and
                      innovation, earning admiration from clients and peers
                      alike.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4  wow zoomIn"
                data-wow-delay="0.9s"
                style={{ minHeight: 350 }}
              >
                <div className="position-relative h-100">
                  <img
                    className="position-absolute w-100 h-100 rounded wow zoomIn"
                    data-wow-delay="0.1s"
                    src="img/why-choose-us.AVIF"
                    style={{ objectFit: "cover" }}
                    alt=""
                  />
                </div>
              </div>
              <div className="col-lg-4">
                <div className="row g-5">
                  <div className="col-12 wow zoomIn" data-wow-delay="0.4s">
                    <div
                      className="bg-primary rounded d-flex align-items-center justify-content-center mb-3"
                      style={{ width: 60, height: 60 }}
                    >
                      <i className="fa fa-users-cog text-white" />
                    </div>
                    <h4>Professional Staff</h4>
                    <p className="mb-0">
                      With a wealth of experience and expertise, our team is
                      committed to delivering outstanding results that exceed
                      expectations. We take pride in our work and strive for
                      perfection in everything we do.
                    </p>
                  </div>
                  <div className="col-12 wow zoomIn" data-wow-delay="0.8s">
                    <div
                      className="bg-primary rounded d-flex align-items-center justify-content-center mb-3"
                      style={{ width: 60, height: 60 }}
                    >
                      <i className="fa fa-phone-alt text-white" />
                    </div>
                    <h4>24/7 Support</h4>
                    <p className="mb-0">
                      we provide round-the-clock support to ensure that our
                      customers receive assistance whenever they need it.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Features Start */}
        {/* Service Start */}
        <div
          className="container-fluid py-5 wow fadeInUp"
          data-wow-delay="0.1s"
        >
          <div className="container py-5">
            <div
              className="section-title text-center position-relative pb-3 mb-5 mx-auto"
              style={{ maxWidth: 600 }}
            >
              <h5 className="fw-bold text-primary text-uppercase">
                Our Products
              </h5>
              <h1 className="mb-0">
                Exceptional Brass Products for Various Industries
              </h1>
            </div>
            <div className="row g-5">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`col-lg-4 col-md-6 wow zoomIn`}
                  data-wow-delay={service.delay}
                >
                  <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                    <div className="service-icon">
                      <i className={service.icon} />
                    </div>
                    <h4 className="mb-3">{service.title}</h4>
                    <p className="m-0">{service.description}</p>
                    <NavLink className="btn btn-lg btn-primary rounded" to="#">
                      <i className="bi bi-arrow-right" />
                    </NavLink>
                  </div>
                </div>
              ))}

              {false && (
                <div
                  className="col-lg-4 col-md-6 wow zoomIn"
                  data-wow-delay="0.9s"
                >
                  <div className="position-relative bg-primary rounded h-100 d-flex flex-column align-items-center justify-content-center text-center p-5">
                    <h3 className="text-white mb-3">Call Us For Quote</h3>
                    <p className="text-white mb-3">
                      Clita ipsum magna kasd rebum at ipsum amet dolor justo
                      dolor est magna stet eirmod
                    </p>
                    <h2 className="text-white mb-0">+012 345 6789</h2>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        {/* Service End */}
        {/* Pricing Plan Start */}
        {false && (
          <div
            className="container-fluid py-5 wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <div className="container py-5">
              <div
                className="section-title text-center position-relative pb-3 mb-5 mx-auto"
                style={{ maxWidth: 600 }}
              >
                <h5 className="fw-bold text-primary text-uppercase">
                  Pricing Plans
                </h5>
                <h1 className="mb-0">
                  We are Offering Competitive Prices for Our Clients
                </h1>
              </div>
              <div className="row g-0">
                <div className="col-lg-4 wow slideInUp" data-wow-delay="0.6s">
                  <div className="bg-light rounded">
                    <div className="border-bottom py-4 px-5 mb-4">
                      <h4 className="text-primary mb-1">Basic Plan</h4>
                      <small className="text-uppercase">
                        For Small Size Business
                      </small>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 wow slideInUp" data-wow-delay="0.3s">
                  <div
                    className="bg-white rounded shadow position-relative"
                    style={{ zIndex: 1 }}
                  >
                    <div className="border-bottom py-4 px-5 mb-4">
                      <h4 className="text-primary mb-1">Standard Plan</h4>
                      <small className="text-uppercase">
                        For Medium Size Business
                      </small>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 wow slideInUp" data-wow-delay="0.9s">
                  <div className="bg-light rounded">
                    <div className="border-bottom py-4 px-5 mb-4">
                      <h4 className="text-primary mb-1">Advanced Plan</h4>
                      <small className="text-uppercase">
                        For Large Size Business
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {/* Pricing Plan End */}
        {/* Quote Start */}
        <QuateForm />
        {/* Quote End */}
        {/* Testimonial Start */}
        <div
          className="container-fluid py-5 wow fadeInUp"
          data-wow-delay="0.1s"
        >
          <div className="container py-5">
            <div
              className="section-title text-center position-relative pb-3 mb-4 mx-auto"
              style={{ maxWidth: 600 }}
            >
              <h5 className="fw-bold text-primary text-uppercase">
                Testimonial
              </h5>
              <h1 className="mb-0">What Our Clients Say About Our Product</h1>
            </div>
            {false && (
              <div
                className="owl-carousel testimonial-carousel wow fadeInUp owl-loaded owl-drag"
                data-wow-delay="0.6s"
              >
                <div className="testimonial-item bg-light my-4">
                  <div className="d-flex align-items-center border-bottom pt-5 pb-4 px-5">
                    <img
                      className="img-fluid rounded"
                      src="img/testimonial-1.jpg"
                      style={{ width: "60px", height: "60px" }}
                    />
                    <div className="ps-4">
                      <h4 className="text-primary mb-1">Client Name</h4>
                      <small className="text-uppercase">Profession</small>
                    </div>
                  </div>
                  <div className="pt-4 pb-5 px-5">
                    Dolor et eos labore, stet justo sed est sed. Diam sed sed
                    dolor stet amet eirmod eos labore diam
                  </div>
                </div>
                <div className="testimonial-item bg-light my-4">
                  <div className="d-flex align-items-center border-bottom pt-5 pb-4 px-5">
                    <img
                      className="img-fluid rounded"
                      src="img/testimonial-2.jpg"
                      style={{ width: "60px", height: "60px" }}
                    />
                    <div className="ps-4">
                      <h4 className="text-primary mb-1">Client Name</h4>
                      <small className="text-uppercase">Profession</small>
                    </div>
                  </div>
                  <div className="pt-4 pb-5 px-5">
                    Dolor et eos labore, stet justo sed est sed. Diam sed sed
                    dolor stet amet eirmod eos labore diam
                  </div>
                </div>
                <div className="testimonial-item bg-light my-4">
                  <div className="d-flex align-items-center border-bottom pt-5 pb-4 px-5">
                    <img
                      className="img-fluid rounded"
                      src="img/testimonial-3.jpg"
                      style={{ width: "60px", height: "60px" }}
                    />
                    <div className="ps-4">
                      <h4 className="text-primary mb-1">Client Name</h4>
                      <small className="text-uppercase">Profession</small>
                    </div>
                  </div>
                  <div className="pt-4 pb-5 px-5">
                    Dolor et eos labore, stet justo sed est sed. Diam sed sed
                    dolor stet amet eirmod eos labore diam
                  </div>
                </div>
                <div className="testimonial-item bg-light my-4">
                  <div className="d-flex align-items-center border-bottom pt-5 pb-4 px-5">
                    <img
                      className="img-fluid rounded"
                      src="img/testimonial-4.jpg"
                      style={{ width: "60px", height: "60px" }}
                    />
                    <div className="ps-4">
                      <h4 className="text-primary mb-1">Client Name</h4>
                      <small className="text-uppercase">Profession</small>
                    </div>
                  </div>
                  <div className="pt-4 pb-5 px-5">
                    Dolor et eos labore, stet justo sed est sed. Diam sed sed
                    dolor stet amet eirmod eos labore diam
                  </div>
                </div>
              </div>
            )}
            <TestimonialCarousel />
          </div>
        </div>

        {/* Testimonial End */}

        {/* Vendor Start */}
        {false && (
          <div
            className="container-fluid py-5 wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <div className="container py-5 mb-5">
              <div className="bg-white">
                <div className="owl-carousel vendor-carousel">
                  <img src="img/vendor-1.jpg" alt="" />
                  <img src="img/vendor-2.jpg" alt="" />
                  <img src="img/vendor-3.jpg" alt="" />
                  <img src="img/vendor-4.jpg" alt="" />
                  <img src="img/vendor-5.jpg" alt="" />
                  <img src="img/vendor-6.jpg" alt="" />
                  <img src="img/vendor-7.jpg" alt="" />
                  <img src="img/vendor-8.jpg" alt="" />
                  <img src="img/vendor-9.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    </Fragment>
  );
};

export default Home;

const services = [
  {
    icon: "fa fa-shield-alt",
    title: "Brass Components",
    description:
      "We offer a wide range of high-quality brass components tailored to meet your specific requirements.",
    delay: "0.3s",
  },
  {
    icon: "fa fa-chart-pie",
    title: "Industrial Brass Fittings",
    description:
      "Our industrial brass fittings ensure reliability and durability, making them ideal for various industrial applications.",
    delay: "0.6s",
  },
  {
    icon: "fa fa-code",
    title: "Custom Brass Products",
    description:
      "Let us bring your ideas to life with our custom brass products tailored to your unique specifications and requirements.",
    delay: "0.9s",
  },
  {
    icon: "fab fa-android",
    title: "Brass Decoratives",
    description:
      "Elevate your space with our exquisite range of brass decoratives, crafted with precision and elegance.",
    delay: "1.2s",
  },
  {
    icon: "fa fa-search",
    title: "Brass Laboratory Equipment",
    description:
      "Ensure precision and accuracy in your laboratory with our high-quality brass laboratory equipment.",
    delay: "1.5s",
  },
  {
    icon: "fa fa-wrench",
    title: "Brass Maintenance Process",
    description:
      "Ensure the longevity and optimal performance of your brass components with our specialized maintenance Process.",
    delay: "1.8s",
  },
];
