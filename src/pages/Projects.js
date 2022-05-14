import React, { Component } from "react";
import "../css/Projects.css"
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col} from "react-bootstrap";
import Flippy, { FrontSide, BackSide } from "react-flippy";

export default class FlipCard extends Component {
  render() {
    return (
      <div className="mainContainer">
        <Row className="first">
          <Col id="phase1">
            <Flippy
              flipOnHover={true} // default false
              flipOnClick={true} // default false
              flipDirection="horizontal" // horizontal or vertical
              ref={(r) => (this.flippy = r)} // to use toggle method like this.flippy.toggle()
              // if you pass isFlipped prop component will be controlled component.
              // and other props, which will go to div
              style={{ width: "288px", height: "300px", paddingTop: "10px", marginLeft:"auto", marginRight:"auto" }} /// these are optional style, it is not necessary
            >
              <FrontSide
                style={{
                  backgroundColor: "#000",
                  height: "285px",
                  width: "270px",
                  paddingTop: "0",
                  paddingLeft: "0",
                  
                }}
              >
              <img id= "image1" src= {require('../images/3wishes.png')} alt="3wishes website"  width= "271" height="285"  />
              </FrontSide>
              <BackSide style={{ backgroundColor: "#e05e43" }}>
              <h5 style={{color: "#000", textAlign: "center", textDecoration: "underline"}}>3wishes Hookah</h5>
              <p style={{color: "#000", fontSize: "18px", textAlign: "justify", fontWeight: "300"}}>3wishes lounge is an E-comerce website. It features a payment integration that supports the various mobile money networks in ghana and card as well. there is a very intuitive UI and a management panel to assist managers in handling orders and delivery easily.{" "}
              <a href="https://3wishesgh.com" target="_blank" rel="noreferrer">Visit Site</a> </p>
              </BackSide>
            </Flippy>
          </Col>
          <Col>
            <Flippy
              flipOnHover={true} // default false
              flipOnClick={true} // default false
              flipDirection="horizontal" // horizontal or vertical
              ref={(r) => (this.flippy = r)} // to use toggle method like this.flippy.toggle()
              // if you pass isFlipped prop component will be controlled component.
              // and other props, which will go to div
              style={{ width: "288px", height: "300px", paddingTop: "10px", marginLeft:"auto", marginRight:"auto" }} /// these are optional style, it is not necessary
              >
              <FrontSide
                style={{
                  backgroundColor: "#000",
                  height: "285px",
                  width: "270px",
                  paddingTop: "0",
                  paddingLeft: "0",
                }}
              >
              <img id= "image1" src= {require('../images/blessdel.png')} alt="blessdel website"  width= "288" height="285"/>
              </FrontSide>
              <BackSide style={{ backgroundColor: "#175852" }}>
              <h5 id="title">Blessdel Construction</h5>
              <p id="text">Blesdel construction is a one page informational coporate website. It is very easy to navigate around and is well optimized in regards to search engines such as google.com, bing.com.{" "}
              <a href="https://blessdelconstruction.com" target="_blank" rel="noreferrer">Visit Site</a> </p>
              </BackSide>
            </Flippy>
          </Col>
          <Col id="phase1">
            <Flippy
              flipOnHover={true} // default false
              flipOnClick={true} // default false
              flipDirection="horizontal" // horizontal or vertical
              ref={(r) => (this.flippy = r)} // to use toggle method like this.flippy.toggle()
              // if you pass isFlipped prop component will be controlled component.
              // and other props, which will go to div
              style={{ width: "288px", height: "300px", paddingTop: "10px", marginLeft:"auto", marginRight:"auto" }} /// these are optional style, it is not necessary
            >
              <FrontSide
                style={{
                  backgroundColor: "#000",
                  height: "285px",
                  width: "270px",
                  paddingTop: "0",
                  paddingLeft: "0",
                }}
              >
              <img id= "image1" src= {require('../images/rttravel.png')} alt="burger"  width= "288" height="285"/>
              </FrontSide>
              
              <BackSide style={{ backgroundColor: "#69b3e0" }}>
              <h5 style={{color: "#000", textAlign: "center", textDecoration: "underline"}}>RT Travel and Tours</h5>
              <p style={{color: "#000", fontSize: "18px", textAlign: "justify", fontWeight: "300"}}>RT Travel and Tours is a multi-page website. It features a payment integration that supports the various mobile money networks in ghana and cards. Customers can book events, airline tickets and rent cars of their choice.{" "}
              <a href="https://rttravelandtours.com/" target="_blank" rel="noreferrer">Visit Site</a> </p>
              </BackSide>
            </Flippy>
          </Col>
        </Row>
      </div>
    );
  }
}
