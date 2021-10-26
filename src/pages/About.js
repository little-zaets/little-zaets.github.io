import React from "react";
import Hero from "../components/Hero";
import Content from "../components/Content";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import profile from '../assets/professional.png';

const About = (props) => {
  return (
    <div>
      <Hero title={props.title} />
      <Container fluid={true}>
        <Row className="justify-content-center">
          <Col className="d-flex justify-content-center" md={3} sm={8}>
            <img src={profile} className="profilepic"></img>
          </Col>
          <Col className="d-flex align-items-center text-center" md={5} sm={8}>
            <p>
              Greetings, my name is Rina.
              <br />
              I'm a web developer with experience in React JS, Node JS, Express JS
              and PostreSQL.
            </p>
          </Col>
        </Row>
      </Container>
      <div>
        <Content>
          <p>
            My enthusiasm for coding developed as I strived to improve my
            organization’s efficiency and processes in light of new softwares
            and tools that were constantly introduced. By leveraging the
            priceless knowledge I gained from my past experiences, I bring a
            gapless, cross-functional perspective to the development process,
            rather than the common block-scope view.
          </p>
          <p>
            I aspire to combine my operational and technical experience in order
            to enable an effective development process by bridging the gap
            between my organization's departments.
          </p>
          <p>
            I am constantly working to improve and learn new technologies, and
            welcome any challenge that comes my way.
          </p>
        </Content>
      </div>
    </div>
  );
}

export default About;
