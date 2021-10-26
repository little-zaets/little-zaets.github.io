import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import "./App.css";
import "./style.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Rina Volovich',
      headerLinks: [
        { title: 'Home', path: '/' },
        { title: 'About', path: '/about' },
        { title: 'Contact', path: '/contact' }
      ],
      home: {
        title: 'Hi, I\'m Rina',
        subTitle: 'I\'m a Web Developer',
        content: 'Failure is Just a Milestone to Success'
      },
      about: {
        title: 'About Me'
      },
      contact: {
        title: 'Let\'s Chat'
      }
    };
  }
  render() {
    return (
      <Router>
        <Container className="p-0 d-flex flex-column vh-100" fluid={true}>
          <Navbar className="border-bottom" bg="transparent" expand="lg">
            <Navbar.Brand>
              <h3 className="header-icon">
                <Link to="/" className="link link--icon header-text ">
                  RV
                </Link>
              </h3>
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="navbar-toggle" className="border-0" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto" activeKey="/">
                <Link className="nav-link nav-custom link" to="/">
                  Home
                </Link>
                <Link className="nav-link nav-custom link" to="/about">
                  About
                </Link>
                <Link className="nav-link nav-custom link" to="/contact">
                  Contact
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Route
            path="/"
            exact
            render={() => (
              <Home
                title={this.state.home.title}
                subTitle={this.state.home.subTitle}
                content={this.state.home.content}
              />
            )}
          />
          <Route
            path="/about"
            render={() => (
              <About
                title={this.state.about.title}
                subTitle={this.state.about.subTitle}
                content={this.state.about.content}
              />
            )}
          />
          <Route
            path="/contact"
            render={() => (
              <Contact
                title={this.state.contact.title}
                subTitle={this.state.contact.subTitle}
                content={this.state.contact.content}
              />
            )}
          />

          <Footer />
        </Container>
      </Router>
    );
  }
}

export default App;
