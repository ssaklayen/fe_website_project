import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import BulletCard from "./bulletcard.component";

import landownersHandshake from "../images/landowners_handshake2.png";
import landownersCity from "../images/landowners_city.png";

export default function LandownersInformation() {
  const landownersText = "Flatiron Energy is a tenant you can trust";

  return (
    <>
      <div className="mt-5 landowners-information-banner-wrapper">
        <img src={landownersCity} alt="Landowner's City" />
      </div>
      <div className="landowners-information-heading-wrapper">
        <h1>
          <span style={{ color: "#004359", fontWeight: "700" }}>Flatiron</span>{" "}
          <span>Energy</span> is a tenant you can trust
        </h1>

        <Container className="">
          <Row>
            <Col className="p-0 mt-5">
              <div className="landowners-information-image-wrapper">
                <img src={landownersHandshake} alt="Landowner's Handshake" />
              </div>
            </Col>
          </Row>

          <Row id="landownersDesktop">
            <Col className="mt-2">
              <div className="landowners-information-bullets-wrapper">
                <BulletCard card={0} />
                <BulletCard card={5} />
              </div>
            </Col>
            <Col className="mt-2">
              <div className="landowners-information-bullets-wrapper">
                <BulletCard card={2} />
                <BulletCard card={3} />
              </div>
            </Col>
          </Row>

          <Row id="landownersMobile">
            <Col>
              <div className="landowners-information-bullets-wrapper">
                <BulletCard card={0} />
                <BulletCard card={5} />
                <BulletCard card={2} />
                <BulletCard card={3} />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

{
  /* <Container>
<Row>
  <Col className="p-0 mt-5" md={12} lg={8}>
    <div className="landowners-information-image-wrapper">
      <img src={landownersHandshake} alt="Landowner's Handshake" />
    </div>
  </Col>
  <Col className="mt-5" md={12} lg={4}>
    <div className="landowners-information-bullets-wrapper">
      <BulletCard card={0} />
      <BulletCard card={1} />
      <BulletCard card={2} />
      <BulletCard card={3} />
    </div>
  </Col>
</Row>
</Container> */
}
