import React, { Component } from "react";
import { Container } from "react-bootstrap";
import "../css/Homepage.css";
import Hero from "../components/Hero";

class Homepage extends Component {
  render() {
    return (
      <Container fluid={true} className="homepageMainContainer">
        <Hero />
      </Container>
    );
  }
}

export default Homepage;
