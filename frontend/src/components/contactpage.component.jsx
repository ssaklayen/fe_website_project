import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ContactBanner from "./contactbanner.component";
import ContactInformation from "./contactinformation.component";
import ContactForm from "./contactform.component";

export default function ContactPage() {
    return (
      <Container className="content-container">
        <ContactBanner />
        <Row>
          
          <Col>
            <ContactInformation />
          </Col>
          
          <Col>
            <ContactForm />
          </Col>
          
        </Row>
      </Container>
    );
}