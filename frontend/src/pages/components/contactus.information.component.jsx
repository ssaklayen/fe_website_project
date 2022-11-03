import React from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

export default function ContactInformation() {
  const careerCard = {
    header: "Careers",
    body: [
      "We continue to expand our team and are always looking to connect with talented individuals.",
      "We believe strongly in creating a diverse, inclusive, and welcoming environment. Please let us know if you are interested in working with us!",
    ],
  };

  const landownersCard = {
    header: "Landowners",
    body: [
      "We partner with landowners throughout the Northeast and offer flexible structuring and attractive rates.",
      "If you are a landowner interested in working with us, please provide a description of your property including size and location in your message.",
    ],
  };

  const partnersCard = {
    header: "Partners",
    body: [
      "We work with a large number of partners in the community and across the energy storage value chain.",
      "We welcome your outreach and feedback, and look forward to working with you.",
    ],
  };

  return (
    <Container className="mt-5 contact-page-info-outer-wrapper">
      <div className="contact-page-info-inner-wrapper">
        <Row as={Link} to="/landowners" className="contact-page-info-link">
          <div className="contact-page-card">
            <h4>{landownersCard.header}</h4>
            <p>{landownersCard.body[0]}</p>
            <p>{landownersCard.body[1]}</p>
          </div>
        </Row>
        <Row>
          <div className="contact-page-card">
            <h4>{partnersCard.header}</h4>
            <p>{partnersCard.body[0]}</p>
            <p>{partnersCard.body[1]}</p>
          </div>
        </Row>
        <Row as={Link} to="/careers" className="contact-page-info-link">
          <div className="contact-page-card">
            <h4>{careerCard.header}</h4>
            <p>{careerCard.body[0]}</p>
            <p>{careerCard.body[1]}</p>
          </div>
        </Row>
      </div>
    </Container>
  );
}
