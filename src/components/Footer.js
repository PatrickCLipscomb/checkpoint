import React from 'react'

// images import
import facebook from '../images/facebook.svg'
import linkedin from '../images/linkedin.svg'
import twitter from '../images/twitter.svg'

export default () => (
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
)
