import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import BulletCard from "./bulletcard.component";

export default function LandownersInformation() {
  const landownersText = {
    header: "Real estate has a new tenant",
    body: [
      "The expansion of renewable energy across New York is creating the demand for another resource: energy storage. This technology stores electricity when it is most abundant, and sends it back to the grid when it is needed most. Flatiron Energy is seeking ideally suited properties across urban and suburban areas to host new energy storage facilities.",
      "We pay attractive option-to-lease rates to property owners in order to integrate energy storage into the building. For property owners, Flatiron Energy is an ideal tenant over the long haul.",
    ],
  };
  return (
    <Container className="landowners-information-wrapper">
      <h1>{landownersText.header}</h1>
      <p>{landownersText.body[0]}</p>
      <p>{landownersText.body[1]}</p>
      <Row>
        <Col className="mt-5">
          <BulletCard card={0} />
          <BulletCard card={1} />
          <BulletCard card={2} />
        </Col>
        <Col className="mt-5">
          <BulletCard card={3} />
          <BulletCard card={4} />
          <BulletCard card={5} />
        </Col>
      </Row>
    </Container>
  );
}
