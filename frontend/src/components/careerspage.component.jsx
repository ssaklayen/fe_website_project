import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Banner from "./banner.component";

import mainBannerImage from "../images/main_banner.png";

export default function CareersPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    let navbarLinks = document.querySelectorAll(".nav-link");
    navbarLinks.forEach((navlink) => {
      navlink.classList.remove("nav-link-active");
    });
    let activeLink = document.getElementById("careersLink");
    activeLink.classList.add("nav-link-active");
    document.documentElement.style.setProperty('--nav-landowners-color', '#004359');
  }, []);

  const bannerText = {
    header: "Careers",
    body:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  };

  return (
    <Container className="content-container">
      <Banner
        header={bannerText.header}
        body={bannerText.body}
        image={mainBannerImage}
        imageAlt="Mountain Energy Storage"
        gradient="blue"
      />
    </Container>
  );
}
