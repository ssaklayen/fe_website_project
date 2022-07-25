import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import axios from "axios";

export default function ContactForm() {

  const [fName, setfName] = React.useState("");
  const [lName, setlName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [company, setCompany] = React.useState("");
  const [subject, setSubject] = React.useState("");
  const [message, setMessage] = React.useState("");

  function handlefName(e) {
    setfName(e.target.value);
  }

  function handlelName(e) {
    setlName(e.target.value);
  }

  function handleEmail(e) {
    setEmail(e.target.value);
  }

  function handlePhone(e) {
    setPhone(e.target.value);
  }

  function handleCompany(e) {
    setCompany(e.target.value);
  }

  function handleSubject(e) {
    setSubject(e.target.value);
  }

  function handleMessage(e) {
    setMessage(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newMessage = {
      fName: fName,
      lName: lName,
      email: email,
      phone: phone,
      company: company,
      subject: subject,
      message: message
    }

    axios.post("http://localhost:5000/contact", newMessage)
      .then(res => console.log(res.data));

    console.log (newMessage);
  }

  return (
    <Container className="p-0">
      <div className="ms-auto contactFormBackground">
        <div className="contactFormForeground">
          <div className="contactFormWrapper">
            <Form action="/contact" method="post" onSubmit={handleSubmit}>
              <Row>
                <Col>
                  <Form.Group className="mt-5 mb-4" controlId="formFirstName">
                    <Form.Label>First name</Form.Label>
                    <Form.Control type="text" value={fName} onChange={handlefName} required/>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mt-5 mb-4" controlId="formLastName">
                    <Form.Label>Last name</Form.Label>
                    <Form.Control type="text" value={lName} onChange={handlelName} required/>
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group className="mb-4" controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" value={email} onChange={handleEmail} placeholder="email@domain.com" required/>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-4" controlId="formPhone">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control type="tel" value={phone} onChange={handlePhone} placeholder="(123) 456-7890" required/>
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group className="mb-4" controlId="formCompany">
                    <Form.Label>Company</Form.Label>
                    <Form.Control type="text" value={company} onChange={handleCompany}/>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-4" controlId="formSubject">
                    <Form.Label>What is this about</Form.Label>
                    <Form.Select onChange={handleSubject}>
                      <option value="Careers">Careers</option>
                      <option value="Property Sales" onChange={handleSubject}>Property Sales</option>
                      <option value="Feedback" onChange={handleSubject}>Feedback</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group className="mb-3" controlId="formMessage">
                    <Form.Label>Your message</Form.Label>
                    <Form.Control
                      as="textarea"
                      value={message}
                      onChange={handleMessage}
                      placeholder="Leave us a short message here"
                      rows={5}
                      style={{ resize: "none" }}
                      required
                    />
                  </Form.Group>
                  <Form.Group className="d-flex justify-content-end">
                    <input
                      type="submit"
                      className="contactSubmit"
                      id="submitButton"
                      name="submitButton"
                      value="Submit"
                    />
                  </Form.Group>
                </Col>
              </Row>
            </Form>
          </div>
        </div>
      </div>
    </Container>
  );
}
