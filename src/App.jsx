import React, { useState } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { Footer } from './components/organisms';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const home = {
    title: "Hi, I'm Rina",
    subTitle: "I'm a Web Developer",
    content: 'Failure is Just a Milestone to Success'
  };

  const about = { title: 'About Me' };
  const contact = { title: "Let's Chat" };

  const closeMenu = () => setMenuOpen(false);

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <nav className="border-b border-gray-200 bg-transparent">
          <div className="flex flex-wrap items-center justify-between px-4 py-3">
            <h3 className="header-icon">
              <Link to="/" className="link link--icon header-text" onClick={closeMenu}>
                RV
              </Link>
            </h3>
            <button
              className="lg:hidden cursor-pointer bg-transparent text-xl leading-none"
              onClick={() => setMenuOpen(prev => !prev)}
              aria-label="Toggle navigation"
              aria-expanded={menuOpen}
            >
              &#9776;
            </button>
            <div className={`${menuOpen ? 'flex' : 'hidden'} lg:flex flex-col lg:flex-row w-full lg:w-auto pt-2 lg:pt-0`}>
              <Link className="nav-link-custom py-1 lg:py-0" to="/" onClick={closeMenu}>Home</Link>
              <Link className="nav-link-custom py-1 lg:py-0" to="/about" onClick={closeMenu}>About</Link>
              <Link className="nav-link-custom py-1 lg:py-0" to="/contact" onClick={closeMenu}>Contact</Link>
            </div>
          </div>
        </nav>

        <Route path="/" exact render={() => <Home title={home.title} subTitle={home.subTitle} content={home.content} />} />
        <Route path="/about" render={() => <About title={about.title} />} />
        <Route path="/contact" render={() => <Contact title={contact.title} />} />

        <Footer />
      </div>
    </Router>
  );
}

export default App;

