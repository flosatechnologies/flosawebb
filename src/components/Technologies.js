import React, { Component } from "react";
import "../css/Technologies.css";
import { Container, Row, Col } from "react-bootstrap";
import HTML from "../images/html.png";
import CSS from "../images/css.png";
import JavaScript from "../images/javascript.jpg";
import Bootstrap from "../images/bootstrap.png";
import Mongo from "../images/mongodb.png";
import Node from "../images/nodejs.jpg";
import Express from "../images/express-min.png";
import ReactL from "../images/react-js.png";

class Technologies extends Component {
  render() {
    return (
      <Container className="tech-container">
        <Row style={{ marginTop: "10px" }}>
          <Col>
            <h2 id="head-text">Languages</h2>
            <p id="tech-text">
              FLOSA Technologies has principal languages they work with and they
              are as follows
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
            <p id="tech-text">
              There are a number of Frameworks that FLOSA Technologies 
              have great mastery of
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
            <p id="tech-text">
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
    );
  }
}
export default Technologies;
