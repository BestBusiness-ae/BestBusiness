import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";
import Dropdown from "react-bootstrap/Dropdown";
import { fireBaseApp } from "../../data/firebaseConstants";
import { servicesData } from "../../data/services";
const ContactUs = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();
  const [error, setError] = useState();
  const [reason, setReason] = useState();

  function formHandle(event) {
    event.preventDefault();
    var today = new Date();
    const timeStamp = Date.now();
    setError("");
    if (
      name != null &&
      name !== "" &&
      email != null &&
      email !== "" &&
      message != null &&
      message !== "" &&
      reason != null &&
      reason !== ""
    ) {
      const db = getFirestore(fireBaseApp);

      var dd = String(today.getDate()).padStart(2, "0");
      var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
      var yyyy = today.getFullYear();

      today = dd + "/" + mm + "/" + yyyy;

      addDoc(
        collection(
          db,
          "usersData",
          "users",
          String(yyyy),
          String(yyyy),
          String(mm),
          String(mm),
          String(dd)
        ),
        { name, email, message, reason, timeStamp }
      )
        .then((x) => {
          if (x != null) {
            alert("Sucessfully Submitted!");
            setName("");
            setEmail("");
            setMessage("");
            setReason("");
          }
        })
        .catch((x) => {
          console.log("Error ::", x);
        });
    } else {
      setError("Invalied Form");
    }
  }

  return (
    <div className="get-in-touch-area get-in-touch-area-2">
      <Container>
        <Row>
          <Col lg="6">
            <div className="section-title text-left">
              <span>Get In Touch</span>
              <h2 className="title">Get free consultation</h2>
            </div>
            <p className="d-flex justify-content-center text-danger">{error}</p>

            <div className="form-area position-relative">
              <form>
                <div className="input-box mt-20">
                  <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                  />
                  <i className="fal fa-user" />
                </div>
                <div className="input-box mt-20">
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                  />
                  <i className="fal fa-envelope" />
                </div>

                <div className="input-box mt-20">
                  <textarea
                    name="message"
                    id="index"
                    value={message}
                    cols={30}
                    rows={10}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Enter your message"
                    defaultValue={""}
                  />
                  <i className="fal fa-edit" />

                  <Dropdown className="d-flex justify-content-center">
                    <Dropdown.Toggle
                      variant="light"
                      style={{
                        backgroundColor: "gray",
                        borderColor: "transparent",
                      }}
                    >
                      Reason for Enquiry
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      {(servicesData??[]).map((reason) => (
                        <Dropdown.Item
                          key={reason}
                          onSelect={(e) => setReason(reason)}
                        >
                          {reason}{" "}
                        </Dropdown.Item>
                      ))}
                    </Dropdown.Menu>
                  </Dropdown>
                  <p className="d-flex justify-content-center pt-10 text-dark">
                    {reason}
                  </p>
                  <button
                    className="main-btn"
                    type="submit"
                    onClick={formHandle}
                  >
                    Submit Now
                  </button>
                </div>
              </form>

              <p className="form-message" />
            </div>
          </Col>
          <Col lg="6">
            <div className="get-map d-none d-lg-block mt-40">
              <img src="/assets/images/contact-thumb.jpg" alt="video play" />
              
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactUs;
