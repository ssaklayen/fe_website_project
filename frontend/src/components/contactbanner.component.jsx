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
            <h1>Contact us</h1>
            <p>
              We would love to hear from you. If you would like to speak with a
              member of our team. please fill out the form and let us know your
              inquiry.
            </p>
          </div>
        </Col>

        {/* Banner Image */}
        <Col className="g-0 col-lg-6">
          <div className="contactBannerImage">
            <img src={contactBannerImage} alt="Contact Banner" />
          </div>
        </Col>
      </Row>

      {/* Banner Mobile */}
      <Row id="contactBannerMobile">
        <Col className="g-0">
          <div className="contactBannerMobileHead">
            <div className="contactBannerMobileHeadWrapper">
              <h1>Contact us</h1>
              <p>
                We would love to hear from you. If you would like to speak with
                a member of our team. please fill out the form and let us know
                your inquiry.
              </p>
            </div>
          </div>
          <div className="contactBannerImageMobile">
            <img src={contactBannerImage} alt="Contact Banner" />
          </div>
        </Col>
      </Row>

      {/* Banner Mobile old */}
      <Row id="contactBannerMobile">
        <Col className="g-0">
          <div className="contactBannerMobile">
            <h1>Contact us</h1>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
