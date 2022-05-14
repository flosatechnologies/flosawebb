import React, { Component } from "react";
import "../css/Contact.css";
import contactImage from "../images/contact.jpg";
import { Card, Row, Col, Container } from "react-bootstrap";
import { Telephone } from "react-bootstrap-icons";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";

class Contact extends Component {
  render() {
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
              Want to find out how FLOSA Technologies can solve problems
              specific to your business? Lets talk!
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
            <Row style={{ paddingLeft: "4px", paddingRight: "10px" }}>
              <Col xs={12} sm={12} md={7} lg={7} xl={7} xxl={7}>
                <form onSubmit={this.handleSubmit}>
                  <div
                    style={{
                      display: "flex",
                      marginBottom: "20px",
                      justifyContent: "center",
                    }}
                  >
                    <input
                      style={{
                        marginRight: "10px",
                        marginTop: "20px",
                        width: "50%",
                      }}
                      type="text"
                      placeholder="First Name"
                    />

                    <input
                      style={{
                        marginRight: "10px",
                        marginTop: "20px",
                        width: "50%",
                      }}
                      type="text"
                      placeholder="Last Name"
                    />
                  </div>
                  <div
                    className="col"
                    style={{ display: "flex", marginBottom: "10px" }}
                  >
                    <input
                      style={{ marginRight: "10px", width: "50%" }}
                      type="text"
                      placeholder="Phone"
                    />

                    <input
                      style={{ marginRight: "10px", width: "50%" }}
                      type="text"
                      placeholder="Email"
                    />
                  </div>
                  <div className="col-md">
                    <textarea
                      style={{ width: "50%" }}
                      type="text"
                      placeholder="Message"
                    />
                  </div>
                  <div>
                    <input type="submit" value="Submit" />
                  </div>
                </form>
              </Col>
              <Col xs={12} sm={12} md={5} lg={5} xl={5} xxl={5} style={{}}>
                <h2>Contact Information</h2>
                <div className="icons">
                  <h5>
                    <a>
                      <Telephone
                        id="tele"
                        color="blue"
                        size={20}
                        paddingTop={5}
                        marginRight={20}
                      />
                      0546835848
                    </a>
                  </h5>
                  <h5>
                    <a>
                      <Telephone
                        id="tele"
                        color="blue"
                        size={20}
                        paddingTop={5}
                        marginRight={20}
                      />
                      0546835848
                    </a>
                  </h5>
                  <h5 style={{ paddingLeft: "5px" }}>
                    <a>
                      <FaWhatsapp
                        id="tele"
                        color="green"
                        size={20}
                        paddingTop={5}
                        marginRight={20}
                      />
                      0546835848``
                    </a>
                  </h5>
                  <h5>
                    <a>
                      <FaEnvelope
                        id="tele"
                        color="lightblue"
                        size={20}
                        paddingTop={5}
                        marginLeft={30}
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
  }
}
export default Contact;
