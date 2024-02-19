import React, { Fragment, useRef } from "react";
import toast from "react-hot-toast";
import emailjs from "@emailjs/browser";
import NProgress from "nprogress";
// import { NavLink } from "react-router-dom";

const QuoteForm = () => {
  const formRef = useRef();

  async function handleFormSubmit(e) {
    NProgress.start();

    e.preventDefault();
    emailjs.init(process.env.REACT_APP_EMAILJS_USER_ID || "");
    //const formData = new FormData(formRef.current);
    //const formObject = Object.fromEntries(formData);
    //console.log(formObject);
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID || "",
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID || "",
        formRef.current
      )
      .then(
        (res) => {
          toast.success("Message successfully sent!");
          if (formRef.current) formRef.current.reset();
        },
        (err) => {
          toast.error("Failed to send the message, please try again");
        }
      );
    NProgress.done();
  }
  return (
    <Fragment>
      <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-7">
              <div className="section-title position-relative pb-3 mb-5">
                <h5 className="fw-bold text-primary text-uppercase">
                  Request A Quote
                </h5>
                <h1 className="mb-0">
                  Need A Free Quote? Please Feel Free to Contact Us
                </h1>
              </div>
              <div className="row gx-3">
                <div className="col-sm-6 wow zoomIn" data-wow-delay="0.2s">
                  <h5 className="mb-4">
                    <i className="fa fa-reply text-primary me-3" />
                    Reply within 24 hours
                  </h5>
                </div>
                <div className="col-sm-6 wow zoomIn" data-wow-delay="0.4s">
                  <h5 className="mb-4">
                    <i className="fa fa-phone-alt text-primary me-3" />
                    24 hrs telephone support
                  </h5>
                </div>
              </div>
              <p className="mb-4">
                Get in touch with us today to discuss your needs and receive a
                personalized quote tailored to your requirements. Our team is
                dedicated to providing you with exceptional service and
                solutions that meet your specific needs.
              </p>
              <div
                className="d-flex align-items-center mt-2 wow zoomIn"
                data-wow-delay="0.6s"
              >
                <div
                  className="bg-primary d-flex align-items-center justify-content-center rounded"
                  style={{ width: 60, height: 60 }}
                >
                  <i className="fa fa-phone-alt text-white" />
                </div>
                <div className="ps-4">
                  <h5 className="mb-2">Call to ask any question</h5>
                  <h4 className="text-primary mb-0">
                    {" "}
                    <a
                      href="tel:+919586176608"
                      style={{ color: "#06A3DA" }}
                      onMouseEnter={(e) => (e.target.style.color = "#06A3DA")}
                      onMouseLeave={(e) => (e.target.style.color = "#06A3DA")}
                    >
                      +91 9586176608
                    </a>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div
                className="bg-primary rounded h-100 d-flex align-items-center p-4 wow zoomIn"
                data-wow-delay="0.9s"
              >
                <form ref={formRef} onSubmit={handleFormSubmit}>
                  <div className="row g-3">
                    <div className="col-xl-12">
                      <input
                        type="hidden"
                        name="to_name"
                        value={"paratpar industries quotatio form"}
                      />
                      <input type="hidden" name="subject" value={"--"} />
                      <input
                        type="text"
                        className="form-control bg-light border-0"
                        placeholder="Your Name"
                        name="from_name"
                        style={{ height: 55 }}
                        required
                      />
                    </div>
                    <div className="col-12">
                      <input
                        type="email"
                        name="email"
                        className="form-control bg-light border-0"
                        placeholder="Your Email"
                        style={{ height: 55 }}
                        required
                      />
                    </div>
                    <div className="col-12">
                      <input
                        type="text"
                        name="phone"
                        className="form-control bg-light border-0"
                        placeholder="Your Phone Number"
                        style={{ height: 55 }}
                        maxLength={10}
                        required
                        onKeyDown={(e) => {
                          if (
                            !/^[0-9]+$/.test(e.key) &&
                            e.key !== "Backspace"
                          ) {
                            e.preventDefault();
                          }
                        }}
                        minLength={10}
                      />
                    </div>
                    <div className="col-12">
                      <textarea
                        className="form-control bg-light border-0"
                        rows={3}
                        name="message"
                        placeholder="Message"
                        defaultValue={""}
                        required
                      />
                    </div>
                    <div className="col-12">
                      <button className="btn btn-dark w-100 py-3" type="submit">
                        Request A Quote
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default QuoteForm;
