import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import mainBannerImage from "../images/flatirons.png";

export default function MainBanner() {
  const mainBannerHeader = "Building the clean infrastructure for our future";
  const mainBannerBody =
    "Flatiron Energy develops, builds, owns, and operates standalone utility-scale energy storage.";

  return (
    <Container className="mt-5 main-banner-wrapper">
      <Row className="row-cols-auto" id="mainBannerDesktop">

        {/* Banner Text */}
        <Col className="g-0 col-lg-6 col-md-12">
          <div className="d-inline-block main-banner-text">
            <h1>{mainBannerHeader}</h1>
            <p>{mainBannerBody}</p>
          </div>
        </Col>

        {/* Banner Image */}
        <Col className="g-0 col-lg-6">
          <div className="main-banner-image-wrapper">
            <img src={mainBannerImage} alt="Mountain Energy Storage" />
          </div>
        </Col>
      </Row>

      {/***** Banner Mobile *****/}
      <Row id="mainBannerMobile">
        <Col className="g-0">
          <div className="main-banner-wrapper-mobile">
            <h1>{mainBannerHeader}</h1>
            <p>{mainBannerBody}</p>
          </div>
          <div className="main-banner-image-wrapper-mobile">
            <img src={mainBannerImage} alt="Mountain Energy Storage" />
          </div>
        </Col>
      </Row>
    </Container>
  );
}
