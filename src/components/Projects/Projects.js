import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import futcards from "../../Assets/Projects/FutCards.png";
import faceads from "../../Assets/Projects/FaceADs.png";
import vmt from "../../Assets/Projects/VMT.png";
import shhat from "../../Assets/Projects/Shhat.png";
import chait from "../../Assets/Projects/ChAIt.png";
import insperBlockchain from "../../Assets/Projects/Blockchain.png";
import yondr from "../../Assets/Projects/Yondr1.png";
import nexuslab from "../../Assets/Projects/NexusLab.png";
import collectUGC from "../../Assets/Projects/UGC.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vmt}
              isBlog={false}
              title="VMT"
              description="Website for a national clothing brand, fully functional and in final launch phase. The project covers everything from digital showcase to shopping flow, integrating modern design, responsiveness and complete user experience."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shhat}
              isBlog={false}
              title="Shhat"
              description="Software with LLM integration via API, created to enable conversations with artificial intelligence in a discrete and accessible environment. Inspired by projects like Interview Coder, the application demonstrates backend mastery and integration with language models."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={yondr}
              isBlog={false}
              title="Yondr"
              description="Dating app in development, focused on geographical proximity and parties (clubs, bars, etc). The project brings a differentiated approach to connections, integrating geolocation and modern social dynamics."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chait}
              isBlog={false}
              title="ChAIt"
              description="Web platform/software that uses Ollama to provide interactions with AI characters in chat format. Inspired by tools like ch.ai, the project explores customization, performance and creative experimentation in simulated dialogues."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={insperBlockchain}
              isBlog={false}
              title="Insper Blockchain"
              description="Institutional website developed for the student entity Insper Code, aiming to present initiatives, projects and blockchain-related content. The focus was on communication clarity and academic visual identity."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={faceads}
              isBlog={false}
              title="FaceADs"
              description="Platform developed to manage Facebook ads with focus on insights and statistics. Allows tracking essential campaign metrics in real-time, bringing practicality to performance analysis and results optimization."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={futcards}
              isBlog={false}
              title="FutCards"
              description="Application that allows creating customized FIFA-style cards, offering an intuitive interface for visual and textual customization. The project focuses on usability, enabling any user to generate unique cards quickly and stylishly."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nexuslab}
              isBlog={false}
              title="NexusLab"
              description="Application that brings together multiple resources from the official Riot Games API. Allows viewing player profiles (level, elo, top champions), champion statistics (win rate, average KDA, popularity) and match history with graphics and insights."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={collectUGC}
              isBlog={false}
              title="Collect Free UGC"
              description="Game developed on the Roblox platform, currently with +350k. The project combines collection and customization mechanics of UGC items, bringing high player engagement and consolidating practical experience in game design and monetization."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
