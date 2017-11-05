import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { push } from 'react-router-redux'

import air from '../images/air.png'
import ocean from '../images/ocean.png'
import custom from '../images/custom.png'

class HomePage extends Component {

  render() {
    return(
      <div>
      <h1>On HomePage</h1>
      <Link to="/about">About</Link>
        <div className="provider-row">
            <Link to="/about">
              <div className="provider-panel">
                <img src={air}></img>
                <h2>Air</h2>
              </div>
            </Link>
            <Link to="/ocean">
              <div className="provider-panel">
                <img src={ocean}></img>
                <h2>Ocean</h2>
              </div>
            </Link>
            <Link to="/about">
              <div className="provider-panel">
                <img src={custom}></img>
                <h2>Custom</h2>
              </div>
            </Link>
          </div>
      </div>
    )
  }
}

export default HomePage
