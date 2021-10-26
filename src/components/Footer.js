import React from "react";
import { Link } from 'react-router-dom';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const gIcon = <FontAwesomeIcon icon={faGithub} />;
const lIcon = <FontAwesomeIcon icon={faLinkedinIn} />;

const Footer = () => {
  return (
    <footer className="mt-auto">
      <Container fluid={true}>
        <Row className="border-top flex-nowrap justify-content-between align-items-center p-3">
          <Col md={4} sm={2} className="p-0 d-flex">
            <ul className="d-flex social-links list-inline mb-0">
              <li className="list-inline-item">
                <a
                  href="https://github.com/little-zaets"
                  className="link link--icon"
                  target="_blank"
                >
                  {gIcon}
                </a>
              </li>
              <li className="list-inline-item li-icon">
                <a
                  href="https://www.linkedin.com/in/rina-volovich/"
                  className="link link--icon"
                  target="_blank"
                >
                  {lIcon}
                </a>
              </li>
            </ul>
          </Col>
          <Col
            className="p-0 d-flex flex-column align-items-end made-with"
            md={6}
            sm={10}
            xs={10}
          >
            Made with &hearts; by Rina Volovich 2021
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
