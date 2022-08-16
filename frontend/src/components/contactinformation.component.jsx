import React from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

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

  const feedbackCard = {
    header : "Feedback",
    body: "We welcome any additional feedback you might have, ideas for partnership, or press inquiries. Thank you!"
  }

  return (
    <Container className="mt-5 contact-page-info-outer-wrapper">
      <div className="contact-page-info-inner-wrapper">
        <Row>
          <div className="contact-page-card">
            <h4>{careerCard.header}</h4>
            <p>{careerCard.body[0]}</p>
            <p>{careerCard.body[1]}</p>
          </div>
        </Row>
        <Row>
          <div className="contact-page-card">
            <h4>{landownersCard.header}</h4>
            <p>{landownersCard.body[0]}</p>
            <p>{landownersCard.body[1]}</p>
          </div>
        </Row>
        <Row>
          <div className="contact-page-card">
            <h4>{feedbackCard.header}</h4>
            <p>{feedbackCard.body}</p>
          </div>
        </Row>
      </div>
    </Container>
  );
}
