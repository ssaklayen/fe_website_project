import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import bannerImage from "../images/fe_storage5.png";

export default function MainBanner() {
  return (
    <Container className="mt-5 mainBannerWrapper">
      <Row className="row-cols-auto" id="mainBannerDesktop">
        {/* Banner Text */}
        <Col className="g-0 col-lg-6 col-md-12">
          <div className="d-inline-block bannerText">
            <h1>Building the clean infrastructure for our future</h1>
            <p>
              Flatiron Energy develops, builds, owns, and operates standalone utility-scale energy storage.
            </p>
          </div>
        </Col>

        {/* Banner Image */}
        <Col className="g-0 col-lg-6">
          <div className="bannerImage">
            <img src={bannerImage} alt="Mountain Energy Storage" />
          </div>
        </Col>
      </Row>

      {/* Banner Mobile */}
      <Row id="mainBannerMobile">
        <Col className="g-0">
          <div className="bannerMobile">
            <h1>Building the clean infrastructure for our future</h1>
            <p>
              Flatiron Energy develops, builds, owns, and operates standalone utility-scale energy storage.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
