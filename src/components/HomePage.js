import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { push } from 'react-router-redux'

class HomePage extends Component {

  render() {
    return(
      <div>
      <h1>On HomePage</h1>
      <Link to="/about">About</Link>
      </div>
    )
  }
}

export default HomePage
