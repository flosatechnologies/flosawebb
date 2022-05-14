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
              flipOnHover={false} // default false
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
              <h5 id="title">3wishes Hookah</h5>
              <p id="text">Vees Oven is a local bakery business specialized in cakes and other pasteries of all types.<br/>
              <a href="https://3wishesgh.com" target="_blank" rel="noreferrer">Visit Site</a> </p>
              </BackSide>
            </Flippy>
          </Col>
          <Col>
            <Flippy
              flipOnHover={false} // default false
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
              <p id="text">Vees Oven is a local bakery business specialized in cakes and other pasteries of all types.<br/>
              <a href="https://blessdelconstruction.com" target="_blank" rel="noreferrer">Visit Site</a> </p>
              </BackSide>
            </Flippy>
          </Col>
          <Col id="phase1">
            <Flippy
              flipOnHover={false} // default false
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
              <h5 id="title">RT Travel and Tours</h5>
              <p id="text">Vees Oven is a local bakery business specialized in cakes and other pasteries of all types.<br/>
              <a href="https://rttravelandtours.com/" target="_blank" rel="noreferrer">Visit Site</a> </p>
              </BackSide>
            </Flippy>
          </Col>
        </Row>
      </div>
    );
  }
}
