import React from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Hero from "../components/Hero";
import Content from "../components/Content";
import axios from "axios";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
      disabled: false,
      emailSent: null
    };
  }

  handleChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    console.log(event.target);

    this.setState({
      disabled: true
    });

    axios.post('https://portfolio-nodebackend.herokuapp.com/api/email', this.state )
      .then((res) => {
        console.log(res.data)
        if (res.data.success) {
          this.setState({
            disabled: false,
            emailSent: true
          });
        } else {
          this.setState({
            disabled: false,
            emailSent: false
          });
        }
      })
      .catch((err) => {
        console.log(err);

        this.setState({
          disabled: false,
          emailSent: false
        });
      });
  };

  render() {
    return (
      <div>
        <Hero title={this.props.title} />

        {/* <Row>
          <Col md={6}>
            <Image
              className="contact-image"
              src="https://media-exp1.licdn.com/dms/image/C5603AQHFXUNFrdwjMg/profile-displayphoto-shrink_400_400/0/1589217484579?e=1640217600&v=beta&t=rZF_JsH_Mpso9UOZHmIpEKnJAl_9mdp11Xaxvv7gQ7c"
              roundedCircle
              alt="Rina"
            />
          </Col>
          <Col md={6}>
            <ul class="social-links list-inline mb-0">
              <li class="list-inline-item li-icon">
                <a
                  title=""
                  data-placement="top"
                  data-toggle="tooltip"
                  class="tooltips"
                  href=""
                  data-original-title="Facebook"
                >
                  <i class="fab fa-facebook-f    "></i>
                </a>
              </li>
              <li class="list-inline-item li-icon">
                <a
                  title=""
                  data-toggle="tooltip"
                  class="tooltips"
                  href=""
                  data-original-title="Twitter"
                >
                  <i class="fab fa-twitter"></i>
                  rinavolovich@gmail.com
                </a>
              </li>
              <li class="list-inline-item li-icon">
                <a
                  title=""
                  data-placement="top"
                  data-toggle="tooltip"
                  class="tooltips"
                  href=""
                  data-original-title="LinkedIn"
                >
                  <i class="fab fa-linkedin"></i>
                </a>
              </li>
            </ul>
            <p> rinavolovich@gmail.com</p>
          </Col>
        </Row> */}
        <Content>
          <Form onSubmit={this.handleSubmit}>
              <Form.Group>
                <Form.Label htmlFor="full-name">Full Name</Form.Label>
                <Form.Control
                  id="full-name"
                  name="name"
                  type="text"
                  value={this.state.name}
                  onChange={this.handleChange}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label htmlFor="email">Email</Form.Label>
                <Form.Control
                  id="email"
                  name="email"
                  type="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label htmlFor="message">Message</Form.Label>
                <Form.Control
                  id="message"
                  name="message"
                  as="textarea"
                  rows="3"
                  value={this.state.message}
                  onChange={this.handleChange}
                />
              </Form.Group>

              <Button
                className="d-inline-block"
                variant="secondary"
                type="submit"
                disabled={this.state.disabled}
              >
                Send
              </Button>

              {this.state.emailSent === true && (
                <p className="d-inline success-msg">Email Sent</p>
              )}
              {this.state.emailSent === false && (
                <p className="d-inline err-msg">Email Not Sent</p>
              )}
          </Form>
        </Content>
      </div>
    );
  }
}

export default Contact;
