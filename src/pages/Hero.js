import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import hero from "../images/hero-img.png";
import "../css/Hero.css";

const Hero = () => {
  return (
    <section className="bg-primary text-light text-center p-5 text-sm-start hero">
      <Container>
        <div className="d-sm-flex align-items-center justify-content-between">
          <div className="my-4">
            <h1 className="header">Intuitive Mobile Apps</h1>

            <p className="lead">simple and strategically designed</p>
            <p className="lead">UI to give you a lovely</p>
            <p className="lead">user experience</p>
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
      </Container>
    </section>
  );
};

export default Hero;
