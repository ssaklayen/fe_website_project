import React from "react";
import Container from "react-bootstrap/Container";
import MainBanner from "./mainbanner.component";
import MissionStatement from "./missionstatement.component";
import Strengths from "./strengths.component";
import Infographic from "./infographic.component";
import { Link } from "react-router-dom";

import hullstreetenergy from "../images/hullstreetenergy.png";

export default function SplashPage() {
  const investorCaption = [
    "Flatiron Energy is a portfolio company of Hull Street Energy.",
    "Hull Street Energy invests in companies that are strategically positioned for growth as North America transitions to a more sustainable future.",
  ];

  return (
    <Container className="content-container">
      <MainBanner />
      <MissionStatement />
      <hr />
      <Strengths />
      <hr />
      <Infographic />
      <div id="contactMobileBtn" className="contactMobileWrapper">
        <Link to="/contact" className="contactMobile">
          Contact Us
        </Link>
      </div>
      {/* <div className="footerInvestor">
        <img
          className="footerInvestorImg"
          src={hullstreetenergy}
          alt="Hull Street Energy"
        />
        <p>{investorCaption[0]}<br />{investorCaption[1]}</p>
      </div> */}
      <div className="space">
        
      </div>
    </Container>
  );
}
