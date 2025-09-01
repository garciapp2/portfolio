import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <Container fluid className="footer">
      <Row>
        <Col className="footer-copywright" style={{ textAlign: "center" }}>
          <h3>Copyright © 2025 PG</h3>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
