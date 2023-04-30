import React, { useRef, useState } from "react";
import { Row, Col, Navbar } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import SocialLink from "../../layouts/partials/header/SocialLink";

const Social = () => {
  const windowSize = useRef([window.innerWidth, window.innerHeight]);

  const [size, setSize] = useState(windowSize.current[0]);
  console.log(windowSize.current);
  return (
    <>
      {size > 600 && (
        <div className="header-top pl-30 pr-30">
          <Row className="align-items-center">
            <Col md="6" sm="10">
              <div className="header-left-side text-center text-sm-left">
                <ul>
                  <li>
                    <a href="mailto:webmaster@example.com" target="__blank">
                      <FontAwesomeIcon icon={faEnvelope} className="mr-1" />
                      Bestbguae@gmail.com
                    </a>
                  </li>
                  <li>
                    <a href="tel:+971 50 823 6155">
                      <FontAwesomeIcon icon={faPhone} className="mr-1" />
                      +971 50 823 6155
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
            <div className="col-md-6 col-sm-5">
              <div className="header-right-social text-center text-sm-right">
                <SocialLink />
              </div>
            </div>
          </Row>
        </div>
      )}
    </>
  );
};
export default Social;
