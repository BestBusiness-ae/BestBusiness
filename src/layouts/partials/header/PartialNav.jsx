import React from "react";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";

class PartialNav extends React.Component {
  render() {
    return (
      <>
        <Nav className="mr-auto">
          <ul className="nav ">
            <li className="nav-item">
            
              <Link className="nav-link text-dark" to={`/services-details?type=Why-choose-us`}>
                Why choose us?
              </Link>
            </li>
          </ul>
          <ul className="nav ">
            <li className="nav-item">
              <Link className="nav-link text-dark" to={"/about-detail-page"}>
                About Us
              </Link>
            </li>
          </ul>
          <ul className="nav ">
            <li className="nav-item">
              <Link className="nav-link text-dark" to={"/contact"}>
                Contact Us
              </Link>
            </li>
          </ul>
          <ul className="nav ">
            <li className="nav-item">
              <Link className="nav-link text-dark" to={"/pricing"}>
                Pricing
              </Link>
            </li>
          </ul>

          
        </Nav>
      </>
    );
  }
}

export default PartialNav;
