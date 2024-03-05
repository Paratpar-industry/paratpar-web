import React, { Fragment, useLayoutEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { NavPath } from "../common/nevigation/NavPath";
import { mainProductArr } from "../data/Product.ts";
import parse from "html-react-parser";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Carousel from "./Crousal.jsx";
const tagCloud = [
  "Precision Engineering",
  "Quality Manufacturing",
  "Custom Solutions",
  "Industry Innovations",
  "Reliable Partner",
  "Brass Fittings",
  "Industrial Applications",
  "Advanced Technology",
  "Customer Satisfaction",
  "Product Excellence",
  "Global Presence",
];

const ProductDetail = () => {
  const { id } = useParams();
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };
  const [showproduct, setShowProduct] = useState();

  // Function to select any 3 products randomly based on their length
  const selectRandomProducts = (products, count) => {
    const shuffledProducts = shuffleArray(products);
    return shuffledProducts.slice(0, count);
  };
  const randomProducts = selectRandomProducts(
    mainProductArr
      .filter((item) => parseInt(item.Shortorder) !== 0) // Filter out items with Shortorder not equal to 0
      .sort((a, b) => parseInt(a.Shortorder) - parseInt(b.Shortorder)),
    3
  );
  function formatUrlStringToDisplay(url) {
    // Split the URL string by hyphens
    const words = url.split("-");

    // Capitalize the first letter of each word
    const capitalizedWords = words.map(
      (word) => word.charAt(0).toUpperCase() + word.slice(1)
    );

    // Join the capitalized words with spaces
    const formattedString = capitalizedWords.join(" ");

    return formattedString;
  }

  useLayoutEffect(() => {
    setShowProduct(mainProductArr.find((key) => id === key.path));
  }, [id]);

  return (
    <Fragment>
      <div
        className="container-fluid bg-primary py-5 bg-header"
        style={{ marginBottom: 90 }}
      >
        <div className="row py-5">
          <div className="col-12 pt-lg-5 mt-lg-5 text-center">
            <h1 className="display-4 text-white animated zoomIn">
              {showproduct?.name}
            </h1>
            <NavLink to={NavPath.HomeRoute} className="h5 text-white">
              Home
            </NavLink>
            <i className="far fa-circle text-white px-2" />
            <NavLink to={NavPath.ProductRoute} className="h5 text-white">
              Product
            </NavLink>
          </div>
        </div>
      </div>
      {/* Navbar End */}
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
      {/* Blog Start */}
      <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-8">
              {/* Blog Detail Start */}

              <div className="mb-5">
                <Carousel images={showproduct?.image || []} />

                <h1 className="mb-4">{showproduct?.title}</h1>
{typeof showproduct?.content === 'string' ? parse(showproduct?.content) : <></>}
                {/* {parse(showproduct?.content)} */}
              </div>

              {false && (
                <div className="mb-5">
                  <img
                    className="img-fluid w-100 rounded mb-5"
                    src="/img/blog-1.jpg"
                    alt=""
                  />
                  <h1 className="mb-4">
                    Diam dolor est labore duo ipsum clita sed et lorem tempor
                    duo
                  </h1>
                  <p>
                    Sadipscing labore amet rebum est et justo gubergren. Et
                    eirmod ipsum sit diam ut magna lorem. Nonumy vero labore
                    lorem sanctus rebum et lorem magna kasd, stet amet magna
                    accusam consetetur eirmod. Kasd accusam sit ipsum sadipscing
                    et at at sanctus et. Ipsum sit gubergren dolores et,
                    consetetur justo invidunt at et aliquyam ut et vero clita.
                    Diam sea sea no sed dolores diam nonumy, gubergren sit stet
                    no diam kasd vero.
                  </p>
                  <p>
                    Voluptua est takimata stet invidunt sed rebum nonumy stet,
                    clita aliquyam dolores vero stet consetetur elitr takimata
                    rebum sanctus. Sit sed accusam stet sit nonumy kasd diam
                    dolores, sanctus lorem kasd duo dolor dolor vero sit et.
                    Labore ipsum duo sanctus amet eos et. Consetetur no sed et
                    aliquyam ipsum justo et, clita lorem sit vero amet amet est
                    dolor elitr, stet et no diam sit. Dolor erat justo dolore
                    sit invidunt.
                  </p>
                </div>
              )}
              {/* Blog Detail End */}
              {/* Comment List Start */}
              {false && (
                <div className="mb-5">
                  <div className="section-title section-title-sm position-relative pb-3 mb-4">
                    <h3 className="mb-0">3 Comments</h3>
                  </div>
                  <div className="d-flex mb-4">
                    <img
                      src="img/user.jpg"
                      className="img-fluid rounded"
                      style={{ width: 45, height: 45 }}
                      alt=""
                    />
                    <div className="ps-3">
                      <h6>
                        <NavLink to="">John Doe</NavLink>{" "}
                        <small>
                          <i>01 Jan 2045</i>
                        </small>
                      </h6>
                      <p>
                        Diam amet duo labore stet elitr invidunt ea clita ipsum
                        voluptua, tempor labore accusam ipsum et no at. Kasd
                        diam tempor rebum magna dolores sed eirmod
                      </p>
                      <button className="btn btn-sm btn-light">Reply</button>
                    </div>
                  </div>
                  <div className="d-flex mb-4">
                    <img
                      src="/img/user.jpg"
                      className="img-fluid rounded"
                      style={{ width: 45, height: 45 }}
                      alt=""
                    />
                    <div className="ps-3">
                      <h6>
                        <NavLink to="">John Doe</NavLink>{" "}
                        <small>
                          <i>01 Jan 2045</i>
                        </small>
                      </h6>
                      <p>
                        Diam amet duo labore stet elitr invidunt ea clita ipsum
                        voluptua, tempor labore accusam ipsum et no at. Kasd
                        diam tempor rebum magna dolores sed eirmod
                      </p>
                      <button className="btn btn-sm btn-light">Reply</button>
                    </div>
                  </div>
                  <div className="d-flex ms-5 mb-4">
                    <img
                      src="/img/user.jpg"
                      className="img-fluid rounded"
                      style={{ width: 45, height: 45 }}
                      alt=""
                    />
                    <div className="ps-3">
                      <h6>
                        <NavLink to="">John Doe</NavLink>{" "}
                        <small>
                          <i>01 Jan 2045</i>
                        </small>
                      </h6>
                      <p>
                        Diam amet duo labore stet elitr invidunt ea clita ipsum
                        voluptua, tempor labore accusam ipsum et no at. Kasd
                        diam tempor rebum magna dolores sed eirmod
                      </p>
                      <button className="btn btn-sm btn-light">Reply</button>
                    </div>
                  </div>
                </div>
              )}
              {/* Comment List End */}
              {/* Comment Form Start */}
              {false && (
                <div className="bg-light rounded p-5">
                  <div className="section-title section-title-sm position-relative pb-3 mb-4">
                    <h3 className="mb-0">Leave A Comment</h3>
                  </div>
                  <form>
                    <div className="row g-3">
                      <div className="col-12 col-sm-6">
                        <input
                          type="text"
                          className="form-control bg-white border-0"
                          placeholder="Your Name"
                          style={{ height: 55 }}
                        />
                      </div>
                      <div className="col-12 col-sm-6">
                        <input
                          type="email"
                          className="form-control bg-white border-0"
                          placeholder="Your Email"
                          style={{ height: 55 }}
                        />
                      </div>
                      <div className="col-12">
                        <input
                          type="text"
                          className="form-control bg-white border-0"
                          placeholder="Website"
                          style={{ height: 55 }}
                        />
                      </div>
                      <div className="col-12">
                        <textarea
                          className="form-control bg-white border-0"
                          rows={5}
                          placeholder="Comment"
                          defaultValue={""}
                        />
                      </div>
                      <div className="col-12">
                        <button
                          className="btn btn-primary w-100 py-3"
                          type="submit"
                        >
                          Leave Your Comment
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              )}
              {/* Comment Form End */}
            </div>
            {/* Sidebar Start */}
            <div className="col-lg-4">
              {/* Search Form Start */}
              <div className="mb-5 wow slideInUp" data-wow-delay="0.1s">
                <div className="input-group">
                  <div className="form-control p-3">
                    {formatUrlStringToDisplay(id)}
                  </div>
                  <input
                    type="hidden"
                    className="form-control p-3"
                    placeholder="Keyword"
                  />
                  <button
                    className="btn btn-primary px-4"
                    onClick={() => {
                      setShowProduct(
                        mainProductArr.find((key) => id === key.path)
                      );
                    }}
                  >
                    <i className="bi bi-search" />
                  </button>
                </div>
              </div>
              {/* Search Form End */}
              {/* Category Start */}
              <div className="mb-5 wow slideInUp" data-wow-delay="0.1s">
                {showproduct?.childParts?.length !== 0 && (
                  <div className="section-title section-title-sm position-relative pb-3 mb-4">
                    <h3 className="mb-0">Categories</h3>
                  </div>
                )}
                <div className="link-animated d-flex flex-column justify-content-start">
                  {mainProductArr
                    ?.find((key) => id === key.path)
                    ?.childParts?.map((product, index) => (
                      <NavLink
                        className="h5 fw-semi-bold bg-light rounded py-2 px-3 mb-2"
                        to="#"
                        onClick={(e) => {
                          e.preventDefault();
                          setShowProduct(product);
                        }}
                        key={index}
                      >
                        <i className="bi bi-arrow-right me-2" />
                        {product.name}
                      </NavLink>
                    ))}
                </div>
              </div>
              {/* Category End */}
              {/* Recent Post Start */}
              <div className="mb-5 wow slideInUp" data-wow-delay="0.1s">
                <div className="section-title section-title-sm position-relative pb-3 mb-4">
                  <h3 className="mb-0">Other Product</h3>
                </div>
                {randomProducts.map((product, index) => (
                  <div
                    key={index}
                    className="d-flex rounded overflow-hidden mb-3"
                  >
                    <img
                      className="img-fluid"
                      src={product.mainimage[0].img}
                      style={{
                        width: 100,
                        height: 100,
                        objectFit: "cover",
                      }}
                      alt={product.name}
                    />
                    <NavLink
                      to={`/product/${product.path}`}
                      className="h5 fw-semi-bold d-flex align-items-center bg-light px-3 mb-0"
                      style={{ width: 400 }}
                    >
                      {product.name}
                    </NavLink>
                  </div>
                ))}
              </div>
              {/* Recent Post End */}
              {/* Image Start */}
              {false && (
                <div className="mb-5 wow slideInUp" data-wow-delay="0.1s">
                  <img
                    src="/img/blog-1.jpg"
                    alt=""
                    className="img-fluid rounded"
                  />
                </div>
              )}
              {/* Image End */}
              {/* Tags Start */}
              {true && (
                <div className="mb-5 wow slideInUp" data-wow-delay="0.1s">
                  <div className="section-title section-title-sm position-relative pb-3 mb-4">
                    <h3 className="mb-0">Tag Cloud</h3>
                  </div>
                  <div className="d-flex flex-wrap m-n1">
                    {tagCloud.map((tag, index) => (
                      <NavLink key={index} to="#" className="btn btn-light m-1">
                        {tag}
                      </NavLink>
                    ))}
                  </div>
                </div>
              )}
              {/* Tags End */}
              {/* Plain Text Start */}
              {false && (
                <div className="wow slideInUp" data-wow-delay="0.1s">
                  <div className="section-title section-title-sm position-relative pb-3 mb-4">
                    <h3 className="mb-0">Paratpar Industry</h3>
                  </div>
                  <div className="bg-light text-center" style={{ padding: 30 }}>
                    <p>
                      Paratpar Industry is a leading manufacturer of
                      high-quality brass components, providing innovative
                      solutions to various industries. With our commitment to
                      excellence and customer satisfaction, we strive to deliver
                      products of the highest standards.
                    </p>
                    <NavLink
                      to="/contact"
                      className="btn btn-primary py-2 px-4"
                    >
                      Read More
                    </NavLink>
                  </div>
                </div>
              )}
              {/* Plain Text End */}
            </div>
            {/* Sidebar End */}
          </div>
        </div>
      </div>
      {/* Blog End */}
      {/* Vendor Start */}
      {false && (
        <div
          className="container-fluid py-5 wow fadeInUp"
          data-wow-delay="0.1s"
        >
          <div className="container py-5 mb-5">
            <div className="bg-white">
              <div className="owl-carousel vendor-carousel">
                <img src="/img/vendor-1.jpg" alt="" />
                <img src="/img/vendor-2.jpg" alt="" />
                <img src="/img/vendor-3.jpg" alt="" />
                <img src="/img/vendor-4.jpg" alt="" />
                <img src="/img/vendor-5.jpg" alt="" />
                <img src="/img/vendor-6.jpg" alt="" />
                <img src="/img/vendor-7.jpg" alt="" />
                <img src="/img/vendor-8.jpg" alt="" />
                <img src="/img/vendor-9.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Vendor End */}
    </Fragment>
  );
};

export default ProductDetail;
