import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Logo from "../images/logo.jpg";
import "../css/About.css";
import HTML from "../images/html.png";
import CSS from "../images/css.png";
import JavaScript from "../images/javascript.jpg";
import Bootstrap from "../images/bootstrap.png";
import Mongo from "../images/mongodb.png";
import Node from "../images/nodejs.jpg";
import Express from "../images/express-min.png";
import ReactL from "../images/react-js.png";

class About extends Component {
  render() {
    return (
      <Container fluid={true}>
        <Row className="firstSection-About">
          <Col
            xxl={{ span: 10, offset: 1 }}
            xl={{ span: 10, offset: 1 }}
            lg={{ span: 10, offset: 1 }}
            md={{ span: 10, offset: 1 }}
            sm={{ span: 10, offset: 1 }}
            xs={{ span: 10, offset: 1 }}
          >
            <Row>
              <Col xxl={5} xl={5} lg={5} md={5} sm={12} xs={12}>
                <img
                  className="flosaLogo"
                  id="flosa-logo"
                  src={Logo}
                  alt="profile"
                  width="80%"
                  style={{
                    borderRadius: "100%",
                    marginTop: "20px",
                    marginBottom: "20px",
                  }}
                />
              </Col>

              <Col id="history-text" className="aboutTextContainer">
                <p className="aboutTextPara">
                  It has always been the common dream to see digital solutions
                  solving problems for businesses, especially the SMEs, schools
                  and other institutions in the immediate environment and the
                  nation at large.
                </p>
                <p className="aboutTextPara">
                  Having gone through an intensive 18 months training as
                  Software Developers this common dream became even more
                  pressing that it resulted in the conception and eventually the
                  birth of FLOSA Technologies. FLOSA Technologies has since then
                  provided digital solutions.
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
        <Container>
          <Row style={{ marginTop: "10px" }}>
            <Col>
              <h2 id="head-text">Languages</h2>
              <p id="tech-text" className="techText">
                FLOSA Technologies has principal languages they work with and
                they are as follows
              </p>
              <img
                sizes="(min-width: 36em) 50vw, 50vw, 50vh"
                src={HTML}
                alt="profile"
                width="20%"
                id="tech-logo"
              />

              <img
                sizes="(min-width: 36em) 50vw, 50vw, 50vh"
                src={CSS}
                alt="profile"
                width="20%"
                id="tech-logo"
              />

              <img
                sizes="(min-width: 36em) 50vw, 50vw, 50vh"
                src={JavaScript}
                alt="profile"
                width="20%"
                id="tech-logo"
              />
            </Col>
            <Col>
              <h2 id="head-text">Frameworks</h2>
              <p id="tech-text" className="techText">
                There are a number of Frameworks that FLOSA Technologies have
                great mastery of
              </p>
              <img
                sizes="(min-width: 36em) 50vw, 50vw, 50vh"
                src={Express}
                alt="profile"
                width="30%"
                id="tech-logo"
              />

              <img
                sizes="(min-width: 36em) 50vw, 50vw, 50vh"
                src={ReactL}
                alt="profile"
                width="20%"
                id="tech-logo"
              />

              <img
                sizes="(min-width: 36em) 50vw, 50vw, 50vh"
                src={Node}
                alt="profile"
                width="20%"
                id="tech-logo"
              />
            </Col>
            <Col>
              <h2 id="head-text">Other Technologies</h2>
              <p id="tech-text" className="techText">
                Other Technologies we use in developing our projects includes
              </p>
              <img
                sizes="(min-width: 36em) 50vw, 50vw, 50vh"
                src={Bootstrap}
                alt="profile"
                width="20%"
                id="tech-logo"
              />

              <img
                sizes="(min-width: 36em) 50vw, 50vw, 50vh"
                src={Mongo}
                alt="profile"
                width="30%"
                id="tech-logo"
              />
            </Col>
          </Row>
        </Container>
      </Container>
    );
  }
}
export default About;
