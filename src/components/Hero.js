import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Col, Row } from "react-bootstrap";
import hero from "../images/phoneMockUp.png";
import "../css/Hero.css";
import Aos from 'aos';
import 'aos/dist/aos.css';
import Typical from "react-typical";

const Hero = () => {
  Aos.init();
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
                <h1 className="header">
                <Typical
              loop={Infinity}
              wrapper="b"
              steps={[
                "Intuitive", 
                5000,
                "Mobile",
                4000,
                "Apps",
                5000,
              ]}
            />
                </h1>

                <p data-aos="fade-right"
                data-aos-offset="200"
                data-aos-easing="ease-in-sine"  data-aos-duration="2000" className="lead">
                  simple and strategically designed
                  <br />
                  UI to give you a lovely <br />
                  user experience
                </p>
              </div>
              <img data-aos="fade-left"
              data-aos-anchor="#example-anchor"
              data-aos-offset="500"
              data-aos-duration="1500"
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
