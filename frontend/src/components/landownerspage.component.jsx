import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Banner from "./banner.component";
import LandownersInformation from "./landownersinformation.component";
import LandownersSteps from "./landownerssteps.component";

import landownersBannerImage from "../images/landowners_banner.png";

export default function LandownersPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    let navbarLinks = document.querySelectorAll(".nav-link");
    navbarLinks.forEach((navlink) => {
      navlink.classList.remove("nav-link-active");
    });
    let activeLink = document.getElementById("landownersNavlink");
    activeLink.classList.add("nav-link-active");
  }, []);

  const bannerText = {
    header: "Real estate has a new tenant",
    body: "Learn more about the immediate benefits to your bottom line below.",
  };

  return (
    <Container className="content-container">
      <Banner
        header={bannerText.header}
        body={bannerText.body}
        image={landownersBannerImage}
        imageAlt="Landowner Leasing"
        gradient="blue"
      />
      <LandownersSteps />
      <LandownersInformation />
    </Container>
  );
}
