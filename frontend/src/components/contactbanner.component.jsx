import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import contactBannerImage from "../images/contact_banner.png";

export default function ContactBanner() {
  const contactBannerText = {
    header: "Contact Us",
    body:
      " We would love to hear from you. If you would like to speak with a member of our team, please fill out the form below.",
  };

  return (
    <Container className="mt-5 contact-page-banner-wrapper">
      <Row className="row-cols-auto" id="contactBannerDesktop">
        {/* Banner Text */}
        <Col className="g-0 col-lg-6 col-md-12">
          <div className="d-inline-block contact-page-banner-text">
            <h1>{contactBannerText.header}</h1>
            <p>{contactBannerText.body}</p>
          </div>
        </Col>

        {/* Banner Image */}
        <Col className="g-0 col-lg-6">
          <div className="contact-page-banner-image">
            <img src={contactBannerImage} alt="Contact Banner" />
          </div>
        </Col>
      </Row>

      {/* Banner Mobile */}
      <Row id="contactBannerMobile">
        <Col className="g-0">
          <div className="contact-page-banner-wrapper-mobile-outer">
            <div className="contact-page-banner-wrapper-mobile">
              <h1>{contactBannerText.header}</h1>
              <p>{contactBannerText.body}</p>
            </div>
          </div>
          <div className="contact-page-image-wrapper-mobile">
            <img src={contactBannerImage} alt="Contact Banner" />
          </div>
        </Col>
      </Row>

    </Container>
  );
}
