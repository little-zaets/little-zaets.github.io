import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Hero = (props) => {
	return (
    <div>
      <Jumbotron className="bg-transparent jumbotron-fluid p-0 my-3 text-center">
        <Container fluid={true}>
          <Row className="justify-content-around pt-2">
            <Col className="align-items-center" md={8} sm={12}>
              {props.title && (
                <h2 className="display-3 font-weight-bold">{props.title}</h2>
              )}
              {props.title && (
                <h3 className="display-4 font-weight-light mb-2">
                  {props.subTitle}
                </h3>
              )}
              {props.title && (
                <h3 className="display-5 font-weight-lighter text-muted">
                  {props.content}
                </h3>
              )}
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    </div>
  );
}

export default Hero;
