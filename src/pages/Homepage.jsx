import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../css/Homepage.css";
import Hero from "../components/Hero";
import { FaMobileAlt, FaWhatsapp } from "react-icons/fa";
import { MdLaptop } from "react-icons/md";
import { HiCode, HiOutlineMail } from "react-icons/hi";
import { ImPhone } from "react-icons/im";
import { BsWhatsapp } from "react-icons/bs";
import projOne from "../images/3wishes.png";
import projTwo from "../images/blessdel.png";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Aos from "aos";
import "aos/dist/aos.css";

class Homepage extends Component {
  render() {
    Aos.init();
    return (
      <Container fluid={true} className="homepageMainContainer">
        <Hero />

        <Container>
          <Row className="theHubMainSection">
            <Col
              xxl={{ span: 8, offset: 2 }}
              xl={{ span: 8, offset: 2 }}
              lg={{ span: 8, offset: 2 }}
              md={{ span: 8, offset: 2 }}
              sm={{ span: 10, offset: 1 }}
              xs={{ span: 10, offset: 1 }}
              className="theHubSubSection"
            >
              <h1 className="mainHeadings-homepage">
                The Hub of Digital Solutions
              </h1>
              <p className="theHubDescription">
                FLOSA Technologies puts your business at heart as such we
                thoroughly analyze your projects for the best of solutions so as
                to significantly improve your business
              </p>
            </Col>
          </Row>
          <Row className="servicesMainSection">
            <Col className="servicesSubSection">
              <Row>
                <h1 className="mainHeadings-homepage " id="ourServiceHeading">
                  Our Services
                </h1>
              </Row>
              <Row>
                <Col
                  xxl={4}
                  xl={4}
                  lg={4}
                  md={4}
                  sm={12}
                  xs={12}
                  className="serviceMainBox"
                >
                  <div
                    data-aos="fade-down-right"
                    data-aos-duration="1000"
                    className="serviceSubBox"
                  >
                    <div>
                      <FaMobileAlt className="mobileIcon" />
                    </div>
                    <h3 className="serviceHeading">Mobile Apps</h3>
                    <p className="serviceDescription">
                      We design and develop mobile applications for both android
                      and IOS platforms
                    </p>
                  </div>
                </Col>
                <Col
                  xxl={4}
                  xl={4}
                  lg={4}
                  md={4}
                  sm={12}
                  xs={12}
                  className="serviceMainBox"
                >
                  <div className="serviceSubBox">
                    <div>
                      <MdLaptop className="webAppsIcon" />
                    </div>
                    <h3 className="serviceHeading">Web Development</h3>
                    <p className="serviceDescription">
                      Be it a website, its management and or redesign, web apps
                      we are the best for you.
                    </p>
                  </div>
                </Col>
                <Col
                  xxl={4}
                  xl={4}
                  lg={4}
                  md={4}
                  sm={12}
                  xs={12}
                  className="serviceMainBox"
                >
                  <div
                    data-aos="fade-down-left"
                    data-aos-duration="1000"
                    className="serviceSubBox"
                  >
                    <div>
                      <HiCode className="softwareEngIcon" />
                    </div>
                    <h3 className="serviceHeading">Software Engineering</h3>
                    <p className="serviceDescription">
                      We are highly skilled in designing and developing
                      application software
                    </p>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
        <Row className="reachUsMainSection">
          <Col className="reachUsSubSection">
            <Row>
              <h1 className="mainHeadings-homepage">Reach us now</h1>
              <p className="reachUsDescription">
                We cannot wait to hear from you
              </p>
            </Row>
            <Row>
              <Col
                xxl={{ span: 10, offset: 1 }}
                xl={{ span: 10, offset: 1 }}
                lg={{ span: 10, offset: 1 }}
                className="phoneContactsMainContainer"
              >
                <Row>
                  <Col
                    xxl={3}
                    xl={3}
                    lg={3}
                    md={3}
                    sm={12}
                    xs={12}
                    className="phoneOneMainContainer-reachUs"
                  >
                    <div data-aos="zoom-in" data-aos-duration="2000">
                      <Button className="reachUsButton-phoneOne">
                        <a
                          href="tel:+233 546 835 848 "
                          className="phone1Link-reachUs"
                        >
                          <ImPhone className="icons-reachUs" />
                          +233 546 835 848
                        </a>
                      </Button>
                    </div>
                  </Col>
                  <Col
                    xxl={3}
                    xl={3}
                    lg={3}
                    md={3}
                    sm={12}
                    xs={12}
                    className="phoneOneMainContainer-reachUs"
                  >
                    <div data-aos="zoom-in-down">
                      <Button className="reachUsButton-phoneTwo">
                        <a
                          href="tel:+233 248 206 239 "
                          target="_blank"
                          className="phone2Link-reachUs"
                        >
                          <ImPhone className="icons-reachUs" />
                          +233 248 206 239
                        </a>
                      </Button>
                    </div>
                  </Col>
                  <Col
                    xxl={3}
                    xl={3}
                    lg={3}
                    md={3}
                    sm={12}
                    xs={12}
                    className="phoneOneMainContainer-reachUs"
                  >
                    <div data-aos="zoom-out-right" data-aos-duration="2000">
                      <Button className="reachUsButton-whatsapp">
                        <a
                          className="whatsappLink-reachUs"
                          target="_blank"
                          href="https://wa.me/+233262753277"
                        >
                          <FaWhatsapp className="icons-reachUs" /> +233 262 753
                          277
                        </a>
                      </Button>
                    </div>
                  </Col>
                  <Col className="phoneOneMainContainer-reachUs">
                    <div>
                      <Button className="reachUsButton-email">
                        <a
                          className="emailLink-reachUs"
                          href="mailto:info@flosatechnologies.com"
                        >
                          <HiOutlineMail className="icons-reachUs" />
                          info@flosatechnologies.com
                        </a>
                      </Button>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
        <Container fluid={true} className="projectsOminiContainer">
          <Container>
            <Row className="procjectsMainSection">
              <Col className="projectSubSection">
                <Row>
                  <Col>
                    <h1 className="mainHeadings-homepage">Projects</h1>
                  </Col>
                </Row>
                <Row className="projectSection">
                  <Col
                    xxl={6}
                    xl={6}
                    lg={6}
                    md={6}
                    sm={12}
                    xs={12}
                    className="projectImageContainer"
                  >
                    <img
                      src={projOne}
                      alt="3wishesShot"
                      className="wishesImage"
                    />
                  </Col>
                  <Col
                    xxl={6}
                    xl={6}
                    lg={6}
                    md={6}
                    sm={12}
                    xs={12}
                    className="projectImageContainer"
                  >
                    <img
                      src={projTwo}
                      alt="wishesShot"
                      className="wishesImage"
                    />
                  </Col>
                </Row>
                <Row className="viewMoreButtonContainer">
                  <button className="viewMoreButton">
                    <a href="#" className="viewMoreButtonLink">
                      view more
                    </a>
                  </button>
                </Row>
              </Col>
            </Row>
          </Container>
        </Container>
        <Container>
          <Container>
            <Row className="quoteMainSection">
              <Col className="quoteSubSection">
                <Row>
                  <h1 className="mainHeadings-homepage">Request A Quote</h1>
                </Row>
                <Row>
                  <Col
                    className="requestQuoteSubContainer"
                    xxl={{ span: 6, offset: 3 }}
                    xl={{ span: 6, offset: 3 }}
                    lg={{ span: 6, offset: 3 }}
                    md={{ span: 6, offset: 3 }}
                    sm={{ span: 10, offset: 1 }}
                    xs={{ span: 10, offset: 1 }}
                  >
                    <Form>
                      <Form.Group as={Col}>
                        <Row>
                          <Col xxl={6} xl={6} lg={6} md={12} sm={12} xs={12}>
                            <Form.Label className="quotesFormLabelText">
                              First name
                            </Form.Label>
                            <Form.Control
                              type="text"
                              className="quotesFormsControl"
                            />
                          </Col>

                          <Col xxl={6} xl={6} lg={6} md={12} sm={12} xs={12}>
                            <Form.Label className="quotesFormLabelText">
                              Last name
                            </Form.Label>
                            <Form.Control
                              type="text"
                              className="quotesFormsControl"
                            />
                          </Col>
                        </Row>
                      </Form.Group>

                      <Form.Group as={Col}>
                        <Row>
                          <Col xxl={6} xl={6} lg={6} md={12} sm={12} xs={12}>
                            <Form.Label className="quotesFormLabelText">
                              Phone
                            </Form.Label>
                            <Form.Control
                              type="tel"
                              className="quotesFormsControl"
                            />
                          </Col>
                          <Col xxl={6} xl={6} lg={6} md={12} sm={12} xs={12}>
                            <Form.Label className="quotesFormLabelText">
                              Email
                            </Form.Label>
                            <Form.Control
                              type="email"
                              className="quotesFormsControl"
                            />
                          </Col>
                        </Row>
                      </Form.Group>

                      <Form.Group as={Col}>
                        <Row>
                          <Col xxl={6} xl={6} lg={6} md={12} sm={12} xs={12}>
                            <Form.Label className="quotesFormLabelText">
                              Company
                            </Form.Label>
                            <Form.Control
                              type="text"
                              className="quotesFormsControl"
                            />
                          </Col>
                          <Col xxl={6} xl={6} lg={6} md={12} sm={12} xs={12}>
                            <Form.Label className="quotesFormLabelText">
                              Project
                            </Form.Label>
                            <Form.Select
                              aria-label="Default select example"
                              className="quotesFormsControl"
                            >
                              <option value="Mobile Apps">Mobile Apps</option>
                              <option value="Website">Website</option>
                              <option value="Software">Software</option>
                              <option value="Other">Other</option>
                            </Form.Select>
                          </Col>
                        </Row>
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlTextarea1"
                      >
                        <Form.Label className="quotesFormLabelText">
                          Project Description
                        </Form.Label>
                        <Form.Control as="textarea" rows={5} />
                      </Form.Group>
                      <InputGroup>
                        <Button>Submit</Button>
                      </InputGroup>
                    </Form>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </Container>
      </Container>
    );
  }
}

export default Homepage;
