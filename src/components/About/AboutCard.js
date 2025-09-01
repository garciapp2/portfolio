import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Pedro Garcia </span>
            from <span className="purple"> Brazil.</span>
            <br />
            I am a software developer passionate about technology, design and innovation.  
            <br />
            I have experience in full-stack development, API integration and building digital products from scratch.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Guitar
            </li>
            <li className="about-activity">
              <ImPointRight /> Creating Digital Art
            </li>
            <li className="about-activity">
              <ImPointRight /> Training at the Gym
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "I live chasing the infinite. In code, in music, in everything I create."{" "}
          </p>
          <footer className="blockquote-footer">Pedro Garcia</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
