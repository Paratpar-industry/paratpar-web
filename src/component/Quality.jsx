import React from "react";
import { NavLink } from "react-router-dom";
import { NavPath } from "../common/nevigation/NavPath";
import Carousel from "./Crousal.jsx";

const Quality = () => {
  return (
    <div>
      <div
        className="container-fluid bg-primary py-5 bg-header"
        style={{ marginBottom: 90 }}
      >
        <div className="row py-5">
          <div className="col-12 pt-lg-5 mt-lg-5 text-center">
            <h1 className="display-4 text-white animated zoomIn">Quality</h1>
            <NavLink to="/" className="h5 text-white">
              Home
            </NavLink>
            <i className="far fa-circle text-white px-2" />
            <NavLink to={NavPath.Quality} className="h5 text-white">
              Quality
            </NavLink>
          </div>
        </div>
      </div>
      <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-7">
              <h2>Quality</h2>
              <div class="text">
                {qualityListItems.map((item, index) => (
                  <>
                    <h5 className="mb-3" key={index}>
                      <i className="fa fa-check text-primary me-3" />
                      {item.text}
                    </h5>
                    <br />
                  </>
                ))}
                <p style={{ alignSelf: "center" }}>
                  Our quality policy has always been minimizing rejection and
                  supplying the most thoroughly Inspected material to our
                  customers. To achieve this goal we have developed a Quality
                  System in which we have laid down strict Inspections,
                  minimizing rejections and eliminate customer's
                  dissatisfaction. We house all the latest measuring Instruments
                  and gauges enabling our team to control the accuracy and
                  quality demanded. We operate in a large factory area which
                  enables division of work for higher efficiency and
                  productivity.
                </p>
              </div>
            </div>
            <div className="col-lg-5" style={{ maxHeight: 500 }}>
              <div className="position-relative h-100">
                <Carousel images={imageUrls || []} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quality;

const qualityListItems = [
  {
    text: "Every batch of finished products is inspected on each and every stage with Digimatic Vernier Caliper and Digimatic Micrometer in the quality control Room.",
    icon: "icon1",
  },
  {
    text: "Semi Finished & Finished components are analyzed on each and every lot randomly keeping in mind the chemical composition and mechanism accuracy, finishing before dispatch material.",
    icon: "icon2",
  },
  { text: "Top-Notch Quality.", icon: "icon3" },
  { text: "Vast Experience more than four decades.", icon: "icon4" },
  { text: "Qualified and Experienced Staff.", icon: "icon5" },
  { text: "Start-of-art Technology.", icon: "icon6" },
  { text: "Standardized Processing Unit.", icon: "icon7" },
];

const imageUrls = [
  {
    img: "https://i.postimg.cc/2S2XcL5D/quality01.jpg",
    tag: "",
  },
  {
    img: "https://i.postimg.cc/Jh0Y97yB/quality02.jpg",
    tag: "",
  },
  {
    img: "https://i.postimg.cc/7ZxWnnw9/quality03.jpg",
    tag: "",
  },
  {
    img: "https://i.postimg.cc/xdZpYrHp/quality04.jpg",
    tag: "",
  },
  {
    img: "https://i.postimg.cc/3N5L4gtg/quality05.jpg",
    tag: "",
  },
  {
    img: "https://i.postimg.cc/rmtnwhNV/quality06.jpg",
    tag: "",
  },
  {
    img: "https://i.postimg.cc/4y6Wzm0j/quality07.jpg",
    tag: "",
  },
];
