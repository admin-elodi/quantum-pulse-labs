import React from 'react';
import './styles.css';
import myImage from './assets/images/logo-white.png';
import myPro from './assets/images/ikenna.jpg';


class App extends React.Component {
  
  render() {
    return (
      <div className="app">
        <header className="header">
          <section className="logo">
            <img src={myImage} className="logo-img" id="logo" alt="Logo" />
          </section>
          <nav className="navbar">
            <section className="menu-toggle">
              <section className="bar"></section>
              <section className="bar"></section>
              <section className="bar"></section>
            </section>
            <ul className="nav-links">
              <li className="nav-link"><a href="index.html" tabIndex="0">Home</a></li>
              <li className="nav-link"><a href="about.html" tabIndex="0">About Us</a></li>
              <li className="nav-link dropdown">
                <a href="digital-pulse.html" tabIndex="0">Digital-Pulse</a>
                <ul className="dropdown-menu">
                  <li><a href="#" tabIndex="0">Cybersecurity</a></li>
                  <li><a href="#" tabIndex="0">Web Development</a></li>
                  <li><a href="#" tabIndex="0">A.I.</a></li>
                  <li><a href="#" tabIndex="0">Quantum Computing</a></li>
                </ul>
              </li>
              <li className="nav-link"><a href="contact.html" tabIndex="0">Contact</a></li>
            </ul>
          </nav>
          <div className="social-icons">
            <a href="https://twitter.com/code_wisdom_wit"><i className="fab fa-twitter"></i></a>
            <a href="https://www.instagram.com/mc_bar_beach07?igsh=NXBkcjZ4OXIzN3Zm"><i className="fab fa-instagram"></i></a>
          </div>
        </header>
        <main className="main">
          <div className="d-flex">
            <div className="my-slogan">
              <p className="rohit-dangol">QUANTUM PULSE LABS</p>
              <p className="slogan">A Subsidiary of ELODI NIGERIA ENTERPRISES</p>
              <p className="slogan">Pioneering Digital & Quantum Excellence</p>
            </div>
            <div>
              <img src={myPro} className="d-flex-img" id="profile" alt="pic" />
            </div>
          </div>
          <div className="my-bg-container">
            <a href="#" className="quantum-bunker">THE QUANTUM BUNKER</a>
          </div>
        </main>
        <footer className="foooter">
          <a href="#">&copy; 2024 Quantum Pulse Labs. All rights reserved</a> 
        </footer>

      </div>
    );
  }
}

export default App;
