import React from "react";
import Container from "react-bootstrap/Container";
import solarArray from "../images/solararray.png";

export default function MainBanner() {
  return (
    <Container className="p-0 mt-5 mainBannerWrapper">
      {/* Banner Text */}
      <div className="w-50 d-inline-block bannerText">
        <h1>Building the clean infrastructure for our future</h1>
        <p>
          Standalone energy storage assets that integrate renewable energy onto
          the grid, replace fossil fuel plants, and increase grid reliability
        </p>
      </div>

      {/* Banner Image */}
      <div className="w-50 bannerImage">
        <img src={solarArray} alt="Solar Array" />
      </div>
    </Container>
  );
}
