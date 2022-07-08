import React from "react";
import { Link } from "react-router-dom";
import { Container, Dropdown, Nav, Navbar, NavDropdown } from "react-bootstrap";
import logo from "../images/fe_logo_420_260.png";

export default function NavBar() {
  return (
    <Navbar collapseOnSelect bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} width="105" height="65" alt="Flatiron Energy" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Link to="/landowners" className="nav-link">
              Landowners
            </Link>
            <Link to="/energystorage" className="nav-link">
              Energy Storage
            </Link>
            <NavDropdown title="About Us" id="fe-nav-dropdown">
              <Link to="/aboutus#team" className="dropdown-item">
                Our Team
              </Link>
              <Link to="/aboutus#values" className="dropdown-item">
                Our Values
              </Link>
              <Link to="/aboutus#partners" className="dropdown-item">
                Our Partners
              </Link>
              {/* <Dropdown.Divider />
              <Link to="/contact" className="dropdown-item">Contact Us</Link> */}
            </NavDropdown>
            <Link to="/contact" className="nav-link">Contact Us</Link>
          </Nav>
          {/* <Nav className="ms-auto">
              <Link to="/contact" className="nav-link">Contact Us</Link>
          </Nav> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}



// {/* {/* // <nav className="navbar navbar-expand-lg navbar-light bg-light">
// //     //   <div className="container-fluid">
// //     //     {/* Brand Link */}
//     //     <Link to="/" className="navbar-brand">
//     //       <img src={logo} width="70" height="70" alt="Flatiron Energy" />
//     //     </Link>

//     //     {/* Collapse Button Toggler */}
//     //     <button */}
//     //       className="navbar-toggler"
//     //       type="button"
//     //       data-bs-toggle="collapse"
//     //       data-bs-target="#navbarContent"
//     //     >
//     //       <span className="navbar-toggler-icon"></span>
//     //     </button>

//     //     {/* Tabs */}
//     //     <div className="collapse navbar-collapse" id="navbarContent">
//     //       <ul className="navbar-nav mx-auto">
//     //       <li className="navbar-item">
//     //           <Link to="/landowners" className="nav-link">
//     //             Landowners
//     //           </Link>
//     //         </li>
//     //         <li className="navbar-item">
//     //           <Link to="/energystorage" className="nav-link">
//     //             Why Energy Storage
//     //           </Link>
//     //         </li>
//     //         {/* <li className="navbar-item">
//     //           <Link to="/aboutus" className="nav-link">
//     //             About Us
//     //           </Link>
//     //         </li> */}

//     //         {/* <li className="navbar-item dropdown" role="button" data-bs-toggle="dropdown">
//     //           <Link to="/aboutus" className="nav-link dropdown-toggle">
//     //             About Us
//     //           </Link>
//     //           <ul class="dropdown-menu">
//     //             <li><NavLink to="/aboutus" className="dropdown-item">Team</NavLink></li>
//     //             <li><Link to="/aboutus" className="dropdown-item">Values</Link></li>
//     //             <li><Link to="/aboutus" className="dropdown-item">Partners</Link></li>
//     //           </ul>
//     //         </li> */}


//     //         <li className="navbar-item">
//     //           <Link to="/contact" className="nav-link">
//     //             Contact Now
//     //           </Link>
//     //         </li>
//     //       </ul>
//     //     </div>
//     //   </div>
//     // </nav> */}
