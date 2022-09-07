import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import BulletCard from "./bulletcard.component";

import landownersHandshake from "../images/landowners_handshake2.png";

export default function LandownersInformation() {
  const landownersText = "Flatiron Energy is a tenant you can trust";

  return (
    <>
      <div className="landowners-information-heading-wrapper">
        <h1>{landownersText}</h1>
      
      <Container>
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
      </Container>
      </div>
    </>
  );
}
