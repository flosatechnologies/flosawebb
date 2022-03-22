import React from "react";
import Row from "react-bootstrap/Row";

const Project = ({ image, text, button }) => {
  return (
    <div className="d-flex justify-content-center p-4">
      <Row>
        <div className="col-md left">
          <img width="98%" height="auto" src={image} />
        </div>
        <div className="col-md right">
          <h3 className="pt-3">{text}</h3>
          {button}
        </div>
      </Row>
    </div>
  );
};

export default Project;
