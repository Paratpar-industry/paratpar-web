import React, { Fragment, useRef } from "react";
import toast from "react-hot-toast";
import emailjs from "@emailjs/browser";
import { NavLink } from "react-router-dom";

const ContectUs = () => {
  const formRef = useRef();

  async function handleFormSubmit(e) {
    e.preventDefault();
    emailjs.init(process.env.REACT_APP_EMAILJS_USER_ID);
    //const formData = new FormData(formRef.current);
    //const formObject = Object.fromEntries(formData);
    //console.log(formObject);
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        formRef.current
      )
      .then(
        (res) => {
          toast.success("Message successfully sent!");
          formRef.current.reset();
        },
        (err) => {
          toast.error("Failed to send the message, please try again");
        }
      );
  }

  return (
    <Fragment>
      <>
        {/* Contact Start */}
        <div
          className="container-fluid bg-primary py-5 bg-header"
          style={{ marginBottom: 90 }}
        >
          <div class="row py-5">
            <div class="col-12 pt-lg-5 mt-lg-5 text-center">
              <h1 class="display-4 text-white animated zoomIn">Contact Us</h1>
              <NavLink to="/" class="h5 text-white">
                Home
              </NavLink>
              <i class="far fa-circle text-white px-2"></i>
              <NavLink to="/contact" class="h5 text-white">
                Contact
              </NavLink>
            </div>
          </div>
        </div>
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
                Contact Us
              </h5>
              <h1 className="mb-0">
                If You Have Any Query, Feel Free To Contact Us
              </h1>
            </div>

            <div className="row g-5 mb-5">
              {/* ... other columns ... */}
              <div className="col-lg-4">
                <div
                  className="d-flex align-items-center wow fadeIn"
                  data-wow-delay="0.1s"
                >
                  <div
                    className="bg-primary d-flex align-items-center justify-content-center rounded"
                    style={{ width: 60, height: 60 }}
                  >
                    <i className="fa fa-phone-alt text-white" />
                  </div>
                  <div className="ps-4">
                    <h5 className="mb-2">Call to ask any question</h5>
                    <a href="tel:+919586176608" className="text-primary mb-0">
                      +91 9586176608
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div
                  className="d-flex align-items-start wow fadeIn"
                  data-wow-delay="0.4s"
                >
                  <div
                    className="bg-primary d-flex align-items-center justify-content-center rounded"
                    style={{ width: 60, height: 60 }}
                  >
                    <i className="fa fa-envelope-open text-white" />
                  </div>
                  <div className="ps-4">
                    <h5 className="mb-2">Email to get free quote</h5>
                    <a
                      href="mailto:Paratparindustry28@gmail.com"
                      className="text-primary mb-0"
                    >
                      Paratparindustry28@gmail.com
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div
                  className="d-flex align-items-start wow fadeIn"
                  data-wow-delay="0.8s"
                >
                  <div
                    className="bg-primary d-flex align-items-center justify-content-center rounded"
                    style={{ width: 60, height: 60 }}
                  >
                    <i className="fa fa-map-marker-alt text-white" />
                  </div>
                  <div className="ps-4">
                    <h5 className="mb-2">Visit our office</h5>
                    <a
                      href="https://maps.app.goo.gl/FkqPKfuf3gCJUYLP6"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <address>
                        Ketan Estate, Plot no 28,
                        <br />
                        Behind Godown Zone, Dared,
                        <br />
                        Jamnagar,
                      </address>
                    </a>
                  </div>
                </div>
              </div>
              {/* ... other columns ... */}
            </div>

            <div className="row g-5">
              <div className="col-lg-6 wow slideInUp" data-wow-delay="0.3s">
                <form ref={formRef} onSubmit={handleFormSubmit}>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <input
                        type="hidden"
                        name="to_name"
                        value={"paratpar industries"}
                      />
                      <input
                        type="text"
                        className="form-control border-0 bg-light px-4"
                        placeholder="Your Name"
                        name="from_name"
                        required={true}
                        style={{ height: 55 }}
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="email"
                        name="email"
                        className="form-control border-0 bg-light px-4"
                        placeholder="Your Email"
                        required={true}
                        style={{ height: 55 }}
                      />
                    </div>
                    <div className="col-12">
                      <input
                        type="text"
                        className="form-control border-0 bg-light px-4"
                        placeholder="Subject"
                        name="subject"
                        required={true}
                        style={{ height: 55 }}
                      />
                    </div>
                    <div className="col-12">
                      <textarea
                        className="form-control border-0 bg-light px-4 py-3"
                        rows={4}
                        placeholder="Message"
                        name="message"
                        required={true}
                        defaultValue={""}
                      />
                    </div>
                    <div className="col-12">
                      <button
                        className="btn btn-primary w-100 py-3"
                        type="submit"
                        //onClick={handleFormSubmit}
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              <div className="col-lg-6 wow slideInUp" data-wow-delay="0.6s">
                <iframe
                  className="position-relative rounded w-100 h-100"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d472109.09730722936!2d69.89803810561834!3d22.4157612458896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39576b00762c648f%3A0xca27fbf56cc6483!2sParatpar%20industry!5e0!3m2!1sen!2sin!4v1707593209837!5m2!1sen!2sin"
                  title="Google Maps"
                  style={{ minHeight: 350, border: 0 }}
                  allowFullScreen=""
                  aria-hidden="false"
                  tabIndex={0}
                />
              </div>
            </div>
          </div>
        </div>
        {/* Contact End */}
        {/* Vendor Start */}
        {false && (
          <div
            className="container-fluid py-5 wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <div className="container py-5 mb-5">
              <div className="bg-white">
                <div className="owl-carousel vendor-carousel owl-loaded owl-drag owl-grab">
                  <img src="/img/vendor-1.jpg" alt="" />
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
        {/* Vendor End */}
      </>
    </Fragment>
  );
};

export default ContectUs;
