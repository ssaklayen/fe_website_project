import React, {useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Banner from "./components/banner.component";
import ContactInformation from "./components/contactus.information.component";
import ContactForm from "./components/contactus.form.component";

import contactBannerImage from "./images/contact_banner.png";

export default function ContactPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    let navbarLinks = document.querySelectorAll(".nav-link");
    navbarLinks.forEach((navlink) => {
      navlink.classList.remove("nav-link-active");
    });
    let activeLink = document.getElementById("contactLink");
    activeLink.classList.add("nav-link-active");
  }, []);

  const bannerText = {
    header: "Contact Us",
    body:
      "We would love to hear from you. If you would like to speak with a member of our team, please fill out the form below.",
  };

  return (
    <Container className="content-container contact-page-wrapper">
      <Banner
        header={bannerText.header}
        body={bannerText.body}
        image={contactBannerImage}
        imageAlt="Power Lines"
        gradient="blue"
      />
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
