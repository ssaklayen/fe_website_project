import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import fe_logo from "../images/fe_logo.png";

// import bcorplogo from "../images/bcorplogo.png";

export default function NavBar() {
  const [collapsed, setCollapsed] = React.useState(true);

  function handleNavToggleClick() {
    collapsed === false ? setCollapsed(true) : setCollapsed(false);
  }

  useEffect(() => {
    let root = document.documentElement;
    collapsed === false ? root.style.setProperty('--nav-toggle-color', '#3e9a68') : root.style.setProperty('--nav-toggle-color', '#004359');
  })

  return (
    <Navbar
      sticky="top"
      collapseOnSelect
      bg="light"
      expand="lg"
    >
      <Container>
        <Navbar.Brand href="/">
          <img src={fe_logo} width="158" height="98" alt="Flatiron Energy" />
        </Navbar.Brand>
    
        <Navbar.Toggle onClick={handleNavToggleClick} aria-controls="fe-navbar-nav"><span className="fas fa-bars"></span></Navbar.Toggle>
        <Navbar.Collapse id="fe-navbar-nav">
          <Nav className="ms-auto">
            <Link to="/contact" className="nav-link">
              Contact Us
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

/*********************** Collapsable Nav Bar *********************************/
    {/* <Nav className="me-auto bcorpLinkMobile">
          <a href="https://www.bcorporation.net/en-us/certification">
            <img
              src={bcorplogo}
              className="mt-5"
              width="15%"
              alt="Certified B Corporation"
            />
          </a>
        </Nav> */}

{
  /* <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Link
              to="/landowners"
              className="nav-link navItemPad customNavItem"
            >
              Landowners
            </Link>
            <Link
              to="/energystorage"
              className="nav-link navItemPad customNavItem"
            >
              Energy Storage
            </Link>
            <NavDropdown
              title={"About"}
              id="fe-nav-dropdown"
              className="navItemPad"
            >
              <Link to="/aboutus#team" className="dropdown-item">
                Our Team
              </Link>
              <Link to="/aboutus#values" className="dropdown-item">
                Our Values
              </Link>
              <Link to="/aboutus#partners" className="dropdown-item">
                Our Partners
              </Link>
            </NavDropdown>
            <Link to="/contact" className="nav-link customNavItem">Contact Us</Link>
          </Nav>  
        </Navbar.Collapse> 
          */
}
