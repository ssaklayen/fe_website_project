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
              We continue to expand our team and are always looking to connect
              with talented individuals.
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
              We partner with landowners throughout the Northeast and offer
              flexible structuring and attractive rates.
            </p>
            <p>
              If you are a landowner
              interested in working with us, please provide a description of
              your property including size and location in your message.
            </p>
          </div>
        </Row>
        <Row>
          <div className="contactInfoWrapper">
            <h4>Feedback</h4>
            <p>
              We welcome any additional feedback you might have, ideas for
              partnership, or press inquiries. Thank you!
            </p>
          </div>
        </Row>
      </div>
    </Container>
  );
}
