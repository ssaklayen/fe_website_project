import React from "react";
import Container from 'react-bootstrap/Container';
import MainBanner from "./mainbanner.component";
import MissionStatement from "./missionstatement.component";
import Strengths from "./strengths.component";
import Infographic from './infographic.component';
import {Link} from "react-router-dom";

export default function SplashPage() {
  return (
    <Container className="content-container">
      <MainBanner />
      <MissionStatement />
      <hr />
      <Strengths />
      <hr />
      <div id="contactMobileBtn" className="contactMobileWrapper">
        <Link to="/contact" className="contactMobile">Contact Us Now</Link>
      </div>
      <Infographic />
    </Container>
  );
}
