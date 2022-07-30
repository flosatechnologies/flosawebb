import React, { useRef } from "react";
import "../css/Contact.css";
import contactImage from "../images/contact.jpg";
import { Row, Col, Container } from "react-bootstrap";
import { Telephone } from "react-bootstrap-icons";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { BsFillTelephoneFill, BsFacebook } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_fp9k4mj",
        "template_ix6fsps",
        form.current,
        "R6b8YmYTKD8r4uK6O"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Container
      fluid={true}
      className="container-fluid"
      xs={12}
      sm={12}
      md={12}
      lg={6}
      xl={6}
      xxl={6}
    >
      <Row className="topSection-Contact">
        <div className="contactUsHeaderDescriptionContainer-Contact">
          <h2 className="contactUsTextHeader-Contact">Contact Us</h2>

          <p className="contactUsDescriptionText-Contact">
            Want to find out how FLOSA Technologies can solve problems specific
            to your business? Lets talk!
          </p>
        </div>
      </Row>
      <Row>
        <Col
          xxl={{ span: 10, offset: 1 }}
          xl={{ span: 10, offset: 1 }}
          lg={{ span: 10, offset: 1 }}
          md={{ span: 10, offset: 1 }}
          sm={{ span: 10, offset: 1 }}
          xs={{ span: 10, offset: 1 }}
        >
          <Row className="contactInnerContainer">
            <Col xs={12} sm={12} md={7} lg={7} xl={7} xxl={7}>
              <form ref={form} onSubmit={sendEmail}>
                <div
                  style={{
                    display: "flex",
                    marginBottom: "20px",
                    justifyContent: "center",
                  }}
                >
                  <input
                    style={{
                      marginTop: "20px",
                      marginRight: "15px",
                      width: "50%",
                      fontFamily: "sans-serif",
                      fontSize: "20px",
                      color: "black",
                    }}
                    type="text"
                    placeholder="First Name"
                    name="name"
                  />

                  <input
                    style={{
                      marginTop: "20px",
                      marginLeft: "15px",
                      width: "50%",
                      fontFamily: "sans-serif",
                      fontSize: "20px",
                      color: "black",
                    }}
                    type="text"
                    placeholder="Last Name"
                    name="name"
                  />
                </div>
                <div
                  className="col"
                  style={{
                    display: "flex",
                    marginBottom: "10px",
                    fontFamily: "sans-serif",
                    fontSize: "20px",
                    color: "black",
                  }}
                >
                  <input
                    style={{
                      marginRight: "15px",
                      width: "50%",
                      fontFamily: "sans-serif",
                      fontSize: "20px",
                      color: "black",
                    }}
                    type="text"
                    placeholder="Phone"
                    name="user_phone"
                  />

                  <input
                    style={{
                      marginLeft: "15px",
                      width: "50%",
                      fontFamily: "sans-serif",
                      fontSize: "20px",
                      color: "black",
                    }}
                    type="text"
                    placeholder="Email"
                    name="user_email"
                  />
                </div>
                <div className="col-md">
                  <textarea
                    style={{
                      width: "100%",
                      fontFamily: "sans-serif",
                      fontSize: "20px",
                      color: "black",
                    }}
                    type="text"
                    placeholder="Message"
                    name="message"
                    rows={7}
                  />
                </div>
                <div>
                  <input type="submit" value="Submit" />
                </div>
              </form>
            </Col>
            <Col
              xs={12}
              sm={12}
              md={5}
              lg={5}
              xl={5}
              xxl={5}
              style={{ paddingLeft: "40px" }}
            >
              <h2 className="contactInfoText-contact">Contact Information</h2>
              <div className="icons">
                <h5>
                  <a className="phoneContact1" href="tel: +233 546 835 848">
                    <Telephone
                      id="tele"
                      color="rgb(71, 162, 252)"
                      size={20}
                      paddingTop={5}
                      style={{
                        marginRight: "10px",
                      }}
                    />
                    0546835848
                  </a>
                </h5>
                <h5>
                  <a className="phoneContact2" href="tel: +233 248 206 239">
                    <Telephone
                      id="tele"
                      color="rgb(71, 162, 252)"
                      size={20}
                      paddingTop={5}
                      style={{ marginRight: "10px" }}
                    />
                    0248206239
                  </a>
                </h5>
                <h5 style={{ paddingLeft: "5px" }}>
                  <a
                    className=" phoneWhatsapp"
                    href="https://wa.me/+233262753277"
                  >
                    <FaWhatsapp
                      id="tele"
                      color="rgb(71, 162, 252)"
                      size={19}
                      paddingTop={5}
                      style={{ marginRight: "10px" }}
                    />
                    0262753277
                  </a>
                </h5>
                <h5>
                  <a
                    className="emailLinkContact"
                    href="mailto:info@flosatechnologies.com"
                  >
                    <FaEnvelope
                      id="tele"
                      color="rgb(71, 162, 252)"
                      size={20}
                      paddingTop={5}
                      style={{ marginRight: "10px" }}
                    />
                    info@flosatechnologies.com
                  </a>
                </h5>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
