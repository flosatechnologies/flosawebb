import React, { Component } from "react";
import "../css/FLOSA.css";
import { Container, Row, Col } from "react-bootstrap";
import Logo from "../images/logo.jpg";

class FLOSA extends Component {
  render() {
    return (
      <Container fluid style={{backgroundColor: "#000", marginTop: "50px",width: "100%" }}>
        <Row>
          <Col>
            <img
              sizes="(min-width: 36em) 50vw, 50vw, 50vh"
              src={Logo}
              alt="profile"
              width="70%"
              style={{borderRadius: "100%", marginTop: "20px", marginBottom: "20px"}}
            />
          </Col>

          <Col id="history-text">
            
              It has always been the common dream to see digital solutions
              solving problems for businesses, especially the SMEs, schools and
              other institutions in the immediate environment and the nation at
              large. Having gone through an intensive 18 months training as
              Software Developers this common dream became even more pressing
              that it resulted in the conception and eventually the birth of
              FLOSA Technologies. FLOSA Technologies has since then provided
              digital solutions.
        
          </Col>
        </Row>
      </Container>
    );
  }
}
export default FLOSA;
