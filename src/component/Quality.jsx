import React from "react";
import { NavLink } from "react-router-dom";
import { NavPath } from "../common/nevigation/NavPath";

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
      <div class="content-column col-lg-7 col-md-12 col-sm-12">
        <div class="inner-column">
          <h2>Quality</h2>
          <div class="text">
            <ul class="quality-lists">
              <li>
                <NavLink></NavLink>At first stage, analyses of the chemical
                composition of the Raw Materials.
              </li>
              <li>
                <NavLink></NavLink>Every batch of finished products is inspected
                on each and every stage with Digimatic Vernier Caliper and
                Digimatic Micrometer in the quality control Room.
              </li>
              <li>
                <NavLink></NavLink>Semi Finished &amp; Finished components are
                analyzed on each and every lot randomly keeping in mind the
                chemical composition and mechanism accuracy, finishing before
                dispatch material.
              </li>
              <li>
                <NavLink></NavLink>Top-Notch Quality.
              </li>
              <li>
                <NavLink></NavLink>Vast Experience more than four decades.
              </li>
              <li>
                <NavLink></NavLink>Qualified and Experienced Staff.
              </li>
              <li>
                <NavLink></NavLink>Start-of-art Technology.
              </li>
              <li>
                <NavLink></NavLink>Standardized Processing Unit.
              </li>
            </ul>
            <p style={{ alignSelf: "center" }}>
              Our quality policy has always been minimizing rejection and
              supplying the most thoroughly Inspected material to our customers.
              To achieve this goal we have developed a Quality System in which
              we have laid down strict Inspections, minimizing rejections and
              eliminate customer's dissatisfaction. We house all the latest
              measuring Instruments and gauges enabling our team to control the
              accuracy and quality demanded. We operate in a large factory area
              which enables division of work for higher efficiency and
              productivity.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quality;
