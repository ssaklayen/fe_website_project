import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import MainBanner from "./mainbanner.component";
import MissionStatement from "./missionstatement.component";
import Strengths from "./strengths.component";
import Infographic from "./infographic.component";
import { Link } from "react-router-dom";

import hullStreetEnergy from "../images/hullstreetenergy.png";

export default function SplashPage() {
  const investorCaption = [
    "Flatiron Energy is a portfolio company of Hull Street Energy.",
    "Hull Street Energy invests in companies that are strategically positioned for growth as North America transitions to a more sustainable future.",
  ];

  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);

  return (
    <Container className="content-container">
      <MainBanner />
      <MissionStatement />
      <hr />
      <Strengths />
      <hr />
      <Infographic />
      <div id="contactMobileButton" className="contact-mobile-wrapper">
        <Link to="/contact" className="contact-mobile-button">
          Contact Us
        </Link>
      </div>
      <div className="footer-investor-wrapper">
        <img
          className="footer-investor-image"
          src={hullStreetEnergy}
          alt="Hull Street Energy"
        />
        <p>{investorCaption[0]}<br />{investorCaption[1]}</p>
      </div>
    </Container>
  );
}
