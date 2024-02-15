import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { NavPath } from "../common/nevigation/NavPath";

export const productsArr = [
  {
    name: "Automotive Parts",
    date: "01 Jan, 2045",
    // imgSrc: "/img/automotive-parts.jpg",
    imgSrc: "/img/blog-1.jpg",
    category: "automotiveParts",
    content:
      "Explore our wide range of automotive parts designed for durability and performance.",
    path: "automotive-parts",
  },
  {
    name: "Cable Glands",
    date: "01 Jan, 2045",
    // imgSrc: "/img/cable-glands.jpg",
    imgSrc: "/img/blog-1.jpg",
    category: "cableGlands",
    content:
      "Discover our selection of high-quality cable glands suitable for various applications.",
    path: "cable-glands",
  },
  {
    name: "Earthing Lightening",
    date: "01 Jan, 2045",
    // imgSrc: "/img/earthing-lightening.jpg",
    imgSrc: "/img/blog-1.jpg",
    category: "earthingLightening",
    content:
      "Ensure safety and protection with our premium earthing and lightning solutions.",
    path: "earthing-lightening",
  },
  {
    name: "Fasteners",
    date: "01 Jan, 2045",
    imgSrc: "/img/fasteners.jpg",
    category: "fasteners",
    content:
      "Find the perfect fasteners for your projects with our diverse range of options.",
    path: "fasteners",
  },
  {
    name: "Hydraulic Pneumatic Fittings",
    date: "01 Jan, 2045",
    imgSrc: "/img/hydraulic-pneumatic-fittings.jpg",
    category: "hydraulicPneumaticFittings",
    content:
      "Browse our collection of hydraulic and pneumatic fittings for smooth and efficient operations.",
    path: "hydraulic-pneumatic-fittings",
  },
  {
    name: "Measuring Instruments Sensors",
    date: "01 Jan, 2045",
    imgSrc: "/img/measuring-instruments-sensors.jpg",
    category: "measuringInstrumentsSensors",
    content:
      "Achieve precision and accuracy with our advanced measuring instruments and sensors.",
    path: "measuring-instruments-sensors",
  },
  {
    name: "Moulding Inserts",
    date: "01 Jan, 2045",
    imgSrc: "/img/moulding-inserts.jpg",
    category: "mouldingInserts",
    content:
      "Enhance your molding processes with our reliable and durable moulding inserts.",
    path: "moulding-inserts",
  },
  {
    name: "Neutral Bar Blocks",
    date: "01 Jan, 2045",
    imgSrc: "/img/neutral-bar-blocks.jpg",
    category: "neutralBarBlocks",
    content:
      "Discover our high-quality neutral bar blocks for efficient electrical connections.",
    path: "neutral-bar-blocks",
  },
  {
    name: "Oil Gas",
    date: "01 Jan, 2045",
    imgSrc: "/img/oil-gas.jpg",
    category: "oilGas",
    content:
      "Explore our comprehensive range of oil and gas solutions for various industrial applications.",
    path: "oil-gas",
  },
  {
    name: "Sanitary Plumbing Fittings",
    date: "01 Jan, 2045",
    imgSrc: "/img/sanitary-plumbing-fittings.jpg",
    category: "sanitaryPlumbingFittings",
    content:
      "Find high-quality sanitary and plumbing fittings to meet your specific requirements.",
    path: "sanitary-plumbing-fittings",
  },
];

const getProductCard = (product) => (
  <div
    className="col-lg-4 wow slideInUp"
    data-wow-delay="0.3s"
    key={product.name}
  >
    <div className="blog-item bg-light rounded overflow-hidden">
      <div className="blog-img position-relative overflow-hidden">
        <img className="img-fluid" src={product.imgSrc} alt="" />
        <a
          className="position-absolute top-0 start-0 bg-primary text-white rounded-end mt-5 py-2 px-4"
          href="/"
        >
          {product.category}
        </a>
      </div>
      <div className="p-4">
        {false && (
          <div className="d-flex mb-3">
            <small className="me-3">
              <i className="far fa-user text-primary me-2" />
              John Doe
            </small>
            <small>
              <i className="far fa-calendar-alt text-primary me-2" />
              {product.date}
            </small>
          </div>
        )}
        <h4 className="mb-3">{product.name}</h4>
        <p>{product.content}</p>
        <NavLink
          className="text-uppercase"
          to={NavPath.ProducDetailtRoute(product.path)}
        >
          Read More <i className="bi bi-arrow-right" />
        </NavLink>
      </div>
    </div>
  </div>
);

const Product = () => {
  return (
    <Fragment>
      {/* Blog Start */}
      <div
        className="container-fluid bg-primary py-5 bg-header"
        style={{ marginBottom: 90 }}
      >
        <div className="row py-5">
          <div className="col-12 pt-lg-5 mt-lg-5 text-center">
            <h1 className="display-4 text-white animated zoomIn">Product</h1>
            <NavLink to="/" className="h5 text-white">
              Home
            </NavLink>
            <i className="far fa-circle text-white px-2" />
            <NavLink to="/product" className="h5 text-white">
              Product
            </NavLink>
          </div>
        </div>
      </div>
      <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
          <div className="row g-5">
            {productsArr.map((product) => getProductCard(product))}
          </div>
        </div>
      </div>

      {/* Blog Start */}
    </Fragment>
  );
};

export default Product;
