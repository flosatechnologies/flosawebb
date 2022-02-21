import React, { Component } from "react";
import "../css/Contact.css";
import contactImage from "../images/contact.jpg";
import { Card, Row, Col } from "react-bootstrap";
import { Telephone } from "react-bootstrap-icons";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";

class Contact extends Component {
  render() {
    return (
      <div
        className="container-fluid"
        xs={12}
        sm={12}
        md={12}
        lg={6}
        xl={6}
        xxl={6}
      >
        <Card className="bg-dark text-white main">
          <Card.Img
            className="responsive-image"
            src={contactImage}
            alt="Card image"
          />
          <Card.ImgOverlay
            style={{ paddingTop: "6rem", paddingBottom: "8rem" }}
          >
            <Card.Title style={{ fontSize: "5vw", textAlign: "center" }}>
              Contact Us
            </Card.Title>
            <Card.Text style={{ fontSize: "3vw" }}>
              Want to find out how FLOSA Technologies can solve problems
              specific to your business? Lets talk!
            </Card.Text>
          </Card.ImgOverlay>
        </Card>
        <Row style={{ paddingLeft: "4px", paddingRight: "10px" }}>
          <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6}>
            <form onSubmit={this.handleSubmit}>
              <div
                xs={12}
                sm={12}
                md={12}
                lg={6}
                xl={6}
                xxl={6}
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
          <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6} style={{}}>
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
      </div>
    );
  }
}
export default Contact;
