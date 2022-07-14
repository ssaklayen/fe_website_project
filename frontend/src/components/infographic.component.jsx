import React from "react";
import Container from "react-bootstrap/Container";

import batteryArray from "../images/bannerImage.png";

export default function Infographic() {
  return (
    <Container className="pt-0 mt-5 infoCustom">

      {/* Image */}
      <div className="w-50 infoCustomImage">
            <img src={batteryArray} alt="Battery Array" />
      </div>

      {/* Text */}
      <div className="w-50 d-inline-block infoCustomText">
        <h1>Leading the industry in</h1>
        <div className="infoListWrapper">
          <ul>
            <li>Greenfield Development</li>
            <li>Property Acquisition</li>
            <li>Debt and Tax Equity Financing</li>
            <li>Procurement</li>
            <li>Construction Management</li>
            <li>Asset Management</li>
          </ul>
        </div>
      </div>
    </Container>
  );
}
