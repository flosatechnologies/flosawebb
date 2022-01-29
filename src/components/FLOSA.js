import React, { Component } from 'react';
import "../css/FLOSA.css";
import Logo from "../images/logo.jpg";

class FLOSA extends Component {
  render() {
    return <div className="des-container">
       <div className="img">
       <img
       sizes="(min-width: 36em) 50vw, 50vw, 50vh"
       src={Logo}
       alt="profile"
       width="100%"
       id="img-logo"
     />
       </div>
       
       <div className="history">
           <p id="history-text">
           It has always been the common dream to see
           digital solutions solving problems for businesses, especially the SMEs,
           schools and other institutions in the immediate environment and the
           nation at large. 
           Having gone through an intensive 18 months training as software
           developers this common dream become even more that it resulted
           in the conception and eventually the birth of FLOSA Technologies.
           FLOSA Technologies has since then provided digital solutions.
           </p>
       </div>

    </div>;
  }
}
export default FLOSA;