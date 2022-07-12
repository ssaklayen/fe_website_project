import React from "react";
import logo from "../images/fe_logo_420_260.png";
import bcorptext from "../images/bcorptext.png";

export default function FooterBar() {
  return (
    <footer className="footerCustom">
      <div className="fLeftImage">
        <img src={logo} width="210" height="130" alt="Flatiron Energy © 2022" />
      </div>
      <div className="fRightImage">
        <img src={bcorptext} width="35%" alt="Certified B Corporation" />
      </div>
    </footer>
  );
}
