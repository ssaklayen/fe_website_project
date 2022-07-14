import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import bannerImage from "../images/mountainStorage.png";
export default function MainBanner() {
  return (
    <Container className="mt-5 mainBannerWrapper">
      <Row>
        {/* Banner Text */}
        <Col className="g-0">
          <div className="d-inline-block bannerText">
            <h1>Building the clean infrastructure for our future</h1>
            <p>
              Standalone energy storage assets that integrate renewable energy
              onto the grid, replace fossil fuel plants, and increase grid
              reliability
            </p>
          </div>
        </Col>

        {/* Banner Image */}
        <Col className="g-0">
          <div className="bannerImage">
            <img src={bannerImage} alt="Mountain Energy Storage" />
          </div>
        </Col>
      </Row>

      {/* Banner Image */}
    </Container>
  );
}
