import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Passionate about technology and the power of programming, I'm constantly 
              learning and evolving, always seeking new challenges and opportunities 
              to create impact.
              <br />
              <br />
              I have solid experience in{" "}
              <i>
                <b className="purple">JavaScript, TypeScript and Python</b>
              </i>
              , focusing on developing{" "}
              <i>
                <b className="purple">modern web applications</b>
              </i>
              {" "}and{" "}
              <i>
                <b className="purple">scalable digital products</b>
              </i>
              . My main stack includes{" "}
              <b className="purple">Node.js</b>
              ,{" "}
              <b className="purple">React.js</b>
              {" "}and{" "}
              <b className="purple">Next.js</b>
              , along with{" "}
              <b className="purple">API</b>
              {" "}integration and exploration of areas like{" "}
              <b className="purple">Artificial Intelligence</b>
              {" "}and automation.
              <br />
              <br />
              I value good coding practices, performance, and usability, always seeking 
              to combine{" "}
              <b className="purple">functional design</b>
              {" "}with{" "}
              <b className="purple">robust technical solutions</b>
              . My goal is to transform ideas into complete digital experiences 
              that are intuitive, efficient, and ready to scale.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/garciapp2"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/pedro-garcia-38ab36281/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/pedro_egarcia"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
