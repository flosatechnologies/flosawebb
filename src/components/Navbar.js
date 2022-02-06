import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Navbar.css";
import { Container, Navbar, Nav } from "react-bootstrap";
import logo from "../images/logo.png";
import { Telephone, Instagram, Facebook } from "react-bootstrap-icons";

export default class NavbarMenu extends Component {
  render() {
    return (
      <div id="home" className=" mr-20px">
        <Navbar bg="#Fdfcfa" expand="md" className="navbar sticky-top">
          <Container>
            <Navbar.Brand id="navb" href="#home">
              <img
                width="300px"
                height="auto"
                className="img-responsive"
                src={logo}
                alt="logo"
              />
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="navbarScroll" className="bg-light" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="justify-content-center"
                style={{ width: "100%", height: "50%", color: "white" }}
                navbarScroll
              >
                <Nav.Link href="/">HOME</Nav.Link>
                <Nav.Link href="/about">ABOUT</Nav.Link>
                <Nav.Link href="/services">SERVICES</Nav.Link>
                <Nav.Link href="/projects">PROJECTS</Nav.Link>
                <Nav.Link href="/contact">CONTACT</Nav.Link>

                <ul id="cssnav" className="navright"></ul>

                <div className="social-side">
                  <h5>
                    <a
                      href="https://www.facebook.com/search/top?q=flosa%20technologies"
                      target="_blank"
                      rel="noreferrer"
                      style={{ color: "#007785", textDecoration: "none" }}
                    >
                      <li>
                        <Facebook
                          id="faceb"
                          color="blue"
                          size={20}
                          paddingTop={5}
                          marginRight={20}
                        />
                      </li>
                    </a>
                  </h5>

                  <h5>
                    <a
                      href="https://www.instagram.com/flosatech/"
                      target="_blank"
                      rel="noreferrer"
                      style={{ color: "#E1306C", textDecoration: "none" }}
                    >
                      <li>
                        <Instagram
                          id="inst"
                          color="#F56040"
                          size={20}
                          paddingTop={5}
                          marginRight={30}
                        />
                      </li>
                    </a>
                  </h5>

                  <h5>
                    <a
                      href="tel:+233546835848"
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        color: "white",
                        textDecoration: "none",
                      }}
                    >
                      <li>
                        <Telephone
                          id="tel"
                          title="call us"
                          color="purple"
                          size={20}
                        />
                      </li>
                    </a>
                  </h5>
                </div>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}
