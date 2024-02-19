import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { NavPath } from "../common/nevigation/NavPath";
import { mainProductArr } from "../data/Product.ts";
const getProductCard = (product) => (
  <div
    className="col-lg-4 wow slideInUp"
    data-wow-delay="0.3s"
    key={product.name}
  >
    <div className="blog-item bg-light rounded overflow-hidden h-100">
      <div className="blog-img position-relative overflow-hidden">
        <img
          className="img-fluid w-100"
          src={product.mainimage[0].img}
          alt=""
          style={{ height: "300px" }}
        />
        <NavLink
          className="position-absolute top-0 start-0 bg-primary text-white rounded-end mt-5 py-2 px-4"
          href="#"
        >
          {product?.name}
        </NavLink>
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
        <p>{product?.maincontent}</p>
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
            {mainProductArr
              .filter((item) => parseInt(item.Shortorder) !== 0) // Filter out items with Shortorder not equal to 0
              .sort((a, b) => parseInt(a.Shortorder) - parseInt(b.Shortorder))
              .map((product, index) => {
                return getProductCard(product);
              })}
          </div>
        </div>
      </div>

      {/* Blog Start */}
    </Fragment>
  );
};

export default Product;
