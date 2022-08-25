import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Banner from "./banner.component";

import landownersBannerImage from "../images/landowners_banner.png";

export default function LandownersPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  const bannerText = {
    header: "Real estate business has a new tenant",
    body:
      "Learn more about the immediate benefits to your bottom line below.",
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
      <Row>
        <div>
          <h1>Lorem Ipsum</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </Row>
    </Container>
  );
}
