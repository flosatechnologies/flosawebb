import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Col, Row } from "react-bootstrap";
import hero from "../images/phoneMockUp.png";
import "../css/Hero.css";

const Hero = () => {
  return (
    <section className="bg-primary text-light text-center p-5 text-sm-start hero background">
      <Container fluid={true} className="heroMainContainer">
        <Row>
          <Col
            xxl={{ span: 10, offset: 1 }}
            xl={{ span: 10, offset: 1 }}
            lg={{ span: 10, offset: 1 }}
            md={{ span: 10, offset: 1 }}
            sm={{ span: 10, offset: 1 }}
            xs={{ span: 10, offset: 1 }}
          >
            <div className="d-sm-flex align-items-center justify-content-between">
              <div className="my-4">
                <h1 className="header">Intuitive Mobile Apps</h1>

                <p className="lead">
                  simple and strategically designed
                  <br />
                  UI to give you a lovely <br />
                  user experience
                </p>
              </div>
              <img
                width="300px"
                height="55px"
                className="img-fluid my-5 "
                w-50
                src={hero}
                alt="logo"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
