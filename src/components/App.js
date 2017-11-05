import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import ItemList from './ItemList'
import about from './about'
import HomePage from './HomePage'
import '../styles/app.css'

// images import
import facebook from '../images/facebook.svg'
import linkedin from '../images/linkedin.svg'
import twitter from '../images/twitter.svg'

class App extends Component {
  render() {
    return (
      <div className="app-body">
        <div className="nav-bar">
          <div className="header-content">
            <h1>DEMO</h1>
            <a href="#">Log In</a>
          </div>
        </div>


        <header>
          <Link to="/home">Home Page</Link>
          <Link to="/">Item List</Link>
          <Link to="/about">About</Link>
        </header>

        <main>
          <Route exact path="/home" component={HomePage} />
          <Route exact path="/" component={ItemList} />
          <Route exact path="/about" component={about} />
        </main>
        <footer className="site-footer">
          <div className="row">
            <ul>
              <li>Home</li>
              <li>Manage Account</li>
              <li>Help</li>
            </ul>
            <ul>
              <li>Terms and Conditions</li>
              <li>Privacy Policy</li>
              <li>Collection Statement</li>
            </ul>
            <ul className="social-icons">
              <li><img src={linkedin}></img></li>
              <li><img src={facebook}></img></li>
              <li><img src={twitter}></img></li>
            </ul>
          </div>
          <div className="copyright">
            <p>Copyright 2017 Demo</p>
          </div>
        </footer>
      </div>
    )
  }
}

export default App
