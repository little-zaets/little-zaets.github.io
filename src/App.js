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
        title: 'Feeling Lucky? The Answer is Yes. Always.',
        subTitle: 'Failure is Just a Milestone to Success',
        content: 'Check Out my Projects Below'
      },
      about: {
        title: 'About Me'
      },
      contact: {
        title: 'Let\'s Talk'
      }
    };
  }
  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true}>
          <Navbar className="border-bottom" bg="transparent" expand="lg">
            <Navbar.Brand>Rina Volovich</Navbar.Brand>

            <Navbar.Toggle aria-controls="navbar-toggle" className="border-0" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto" activeKey="/">
                <Link className="nav-link" to="/">
                  Home
                </Link>
                <Link className="nav-link" to="/about">
                  About
                </Link>
                <Link className="nav-link" to="/contact">
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
            exact
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
            exact
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
