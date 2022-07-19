import React from "react";
import Container from 'react-bootstrap/Container';
import MainBanner from "./mainbanner.component";
import MissionStatement from "./missionstatement.component";
import Strengths from "./strengths.component";
import Infographic from './infographic.component';

export default function SplashPage() {
  return (
    <Container className="content-container">
      <MainBanner />
      <MissionStatement />
      <hr />
      <Strengths />
      <hr />
      <Infographic />
    </Container>
  );
}
