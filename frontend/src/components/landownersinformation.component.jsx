import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import BulletCard from "./bulletcard.component";

import landownersHandshake from "../images/landowners_handshake.png";
import landownersCity from "../images/landowners_city2.png";

export default function LandownersInformation() {
  const landownersText = "Flatiron Energy is a tenant you can trust";

  return (
    <>
      <div className="mt-5 landowners-information-banner-wrapper">
        <img src={landownersCity} alt="Landowner's City" />
      </div>
      <div className="landowners-information-heading-wrapper">
        <h1>
          <span style={{ color: "#004359", fontWeight: "700" }}>Flatiron Energy</span>{" "}
          <span style={{ color: "#004359", fontWeight: "400" }}>is a tenant you can </span><span>trust</span>
        </h1>
      </div>
        <Container className="landowners-information-body-wrapper">
          <Row>
            <Col md={0} lg={6} className="p-0">
              <div className="landowners-information-image-wrapper">
                <img src={landownersHandshake} alt="Landowner's Handshake" />
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
    </>
  );
}