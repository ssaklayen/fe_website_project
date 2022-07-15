import React from "react";
import Container from "react-bootstrap/Container";
import batteryArray from "../images/urbanImage.png";

export default function Infographic() {
  return (

    // Infographic Desktop
    <Container className="pt-0 infoCustom" id="infographicDesktop">

      {/* Image */}
      <div className="w-50 infoCustomImage">
            <img src={batteryArray} alt="Battery Array" />
      </div>

      {/* Text */}
      <div className="w-50 d-inline-block infoCustomText">
        <h1>What We Do</h1>
        <div className="infoListWrapper">
          <ul>
            <li>Land Acquisition</li>
            <li>Greenfield Development</li>
            <li>Acquisition</li>
            <li>Commercial Structuring</li>
            <li>Construction & Procurement</li>
            <li>Operation & Bidding</li>
          </ul>
        </div>
      </div>
    </Container>
  );
}
