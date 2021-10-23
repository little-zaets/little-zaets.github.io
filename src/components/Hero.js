import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Hero = (props) => {
	return (
    <div>
      <Jumbotron className="bg-transparent jumbotron-fluid p-0">
        <Container fluid={true}>
          <Row className="justify-content-around pt-4">
            <Col md={8} sm={12}>
              {props.title && (
                <h2 className="text display-2 font-weight-bold">
                  {props.title}
                </h2>
              )}
              {props.title && (
                <h3 className="display-5 font-weight-light">
                  {props.subTitle}
                </h3>
              )}
              {props.title && (
                <h3 className="lead font-weight-light">{props.content}</h3>
              )}
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    </div>
  );
}

export default Hero;
