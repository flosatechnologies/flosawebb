import "../css/Services.css";
import { CheckCircleFill } from "react-bootstrap-icons";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Aos from 'aos';
import 'aos/dist/aos.css';

const Services = () => {
  Aos.init();
  return (
    <Container fluid={true}>
      <Container fluid={true} className="servicesBanner">
        <Row>
          <Col className="servicesBannerTextContainer">
            <h1 className="ourServiceBannerTextHeading">Our Services</h1>
            <p className="ourServiceBannerTextParagraph">
              We provide services that solve problems at the point of your
              business need
            </p>
          </Col>
        </Row>
      </Container>
      <Row>
        <Col></Col>
        <div id="services">
          <h2 className="align-items-center text-center p-5 Top-title">
            FLOSA Technologies renders digital services as follows
          </h2>
          <section data-aos="zoom-in" className="p-3">
            <div className="container">
              <div className="row align-items-center  ">
                <h2 className=" head-top">Mobile Application Development</h2>
                <div className="col-md d-flex justify-content-center py-3 ">
                  <img
                    width="300px"
                    height="319px"
                    src="https://res.cloudinary.com/da5ls6vhs/image/upload/v1643343101/Flosa%20web/mobileApp_pmzotf.png"
                    className="img-fluid "
                    alt=""
                  />
                </div>
                <div className="col-md para-area ">
                  <p className="text-para">
                    <span className="icon">
                      <CheckCircleFill color="#47a2fc" size={25} />
                    </span>
                    FLOSA Technologies handles mobile application development
                    from requirement gathering, design, development, testing and
                    deployment.
                  </p>
                  <p className="text-para">
                    <span className="icon">
                      <CheckCircleFill color="#47a2fc" size={25} />
                    </span>
                    We also manage and maintain these applications.
                  </p>
                  <p className="text-para">
                    <span className="icon">
                      <CheckCircleFill color="#47a2fc" size={25} />
                    </span>
                    We design for both ios and android platforms
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000" className="p-3 ">
            <div className="container">
              <div className="row align-items-center justify-content-between ">
                <h2 className="head-top">Web Development</h2>
                <div className="col-md d-flex justify-content-end py-3 ">
                  <img
                    width="300px"
                    height="419px"
                    src="https://res.cloudinary.com/da5ls6vhs/image/upload/v1643343081/Flosa%20web/webApp_jeme9m.png"
                    className="img-fluid "
                    alt=""
                  />
                </div>
                <div className="col-md para-area">
                  <p className="text-para">
                    <span className="icon">
                      <CheckCircleFill color="#47a2fc" size={25} />
                    </span>
                    We develop all kinds of websites; informational, ecomerce,
                    corporate, news & magazine, portfolio, just to mention a
                    few.
                  </p>
                  <p className="text-para">
                    <span className="icon">
                      <CheckCircleFill color="#47a2fc" size={25} />
                    </span>
                    FLOSA Technologies also develops web applications.
                  </p>
                  <p className="text-para">
                    <span className="icon">
                      <CheckCircleFill color="#47a2fc" size={25} />
                    </span>
                    We provide responsive web solutions so that for any device
                    these solutions are well laid out.
                  </p>
                  <p className="text-para">
                    <span className="icon">
                      <CheckCircleFill color="#47a2fc" size={25} />
                    </span>
                    We also manage and maintain these web solutions.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom" data-aos-duration="1500" className="p-3">
            <div className="container">
              <div className="row align-items-center justify-content-between ">
                <h2 className="head-top">Software Engineering</h2>
                <div className="col-md d-flex justify-content-end py-3 ">
                  <img
                    width="300px"
                    height="319px"
                    src="https://res.cloudinary.com/da5ls6vhs/image/upload/v1643343901/Flosa%20web/softwareEngineering_1_swtri1.png"
                    className="img-fluid "
                    alt=""
                  />
                </div>
                <div className="col-md para-area">
                  <p className="text-para">
                    <span className="icon">
                      <CheckCircleFill color="#47a2fc" size={25} />
                    </span>
                    If you have you need a software solution to meet your
                    specific business needs we are just right for you.
                  </p>
                  <p className="text-para">
                    <span className="icon">
                      <CheckCircleFill color="#47a2fc" size={25} />
                    </span>
                    FLOSA Technologies closely works with you throughout to get
                    exactly the kind of software you need.
                  </p>
                  <p className="text-para">
                    <span className="icon">
                      <CheckCircleFill color="#47a2fc" size={25} />
                    </span>
                    We also manage and maintain these custom software solutions.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section data-aos="fade-right" data-aos-duration="1500" className="py-3">
            <div className="container">
              <div className="align-items-center justify-content-center ">
                <div className="   ">
                  <img
                    height="501px"
                    src="https://res.cloudinary.com/da5ls6vhs/image/upload/v1643343877/Flosa%20web/howWeDoItSection_iixac1.png"
                    className="img-fluid align-items-center"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </Row>
    </Container>
  );
};

export default Services;
