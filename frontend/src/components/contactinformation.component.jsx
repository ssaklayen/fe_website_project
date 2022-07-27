import React from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

export default function ContactInformation() {
  return (
    <Container className="mt-5 contactInformationOuterWrapper">
      <div className="contactInformationInnerWrapper">
        <Row>
          <div className="contactInfoWrapper">
            <h4>Careers</h4>
            <p>
              At Flatiron Energy we continue to expand our team and are always
              looking to connect new talented individuals.
            </p>
            <p>
              We believe strongly in creating a diverse, inclusive, and
              welcoming environment. Please let us know if you are interested in
              working with us!
            </p>
          </div>
        </Row>
        <Row>
          <div className="contactInfoWrapper">
            <h4>Landowners</h4>
            <p>
              Flatiron partners with landowners through the Northeast to lease
              or purchase their property for future energy storage projects.
            </p>
            <p>
              We offer flexible structuring and attractive rates. If you are a
              landowner interested in working with us, please provide a
              description of your property including location.
            </p>
          </div>
        </Row>
        <Row>
          <div className="contactInfoWrapper">
            <h4>Feedback</h4>
            <p>
              We welcome and additional feedback you might have, ideas for
              partnership, or press inquiries. Thank you!
            </p>
          </div>
        </Row>
      </div>
    </Container>
  );
}
