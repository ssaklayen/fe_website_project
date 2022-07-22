import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function ContactForm() {
  return (
    <Container className="p-0">
      <div className="ms-auto contactFormBackground">
        <div className="contactFormForeground">
          <div className="contactFormWrapper">
            <form action="/contact" method="post">
              <Form>
                <Row>
                  <Col>
                    <Form.Group className="mt-5 mb-4" controlId="formFirstName">
                      <Form.Label>First name</Form.Label>
                      <Form.Control type="text" />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className="mt-5 mb-4" controlId="formLastName">
                      <Form.Label>Last name</Form.Label>
                      <Form.Control type="text" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group className="mb-4" controlId="formEmail">
                      <Form.Label>Email</Form.Label>
                      <Form.Control type="email" placeholder="email@domain.com" />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className="mb-4" controlId="formPhone">
                      <Form.Label>Phone</Form.Label>
                      <Form.Control type="tel"  placeholder="(123) 456-7890"/>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group className="mb-4" controlId="formCompany">
                      <Form.Label>Company</Form.Label>
                      <Form.Control type="text" />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className="mb-4" controlId="formSubject">
                      <Form.Label>What is this about</Form.Label>
                      <Form.Select>
                        <option value="careers">Careers</option>
                        <option value="propertysales">Property Sales</option>
                        <option value="Feedback">Feedback</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col>
                  <Form.Group className="mb-3" controlId="formMessage">
                      <Form.Label>Your message</Form.Label>
                      <Form.Control as="textarea" placeholder="Leave us a short message here" rows={5} style={{ resize: 'none'}} />
                    </Form.Group>
                   <Form.Group className="d-flex justify-content-end">
                    <input type="submit" className="contactSubmit" id="submitButton" name="submitButton" value="Submit" />
                   </Form.Group>
                  </Col>
                </Row>
              </Form>
            </form>
          </div>
        </div>
      </div>
    </Container>
  );
}
