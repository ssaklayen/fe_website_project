import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
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
    document.documentElement.style.setProperty('--nav-landowners-color', '#FFFFFF');
  }, []);

  const bannerText = {
    header: "Let's work together",
    body: "Lease or sell your property to Flatiron Energy to earn stable, long-term revenue and returns.",
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
