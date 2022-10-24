import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Banner from "./banner.component";

import careersBannerImage from "../images/careers_banner.png";

export default function CareersPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    let navbarLinks = document.querySelectorAll(".nav-link");
    navbarLinks.forEach((navlink) => {
      navlink.classList.remove("nav-link-active");
    });
    let activeLink = document.getElementById("careersLink");
    activeLink.classList.add("nav-link-active");
    document.documentElement.style.setProperty(
      "--nav-landowners-color",
      "#0b8040"
    );
  }, []);

  const bannerText = {
    header: "Careers",
    body:
      "We are a tight-knit team that has been working together for over seven years in the energy storage industry. If you are as excited about the energy transition to a cleaner, more flexible, and more reliable grid as we are, we want to hear from you.",
  };

  return (
    <Container className="content-container">
      <Banner
        header={bannerText.header}
        body={bannerText.body}
        image={careersBannerImage}
        imageAlt="Careers"
        gradient="blue"
      />
    </Container>
  );
}
