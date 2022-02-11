import React, { Component } from "react";
import "../css/Contact.css";
import contactImage from "../images/contact.jpg";
import {Card,  Row, Col} from 'react-bootstrap';

class Contact extends Component {
  render() {
    return <div className="container-fluid">
        <Card className="bg-dark text-white" >
  <Card.Img className="responsive-image" src={contactImage} alt="Card image"/>
  <Card.ImgOverlay style={{paddingTop: "6rem", paddingBottom: "8rem"}}>
    <Card.Title style={{fontSize: "5vw"}}>Contact Us</Card.Title>
    <Card.Text style={{fontSize: "3vw"}}>
      Want to find out how FLOSA Technologies can solve problems specific to your business? Lets talk!
    </Card.Text>
  </Card.ImgOverlay>
</Card>
<Row style={{paddingLeft: "10px", paddingRight: "10px"}}>
  <Col>
  <form onSubmit={this.handleSubmit}>
        <div className="col-md" style={{display: "flex", marginBottom: "20px"}}>
          <input style={{marginRight: "10px", marginTop: "20px"}} type="text" placeholder="First Name"  />
      
        
          <input style={{marginTop: "20px"}} type="text" placeholder="Last Name" />
        </div>
       <div className="col-md" style={{display: "flex", marginBottom: "10px"}}>
          <input style={{marginRight: "10px"}} type="text" placeholder="Phone"  />
      
        
          <input type="text" placeholder="Email" />
       </div>
       <div className="col-md">
          <textarea style={{width: "50%"}} type="text" placeholder="Message"/>
        </div>
     <div>  
        <input type="submit" value="Submit" />

      </div>
      </form>
  </Col>
  <Col>
     <h2>Contact Information</h2>
  </Col>
</Row>
    </div>
    ;
  }
}
export default Contact;