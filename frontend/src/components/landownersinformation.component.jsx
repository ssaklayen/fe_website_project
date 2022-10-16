import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import BulletCard from "./bulletcard.component";
import {Link} from "react-router-dom";

import landownersFarm from "../images/landowners_farm.png";
import landownersCity from "../images/landowners_city2.png";

export default function LandownersInformation() {
  return (
    <>
      <div className="mt-5 landowners-information-banner-wrapper">
        <img src={landownersCity} alt="Landowner's City" />
      </div>
      <div className="landowners-information-heading-wrapper">
        <h1>
          <span style={{ color: "#004359", fontWeight: "700" }}>
            Flatiron Energy
          </span>{" "}
          <span style={{ color: "#004359", fontWeight: "400" }}>
            is a tenant you can{" "}
          </span>
          <span>trust</span>
        </h1>
      </div>
      <Container className="landowners-information-body-wrapper">
        <Row>
          <Col md={0} lg={6} className="p-0">
            <div className="landowners-information-image-wrapper">
              <img src={landownersFarm} alt="Landowner's Farm" />
            </div>
          </Col>
          <Col md={0} lg={6} className="p-0">
            <div className="landowners-information-bullets-wrapper">
              <BulletCard card={0} />
              <BulletCard card={2} />
              <BulletCard card={5} />
              <BulletCard card={3} />
              <BulletCard card={1} />
            </div>
          </Col>
        </Row>
      </Container>
      <div className="landowners-contact-link-wrapper">
      <Link to="/contact" className="landowners-contact-link">
          Contact Us
        </Link>
        <p>If you're interested in learning more about how we can add value to your property please reach out to us.</p>
      </div>
    </>
  );
}
