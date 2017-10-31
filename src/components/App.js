import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import ItemList from './ItemList'
import about from './about'
import HomePage from './HomePage'
import '../styles/app.css'

class App extends Component {
  render() {
    return (
      <div>
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
      </div>
    )
  }
}

export default App
