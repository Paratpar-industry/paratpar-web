/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

function TestimonialCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const handleChange = (newIndex) => {
    setActiveIndex(newIndex);
  };
  // Define your testimonial items here
  const testimonialItems = [
    {
      image: "img/brass-company.jpg",
      clientName: "Vinod Industries",
      profession: "Profession",
      text: "Choosing paratpar for our brass parts was a game-changer. Their parts are not only durable but also come with excellent customer support. Highly recommended!",
    },
    {
      image: "img/brass-company.jpg",
      clientName: "Ashar Enterprise",
      profession: "Profession",
      text: "We've had nothing but positive experiences with paratpar. Their brass parts are of high quality and meet our exact specifications. A must-have for any industrial project!",
    },
    {
      image: "img/brass-company.jpg",
      clientName: "Precision Sintered Products",
      text: "Thanks to paratpar, we were able to complete our project on time and within budget. Their brass parts are reliable and made our job easier. Excellent service!",
    },
    // ... other testimonial items
  ];

  return (
    <OwlCarousel
      className="owl-theme"
      loop
      margin={10}
      nav
      autoplay
      autoplayTimeout={10000}
      responsive={{
        0: {
          items: 1, // Show one item on small screens
        },
        768: {
          items: 2, // Show two items on tablets
        },
        992: {
          items: 3, // Show three items on medium-sized screens
        },
      }}
    >
      {testimonialItems.map((item, index) => (
        <div
          key={index}
          className={`testimonial-item ${
            index === activeIndex ? "active" : ""
          }`}
        >
          <div key={index} className="testimonial-item bg-light my-4">
            <div className="d-flex align-items-center border-bottom pt-5 pb-4 px-5">
              <img
                className="img-fluid rounded"
                src={item.image}
                style={{ width: "60px", height: "60px" }}
                alt=""
              />
              <div className="ps-4">
                <h4 className="text-primary mb-1">{item.clientName}</h4>
                <small className="text-uppercase">{item.profession}</small>
              </div>
            </div>
            <div className="pt-4 pb-5 px-5">{item.text}</div>
          </div>
        </div>
      ))}
    </OwlCarousel>
  );
}

export default TestimonialCarousel;
