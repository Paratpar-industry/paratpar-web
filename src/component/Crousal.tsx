import React from "react";

const Carousel = ({ images }) => {
  const disableNavigation = images.length <= 1;
  return (
    <div
      id="header-carousel"
      className="carousel slide carousel-fade"
      data-bs-ride="carousel"
      style={{ marginBottom: "30px" }}
    >
      <div className="carousel-inner">
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel-item ${index === 0 ? "active" : ""}`}
          >
            <img
              className="w-100"
              src={image.img}
              alt={""}
              style={{ height: "600px" }}
            />
            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
              <div className="p-3" style={{ maxWidth: 900 }}>
                <h5 className="text-white text-uppercase mb-3 animated slideInDown">
                  {image?.tag}
                </h5>
                <h1 className="display-1 text-white mb-md-4 animated zoomIn">
                  {image?.captionSubtitle}
                </h1>
              </div>
            </div>
          </div>
        ))}
      </div>
      {!disableNavigation && (
        <>
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
        </>
      )}
    </div>
  );
};

export default Carousel;
