import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Banner(props) {
  React.useEffect(() => {
    if (props.gradient === "blue") {
      document.documentElement.style.setProperty("--banner-gs", "#40666a");
      document.documentElement.style.setProperty("--banner-ge", "#004359");
      document.documentElement.style.setProperty("--banner-text-color", "#FFFFFF");
    }
    if (props.gradient === "green") {
      document.documentElement.style.setProperty("--banner-gs", "#3e9a68");
      document.documentElement.style.setProperty("--banner-ge", "#0b8040");
      document.documentElement.style.setProperty("--banner-text-color", "#FFFFFF");
    }
    // if (props.gradient === "lightgreen") {
    //   document.documentElement.style.setProperty("--banner-gs", "#f1fae6");
    //   document.documentElement.style.setProperty("--banner-ge", "#e0f8d8");
    //   document.documentElement.style.setProperty("--banner-text-color", "#004359");
    // }
  }, [props.gradient]);

  return (
    <Container className="banner-wrapper">
      <Row className="row-cols-auto" id="bannerDesktop">
        {/* Banner Text */}
        <Col className="g-0 col-lg-6 col-md-12">
          <div className="d-inline-block banner-text">
            <h1>{props.header}</h1>
            <p>{props.body}</p>
          </div>
        </Col>

        {/* Banner Image */}
        <Col className="g-0 col-lg-6">
          <div className="banner-image-wrapper">
            <img src={props.image} alt={props.imageAlt} />
          </div>
        </Col>
      </Row>

      {/***** Banner Mobile *****/}
      <Row id="bannerMobile">
        <Col className="g-0">
          <div className="banner-wrapper-mobile">
            <h1>{props.header}</h1>
            <p>{props.body}</p>
          </div>
          <div className="banner-image-wrapper-mobile">
            <img src={props.image} alt={props.imageAlt} />
          </div>
        </Col>
      </Row>
    </Container>
  );
}
