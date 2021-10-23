import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Footer = () => {
	return (
      <footer className="mt-5">
        <Container fluid={true}>
          <Row className="border-top flex-nowrap justify-content-between align-items-center p-3">
            <Col className="p-0" md={4}>
              Rina Volovich
            </Col>
            <Col className="p-0 flex-column flex-nowrap justify-content-end" md={4}>
              Made with &hearts; by Rina Volovich 2021
            </Col>
          </Row>
        </Container>
      </footer>
  );
}

export default Footer;
