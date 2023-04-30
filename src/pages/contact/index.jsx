import React from "react";
import ModalVideo from "react-modal-video";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import Layout from "../../layouts";
import { Container, Row, Col } from "react-bootstrap";
import ContactUs from "../../componets/contactUs/Index";

class ContactPage extends React.Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
    this.openModal = this.openModal.bind(this);
  }

  openModal = (event) => {
    this.setState({ isOpen: true });
    event.preventDefault();
  };

  formHandle = (event) => {
    toast.success("Thank you for contact with us!");
    event.preventDefault();
  };

  render() {
    return (
      <Layout>
        <div className="page-title-area">
          <Container>
            <Row>
              <Col lg="12">
                <div className="page-title-item text-center">
                  <h2 className="title">Contact Us</h2>
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <Link to={"/"}>Home </Link>
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        Contact Us
                      </li>
                    </ol>
                  </nav>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div>
          <ContactUs />
          <div className="contact-details-area pt-90 pb-120">
            <Container>
              <Row>
                <Col lg="6">
                  <div className="contact-info mr-30 mt-30">
                    <div className="contact-item-1">
                      <div className="contact-info-item text-center">
                        <i className="fal fa-phone" />
                        <h5 className="title">Phone Number</h5>
                        <p>+971 50 823 6155</p>
                      </div>
                      <div className="contact-info-item text-center">
                        <i className="fal fa-envelope" />
                        <h5 className="title">Email Address</h5>
                        <p>Bestbguae@gmail.com</p>
                      </div>
                    </div>
                    <div className="contact-item-1">
                      <div className="contact-info-item text-center">
                        <i className="fal fa-map" />
                        <h5 className="title">Office Location</h5>
                        <p>Dubai</p>
                      </div>
                      <div className="contact-info-item text-center">
                        <i className="fal fa-globe" />
                        <h5 className="title">Social Network</h5>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </Layout>
    );
  }
}

export default ContactPage;
