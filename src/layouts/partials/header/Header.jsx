import React from "react";
import PartialNav from "./PartialNav";
import { Link } from "react-router-dom";
import Logo from "../../../assets/images/main-logo.png";

import {  Navbar } from "react-bootstrap";

class Header extends React.Component {
  render() {
    return (
      <>
        <header className="header-area header-area-2">
          <div className="header-nav">
            <div className="navigation">
              <Navbar expand="lg" className={`transparent-color`}>
                <Navbar.Brand as={Link} to={"/"}>
                  <img
                    height={80}
                    width={80}
                    src={Logo}
                    className="rounded-circle"
                    alt=""
                  />
                </Navbar.Brand>
                <Navbar.Toggle>
                  <span className="toggler-icon" />
                  <span className="toggler-icon" />
                  <span className="toggler-icon" />
                </Navbar.Toggle>{" "}
                <Navbar.Collapse
                  className="sub-menu-bar"
                  id="navbarSupportedContent"
                >
                  <PartialNav />
                </Navbar.Collapse>{" "}
                <div className="navbar-btn mr-100">
                  <Link className="main-btn" to={"/contact"}>
                    Free Consulting <i className="fal fa-long-arrow-right" />
                  </Link>
                </div>
              </Navbar>
            </div>{" "}
          </div>
        </header>
      </>
    );
  }
}

export default Header;
