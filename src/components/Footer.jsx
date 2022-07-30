import React, { Component } from "react";
import logoImage from "../images/logo.png";
import { Container, Col, Row } from "react-bootstrap";
import { BsFillTelephoneFill, BsFacebook } from "react-icons/bs";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import "../css/Footer.css";
import "bootstrap/dist/css/bootstrap.min.css";

class Footer extends Component {
  render() {
    return (
      <Container fluid={true} className="footerMainContainer">
        <Row className="footerTopSectionContainer">
          <Col
            xxl={{ span: 10, offset: 1 }}
            xl={{ span: 10, offset: 1 }}
            lg={{ span: 10, offset: 1 }}
            md={{ span: 10, offset: 1 }}
            sm={{ span: 10, offset: 1 }}
            xs={{ span: 10, offset: 1 }}
          >
            <Row>
              <Col
                xxl={3}
                xl={3}
                lg={3}
                md={3}
                sm={12}
                xs={12}
                className="footersections"
              >
                <div className="logoImageContainer-Footer">
                  <img src={logoImage} alt="logo-footer" height="50" />
                </div>
                <div className="aboutText-footer">
                  It has always been the common dream to see digital solutions
                  solving problems for businesses, especially SMEs...
                  <span> more</span>
                </div>
              </Col>
              <Col
                xxl={3}
                xl={3}
                lg={3}
                md={3}
                sm={12}
                xs={12}
                className="footersections"
              >
                <h3 className="footerHeaderText">Quick Links</h3>
                <ul className="quickLinksListContainer">
                  <li>
                    <a className="menuLink-footer" href="/">
                      Home
                    </a>
                  </li>
                  <li>
                    <a className="menuLink-footer" href="/about">
                      About
                    </a>
                  </li>
                  <li>
                    <a className="menuLink-footer" href="/services">
                      Services
                    </a>
                  </li>
                  <li>
                    <a className="menuLink-footer" href="/projects">
                      Projects
                    </a>
                  </li>
                </ul>
              </Col>
              <Col
                xxl={3}
                xl={3}
                lg={3}
                md={3}
                sm={12}
                xs={12}
                className="footersections"
              >
                <h3 className="footerHeaderText">Contact us</h3>
                <div className="contactLinkListContainer">
                  <div className="telOneLinkContainer-footer">
                    <a className="telOneLink" href="tel:+233 546 835 848">
                      <BsFillTelephoneFill /> +233 546 835 848
                    </a>
                  </div>
                  <div className="telTwoLinkContainer-footer">
                    <a className="telTwoLink" href="tel:+233 248 206 239">
                      <BsFillTelephoneFill /> +233 248 206 239
                    </a>
                  </div>
                  <div className="whatsappLinkContainer-footer">
                    <a
                      className="whatsappLink"
                      href="https://wa.me/+233262753277"
                    >
                      <FaWhatsapp /> +233 262 753 277
                    </a>
                  </div>
                  <div className="emailLinkContainer-footer">
                    <a
                      className="emailLink"
                      href="mailto:info@flosatechnologies.com"
                    >
                      <HiOutlineMail /> info@flosatechnologies.com
                    </a>
                  </div>
                </div>
              </Col>
              <Col
                xxl={3}
                xl={3}
                lg={3}
                md={3}
                sm={12}
                xs={12}
                className="footersections"
              >
                <h3 className="footerHeaderText">Follow us</h3>
                <div className="socialMediaLinkMainContainer-footer">
                  <div className="facebookLinkConainer-footer">
                    <a
                      href="https://www.facebook.com/search/top?q=flosa%20technologies"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <BsFacebook className="facebookIcon-footer" />
                    </a>
                  </div>
                  <div className="instagramLinkContainer-footer">
                    <a
                      href="https://www.instagram.com/flosatech/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaInstagram className="instagramIcon-footer" />
                    </a>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row className="copyrightTextContainer">
          <p className="copyrightText">
            copyright © 2022
            <span className="flosaTechText"> FLOSA Technologies</span>
          </p>
        </Row>
      </Container>
    );
  }
}

export default Footer;
