import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import contactBannerImage from "../images/contact_banner.png";

export default function ContactBanner() {
  return (
    <Container className="mt-5 contactBannerWrapper">
      <Row className="row-cols-auto" id="contactBannerDesktop">
        {/* Banner Text */}
        <Col className="g-0 col-lg-6 col-md-12">
          <div className="d-inline-block contactBannerText">
            <h1>Contact us now</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna.
            </p>
          </div>
        </Col>

        {/* Banner Image */}
        <Col className="g-0 col-lg-6">
          <div className="bannerImage">
            <img src={contactBannerImage} alt="Contact Banner" />
          </div>
        </Col>
      </Row>

      {/* Banner Mobile */}
      <Row id="mainBannerMobile">
        <Col className="g-0">
          <div className="bannerMobile">
            <h1>Contact us now</h1>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
