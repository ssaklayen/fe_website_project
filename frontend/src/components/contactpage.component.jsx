import React, {useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ContactBanner from "./contactbanner.component";
import ContactInformation from "./contactinformation.component";
import ContactForm from "./contactform.component";

export default function ContactPage() {

  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);

  return (
    <Container className="content-container contact-page-wrapper">
      <ContactBanner />
      <Row className="contact-page-row-wrapper">
        <Col id="contactInformation">
          <ContactInformation />
        </Col>

        <Col>
          <ContactForm />
        </Col>
      </Row>
    </Container>
  );
}
